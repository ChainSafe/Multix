import { Alert, CircularProgress, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Button } from '../library'
import { useCallback, useEffect, useState } from 'react'
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
import BN from 'bn.js'
import { CallDataInfoFromChain } from '../../hooks/usePendingTx'
import { ParentMultisigInfo } from '../DeepTxAlert'
import { useGetMultisigTx } from '../../hooks/useGetMultisigTx'
import { ProxyType } from '../../../types-and-hooks'

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
  const { api } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedAccount, selectedSigner } = useAccounts()
  const [errorMessage, setErrorMessage] = useState('')
  const { addToast } = useToasts()
  const { selectedMultiProxy, getMultisigByAddress } = useMultiProxy()

  const { callInfo: parentCallInfo, isGettingCallInfo: isGettingParentCallInfo } =
    useCallInfoFromCallData(proposalData.callData)

  // const parentFromAddress = useMemo(
  //   () =>
  //     parentMultisigInfo.isSignatoryProxy
  //       ? selectedMultiProxy?.proxy
  //       : parentMultisigInfo.parentSignatoryAddress,
  //   [parentMultisigInfo, selectedMultiProxy?.proxy]
  // )

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
    weight: parentCallInfo?.weight,
    when: proposalData.info?.when
  })

  console.log('parentMultisigTx', parentMultisigTx?.toHuman())

  // const parentMultisigTx = useMemo(() => {
  //   if (isGettingParentCallInfo || !api) {
  //     // not ready yet
  //     return
  //   }

  //   //FIXME add the approveAsMulti to submit if needed
  //   if (!proposalData || !parentCallInfo) {
  //     console.error('One of api, proposalData, callInfo is undefined')
  //     return
  //   }

  //   return getAsMultiTx({
  //     api,
  //     threshold: parentMultisigInfo.threshold,
  //     otherSignatories: parentMultisigInfo.signatories.filter((address) =>
  //       parentMultisigInfo.isSignatoryProxy
  //         ? address !== selectedMultiProxy?.proxy
  //         : address !== currentMultisigInvolved.address
  //     ),
  //     weight: parentCallInfo.weight,
  //     when: proposalData.info?.when,
  //     tx: proposalData.callData
  //   })
  // }, [
  //   isGettingParentCallInfo,
  //   api,
  //   proposalData,
  //   parentCallInfo,
  //   parentMultisigInfo,
  //   selectedMultiProxy?.proxy,
  //   currentMultisigInvolved.address
  // ])
  const fullTx = useGetMultisigTx({
    fromAddress: parentMultisigInfo.parentSignatoryAddress,
    extrinsicToCall: (api && parentMultisigTx && api.tx(parentMultisigTx)) || undefined,
    senderAddress: selectedAccount?.address,
    isProxy: !!parentMultisigInfo.isSignatoryProxy,
    threshold: currentMultisigInvolved?.threshold,
    selectedMultisig: parentMultisigInfo.isSignatoryProxy
      ? selectedMultiProxy?.multisigs[0]
      : getMultisigByAddress(parentMultisigInfo.involvedMultisigAddress)
  })
  console.log('fullTX', fullTx?.toHuman())

  // const fullTx2 = useMemo(() => {
  //   if (!parentMultisigTx || !api) return

  //   return getAsMultiTx({
  //     api,
  //     threshold: parentMultisigInfo.threshold,
  //     otherSignatories: parentMultisigInfo.signatories.filter((address) =>
  //       parentMultisigInfo.isSignatoryProxy
  //         ? address !== selectedMultiProxy?.proxy
  //         : address !== currentMultisigInvolved.address
  //     ),
  //     weight: parentCallInfo?.weight,
  //     when: proposalData.info?.when,
  //     tx: proposalData.callData
  //   })
  // }, [
  //   api,
  //   currentMultisigInvolved.address,
  //   parentCallInfo?.weight,
  //   parentMultisigInfo,
  //   parentMultisigTx,
  //   proposalData.callData,
  //   proposalData.info?.when,
  //   selectedMultiProxy?.proxy
  // ])

  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    // FIXME this shouldn't be 0
    min: new BN(0),
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
    if (hasSignerEnoughFunds) {
      setErrorMessage('')
      return
    }

    setErrorMessage(
      "The selected signer doesn't have enough funds to pay for the transaction fees."
    )
  }, [hasSignerEnoughFunds])

  // const onSign = useCallback(
  //   async (isApproving: boolean) => {
  //     const otherSigners = getSortAddress(
  //       signatories.filter((signer) => signer !== selectedAccount?.address)
  //     )

  //     if (!threshold) {
  //       const error = 'Threshold is undefined'
  //       console.error(error)
  //       setErrorMessage(error)
  //       return
  //     }

  //     if (!proposalData?.hash) {
  //       const error = 'Hash is undefined'
  //       console.error(error)
  //       setErrorMessage(error)
  //       return
  //     }

  //     if (!proposalData?.info?.when.height) {
  //       const error = 'No time point found'
  //       console.error(error)
  //       setErrorMessage(error)
  //       return
  //     }

  //     if (!api) {
  //       const error = 'Api is not ready'
  //       console.error(error)
  //       setErrorMessage(error)
  //       return
  //     }

  //     if (!selectedAccount) {
  //       const error = 'No selected address'
  //       console.error(error)
  //       setErrorMessage(error)
  //       return
  //     }

  //     if (!currentMultisigInvolved) {
  //       const error = 'No selected multisig'
  //       console.error(error)
  //       setErrorMessage(error)
  //       return
  //     }

  //     // if the callData is needed, but none was supplied or found
  //     if (!parentCallInfo?.call) {
  //       const error = 'No callData found'
  //       console.error(error)
  //       setErrorMessage(error)
  //       return
  //     }

  //     // In case the tx has been approved between the last couple blocks
  //     // and the tx in the indexer hasn't been updated we should query the latest state
  //     // right before sending the tx to have the right amount of signers.
  //     const callStorage = await api.query.multisig.multisigs.entries(
  //       currentMultisigInvolved.address
  //     )

  //     let amountOfSigner = 0
  //     callStorage.some((storage) => {
  //       const hash = (storage[0].toHuman() as Array<string>)[1]
  //       if (proposalData.hash === hash) {
  //         const info = storage[1].toJSON() as unknown as MultisigStorageInfo
  //         amountOfSigner = info.approvals.length

  //         return true
  //       }

  //       return false
  //     })

  //     const shouldSubmit = amountOfSigner >= threshold - 1

  //     setIsSubmitting(true)
  //     let tx: SubmittableExtrinsic<'promise'>

  //     // if it's a rejection we can send it right away, no need for weight or calldata
  //     if (!isApproving) {
  //       tx = api.tx.multisig.cancelAsMulti(
  //         threshold,
  //         otherSigners,
  //         proposalData.info.when,
  //         proposalData.hash
  //       )

  //       // If we can submit the proposal and have the call data
  //     } else if (shouldSubmit && parentCallInfo?.call && parentCallInfo?.weight) {
  //       tx = getAsMultiTx({
  //         api,
  //         threshold,
  //         otherSignatories: otherSigners,
  //         weight: parentCallInfo.weight,
  //         when: proposalData.info.when,
  //         tx: proposalData.callData
  //       })

  //       // if we can't submit yet (more signatures required), all we need is the call hash
  //     } else if (!shouldSubmit && proposalData.hash) {
  //       tx = api.tx.multisig.approveAsMulti(
  //         threshold,
  //         otherSigners,
  //         proposalData.info.when,
  //         proposalData.hash,
  //         { refTime: 0, proofSize: 0 }
  //       )
  //     } else {
  //       console.error("We don't have the required data to submit the call")
  //       return
  //     }

  //     tx.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallback).catch(
  //       (error: Error) => {
  //         setIsSubmitting(false)
  //         addToast({
  //           title: error.message,
  //           type: 'error',
  //           link: getSubscanExtrinsicLink(tx.hash.toHex())
  //         })
  //       }
  //     )
  //   },
  //   [
  //     getSortAddress,
  //     signatories,
  //     threshold,
  //     proposalData,
  //     api,
  //     selectedAccount,
  //     currentMultisigInvolved,
  //     parentCallInfo,
  //     selectedSigner,
  //     signCallback,
  //     addToast,
  //     getSubscanExtrinsicLink
  //   ]
  // )

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

    if (!fullTx) {
      const error = 'No extrinsic to call'
      console.error(error)
      setErrorMessage(error)
      return
    }

    setIsSubmitting(true)

    fullTx
      .signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallback)
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
    fullTx,
    selectedSigner,
    signCallback,
    addToast,
    getSubscanExtrinsicLink
  ])

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
                  aggregatedData={proposalData}
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
                disabled={!!errorMessage || isSubmitting || !parentCallInfo?.call}
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
`
)
