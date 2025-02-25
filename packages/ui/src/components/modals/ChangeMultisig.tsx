import {
  Alert,
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2 as Grid
} from '@mui/material'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import AccountDisplay from '../AccountDisplay/AccountDisplay'
import ThresholdSelection from '../../pages/Creation/ThresholdSelection'
import SignatorySelection from '../select/SignatorySelection'
import Summary from '../../pages/Creation/Summary'
import { isContextIn, isContextOf, useApi } from '../../contexts/ApiContext'
import { useAccounts } from '../../contexts/AccountsContext'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import { AccountBadge, noHydrationKeys_1, noHydrationKeys_2, noHydrationKeys_3 } from '../../types'
import { getIntersection } from '../../utils/arrayUtils'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import { useProxyAdditionNeededFunds } from '../../hooks/useProxyAdditionNeededFunds'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { formatBigIntBalance } from '../../utils/formatBnBalance'
import { useMultisigProposalNeededFunds } from '../../hooks/useMultisigProposalNeededFunds'
import { MdErrorOutline as ErrorOutlineIcon } from 'react-icons/md'
import { Button } from '../library'
import { ModalCloseButton } from '../library/ModalCloseButton'
import { useGetSortAddress } from '../../hooks/useGetSortAddress'
import { useGetMultisigAddress } from '../../contexts/useGetMultisigAddress'
import { getAsMultiTx } from '../../utils/getAsMultiTx'
import { Enum } from 'polkadot-api'
import { MultiAddress } from '@polkadot-api/descriptors'
import { useNetwork } from '../../contexts/NetworkContext'

interface Props {
  onClose: () => void
  className?: string
}

type Step = 'selection' | 'summary' | 'call1' | 'call2'

