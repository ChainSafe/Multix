import { Alert, Box, CircularProgress, Grid, Step, StepLabel, Stepper } from '@mui/material'
import { Button, ButtonWithIcon } from '../../components/library'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useApi } from '../../contexts/ApiContext'
import SignatorySelection from '../../components/select/SignatorySelection'
import { createKeyMulti, encodeAddress, sortAddresses } from '@polkadot/util-crypto'
import { useAccounts } from '../../contexts/AccountsContext'
import ThresholdSelection from './ThresholdSelection'
import NameSelection from './NameSelection'
import Summary from './Summary'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import { useNavigate } from 'react-router-dom'
import { useToasts } from '../../contexts/ToastContext'
import { useAccountNames } from '../../contexts/AccountNamesContext'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { useMultisigProposalNeededFunds } from '../../hooks/useMultisigProposalNeededFunds'
import { usePureProxyCreationNeededFunds } from '../../hooks/usePureProxyCreationNeededFunds'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'

interface Props {
  className?: string
}

const steps = ['Signatories', 'Threshold & Name', 'Review']
const MultisigCreation = ({ className }: Props) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const [signatories, setSignatories] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const isLastStep = useMemo(() => currentStep === steps.length - 1, [currentStep])
  const { api, isApiReady, chainInfo } = useApi()
  const [threshold, setThreshold] = useState<number | undefined>()
  const { selectedSigner, selectedAccount, ownAddressList } = useAccounts()
  const navigate = useNavigate()
  const signCallBack = useSigningCallback({
    onSuccess: () => navigate('/?creationInProgress=true')
  })
  const { addToast } = useToasts()
  const [name, setName] = useState('')
  const { addName } = useAccountNames()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ownAccountPartOfSignatories = useMemo(
    () => signatories.some((sig) => ownAddressList.includes(sig)),
    [ownAddressList, signatories]
  )
  const [errorMessage, setErrorMessage] = useState('')
  const { pureProxyCreationNeededFunds } = usePureProxyCreationNeededFunds()
  const multiAddress = useMemo(() => {
    if (!threshold) {
      return
    }

    if (!chainInfo) {
      return
    }

    const multiPubKey = createKeyMulti(signatories, threshold)
    let res: string | undefined
    try {
      res = encodeAddress(multiPubKey, chainInfo.ss58Format)
    } catch (e) {
      console.error(`Error encoding the address ${multiPubKey}, skipping`, e)
    }
    return res
  }, [chainInfo, signatories, threshold])
  const batchCall = useMemo(() => {
    if (!isApiReady || !api) {
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

    const otherSignatories = sortAddresses(
      signatories.filter((sig) => sig !== selectedAccount.address)
    )
    const proxyTx = api.tx.proxy.createPure('Any', 0, 0)
    const multiSigProxyCall = api.tx.multisig.asMulti(threshold, otherSignatories, null, proxyTx, {
      refTime: 0,
      proofSize: 0
    })
    // Some funds are needed on the multisig for the pure proxy creation
    const transferTx = api.tx.balances.transferKeepAlive(
      multiAddress,
      pureProxyCreationNeededFunds.toString()
    )

    return api.tx.utility.batchAll([transferTx, multiSigProxyCall])
  }, [
    api,
    isApiReady,
    multiAddress,
    pureProxyCreationNeededFunds,
    selectedAccount,
    signatories,
    threshold
  ])

  const { multisigProposalNeededFunds } = useMultisigProposalNeededFunds({
    threshold,
    signatories,
    call: batchCall
  })
  const neededBalance = useMemo(
    () => pureProxyCreationNeededFunds.add(multisigProposalNeededFunds),
    [multisigProposalNeededFunds, pureProxyCreationNeededFunds]
  )
  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    min: neededBalance,
    address: selectedAccount?.address
  })
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
    if (currentStep === 2 && !hasSignerEnoughFunds) {
      return false
    }

    return true
  }, [currentStep, hasSignerEnoughFunds, ownAccountPartOfSignatories, signatories, threshold])

  useEffect(() => {
    setErrorMessage('')

    if (currentStep === 0 && !ownAccountPartOfSignatories && signatories.length >= 2) {
      setErrorMessage('At least one of your account must be a signatory')
    }
  }, [currentStep, ownAccountPartOfSignatories, signatories])

  const handleCreate = useCallback(async () => {
    if (!selectedAccount || !batchCall) {
      console.error('no selected address')
      return
    }

    multiAddress && addName(name, multiAddress)
    setIsSubmitted(true)

    batchCall
      .signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallBack)
      .catch((error: Error) => {
        setIsSubmitted(false)

        addToast({
          title: error.message,
          type: 'error',
          link: getSubscanExtrinsicLink(batchCall.hash.toHex())
        })
      })
  }, [
    addName,
    addToast,
    batchCall,
    getSubscanExtrinsicLink,
    multiAddress,
    name,
    selectedAccount,
    selectedSigner,
    signCallBack
  ])

  const goNext = useCallback(() => {
    window.scrollTo(0, 0)
    isLastStep ? handleCreate() : setCurrentStep(currentStep + 1)
  }, [currentStep, handleCreate, isLastStep])

  const goBack = useCallback(() => {
    window.scrollTo(0, 0)
    setCurrentStep(currentStep - 1)
  }, [currentStep])

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
        <h1 className="title">{steps[currentStep] || ''}</h1>
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
                onClick={() => {
                  currentStep > index && setCurrentStep(index)
                }}
              >
                <StepLabel>{currentStep === index ? '' : step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={12}
      >
        {currentStep === 0 && (
          <Grid
            item
            xs={12}
            md={6}
          >
            <Alert
              className="infoBox"
              severity="info"
            >
              The members of a multisig are called "signatories". You should select at least 2.
            </Alert>
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
            <Alert
              className="infoBox"
              severity="info"
            >
              The threshold determines the minimum amount of signatory approvals needed for a
              multisig transaction to be executed.
            </Alert>
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
              isBalanceError={!hasSignerEnoughFunds}
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
        {!!errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <div className="buttonWrapper">
          <Button
            variant="secondary"
            disabled={currentStep === 0}
            onClick={goBack}
          >
            Back
          </Button>
          {!isSubmitted && (
            <Button
              variant="primary"
              disabled={!canGoNext}
              onClick={goNext}
            >
              {isLastStep ? 'Create' : 'Next'}
            </Button>
          )}
          {isSubmitted && (
            <ButtonWithIcon
              variant="primary"
              aria-label="send"
              disabled={true}
            >
              <LoaderStyled />
              Creating...
            </ButtonWithIcon>
          )}
        </div>
      </Grid>
    </Grid>
  )
}

const LoaderStyled = styled(CircularProgress)`
  width: 1.5rem !important;
  height: 1.5rem !important;
  margin-right: 4px;

  & > svg {
    margin: 0;
  }
`

export default styled(MultisigCreation)(
  ({ theme }) => `
  padding-bottom: 2rem;

  .infoBox {
    margin-bottom: 1rem;
  }

  .stepItem {
    cursor: pointer;
  }

  .stepsContainer {
    width: 100%;
  }

  .buttonContainer button:first-of-type {
    margin-right: 2rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: ${theme.custom.error};
  }

  .buttonWrapper {
    display: flex;
    margin-top: 1rem;
    align-self: center;
  }
`
)
