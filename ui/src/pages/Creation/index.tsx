import { Box, Button, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react"
import styled from "styled-components";
import { useApi } from "../../contexts/ApiContext";
import SignatorySelection from "../../components/SignatorySelection";
import { encodeAddress, createKeyMulti, sortAddresses } from "@polkadot/util-crypto";
import { useAccounts } from "../../contexts/AccountsContext";
import ThresholdSelection from "./ThresholdSelection";
import NameSelection from "./NameSelection"
import Summary from "./Summary";
import { useSigningCallback } from "../../hooks/useSigningCallback";
import { useNavigate } from "react-router-dom";
import { useToasts } from "../../contexts/ToastContext";
import { useAccountNames } from "../../contexts/AccountNamesContext";
import { useCheckBalance } from "../../hooks/useCheckBalance";
import { useMultisigProposalNeededFunds } from "../../hooks/useMultisigProposalNeededFunds";
import { usePureProxyCreationNeededFunds } from "../../hooks/usePureProxyCreationNeededFunds";

interface Props {
  className?: string
}

const steps = [
  "Signatories",
  "Threshold & Name",
  "Review"
]
const MultisigCreation = ({ className }: Props) => {
  const [signatories, setSignatories] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const isLastStep = useMemo(() => currentStep === steps.length - 1, [currentStep])
  const { api, isApiReady, chainInfo } = useApi()
  const [threshold, setThreshold] = useState<number | undefined>()
  const { selectedSigner, selectedAccount, addressList } = useAccounts()
  const navigate = useNavigate()
  const signCallBack = useSigningCallback({ onSuccess: () => navigate("/creation-success") })
  const { addToast } = useToasts()
  const [name, setName] = useState("")
  const { addName } = useAccountNames()
  const ownAccountPartOfSignatories = useMemo(() => signatories.some(sig => addressList.includes(sig)), [addressList, signatories])
  const [errorMessage, setErrorMessage] = useState("")
  const { pureProxyCreationNeededFunds } = usePureProxyCreationNeededFunds()
  const multiAddress = useMemo(() => {
    if (!threshold) {
      return
    }

    if (!chainInfo?.ss58Format) {
      return
    }

    return encodeAddress(createKeyMulti(signatories, threshold), chainInfo.ss58Format)
  }, [chainInfo, signatories, threshold])
  const batchCall = useMemo(() => {
    if (!isApiReady) {
      // console.error('api is not ready')
      return
    }

    if (!selectedAccount) {
      // console.error('no selected address')
      return
    }

    if (!signatories.includes(selectedAccount.address)) {
      // console.error('selected account not part of signatories')
      return
    }

    if (!threshold) {
      // console.error("Threshold is invalid", threshold)
      return
    }

    if (!multiAddress) {
      return
    }

    const otherSignatories = sortAddresses(signatories.filter((sig) => sig !== selectedAccount.address))

    const proxyTx = api.tx.proxy.createPure("Any", 0, 0)
    const multiSigProxyCall = api.tx.multisig.asMulti(threshold, otherSignatories, null, proxyTx, 0)
    // Some funds are needed on the multisig for the pure proxy creation
    const transferTx = api.tx.balances.transfer(multiAddress, pureProxyCreationNeededFunds.toString())
    return api.tx.utility.batchAll([transferTx, multiSigProxyCall])
  }, [api, isApiReady, multiAddress, pureProxyCreationNeededFunds, selectedAccount, signatories, threshold])

  const { multisigBatchCreationNeededFunds } = useMultisigProposalNeededFunds({ threshold, signatories, call: batchCall })
  const neededBalance = useMemo(() => pureProxyCreationNeededFunds.add(multisigBatchCreationNeededFunds), [multisigBatchCreationNeededFunds, pureProxyCreationNeededFunds])
  const { isLoading: isCheckingBalance, isValid: isEnoughBalance } = useCheckBalance({ min: neededBalance, address: selectedAccount?.address })
  const canGoNext = useMemo(() => {

    // need a threshold set
    if (currentStep === 1 && (threshold === undefined || threshold < 2)) {
      return false
    }

    // need at least 2 signatories
    if (currentStep === 0 && signatories.length < 2) {
      return false
    }

    // one of our account must be part of ths signatories
    if (currentStep === 0 && !ownAccountPartOfSignatories) {
      return false
    }

    // if the minimum balance isn't met
    if (currentStep === 2 && !isEnoughBalance) {
      return false
    }

    return true
  }, [currentStep, isEnoughBalance, ownAccountPartOfSignatories, signatories, threshold])

  useEffect(() => {
    setErrorMessage("")

    if (currentStep === 0 && !ownAccountPartOfSignatories && signatories.length >= 2) {
      setErrorMessage("At least one of your account must be a signatory")
    }
  }, [currentStep, ownAccountPartOfSignatories, signatories])

  const handleCreate = useCallback(async () => {

    if (!selectedAccount || !batchCall) {
      console.error('no selected address')
      return
    }

    multiAddress && addName(name, multiAddress)

    batchCall.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallBack)
      .catch((error: Error) => {
        addToast({ title: error.message, type: "error" })
      })

  }, [addName, addToast, batchCall, multiAddress, name, selectedAccount, selectedSigner, signCallBack])

  return (
    <Grid
      className={className}
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={4}
      >
        <h1 className="title">{steps[currentStep] || ""}</h1>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={8}
      >
        <Box className="stepsContainer">
          <Stepper
            activeStep={currentStep}
            alternativeLabel
          >
            {steps.map((step, index) => (
              <Step
                className="stepItem"
                key={step}
                onClick={() => { currentStep > index && setCurrentStep(index) }}
              >
                <StepLabel>{currentStep === index ? "" : step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>
      <Grid container item xs={12}>
        {currentStep === 0 && (
          <Grid
            item
            xs={12}
            md={6}
          >
            <SignatorySelection
              setSignatories={setSignatories}
              signatories={signatories}
            />
          </Grid>
        )}
        {currentStep === 1 && (
          <Grid
            item
            xs={12}
            md={6}
          >
            <ThresholdSelection
              setThreshold={setThreshold}
              threshold={threshold}
              signatoriesNumber={signatories.length}
            />
            <NameSelection
              setName={setName}
              name={name}
            />
          </Grid>
        )}
        {currentStep === 2 && (
          <Grid
            item
            xs={12}
            md={6}
          >
            <Summary
              signatories={signatories}
              threshold={threshold}
              name={name}
              isBalanceError={!isCheckingBalance && !isEnoughBalance}
              balanceMin={neededBalance}
            />
          </Grid>
        )}
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        className="buttonContainer"
        flexDirection="column"
      >
        {!!errorMessage && (
          <div className="errorMessage">
            {errorMessage}
          </div>
        )}
        <div className="buttonWrapper">
          <Button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </Button>
          <Button
            disabled={!canGoNext}
            onClick={() => isLastStep ? handleCreate() : setCurrentStep(currentStep + 1)}
          >
            {isLastStep
              ? "Create"
              : "Next"
            }
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default styled(MultisigCreation)(({ theme }) => `
  padding-bottom: 2rem;

  .stepItem {
    cursor: pointer;
  }

  .stepsContainer {
    width: 100%;
  }

  .buttonContainer button:first-child {
    margin-right: 2rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: ${theme.custom.text.errorColor};
  }

  .buttonWrapper {
    align-self: center;
  }
`)