const ChangeMultisig = ({ onClose, className }: Props) => {
  const { selectedNetwork } = useNetwork()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const ctx = useApi()
  const { api, chainInfo, compatibilityToken } = ctx
  const { selectedMultiProxy, getMultisigAsAccountBaseInfo, getMultisigByAddress } = useMultiProxy()
  const signCallBack2 = useSigningCallback({
    onSuccess: onClose,
    onError: (e) => {
      onClose()
      onErrorCallback(e)
    }
  })
  const { getSortAddress } = useGetSortAddress()
  const { selectedAccount, ownAddressList } = useAccounts()
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
    address: selectedMultiProxy?.proxy,
    withPplApi: false
  })
  const multisigList = useMemo(() => getMultisigAsAccountBaseInfo(), [getMultisigAsAccountBaseInfo])
  const [callError, setCallError] = useState('')

  const secondCall = useMemo(() => {
    if (!ctx.api || !compatibilityToken || !selectedNetwork) {
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

    const addProxyTx = isContextOf(ctx, 'hydration')
      ? ctx.api.tx.Proxy.add_proxy({
          delegate: newMultisigAddress,
          proxy_type: Enum('Any'),
          delay: 0
        })
      : isContextIn(ctx, noHydrationKeys_1)
        ? ctx.api.tx.Proxy.add_proxy({
            delegate: MultiAddress.Id(newMultisigAddress),
            proxy_type: Enum('Any'),
            delay: 0
          })
        : isContextIn(ctx, noHydrationKeys_2)
          ? ctx.api.tx.Proxy.add_proxy({
              delegate: MultiAddress.Id(newMultisigAddress),
              proxy_type: Enum('Any'),
              delay: 0
            })
          : isContextIn(ctx, noHydrationKeys_3) &&
            ctx.api.tx.Proxy.add_proxy({
              delegate: MultiAddress.Id(newMultisigAddress),
              proxy_type: Enum('Any'),
              delay: 0
            })

    if (!addProxyTx) return

    const proxyTx = isContextOf(ctx, 'hydration')
      ? ctx.api.tx.Proxy.proxy({
          real: selectedMultiProxy?.proxy,
          force_proxy_type: undefined,
          call: addProxyTx.decodedCall
        })
      : isContextIn(ctx, noHydrationKeys_1)
        ? ctx.api.tx.Proxy.proxy({
            real: MultiAddress.Id(selectedMultiProxy?.proxy),
            force_proxy_type: undefined,
            call: addProxyTx.decodedCall
          })
        : isContextIn(ctx, noHydrationKeys_2)
          ? ctx.api.tx.Proxy.proxy({
              real: MultiAddress.Id(selectedMultiProxy?.proxy),
              force_proxy_type: undefined,
              call: addProxyTx.decodedCall
            })
          : isContextIn(ctx, noHydrationKeys_3) &&
            ctx.api.tx.Proxy.proxy({
              real: MultiAddress.Id(selectedMultiProxy?.proxy),
              force_proxy_type: undefined,
              call: addProxyTx.decodedCall
            })

    if (!proxyTx) return

    // call with the old multisig to delete the new one
    return getAsMultiTx({
      api,
      threshold: oldThreshold,
      otherSignatories: otherOldSignatories,
      tx: proxyTx,
      compatibilityToken
    })
  }, [
    ctx,
    compatibilityToken,
    selectedNetwork,
    selectedAccount,
    selectedMultiProxy?.proxy,
    chainInfo,
    selectedMultisig,
    oldThreshold,
    newThreshold,
    newMultisigAddress,
    getSortAddress,
    api
  ])

  const firstCall = useMemo(() => {
    if (!ctx?.api || !api || !compatibilityToken) {
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

    const removeProxyTx = isContextOf(ctx, 'hydration')
      ? ctx.api.tx.Proxy.remove_proxy({
          delegate: selectedMultisig?.address,
          proxy_type: Enum('Any'),
          delay: 0
        })
      : isContextIn(ctx, noHydrationKeys_1)
        ? ctx.api.tx.Proxy.remove_proxy({
            delegate: MultiAddress.Id(selectedMultisig?.address),
            proxy_type: Enum('Any'),
            delay: 0
          })
        : isContextIn(ctx, noHydrationKeys_2) &&
          ctx.api.tx.Proxy.remove_proxy({
            delegate: MultiAddress.Id(selectedMultisig?.address),
            proxy_type: Enum('Any'),
            delay: 0
          })

    if (!removeProxyTx) return

    const proxyTx = isContextOf(ctx, 'hydration')
      ? ctx.api.tx.Proxy.proxy({
          real: selectedMultiProxy?.proxy,
          force_proxy_type: undefined,
          call: removeProxyTx.decodedCall
        })
      : isContextIn(ctx, noHydrationKeys_1)
        ? ctx.api.tx.Proxy.proxy({
            real: MultiAddress.Id(selectedMultiProxy?.proxy),
            force_proxy_type: undefined,
            call: removeProxyTx.decodedCall
          })
        : isContextIn(ctx, noHydrationKeys_2)
          ? ctx.api.tx.Proxy.proxy({
              real: MultiAddress.Id(selectedMultiProxy?.proxy),
              force_proxy_type: undefined,
              call: removeProxyTx.decodedCall
            })
          : isContextIn(ctx, noHydrationKeys_3) &&
            ctx.api.tx.Proxy.proxy({
              real: MultiAddress.Id(selectedMultiProxy?.proxy),
              force_proxy_type: undefined,
              call: removeProxyTx.decodedCall
            })

    if (!proxyTx) return

    return getAsMultiTx({
      api,
      otherSignatories: otherNewSignatories,
      threshold: newThreshold,
      tx: proxyTx,
      compatibilityToken
    })
  }, [
    ctx,
    api,
    compatibilityToken,
    selectedAccount,
    selectedMultisig?.address,
    selectedMultiProxy?.proxy,
    chainInfo,
    newSignatories,
    newThreshold,
    getSortAddress
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
    () => firstCallNeededFunds + secondCallNeededFunds,
    [firstCallNeededFunds, secondCallNeededFunds]
  )
  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    min: neededBalance,
    address: selectedAccount?.address,
    withPplApi: false
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
      .signSubmitAndWatch(selectedAccount.polkadotSigner, { at: 'best' })
      .subscribe(signCallBack2)
  }, [callError, api, selectedAccount, secondCall, signCallBack2])

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
      .signSubmitAndWatch(selectedAccount.polkadotSigner, { at: 'best' })
      .subscribe(signCallBack1)
  }, [api, selectedAccount, firstCall, signCallBack1])

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
              <Grid size={{ xs: 12 }}>
                {!hasProxyEnoughFunds && (
                  <Alert severity="error">
                    The pure account doesn&apos;t have enough funds. It needs at least{' '}
                    {formatBigIntBalance(proxyAdditionNeededFunds, chainInfo?.tokenDecimals, {
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
              <Grid size={{ xs: 12 }}>
                <h4>Signatories</h4>
                <Box className="subSection">
                  <SignatorySelection
                    setSignatories={setNewSignatories}
                    signatories={newSignatories}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12 }}>
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
              reservedBalance={firstCallReserved + secondCallReserved}
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
            size={{ xs: 12 }}
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
