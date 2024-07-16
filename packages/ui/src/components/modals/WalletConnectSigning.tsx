import { Alert, CircularProgress, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Button } from '../library'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { useApi } from '../../contexts/ApiContext'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import CallInfo from '../CallInfo'
import SignerSelection from '../select/SignerSelection'
import { useToasts } from '../../contexts/ToastContext'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import { getDisplayArgs, getExtrinsicName } from '../../utils'
import { useCallInfoFromCallData } from '../../hooks/useCallInfoFromCallData'
import { ModalCloseButton } from '../library/ModalCloseButton'
import { SignClientTypes } from '@walletconnect/types'
import { useGetMultisigTx } from '../../hooks/useGetMultisigTx'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import { useWalletConnect } from '../../contexts/WalletConnectContext'
import { getWalletConnectErrorResponse } from '../../utils/getWalletConnectErrorResponse'
import { useMultisigProposalNeededFunds } from '../../hooks/useMultisigProposalNeededFunds'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { formatBnBalance } from '../../utils/formatBnBalance'
import { getErrorMessageReservedFunds } from '../../utils/getErrorMessageReservedFunds'

export interface SigningModalProps {
  onClose: () => void
  className?: string
  request: SignClientTypes.EventArguments['session_request']
  onSuccess?: () => void
}

