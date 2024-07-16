import { Alert, CircularProgress, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Button, TextField } from '../library'
import { ChangeEvent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { useApi } from '../../contexts/ApiContext'
import { MultisigAggregated, useMultiProxy } from '../../contexts/MultiProxyContext'
import CallInfo from '../CallInfo'
import SignerSelection from '../select/SignerSelection'
import { useToasts } from '../../contexts/ToastContext'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import { useCallInfoFromCallData } from '../../hooks/useCallInfoFromCallData'
import { ModalCloseButton } from '../library/ModalCloseButton'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { CallDataInfoFromChain } from '../../hooks/usePendingTx'
import { ParentMultisigInfo } from '../DeepTxAlert'
import { useGetMultisigTx } from '../../hooks/useGetMultisigTx'
import { ProxyType } from '../../../types-and-hooks'
import { HexString } from '../../types'
import { getDisplayArgs, getErrorMessageReservedFunds, getExtrinsicName } from '../../utils'
import { useMultisigProposalNeededFunds } from '../../hooks/useMultisigProposalNeededFunds'
import { formatBnBalance } from '../../utils/formatBnBalance'

export interface DeepTxCreationProps {
  onClose: () => void
  className?: string
  possibleSigners: string[]
  proposalData: CallDataInfoFromChain
  onSuccess?: () => void
  parentMultisigInfo: ParentMultisigInfo
  currentMultisigInvolved: MultisigAggregated
}

const DeepTxCreationModal = ({
  onClose,
  className,
  possibleSigners,
  proposalData,
  onSuccess,
  parentMultisigInfo,
  currentMultisigInvolved
}: DeepTxCreationProps) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const { api, chainInfo } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedAccount, selectedSigner } = useAccounts()
  const [errorMessage, setErrorMessage] = useState<ReactNode | string>('')
  const { addToast } = useToasts()
  const { selectedMultiProxy, getMultisigByAddress, setRefetchMultisigTimeoutMinutes } =
    useMultiProxy()
  const [addedCallData, setAddedCallData] = useState<HexString | undefined>()
  const mustSubmitCallData = useMemo(() => {
    if (!parentMultisigInfo.threshold || !proposalData.info?.approvals) return true

    // if it's the last approval call, we must use asMulti and have the call data
    // either from the chain, or from users
    return proposalData.info?.approvals.length >= parentMultisigInfo.threshold - 1
  }, [parentMultisigInfo.threshold, proposalData.info?.approvals])

  const { callInfo: parentCallInfo, isGettingCallInfo: isGettingParentCallInfo } =
    useCallInfoFromCallData(proposalData.callData || addedCallData)

  // this will never be a proxy, if there's a proxy, it's already in the call
  const parentMultisigTx = useGetMultisigTx({
    fromAddress: parentMultisigInfo.parentSignatoryAddress,
    extrinsicToCall: (api && parentCallInfo?.call && api.tx(parentCallInfo?.call)) || undefined,
    senderAddress: parentMultisigInfo.parentSignatoryAddress,
    isProxy: false,
    threshold: parentMultisigInfo.threshold,
    selectedMultisig: {
      address: parentMultisigInfo.parentMultisigAddress,
      signatories: parentMultisigInfo.signatories,
      threshold: parentMultisigInfo.threshold,
      type: ProxyType.Any
    },
    approvalLength: proposalData.info?.approvals.length,
    weight: parentCallInfo?.weight,
    when: proposalData.info?.when,
    forceAsMulti: false,
    approveAsMultiHash: proposalData.hash as HexString
  })

  // this is the one that we submit to the child multisig
  // it contains the first multisig tx (from the child)
  // and calls a asMulti because it's a creation
  const fullTx = useGetMultisigTx({
    fromAddress: parentMultisigInfo.parentSignatoryAddress,
    extrinsicToCall: (api && parentMultisigTx && api.tx(parentMultisigTx)) || undefined,
    senderAddress: selectedAccount?.address,
    isProxy: !!parentMultisigInfo.isSignatoryProxy,
    threshold: currentMultisigInvolved?.threshold,
    selectedMultisig: parentMultisigInfo.isSignatoryProxy
      ? selectedMultiProxy?.multisigs[0]
      : getMultisigByAddress(parentMultisigInfo.involvedMultisigAddress),
    forceAsMulti: true
  })

  const { multisigProposalNeededFunds, reserved } = useMultisigProposalNeededFunds({
    threshold: currentMultisigInvolved?.threshold,
    signatories: currentMultisigInvolved?.signatories,
    call: fullTx
  })

  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    min: multisigProposalNeededFunds,
    address: selectedAccount?.address
  })

  const onSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])

  const signCallback = useSigningCallback({ onSuccess, onSubmitting })

  useEffect(() => {
    if (!!parentCallInfo?.call && parentCallInfo.call.hash.toHex() !== proposalData.hash) {
      setErrorMessage("The callData provided doesn't match with the on-chain transaction")
      return
    }
  }, [parentCallInfo, proposalData])

  useEffect(() => {
    if (!multisigProposalNeededFunds.isZero() && !hasSignerEnoughFunds) {
      const requiredBalanceString = formatBnBalance(
        multisigProposalNeededFunds,
        chainInfo?.tokenDecimals,
        { tokenSymbol: chainInfo?.tokenSymbol }
      )

      const reservedString = formatBnBalance(reserved, chainInfo?.tokenDecimals, {
        tokenSymbol: chainInfo?.tokenSymbol
      })
      const errorWithReservedFunds = getErrorMessageReservedFunds(
        '"Signing with" account',
        requiredBalanceString,
        reservedString
      )
      setErrorMessage(errorWithReservedFunds)
    }
  }, [chainInfo, reserved, hasSignerEnoughFunds, multisigProposalNeededFunds])

  const onSign = useCallback(async () => {
    if (!api) {
      const error = 'Api is not ready'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!selectedAccount) {
      const error = 'No selected address or multisig/proxy'
      console.error(error)
      setErrorMessage(error)
      return
    }

    // if the callData is needed, but none was supplied or found
    if (mustSubmitCallData && !parentCallInfo?.call) {
      const error = 'No callData found or supplied'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!fullTx) {
      const error = 'No extrinsic to call'
      console.error(error)
      setErrorMessage(error)
      return
    }

    setIsSubmitting(true)

    fullTx
      .signAndSend(
        selectedAccount.address,
        { signer: selectedSigner, withSignedTransaction: true },
        signCallback
      )
      .then(() => {
        // poll for 1min if the tx may make changes
        // such as creating a proxy, adding/removing a multisig
        if (mustSubmitCallData) {
          setRefetchMultisigTimeoutMinutes(1)
        }
      })
      .catch((error: Error) => {
        setIsSubmitting(false)
        addToast({
          title: error.message,
          type: 'error',
          link: getSubscanExtrinsicLink(fullTx.hash.toHex())
        })
      })
  }, [
    api,
    selectedAccount,
    mustSubmitCallData,
    parentCallInfo,
    fullTx,
    selectedSigner,
    signCallback,
    setRefetchMultisigTimeoutMinutes,
    addToast,
    getSubscanExtrinsicLink
  ])

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
      className={className}
      data-cy="modal-tx-signing"
    >
      <ModalCloseButton onClose={onClose} />
      <DialogTitle>Create Transaction</DialogTitle>
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
                  label={`Call data ${mustSubmitCallData ? '' : '(optional)'}`}
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
          {!!parentCallInfo?.call && (
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
                          args: getDisplayArgs(parentCallInfo?.call),
                          callData: addedCallData,
                          name: getExtrinsicName(parentCallInfo?.section, parentCallInfo?.method)
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
          <Grid
            item
            xs={12}
            className="buttonContainer"
          >
            {!isGettingParentCallInfo && (
              <Button
                variant="primary"
                onClick={onSign}
                disabled={
                  !!errorMessage || isSubmitting || (mustSubmitCallData && !parentCallInfo?.call)
                }
                data-cy="button-approve-tx"
              >
                Create
              </Button>
            )}
            {isGettingParentCallInfo && (
              <Button disabled>
                <CircularProgress size="1rem" />
              </Button>
            )}
          </Grid>
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
export default styled(DeepTxCreationModal)(
  ({ theme }) => `
  .buttonContainer {
    text-align: right;
    margin-top: 1rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: ${theme.custom.error};
  }

  .addedCallData {
    margin-top: 1rem;
  }
`
)
