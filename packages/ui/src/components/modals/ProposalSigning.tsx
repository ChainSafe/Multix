import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField
} from '@mui/material'
import { Button, TextFieldStyled } from '../library'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { useApi } from '../../contexts/ApiContext'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import CallInfo from '../CallInfo'
import { AggregatedData } from '../Transactions/TransactionList'
import SignerSelection from '../SignerSelection'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { GenericCall } from '@polkadot/types'
import { useToasts } from '../../contexts/ToastContext'
import { Weight } from '@polkadot/types/interfaces'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import { sortAddresses } from '@polkadot/util-crypto'
import { HexString, MultisigStorageInfo } from '../../types'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import { getDisplayArgs, getExtrinsicName } from '../../utils'

interface Props {
  onClose: () => void
  className?: string
  possibleSigners: string[]
  proposalData: AggregatedData
  onSuccess: () => void
}

interface SubmittingCall {
  call?: GenericCall
  method?: string
  section?: string
  weight?: Weight
}

const ProposalSigning = ({
  onClose,
  className,
  possibleSigners,
  proposalData,
  onSuccess
}: Props) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const { api, isApiReady } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { getMultisigByAddress } = useMultiProxy()
  const { selectedAccount, selectedSigner } = useAccounts()
  const [addedCallData, setAddedCallData] = useState<HexString | undefined>()
  const [errorMessage, setErrorMessage] = useState('')
  const { addToast } = useToasts()
  const multisig = useMemo(
    () => getMultisigByAddress(proposalData.from),
    [getMultisigByAddress, proposalData]
  )
  const threshold = useMemo(() => multisig?.threshold, [multisig])
  const signatories = useMemo(() => multisig?.signatories || [], [multisig])
  const isProposerSelected = useMemo(
    () => proposalData?.info?.depositor === selectedAccount?.address,
    [proposalData, selectedAccount]
  )
  const [callInfo, setCallInfo] = useState<SubmittingCall>({})
  const [isGettingCallInfo, setIsGettingCallInfo] = useState(false)
  const needCallData = useMemo(
    () =>
      // if we don't have the calldata and it's the last approval
      !!threshold &&
      proposalData.info?.approvals.length === threshold - 1 &&
      !proposalData.callData,
    [proposalData, threshold]
  )

  const onSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])

  const signCallback = useSigningCallback({ onSuccess, onSubmitting })

  useEffect(() => {
    if (isProposerSelected) {
      setAddedCallData(undefined)
      setErrorMessage('')
    }
  }, [isProposerSelected])

  const getCallInfo = useCallback(async () => {
    // the proposer doesn't need the call data
    if (isProposerSelected) {
      return
    }

    if (!api || !isApiReady) {
      return
    }

    if (!proposalData.callData && !addedCallData) {
      return
    }

    if (!selectedAccount) {
      return
    }

    let call: GenericCall
    try {
      call = api.createType('Call', proposalData.callData || addedCallData)
    } catch (error) {
      console.error(error)
      setCallInfo({})
      return
    }

    if (call.hash.toHex() !== proposalData.hash) {
      setErrorMessage('The callData provided doesnot match')
      setCallInfo({})
      return
    }

    return api
      .tx(call)
      .paymentInfo(selectedAccount.address)
      .then(({ weight }) => {
        setCallInfo({
          call,
          weight,
          method: call.method,
          section: call.section
        })
      })
  }, [addedCallData, api, isApiReady, isProposerSelected, proposalData, selectedAccount])

  useEffect(() => {
    setIsGettingCallInfo(true)

    getCallInfo()
      .catch(console.error)
      .finally(() => setIsGettingCallInfo(false))
  }, [getCallInfo])

  const onSign = useCallback(
    async (isApproving: boolean) => {
      const otherSigners = sortAddresses(
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

      if (!isApiReady || !api) {
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

      // In case the proposal has been approved between the last couple block
      // and the proposal in the indexer hasn't been updated we should query the latest state
      // right before sending the tx.
      const callStorage = await api.query.multisig.multisigs.entries(multisig.address)

      let amountOfSigner = 0
      callStorage.some((storage) => {
        const hash = (storage[0].toHuman() as Array<string>)[1]
        if (proposalData.hash === hash) {
          const info = storage[1].toJSON() as unknown as MultisigStorageInfo
          amountOfSigner = info.approvals.length

          return true
        }

        return false
      })

      const shouldSubmit = amountOfSigner >= threshold - 1

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
      } else if (shouldSubmit && callInfo.call && callInfo.weight) {
        tx = api.tx.multisig.asMulti(
          threshold,
          otherSigners,
          proposalData.info.when,
          proposalData.callData || addedCallData,
          callInfo.weight
        )

        // if we can't submit yet (more signatures required), all we need is the call hash
      } else if (!shouldSubmit && proposalData.hash) {
        tx = api.tx.multisig.approveAsMulti(
          threshold,
          otherSigners,
          proposalData.info.when,
          proposalData.hash,
          0
        )
      } else {
        console.error('We donnot have the required data to submit the call')
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
      signatories,
      threshold,
      proposalData,
      isApiReady,
      api,
      selectedAccount,
      multisig,
      callInfo,
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
    },
    []
  )

  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open
      onClose={onClose}
      className={className}
    >
      <DialogTitle>Signing proposal</DialogTitle>
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
              possibleSigners={possibleSigners}
              onChange={() => setErrorMessage('')}
            />
          </Grid>
          <Grid
            item
            xs={0}
            md={5}
          />
          {!isProposerSelected && needCallData && (
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
                <TextFieldStyled
                  className="addedCallData"
                  label="Call data"
                  onChange={onAddedCallDataChange}
                  value={addedCallData}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={0}
                md={5}
              />
            </>
          )}

          {(!needCallData || !!callInfo.call) && (
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
                    !needCallData
                      ? proposalData
                      : {
                          ...proposalData,
                          args: getDisplayArgs(callInfo.call),
                          callData: addedCallData,
                          name: getExtrinsicName(callInfo.section, callInfo.method)
                        }
                  }
                  expanded
                />
              </Grid>
            </>
          )}
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
            {!!errorMessage && errorMessage}
          </Grid>
          <Grid
            item
            xs={12}
            className="buttonContainer"
          >
            {!isGettingCallInfo && isProposerSelected && (
              <Button
                variant="primary"
                onClick={() => onSign(false)}
                disabled={isSubmitting}
              >
                Reject
              </Button>
            )}
            {!isGettingCallInfo && !isProposerSelected && (
              <Button
                variant="primary"
                onClick={() => onSign(true)}
                disabled={isSubmitting || (needCallData && !callInfo.method)}
              >
                Approve
              </Button>
            )}
            {isGettingCallInfo && (
              <Button disabled>
                <CircularProgress />
              </Button>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default styled(ProposalSigning)(
  ({ theme }) => `
  .buttonContainer {
    text-align: right;
    margin-top: 1rem;
  }

  .addedCallData {
    margin-top: 1rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: ${theme.custom.text.errorColor};
  }
`
)
