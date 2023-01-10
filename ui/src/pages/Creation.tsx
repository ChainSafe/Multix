import { Box, Button, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { useCallback, useMemo, useState } from "react"
import styled from "styled-components";
import { useApi } from "../contexts/ApiContext";
import SignatorySelection from "../components/SignatorySelection";
import { encodeAddress, createKeyMulti } from "@polkadot/util-crypto";
import { config } from "../config";
import { useAccountList } from "../contexts/AccountsContext";

interface Props {
  className?: string
}

export interface Signatory {
  address: string
  name?: string
}

const steps = [
  "Signatories",
  "Threshold",
  "Review"
]
const MultisigCreation = ({ className }: Props) => {
  const [signatories, setSignatories] = useState<Signatory[]>([])
  const [activeStep, setActiveStep] = useState(0)
  const isLastStep = useMemo(() => activeStep === steps.length - 1, [activeStep])
  const { api, isApiReady } = useApi()
  const [threshold, setThreshold] = useState(2)
  const { selectedSigner, selectedAddress } = useAccountList()


  const handleCreate = useCallback(async () => {
    if (!isApiReady) {
      console.error('api is not ready')
      return
    }

    if (!selectedAddress) {
      console.error('no selected address')
      return
    }

    const signatoriesAddresses = signatories.map(({ address }) => address)

    if (!signatoriesAddresses.includes(selectedAddress)) {
      console.error('selected account not part of signatories')
      return
    }

    const otherSignatories = signatoriesAddresses.filter((sig) => sig !== selectedAddress)
    const multiAddress = encodeAddress(createKeyMulti(signatoriesAddresses, threshold), config.prefix)
    const proxyTx = api.tx.proxy.createPure("Any", 0, 0)
    const multiSigProxyCall = api.tx.multisig.asMulti(threshold, otherSignatories, null, proxyTx, 0)
    const transferTx = api.tx.balances.transfer(multiAddress, 1000000000000)
    const batchCall = api.tx.utility.batch([transferTx, multiSigProxyCall])

    batchCall.signAndSend(selectedAddress, { signer: selectedSigner }, ({ events = [], status }) => {
      console.log('Transaction status:', status.type);

      if (status.isInBlock) {
        console.log('Included at block hash', status.asInBlock.toHex());
        console.log('Events:');

        events.forEach(({ event: { data, method, section }, phase }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });
      } else if (status.isFinalized) {
        console.log('Finalized block hash', status.asFinalized.toHex());
      }
    });

  }, [api, isApiReady, selectedAddress, selectedSigner, signatories, threshold])

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
        <h1 className="title">{steps[activeStep]}</h1>
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
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((step, index) => (
              <Step
                className="stepItem"
                key={step}
                onClick={() => { activeStep > index && setActiveStep(index) }}
              >
                <StepLabel>{activeStep === index ? "" : step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>
      <Grid container item xs={12}>
        {activeStep === 0 && (
          <SignatorySelection
            setSignatories={setSignatories}
            signatories={signatories}
          />
        )}
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        className="buttonContainer"
      >
        <Button
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>
        <Button
          onClick={() => isLastStep ? handleCreate() : setActiveStep(activeStep + 1)}
        >
          {isLastStep
            ? "Create"
            : "Next"
          }
        </Button>
      </Grid>
    </Grid>
  )
}

export default styled(MultisigCreation)(({ theme }) => `
  .stepItem {
    cursor: pointer;
  }

  .stepsContainer {
    width: 100%;
  }

  .buttonContainer button:first-child {
    margin-right: 2rem;
  }
`)