import { Box, Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { useMultisig } from "../../contexts/MultisigContext";
import { AccountNames, useAccountNames } from "../../contexts/AccountNamesContext";
import { OnChangeArgs } from "../AccountEditName";
import AccountDisplay from "../AccountDisplay";
import ThresholdSelection from "../../pages/Creation/ThresholdSelection";
import SignatorySelection from "../SignatorySelection";
import Summary from "../../pages/Creation/Summary";
import { useApi } from "../../contexts/ApiContext";
import { useAccountList } from "../../contexts/AccountsContext";
import { createKeyMulti, encodeAddress, sortAddresses } from "@polkadot/util-crypto";
import { useNavigate } from "react-router-dom";
import { useGetSigningCallback } from "../../hooks/useGetSigningCallback";
import { useToasts } from "../../contexts/ToastContext";

interface Props {
  onClose: () => void
  className?: string
}

type Step = "selection" | "summary"

const ChangeMultisig = ({ onClose, className }: Props) => {
  const { isApiReady, api, chainInfo } = useApi()
  const { selectedMultisig, selectedMultisigSignatories } = useMultisig()
  const { addNames } = useAccountNames()
  const { addToast } = useToasts()
  const navigate = useNavigate()
  const signCallBack = useGetSigningCallback({ onSuccess: () => navigate("/creation-success") })
  const { selectedAccount, selectedSigner } = useAccountList()
  const [newNames, setNewNames] = useState<AccountNames>({})
  const [threshold, setThreshold] = useState<number | undefined>(selectedMultisig?.threshold)
  const [newSignatories, setNewSignatories] = useState<string[]>(selectedMultisigSignatories)
  const [currentStep, setCurrentStep] = useState<Step>("selection")
  const { addName, accountNames } = useAccountNames()

  const onSave = useCallback(async () => {
    addNames(newNames)
    onClose()
  }, [addNames, newNames, onClose])

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

  const onChangeMultisig = useCallback(async () => {
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

    if (!selectedMultisigSignatories.includes(selectedAccount.address)) {
      console.error("selected account not part of current multisig's signatories")
      return
    }

    if (!threshold) {
      console.error("Threshold is invalid", threshold)
      return
    }

    const otherSignatories = sortAddresses(selectedMultisigSignatories.filter((sig) => sig !== selectedAccount.address))
    const multiAddress = encodeAddress(createKeyMulti(newSignatories, threshold), Number(chainInfo?.ss58Format))
    const addProxyTx = api.tx.proxy.addProxy(multiAddress, "Any", 0)
    const proxyTx = api.tx.proxy.proxy(selectedAccount.address, null, addProxyTx)
    const multiSigCall = api.tx.multisig.asMulti(threshold, otherSignatories, null, proxyTx, 0)
    const transferTx = api.tx.balances.transfer(multiAddress, 1000000000000)
    const batchCall = api.tx.utility.batch([transferTx, multiSigCall])

    // Add the current name to the new Multisig
    const currentProxyName = selectedMultisig?.proxy?.id && accountNames[selectedMultisig.proxy.id]
    currentProxyName && addName(currentProxyName, multiAddress)

    batchCall.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallBack)
      .catch((error: Error) => {
        addToast({ title: error.message, type: "error" })
      })

  }, [isApiReady, chainInfo, selectedAccount, selectedMultisigSignatories, threshold, newSignatories, api, selectedMultisig, accountNames, addName, selectedSigner, signCallBack, addToast])



  const onClickNext = useCallback(() => {
    if (currentStep === 'summary') {
      onChangeMultisig()
    } else {
      setCurrentStep("summary")
    }
  }, [currentStep, onChangeMultisig])

  return <Dialog
    fullWidth
    maxWidth={"sm"}
    open
    onClose={onClose}
    className={className}
  >
    <DialogTitle>Change multisig</DialogTitle>
    <DialogContent className="generalContainer">
      <Grid container>
        {currentStep === 'selection' && (
          <>
            <Grid item xs={12}>
              <h4>Proxy</h4>
              <Box className="subSection">
                <AccountDisplay
                  address={selectedMultisig?.proxy?.id || ""}
                  badge="proxy"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <h4>Threshold</h4>
              <Box className="subSection">
                <ThresholdSelection
                  signatoriesNumber={newSignatories.length}
                  threshold={threshold}
                  setThreshold={setThreshold}
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
          </>
        )}
        {currentStep === 'summary' && (
          <Summary
            signatories={newSignatories}
            threshold={threshold}
            proxyAddress={selectedMultisig?.proxy?.id}
            isSwapSummary
          />
        )}
        <Grid item xs={12} className="buttonContainer">
          {currentStep === "summary" && (
            <Button
              onClick={onGoBack}
            >
              Back
            </Button>
          )}
          <Button
            onClick={onClickNext}
          >{
              currentStep === "selection"
                ? "Next"
                : "Save"
            }
          </Button>
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
`)