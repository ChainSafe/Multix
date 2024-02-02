import { Alert, CircularProgress, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Button, TextField } from '../library'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { useApi } from '../../contexts/ApiContext'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import CallInfo from '../CallInfo'
import SignerSelection from '../select/SignerSelection'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { useToasts } from '../../contexts/ToastContext'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import { HexString, MultisigStorageInfo } from '../../types'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import { getDisplayArgs, getExtrinsicName } from '../../utils'
import { useCallInfoFromCallData } from '../../hooks/useCallInfoFromCallData'
import { ModalCloseButton } from '../library/ModalCloseButton'
import { useGetSortAddress } from '../../hooks/useGetSortAddress'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import BN from 'bn.js'
import { getAsMultiTx } from '../../utils/getAsMultiTx'
import { CallDataInfoFromChain } from '../../hooks/usePendingTx'
import { debounce } from '../../utils/debounce'

export interface SigningModalProps {
  onClose: () => void
  className?: string
  possibleSigners: string[]
  proposalData: CallDataInfoFromChain
  onSuccess?: () => void
}

const ProposalSigning = ({
  onClose,
  className,
  possibleSigners,
  proposalData,
  onSuccess
}: SigningModalProps) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const { api } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { getMultisigByAddress } = useMultiProxy()
  const { selectedAccount, selectedSigner } = useAccounts()
  const [addedCallData, setAddedCallData] = useState<HexString | undefined>()
  const [debouncedAddedCallData, setDebouncedAddedCallData] = useState<HexString | undefined>()
  const [errorMessage, setErrorMessage] = useState('')
  const { addToast } = useToasts()
  const multisig = useMemo(
    () => getMultisigByAddress(proposalData.from),
    [getMultisigByAddress, proposalData]
  )
  const threshold = useMemo(() => multisig?.threshold || 0, [multisig])
  const signatories = useMemo(() => multisig?.signatories || [], [multisig])
  const isProposerSelected = useMemo(
    () => proposalData?.info?.depositor === selectedAccount?.address,
    [proposalData, selectedAccount]
  )
  const { callInfo, isGettingCallInfo } = useCallInfoFromCallData(
    proposalData.callData || debouncedAddedCallData
  )
  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    min: new BN(0),
    address: selectedAccount?.address
  })
  const hasReachedThreshold = useMemo(
    () => (proposalData.info?.approvals || []).length >= threshold - 1,
    [proposalData.info?.approvals, threshold]
  )
  const mustBeExecuted = useMemo(
    () => (proposalData.info?.approvals || []).length >= threshold,
    [proposalData.info?.approvals, threshold]
  )

  const mustProvideCallData = useMemo(() => {
    // the proposer can only reject or execute the last call,
    // if it's not the last call, then we don't need the calldata
    if (isProposerSelected && !hasReachedThreshold) return false

    if (!threshold || !proposalData.callData) return true

    // if it's the last approval call, we must use asMulti and have the call data
    // either from the chain, or from users
    return hasReachedThreshold
  }, [hasReachedThreshold, isProposerSelected, proposalData.callData, threshold])

  const onSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])

  const signCallback = useSigningCallback({ onSuccess, onSubmitting })
  const { getSortAddress } = useGetSortAddress()

  const debouncedCallDatahange = useMemo(
    () => debounce(setDebouncedAddedCallData, 300),
    [setDebouncedAddedCallData]
  )

  useEffect(() => {
    if (isProposerSelected) {
      setAddedCallData(undefined)
      setErrorMessage('')
    }
  }, [isProposerSelected])

  useEffect(() => {
    if (!!callInfo?.call && callInfo.call.hash.toHex() !== proposalData.hash) {
      setErrorMessage("The callData provided doesn't match with the on-chain transaction")
      return
    }
  }, [callInfo, proposalData])

  useEffect(() => {
    if (hasSignerEnoughFunds) {
      setErrorMessage('')
      return
    }

    setErrorMessage(
      "The selected signer doesn't have enough funds to pay for the transaction fees."
    )
  }, [hasSignerEnoughFunds])

  const onSign = useCallback(
    async (isApproving: boolean) => {
      const otherSigners = getSortAddress(
        signatories.filter((signer) => signer !== selectedAccount?.address)
      )

      if (!threshold) {
        const error = 'Threshold is undefined'
        console.error(error)
        setErrorMessage(error)
        return
      }

      if (!proposalData?.hash) {
        const error = 'Hash is undefined'
        console.error(error)
        setErrorMessage(error)
        return
      }

      if (!proposalData?.info?.when.height) {
        const error = 'No time point found'
        console.error(error)
        setErrorMessage(error)
        return
      }

      if (!api) {
        const error = 'Api is not ready'
        console.error(error)
        setErrorMessage(error)
        return
      }

      if (!selectedAccount) {
        const error = 'No selected address'
        console.error(error)
        setErrorMessage(error)
        return
      }

      if (!multisig) {
        const error = 'No selected multisig'
        console.error(error)
        setErrorMessage(error)
        return
      }

      // if the callData is needed, but none was supplied or found
      if (mustProvideCallData && !callInfo?.call) {
        const error = 'No callData found or supplied'
        console.error(error)
        setErrorMessage(error)
        return
      }

      let amountOfSigner = 0
      if (!hasReachedThreshold) {
        // In case the tx has been approved between the last couple blocks
        // and the tx in the indexer hasn't been updated we should query the latest state
        // right before sending the tx to have the right amount of signers.
        const callStorage = await api.query.multisig.multisigs.entries(multisig.address)

        callStorage.some((storage) => {
          const hash = (storage[0].toHuman() as Array<string>)[1]
          if (proposalData.hash === hash) {
            const info = storage[1].toJSON() as unknown as MultisigStorageInfo
            amountOfSigner = info.approvals.length

            return true
          }

          return false
        })
      }

      // this is only relevant if we didn't know that we had
      // reached the threshold before
      const shouldExecute = hasReachedThreshold ? true : amountOfSigner >= threshold - 1

      setIsSubmitting(true)
      let tx: SubmittableExtrinsic<'promise'>

      // if it's a rejection we can send it right away, no need for weight or calldata
      if (!isApproving) {
        tx = api.tx.multisig.cancelAsMulti(
          threshold,
          otherSigners,
          proposalData.info.when,
          proposalData.hash
        )

        // If we can submit the proposal and have the call data
      } else if (shouldExecute && callInfo?.call && callInfo?.weight) {
        tx = getAsMultiTx({
          api,
          threshold,
          otherSignatories: otherSigners,
          weight: callInfo.weight,
          when: proposalData.info.when,
          tx: proposalData.callData || addedCallData
        })

        // if we can't submit yet (more signatures required), all we need is the call hash
      } else if (!shouldExecute && proposalData.hash) {
        tx = api.tx.multisig.approveAsMulti(
          threshold,
          otherSigners,
          proposalData.info.when,
          proposalData.hash,
          { refTime: 0, proofSize: 0 }
        )
      } else {
        console.error("We don't have the required data to submit the call")
        return
      }

      tx.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallback).catch(
        (error: Error) => {
          setIsSubmitting(false)
          addToast({
            title: error.message,
            type: 'error',
            link: getSubscanExtrinsicLink(tx.hash.toHex())
          })
        }
      )
    },
    [
      getSortAddress,
      signatories,
      threshold,
      proposalData,
      api,
      selectedAccount,
      multisig,
      mustProvideCallData,
      callInfo,
      hasReachedThreshold,
      selectedSigner,
      signCallback,
      addedCallData,
      addToast,
      getSubscanExtrinsicLink
    ]
  )

  const onAddedCallDataChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setErrorMessage('')
      setAddedCallData(event.target.value as HexString)
      debouncedCallDatahange(event.target.value as HexString)
    },
    [debouncedCallDatahange]
  )

  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open
      className={className}
      data-cy="modal-tx-signing"
    >
      <ModalCloseButton onClose={onClose} />
      <DialogTitle>Transaction signing</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid
            item
            xs={0}
            md={1}
          />
          <Grid
            item
            xs={12}
            md={6}
          >
            <SignerSelection
              label="Signing with"
              possibleSigners={possibleSigners}
              onChange={() => setErrorMessage('')}
            />
          </Grid>
          <Grid
            item
            xs={0}
            md={5}
          />
          <>
            <Grid
              item
              xs={0}
              md={1}
            />
            <HashGridStyled
              item
              xs={12}
              md={11}
            >
              <span className="title">Call hash</span>
              <br />
              <span
                className="hash"
                data-cy="label-call-hash"
              >
                {proposalData.hash}
              </span>
            </HashGridStyled>
          </>
          {!proposalData.callData && (
            <>
              <Grid
                item
                xs={0}
                md={1}
              />
              <Grid
                item
                xs={12}
                md={6}
              >
                <TextField
                  className="addedCallData"
                  label={`Call data ${mustProvideCallData ? '' : '(optional)'}`}
                  onChange={onAddedCallDataChange}
                  value={addedCallData || ''}
                  fullWidth
                  data-cy="input-call-data"
                />
              </Grid>
              <Grid
                item
                xs={0}
                md={5}
              />
            </>
          )}
          {!!callInfo?.call && (
            <>
              <Grid
                item
                xs={0}
                md={1}
              />
              <Grid
                item
                xs={12}
                md={11}
                className="callInfo"
              >
                <CallInfo
                  aggregatedData={
                    proposalData.callData
                      ? proposalData
                      : {
                          args: getDisplayArgs(callInfo?.call),
                          callData: addedCallData,
                          name: getExtrinsicName(callInfo?.section, callInfo?.method)
                        }
                  }
                  expanded
                />
              </Grid>
            </>
          )}
          {!!errorMessage && (
            <>
              <Grid
                item
                xs={0}
                md={1}
              />
              <Grid
                item
                xs={12}
                md={11}
                className="errorMessage"
              >
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </>
          )}
          <ButtonContainerStyled
            item
            xs={12}
          >
            {!isGettingCallInfo && isProposerSelected && (
              <Button
                variant="primary"
                onClick={() => onSign(false)}
                disabled={isSubmitting}
                data-cy="button-reject-tx"
              >
                Reject
              </Button>
            )}
            {!isGettingCallInfo && (!isProposerSelected || mustBeExecuted) && (
              <Button
                variant="primary"
                onClick={() => onSign(true)}
                disabled={
                  !!errorMessage || isSubmitting || (mustProvideCallData && !callInfo?.call)
                }
                data-cy={`button-${mustBeExecuted ? 'execute' : 'approve'}-tx`}
              >
                {mustBeExecuted ? 'Execute' : 'Approve'}
              </Button>
            )}
            {isGettingCallInfo && (
              <Button disabled>
                <CircularProgress size="1rem" />
              </Button>
            )}
          </ButtonContainerStyled>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

const HashGridStyled = styled(Grid)`
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;

  .title {
    color: ${({ theme }) => theme.custom.text.primary};
    font-weight: 500;
    font-size: large;
  }

  .hash {
    font-size: small;
  }
`

const ButtonContainerStyled = styled(Grid)`
  text-align: right;
  margin-top: 1rem;

  button:not(:first-of-type) {
    margin-left: 1rem;
  }
`
export default styled(ProposalSigning)`
  .buttonContainer .addedCallData {
    margin-top: 1rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.custom.error};
  }
`
