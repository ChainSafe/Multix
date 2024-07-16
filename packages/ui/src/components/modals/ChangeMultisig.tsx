import {
  Alert,
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid
} from '@mui/material'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import AccountDisplay from '../AccountDisplay/AccountDisplay'
import ThresholdSelection from '../../pages/Creation/ThresholdSelection'
import SignatorySelection from '../select/SignatorySelection'
import Summary from '../../pages/Creation/Summary'
import { useApi } from '../../contexts/ApiContext'
import { useAccounts } from '../../contexts/AccountsContext'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import { useToasts } from '../../contexts/ToastContext'
import { AccountBadge } from '../../types'
import { getIntersection } from '../../utils'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import { useProxyAdditionNeededFunds } from '../../hooks/useProxyAdditionNeededFunds'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { formatBnBalance } from '../../utils/formatBnBalance'
import { useMultisigProposalNeededFunds } from '../../hooks/useMultisigProposalNeededFunds'
import { MdErrorOutline as ErrorOutlineIcon } from 'react-icons/md'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import { Button } from '../library'
import { ModalCloseButton } from '../library/ModalCloseButton'
import { useGetSortAddress } from '../../hooks/useGetSortAddress'
import { useGetMultisigAddress } from '../../contexts/useGetMultisigAddress'
import { getAsMultiTx } from '../../utils/getAsMultiTx'

interface Props {
  onClose: () => void
  className?: string
}

type Step = 'selection' | 'summary' | 'call1' | 'call2'

