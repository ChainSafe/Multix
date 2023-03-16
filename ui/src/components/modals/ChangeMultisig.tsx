import { Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useMultiProxy } from "../../contexts/MultiProxyContext";
import AccountDisplay from "../AccountDisplay";
import ThresholdSelection from "../../pages/Creation/ThresholdSelection";
import SignatorySelection from "../SignatorySelection";
import Summary from "../../pages/Creation/Summary";
import { useApi } from "../../contexts/ApiContext";
import { useAccounts } from "../../contexts/AccountsContext";
import { createKeyMulti, encodeAddress, sortAddresses } from "@polkadot/util-crypto";
import { useSigningCallback } from "../../hooks/useSigningCallback";
import { useToasts } from "../../contexts/ToastContext";
import { AccountBadge } from "../../types";
import { getIntersection } from "../../utils";
import GenericAccountSelection, { AccountBaseInfo } from "../GenericAccountSelection";
import { useProxyAdditionNeededFunds } from "../../hooks/useProxyAdditionNeededFunds";
import { useCheckBalance } from "../../hooks/useCheckBalance";
import Warning from "../Warning";
import { formatBnBalance } from "../../utils/formatBnBalance";
import { useMultisigProposalNeededFunds } from "../../hooks/useMultisigProposalNeededFunds";

interface Props {
  onClose: () => void
  className?: string
}

type Step = "selection" | "summary" | "call1" | "call2"