const ProposalSigning = ({ onClose, className, request, onSuccess }: SigningModalProps) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const { api, chainInfo } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { web3wallet } = useWalletConnect()
  const {
    getMultisigByAddress,
    selectedMultiProxy,
    getMultisigAsAccountBaseInfo,
    selectMultiProxy
  } = useMultiProxy()
  const [selectedMultisig, setSelectedMultisig] = useState(selectedMultiProxy?.multisigs[0])
  const { selectedAccount, selectedSigner } = useAccounts()
  const multisigList = useMemo(() => getMultisigAsAccountBaseInfo(), [getMultisigAsAccountBaseInfo])
  const [errorMessage, setErrorMessage] = useState<ReactNode | string>('')
  const { addToast } = useToasts()
  const originAddress = request.params.request.params.address
  const isProxySelected = useMemo(
    () => selectedMultiProxy?.proxy === originAddress,
    [selectedMultiProxy, originAddress]
  )
  const callData = useMemo(() => request.params.request.params.transactionPayload.method, [request])
  const threshold = useMemo(() => selectedMultisig?.threshold, [selectedMultisig])
  const { callInfo, isGettingCallInfo } = useCallInfoFromCallData(callData)
  const extrinsicToCall = useMemo(() => {
    if (!callInfo?.call || !api) return
    return api.tx(callInfo.call)
  }, [api, callInfo])
  // this is a creation, we can force asMulti
  const multisigTx = useGetMultisigTx({
    selectedMultisig,
    extrinsicToCall,
    senderAddress: selectedAccount?.address,
    isProxy: isProxySelected,
    fromAddress: originAddress,
    threshold,
    forceAsMulti: true
  })
  const { multisigProposalNeededFunds, reserved } = useMultisigProposalNeededFunds({
    threshold,
    signatories: selectedMultisig?.signatories,
    call: multisigTx
  })
  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    min: multisigProposalNeededFunds,
    address: selectedAccount?.address
  })

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

  useEffect(() => {
    selectMultiProxy(request.params.request.params.address)
  }, [request, selectMultiProxy])

  useEffect(() => {
    if (!selectedMultisig && !!selectedMultiProxy) {
      setSelectedMultisig(selectedMultiProxy.multisigs[0])
    }
  }, [selectMultiProxy, selectedMultiProxy, selectedMultisig])

  const onSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])

  const signCallback = useSigningCallback({ onSuccess, onSubmitting })

  const onSign = useCallback(async () => {
    if (!threshold) {
      const error = 'Threshold is undefined'
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

    if (!selectedAccount || !originAddress) {
      const error = 'No selected address or multisig/proxy'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!extrinsicToCall) {
      const error = 'No extrinsic to call'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!multisigTx) {
      return
    }

    setIsSubmitting(true)

    multisigTx
      .signAndSend(
        selectedAccount.address,
        { signer: selectedSigner, withSignedTransaction: true },
        signCallback
      )
      .then(() => {
        const response = getWalletConnectErrorResponse(
          request.id,
          'Multix multisig transaction ongoing...'
        )
        web3wallet?.respondSessionRequest({
          topic: request.topic,
          response
        })
      })
      .catch((error: Error) => {
        setIsSubmitting(false)
        addToast({
          title: error.message,
          type: 'error',
          link: getSubscanExtrinsicLink(multisigTx.hash.toHex())
        })
      })
  }, [
    threshold,
    api,
    selectedAccount,
    originAddress,
    extrinsicToCall,
    multisigTx,
    selectedSigner,
    signCallback,
    request,
    web3wallet,
    addToast,
    getSubscanExtrinsicLink
  ])

  const handleMultisigSelection = useCallback(
    (account: AccountBaseInfo) => {
      const selected = getMultisigByAddress(account.address)
      setSelectedMultisig(selected)
    },
    [getMultisigByAddress]
  )

  const onReject = useCallback(() => {
    const response = getWalletConnectErrorResponse(request.id, 'User rejected request on Multix')

    web3wallet
      ?.respondSessionRequest({
        topic: request.topic,
        response
      })
      .catch(console.error)
      .finally(() => onClose())
  }, [onClose, request, web3wallet])

  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open
      className={className}
    >
      <ModalCloseButton onClose={onClose} />
      <DialogTitle>WalletConnect Transaction signing</DialogTitle>
      <DialogContent>
        <Grid
          container
          alignItems="center"
        >
          {isProxySelected && multisigList.length > 1 && (
            <>
              <Grid
                item
                xs={12}
                md={2}
              >
                <h4>Using</h4>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
              >
                <GenericAccountSelection
                  className="multiSelection"
                  accountList={multisigList}
                  onChange={handleMultisigSelection}
                  value={
                    multisigList.find(({ address }) => address === selectedMultisig?.address) ||
                    multisigList[0]
                  }
                  label=""
                  withBadge
                />
              </Grid>
            </>
          )}
          <Grid
            item
            xs={12}
            md={2}
          >
            <h4>Signing with</h4>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
          >
            <SignerSelection
              possibleSigners={selectedMultisig?.signatories || []}
              onChange={() => setErrorMessage('')}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <h4>Call hash</h4>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
          >
            <HashGridStyled>0x{callInfo?.call?.hash}</HashGridStyled>
          </Grid>

          {!!callInfo?.call && (
            <>
              <Grid
                item
                xs={12}
                md={2}
                alignSelf="flex-start"
              >
                <CallTitleStyled>Call</CallTitleStyled>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                className="callInfo"
              >
                <CallInfo
                  aggregatedData={{
                    args: getDisplayArgs(callInfo?.call),
                    callData,
                    name: getExtrinsicName(callInfo?.section, callInfo?.method)
                  }}
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
                md={2}
              />
              <Grid
                item
                xs={12}
                md={10}
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
            {!isGettingCallInfo && (
              <>
                <Button
                  variant="secondary"
                  onClick={onReject}
                  disabled={isSubmitting}
                >
                  Reject
                </Button>

                <Button
                  variant="primary"
                  onClick={onSign}
                  disabled={!!errorMessage || isSubmitting || !callInfo?.call}
                >
                  Sign
                </Button>
              </>
            )}
            {isGettingCallInfo && (
              <Button disabled>
                <CircularProgress />
              </Button>
            )}
          </ButtonContainerStyled>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

const HashGridStyled = styled(Grid)`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: small;
`

const CallTitleStyled = styled('h4')`
  margin-top: 0.5rem;
`

const ButtonContainerStyled = styled(Grid)`
  text-align: right;
  margin-top: 1rem;

  button:first-of-type {
    margin-right: 1rem;
  }
`
export default styled(ProposalSigning)(
  ({ theme }) => `
  .errorMessage {
    margin-top: 0.5rem;
    color: ${theme.custom.error};
  }
`
)