const ChangeMultisig = ({ onClose, className }: Props) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { api, chainInfo } = useApi()
  const { selectedMultiProxy, getMultisigAsAccountBaseInfo, getMultisigByAddress } = useMultiProxy()
  const { addToast } = useToasts()
  const signCallBack2 = useSigningCallback({
    onSuccess: onClose,
    onError: onClose
  })
  const { getSortAddress } = useGetSortAddress()
  const { selectedAccount, selectedSigner, ownAddressList } = useAccounts()
  const [selectedMultisig, setSelectedMultisig] = useState(selectedMultiProxy?.multisigs[0])
  const oldThreshold = useMemo(() => selectedMultisig?.threshold, [selectedMultisig])
  const [newThreshold, setNewThreshold] = useState<number | null | undefined>(oldThreshold)
  const [newSignatories, setNewSignatories] = useState<string[]>(
    selectedMultisig?.signatories || []
  )
  const [currentStep, setCurrentStep] = useState<Step>('selection')
  const [errorMessage, setErrorMessage] = useState('')
  const ownAccountPartOfAllSignatories = useMemo(
    () =>
      getIntersection(
        ownAddressList,
        getIntersection(selectedMultisig?.signatories, newSignatories)
      ).length > 0,
    [ownAddressList, newSignatories, selectedMultisig?.signatories]
  )
  const newMultisigAddress = useGetMultisigAddress(newSignatories, newThreshold)
  const canGoNext = useMemo(
    () => newMultisigAddress !== selectedMultisig?.address,
    [newMultisigAddress, selectedMultisig]
  )
  const isCallStep = useMemo(
    () => currentStep === 'call1' || currentStep === 'call2',
    [currentStep]
  )
  const { proxyAdditionNeededFunds } = useProxyAdditionNeededFunds()
  const { hasEnoughFreeBalance: hasProxyEnoughFunds } = useCheckBalance({
    min: proxyAdditionNeededFunds,
    address: selectedMultiProxy?.proxy
  })
  const multisigList = useMemo(() => getMultisigAsAccountBaseInfo(), [getMultisigAsAccountBaseInfo])
  const [callError, setCallError] = useState('')

  const firstCall = useMemo(() => {
    if (!api) {
      // console.error('api is not ready')
      return
    }

    if (!selectedAccount || !selectedMultiProxy?.proxy) {
      // console.error('no selected address')
      return
    }

    if (!chainInfo) {
      // console.error('no ss58Format from chainInfo')
      return
    }

    if (!selectedMultisig?.signatories?.includes(selectedAccount.address)) {
      // console.error("selected account not part of current multisig's signatories")
      return
    }

    if (!oldThreshold || !newThreshold) {
      // console.error("One of the threshold is invalid", oldThreshold, newThreshold)
      return
    }

    if (!newMultisigAddress) {
      return
    }

    const otherOldSignatories = getSortAddress(
      selectedMultisig.signatories.filter((sig) => sig !== selectedAccount.address)
    )

    const addProxyTx = api.tx.proxy.addProxy(newMultisigAddress, 'Any', 0)
    const proxyTx = api.tx.proxy.proxy(selectedMultiProxy?.proxy, null, addProxyTx)
    // call with the old multisig
    return getAsMultiTx({
      api,
      threshold: oldThreshold,
      otherSignatories: otherOldSignatories,
      tx: proxyTx
    })
  }, [
    api,
    chainInfo,
    getSortAddress,
    newMultisigAddress,
    newThreshold,
    oldThreshold,
    selectedAccount,
    selectedMultiProxy,
    selectedMultisig
  ])

  const secondCall = useMemo(() => {
    if (!api) {
      // console.error('api is not ready')
      return
    }

    if (!selectedAccount || !selectedMultisig?.address || !selectedMultiProxy?.proxy) {
      // console.error('no selected address')
      return
    }

    if (!chainInfo) {
      // console.error('no ss58Format from chainInfo')
      return
    }

    if (!newSignatories.includes(selectedAccount.address)) {
      // console.error("selected account not part of new multisig's signatories")
      return
    }

    if (!newThreshold) {
      // console.error("Threshold is invalid", newThreshold)
      return
    }

    const otherNewSignatories = getSortAddress(
      newSignatories.filter((sig) => sig !== selectedAccount.address)
    )
    const removeProxyTx = api.tx.proxy.removeProxy(selectedMultisig?.address, 'Any', 0)
    const proxyTx = api.tx.proxy.proxy(selectedMultiProxy?.proxy, null, removeProxyTx)
    return getAsMultiTx({
      api,
      otherSignatories: otherNewSignatories,
      threshold: newThreshold,
      tx: proxyTx
    })
  }, [
    api,
    chainInfo,
    getSortAddress,
    newSignatories,
    newThreshold,
    selectedAccount,
    selectedMultiProxy,
    selectedMultisig
  ])

  const { multisigProposalNeededFunds: firstCallNeededFunds, reserved: firstCallReserved } =
    useMultisigProposalNeededFunds({
      call: firstCall,
      signatories: selectedMultisig?.signatories,
      threshold: oldThreshold
    })
  const { multisigProposalNeededFunds: secondCallNeededFunds, reserved: secondCallReserved } =
    useMultisigProposalNeededFunds({
      call: secondCall,
      signatories: newSignatories,
      threshold: newThreshold
    })
  const neededBalance = useMemo(
    () => firstCallNeededFunds.add(secondCallNeededFunds),
    [firstCallNeededFunds, secondCallNeededFunds]
  )
  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    min: neededBalance,
    address: selectedAccount?.address
  })

  useEffect(() => {
    if (!selectedMultisig?.signatories) {
      return
    }

    setNewSignatories(selectedMultisig.signatories)
  }, [selectedMultisig])

  const handleMultisigSelection = useCallback(
    ({ address }: AccountBaseInfo) => {
      const selected = getMultisigByAddress(address)
      setSelectedMultisig(selected)
    },
    [getMultisigByAddress]
  )

  const onErrorCallback = useCallback((errorMessage?: string) => {
    !!errorMessage && setCallError(errorMessage)
  }, [])

  useEffect(() => {
    setErrorMessage('')

    if (!ownAccountPartOfAllSignatories && newSignatories.length >= 2) {
      setErrorMessage('One of your accounts must be part of the new multisig')
    }
  }, [ownAccountPartOfAllSignatories, newSignatories])

  const onGoBack = useCallback(() => {
    modalRef.current && modalRef.current.scrollTo(0, 0)
    setCurrentStep('selection')
  }, [])

  // the new multisig will remove the old one from the proxy list
  const onMakeSecondCall = useCallback(() => {
    // do not fire the second call if the first had an error
    if (callError) {
      console.error('the first call had an error')
      return
    }

    if (!api) {
      console.error('api is not ready')
      return
    }

    if (!selectedAccount) {
      console.error('no selected address')
      return
    }

    if (!secondCall) {
      return
    }

    setCurrentStep('call2')

    secondCall
      .signAndSend(
        selectedAccount.address,
        { signer: selectedSigner, withSignedTransaction: true },
        signCallBack2
      )
      .catch((error: Error) => {
        addToast({
          title: error.message,
          type: 'error',
          link: getSubscanExtrinsicLink(secondCall.hash.toHex())
        })
        onErrorCallback(error.message)
      })
  }, [
    callError,
    api,
    selectedAccount,
    secondCall,
    selectedSigner,
    signCallBack2,
    addToast,
    getSubscanExtrinsicLink,
    onErrorCallback
  ])

  const signCallBack1 = useSigningCallback({
    onSuccess: onMakeSecondCall,
    onError: onErrorCallback
  })

  // first we add the new multisig as an any proxy of the pure proxy, signed by the old multisig
  const onFirstCall = useCallback(async () => {
    if (!api) {
      console.error('api is not ready')
      return
    }

    if (!selectedAccount) {
      console.error('no selected address')
      return
    }

    if (!firstCall) {
      return
    }

    setCurrentStep('call1')

    firstCall
      .signAndSend(
        selectedAccount.address,
        { signer: selectedSigner, withSignedTransaction: true },
        signCallBack1
      )
      .catch((error: Error) => {
        addToast({
          title: error.message,
          type: 'error',
          link: getSubscanExtrinsicLink(firstCall.hash.toHex())
        })
        onErrorCallback(error.message)
      })
  }, [
    api,
    selectedAccount,
    firstCall,
    selectedSigner,
    signCallBack1,
    addToast,
    getSubscanExtrinsicLink,
    onErrorCallback
  ])

  const onClickNext = useCallback(() => {
    if (currentStep === 'summary') {
      onFirstCall()
    } else {
      modalRef.current && modalRef.current.scrollTo(0, 0)
      setCurrentStep('summary')
    }
  }, [currentStep, onFirstCall])

  return (
    <Dialog
      fullWidth
      maxWidth={'sm'}
      open
      className={className}
    >
      {(!isCallStep || !!callError) && <ModalCloseButton onClose={onClose} />}
      <DialogTitle>Change multisig</DialogTitle>
      <DialogContent
        className="generalContainer"
        ref={modalRef}
      >
        <Grid container>
          {currentStep === 'selection' && (
            <>
              <Grid
                item
                xs={12}
              >
                {!hasProxyEnoughFunds && (
                  <Alert severity="error">
                    The pure account doesn&apos;t have enough funds. It needs at least{' '}
                    {formatBnBalance(proxyAdditionNeededFunds, chainInfo?.tokenDecimals, {
                      tokenSymbol: chainInfo?.tokenSymbol
                    })}
                  </Alert>
                )}
                <h4>Pure proxy (unchanged)</h4>
                <Box className="subSection">
                  <AccountDisplay
                    address={selectedMultiProxy?.proxy || ''}
                    badge={AccountBadge.PURE}
                    canCopy
                  />
                </Box>
                {multisigList.length > 1 && (
                  <>
                    <h4>Multisig</h4>
                    <GenericAccountSelection
                      className="multiSelection"
                      accountList={multisigList}
                      onChange={handleMultisigSelection}
                      value={
                        multisigList.find(({ address }) => address === selectedMultisig?.address) ||
                        multisigList[0]
                      }
                      label=""
                    />
                  </>
                )}
              </Grid>
              <Grid
                item
                xs={12}
              >
                <h4>Signatories</h4>
                <Box className="subSection">
                  <SignatorySelection
                    setSignatories={setNewSignatories}
                    signatories={newSignatories}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <h4>Threshold</h4>
                <Box className="subSection">
                  <ThresholdSelection
                    signatoriesNumber={newSignatories.length}
                    threshold={newThreshold}
                    setThreshold={setNewThreshold}
                  />
                </Box>
              </Grid>
            </>
          )}
          {currentStep === 'summary' && (
            <Summary
              signatories={newSignatories}
              threshold={newThreshold}
              proxyAddress={selectedMultiProxy?.proxy}
              isCreationSummary={false}
              balanceMin={neededBalance}
              isBalanceError={!hasSignerEnoughFunds}
              selectedMultisig={selectedMultisig}
              reservedBalance={firstCallReserved.add(secondCallReserved)}
            />
          )}
          {(currentStep === 'call1' || currentStep === 'call2') && (
            <Grid
              container
              spacing={2}
            >
              <Box className="loader">
                {callError ? <ErrorOutlineIcon size={48} /> : <CircularProgress size={48} />}
                {!!callError && (
                  <div className="callErrorMessage">
                    {callError.includes('multisig.NoTimepoint')
                      ? 'The exact same operation is already pending approval.'
                      : 'An error occurred'}
                  </div>
                )}
                {!callError && currentStep === 'call1' && (
                  <div>Please sign the 1st transaction to create the new multisig.</div>
                )}
                {!callError && currentStep === 'call2' && (
                  <div>Please sign the 2nd transaction to remove the old multisig.</div>
                )}
              </Box>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            className="buttonContainer"
          >
            {!!errorMessage && <AlertStyled severity="warning">{errorMessage}</AlertStyled>}
            {currentStep === 'summary' && (
              <BackButtonStyled onClick={onGoBack}>Back</BackButtonStyled>
            )}
            {!isCallStep && (
              <Button
                variant="primary"
                disabled={
                  !canGoNext ||
                  !!errorMessage ||
                  !hasProxyEnoughFunds ||
                  (currentStep === 'summary' && !hasSignerEnoughFunds)
                }
                onClick={onClickNext}
              >
                {currentStep === 'selection' ? 'Next' : 'Save'}
              </Button>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

const BackButtonStyled = styled(Button)`
  margin-right: 1rem;
`

const AlertStyled = styled(Alert)`
  margin-bottom: 1rem;
`

export default styled(ChangeMultisig)`
  .buttonContainer {
    margin-top: 1rem;
    text-align: right;
  }

  .accountEdition {
    margin-bottom: 1rem;
    align-items: end;
  }

  .subSection {
    padding: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      padding: 0 1.5rem;
    }
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  .callErrorMessage {
    text-align: center;
    margin-top: 1rem;
  }
`