const ChangeMultisig = ({ onClose, className }: Props) => {
  const { isApiReady, api, chainInfo } = useApi()
  const { selectedMultiProxy, getMultisigAsAccountBaseInfo, getMultisigByAddress } = useMultiProxy()
  const { addToast } = useToasts()
  const signCallBack2 = useSigningCallback({ onSuccess: onClose })
  const { selectedAccount, selectedSigner, addressList } = useAccounts()
  const [selectedMultisig, setSelectedMultisig] = useState(selectedMultiProxy?.multisigs[0])
  const oldThreshold = useMemo(() => selectedMultisig?.threshold, [selectedMultisig])
  const [newThreshold, setNewThreshold] = useState<number | undefined>(oldThreshold)
  const [newSignatories, setNewSignatories] = useState<string[]>(selectedMultisig?.signatories || [])
  const [currentStep, setCurrentStep] = useState<Step>("selection")
  const [errorMessage, setErrorMessage] = useState("")
  const ownAccountPartOfAllSignatories = useMemo(() => getIntersection(addressList, getIntersection(selectedMultisig?.signatories, newSignatories)).length > 0
    , [addressList, newSignatories, selectedMultisig?.signatories])
  const isCallStep = useMemo(() => currentStep === "call1" || currentStep === "call2", [currentStep])
  const { proxyAdditionNeededFunds } = useProxyAdditionNeededFunds()
  const { isValid: hasProxyEnoughFunds } = useCheckBalance({ min: proxyAdditionNeededFunds, address: selectedMultiProxy?.proxy })
  const multisigList = useMemo(() => getMultisigAsAccountBaseInfo()
    , [getMultisigAsAccountBaseInfo])

  const firstCall = useMemo(() => {
    if (!isApiReady) {
      console.error('api is not ready')
      return
    }

    if (!selectedAccount) {
      console.error('no selected address')
      return
    }

    if (!chainInfo?.ss58Format) {
      console.error('no ss58Format from chainInfo')
      return
    }


    if (!selectedMultisig?.signatories?.includes(selectedAccount.address)) {
      console.error("selected account not part of current multisig's signatories")
      return
    }

    if (!oldThreshold || !newThreshold) {
      console.error("One of the threshold is invalid", oldThreshold, newThreshold)
      return
    }

    const otherOldSignatories = sortAddresses(selectedMultisig.signatories.filter((sig) => sig !== selectedAccount.address))
    const newMultiAddress = encodeAddress(createKeyMulti(newSignatories, newThreshold), chainInfo?.ss58Format)
    const addProxyTx = api.tx.proxy.addProxy(newMultiAddress, "Any", 0)
    const proxyTx = api.tx.proxy.proxy(selectedMultiProxy?.proxy, null, addProxyTx)
    // call with the old multisig
    return api.tx.multisig.asMulti(oldThreshold, otherOldSignatories, null, proxyTx, 0)
  }, [api, chainInfo, isApiReady, newSignatories, newThreshold, oldThreshold, selectedAccount, selectedMultiProxy?.proxy, selectedMultisig])

  const secondCall = useMemo(() => {
    if (!isApiReady) {
      console.error('api is not ready')
      return
    }

    if (!selectedAccount) {
      console.error('no selected address')
      return
    }

    if (!chainInfo?.ss58Format) {
      console.error('no ss58Format from chainInfo')
      return
    }

    if (!newSignatories.includes(selectedAccount.address)) {
      console.error("selected account not part of new multisig's signatories")
      return
    }

    if (!newThreshold) {
      console.error("Threshold is invalid", newThreshold)
      return
    }

    const otherNewSignatories = sortAddresses(newSignatories.filter((sig) => sig !== selectedAccount.address))
    const removeProxyTx = api.tx.proxy.removeProxy(selectedMultisig?.address, "Any", 0)
    const proxyTx = api.tx.proxy.proxy(selectedMultiProxy?.proxy, null, removeProxyTx)
    return api.tx.multisig.asMulti(newThreshold, otherNewSignatories, null, proxyTx, 0)
  }, [api, chainInfo, isApiReady, newSignatories, newThreshold, selectedAccount, selectedMultiProxy, selectedMultisig])

  const { multisigProposalNeededFunds: firstCallNeededFunds } = useMultisigProposalNeededFunds({ call: firstCall, signatories: selectedMultisig?.signatories, threshold: oldThreshold })
  const { multisigProposalNeededFunds: secondCallNeededFunds } = useMultisigProposalNeededFunds({ call: secondCall, signatories: newSignatories, threshold: newThreshold })
  const neededBalance = useMemo(() => firstCallNeededFunds.add(secondCallNeededFunds), [firstCallNeededFunds, secondCallNeededFunds])
  const { isValid: hasSignerEnoughFunds } = useCheckBalance({ min: neededBalance, address: selectedAccount?.address })

  console.log('neededBalance', neededBalance.toString())

  useEffect(() => {
    if (!selectedMultisig?.signatories) {
      return
    }

    setNewSignatories(selectedMultisig.signatories)
  }, [selectedMultisig])

  const handleMultisigSelection = useCallback(({ address }: AccountBaseInfo) => {
    const selected = getMultisigByAddress(address)
    setSelectedMultisig(selected)
  }, [getMultisigByAddress])

  const handleClose = useCallback(() => {
    if (!isCallStep) {
      onClose()
    } else {
      //FIXME we need to allow to close this if something went wrong
      // logged in https://github.com/ChainSafe/Multix/issues/37
      console.error("You can't close the modal in this state")
    }
  }, [isCallStep, onClose])

  useEffect(() => {
    setErrorMessage("")

    if (!ownAccountPartOfAllSignatories && newSignatories.length >= 2) {
      setErrorMessage("One of your account must be part of both the old and the new multisig")
    }
  }, [ownAccountPartOfAllSignatories, newSignatories])

  const onGoBack = useCallback(() => {
    setCurrentStep("selection")
  }, [])

  // the new multisig will remove the old one from the proxy list
  const onMakeSecondCall = useCallback(() => {
    if (!isApiReady) {
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

    setCurrentStep("call2")

    secondCall.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallBack2)
      .catch((error: Error) => {
        addToast({ title: error.message, type: "error" })
      })
  }, [isApiReady, selectedAccount, secondCall, selectedSigner, signCallBack2, addToast])

  const signCallBack1 = useSigningCallback({ onSuccess: onMakeSecondCall })

  // first we add the new multisig as an any proxy of the pure proxy, signed by the old multisig
  const onFirstCall = useCallback(async () => {
    if (!isApiReady) {
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

    setCurrentStep("call1")

    firstCall.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallBack1)
      .catch((error: Error) => {
        addToast({ title: error.message, type: "error" })
      })
  }, [isApiReady, selectedAccount, firstCall, selectedSigner, signCallBack1, addToast])

  const onClickNext = useCallback(() => {
    if (currentStep === 'summary') {
      onFirstCall()
    } else {
      setCurrentStep("summary")
    }
  }, [currentStep, onFirstCall])

  return <Dialog
    fullWidth
    maxWidth={"sm"}
    open
    onClose={handleClose}
    className={className}
  >
    <DialogTitle>Change multisig</DialogTitle>
    <DialogContent className="generalContainer">
      <Grid container>
        {currentStep === 'selection' && (
          <>
            <Grid item xs={12}>
              {!hasProxyEnoughFunds && (
                <Warning text={`The pure account doesn't have enough funds. It needs at least ${formatBnBalance(proxyAdditionNeededFunds, chainInfo?.tokenDecimals, { tokenSymbol: chainInfo?.tokenSymbol })}`} />
              )}
              <h4>Pure proxy (unchanged)</h4>
              <Box className="subSection">
                <AccountDisplay
                  address={selectedMultiProxy?.proxy || ""}
                  badge={AccountBadge.PURE}
                />
              </Box>
              {multisigList.length > 1 && (
                <>
                  <h4>Multisig</h4>
                  <GenericAccountSelection
                    className="multiSelection"
                    accountList={multisigList}
                    onChange={handleMultisigSelection}
                    value={multisigList.find(({ address }) => address === selectedMultisig?.address) || multisigList[0]}
                    label=""
                  />
                </>
              )}
            </Grid>
            <Grid item xs={12}>
              <h4>Signatories</h4>
              <Box className="subSection">
                <SignatorySelection
                  setSignatories={setNewSignatories}
                  signatories={newSignatories}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
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
            isSwapSummary
            balanceMin={neededBalance}
            isBalanceError={!hasSignerEnoughFunds}
          />
        )}
        {(currentStep === 'call1' || currentStep === 'call2') && (
          <Grid
            container
            spacing={2}
          >
            <Box className="loader">
              <CircularProgress />
              {currentStep === 'call1' && (
                <div>
                  Please sign the 1st transaction to create the new multisig.
                </div>
              )}
              {currentStep === 'call2' && (
                <div>
                  Please sign the 2nd transaction to remove the old multisig.
                </div>
              )}
            </Box>
          </Grid>
        )}
        <Grid item xs={12} className="buttonContainer">
          {!!errorMessage && (
            <div className="errorMessage">
              {errorMessage}
            </div>
          )}
          {currentStep === "summary" && (
            <Button
              onClick={onGoBack}
            >
              Back
            </Button>
          )}
          {!isCallStep && (
            <Button
              disabled={!!errorMessage || !hasProxyEnoughFunds || !hasSignerEnoughFunds}
              onClick={onClickNext}
            >{
                currentStep === "selection"
                  ? "Next"
                  : "Save"
              }
            </Button>
          )}
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
}

export default styled(ChangeMultisig)(({ theme }) => `
  .buttonContainer {
    margin-top: 1rem;
    text-align: right;
  }

  .accountEdition {
    margin-bottom: 1rem;
    align-items: center;
  }

  .subSection {
    padding: 0 1.5rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: ${theme.custom.text.errorColor};
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
`)