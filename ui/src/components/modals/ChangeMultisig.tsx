import { Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useMultiProxy } from "../../contexts/MultiProxyContext";
import { AccountNames, useAccountNames } from "../../contexts/AccountNamesContext";
import AccountDisplay from "../AccountDisplay";
import ThresholdSelection from "../../pages/Creation/ThresholdSelection";
import SignatorySelection from "../SignatorySelection";
import Summary from "../../pages/Creation/Summary";
import { useApi } from "../../contexts/ApiContext";
import { useAccounts } from "../../contexts/AccountsContext";
import { createKeyMulti, encodeAddress, sortAddresses } from "@polkadot/util-crypto";
import { useNavigate } from "react-router-dom";
import { useGetSigningCallback } from "../../hooks/useGetSigningCallback";
import { useToasts } from "../../contexts/ToastContext";
import { AccountBadge } from "../../types";
import { getIntersection } from "../../utils";

interface Props {
  onClose: () => void
  className?: string
}

type Step = "selection" | "summary" | "call1" | "call2"

const ChangeMultisig = ({ onClose, className }: Props) => {
  const { isApiReady, api, chainInfo } = useApi()
  const { selectedMultiProxy } = useMultiProxy()
  const { addToast } = useToasts()
  const navigate = useNavigate()
  const signCallBack2 = useGetSigningCallback({ onSuccess: () => navigate("/creation-success") })
  const { selectedAccount, selectedSigner, addressList } = useAccounts()
  const [newNames, setNewNames] = useState<AccountNames>({})
  // FIXME this will break we need a selector
  const selectedMultisig = useMemo(() => selectedMultiProxy?.multisigs[0], [selectedMultiProxy?.multisigs])
  const oldThreshold = useMemo(() => selectedMultisig?.threshold, [selectedMultisig])
  const [newThreshold, setNewThreshold] = useState<number | undefined>(oldThreshold)
  const [newSignatories, setNewSignatories] = useState<string[]>(selectedMultisig?.signatories || [])
  const [currentStep, setCurrentStep] = useState<Step>("selection")
  const { addName, addNames, accountNames } = useAccountNames()
  const [errorMessage, setErrorMessage] = useState("")
  const ownAccountPartOfAllSignatories = useMemo(() => getIntersection(addressList, getIntersection(selectedMultisig?.signatories, newSignatories)).length > 0
    , [addressList, newSignatories, selectedMultisig?.signatories])
  const isCallStep = useMemo(() => currentStep === "call1" || currentStep === "call2", [currentStep])

  const handleClose = useCallback(() => {
    if (!isCallStep) {
      onClose()
    } else {
      //FIXME we need to allow to close this if something went wrong
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

  // const onNameChange = useCallback(({ name, addresses }: OnChangeArgs) => {
  //   const uniqueAddresses = addresses.filter(address => !!address) as string[]

  //   const namesToBeAdded = uniqueAddresses.reduce((previousValue: AccountNames, currentValue: string) => {
  //     return { ...previousValue, [currentValue]: name }
  //   }, {} as AccountNames)

  //   setNewNames({ ...newNames, ...namesToBeAdded })
  // }, [newNames])

  // the new multisig will remove the old one here
  const onMakeSecondCall = useCallback(() => {
    if (!isApiReady) {
      console.error('api is not ready')
      return
    }

    if (!chainInfo?.ss58Format) {
      console.error('no ss58Format from chainInfo')
      return
    }

    if (!selectedAccount) {
      console.error('no selected address')
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

    setCurrentStep("call2")

    const otherNewSignatories = sortAddresses(newSignatories.filter((sig) => sig !== selectedAccount.address))
    const removeProxyTx = api.tx.proxy.removeProxy(selectedMultisig?.address, "Any", 0)
    const proxyTx = api.tx.proxy.proxy(selectedMultiProxy?.proxy, null, removeProxyTx)
    const multiSigCall = api.tx.multisig.asMulti(newThreshold, otherNewSignatories, null, proxyTx, 0)

    multiSigCall.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallBack2)
      .catch((error: Error) => {
        addToast({ title: error.message, type: "error" })
      })
  }, [isApiReady, chainInfo?.ss58Format, selectedAccount, newSignatories, newThreshold, api, selectedMultisig, selectedMultiProxy, selectedSigner, signCallBack2, addToast])

  const signCallBack1 = useGetSigningCallback({ onSuccess: onMakeSecondCall })

  // first we add the new multisig as an any proxy of the pure proxy, by the old multisig
  const onFirstCall = useCallback(async () => {
    if (!isApiReady) {
      console.error('api is not ready')
      return
    }

    if (!chainInfo?.ss58Format) {
      console.error('no ss58Format from chainInfo')
      return
    }

    if (!selectedAccount) {
      console.error('no selected address')
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

    addNames(newNames)
    setCurrentStep("call1")

    const otherOldSignatories = sortAddresses(selectedMultisig.signatories.filter((sig) => sig !== selectedAccount.address))
    const newMultiAddress = encodeAddress(createKeyMulti(newSignatories, newThreshold), Number(chainInfo?.ss58Format))
    const addProxyTx = api.tx.proxy.addProxy(newMultiAddress, "Any", 0)
    const proxyTx = api.tx.proxy.proxy(selectedMultiProxy?.proxy, null, addProxyTx)
    // call with the old multisig
    const multiSigCall = api.tx.multisig.asMulti(oldThreshold, otherOldSignatories, null, proxyTx, 0)

    // Add the current name to the new Multisig
    const currentProxyName = selectedMultiProxy?.proxy && accountNames[selectedMultiProxy.proxy]
    currentProxyName && addName(currentProxyName, newMultiAddress)

    multiSigCall.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallBack1)
      .catch((error: Error) => {
        addToast({ title: error.message, type: "error" })
      })
  }, [isApiReady, chainInfo?.ss58Format, selectedAccount, selectedMultisig, oldThreshold, newThreshold, addNames, newNames, newSignatories, api.tx.proxy, api.tx.multisig, selectedMultiProxy, accountNames, addName, selectedSigner, signCallBack1, addToast])

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
              <h4>Pure proxy (unchanged)</h4>
              <Box className="subSection">
                <AccountDisplay
                  address={selectedMultiProxy?.proxy || ""}
                  badge={AccountBadge.PURE}
                />
              </Box>
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
          />
        )}
        {(currentStep === 'call1' || currentStep === 'call2') && (
          <Grid
            container
            spacing={2}
          >
            <Box className="loader">
              <CircularProgress />
              <div>
                Tx {currentStep === 'call1' ? "1" : "2"} in progress..
              </div>
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
              disabled={!!errorMessage}
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