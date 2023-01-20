import { Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../../contexts/AccountsContext";
import { useApi } from "../../contexts/ApiContext";
import { useMultisig } from "../../contexts/MultisigContext";
import CallInfo from "../CallInfo";
import { AggregatedData } from "../ProposalList";
import SignerSelection from "../SignerSelection";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { GenericCall } from "@polkadot/types";
import { useToasts } from "../../contexts/ToastContext";
import { Weight } from "@polkadot/types/interfaces";

interface Props {
  onClose: () => void
  className?: string
  possibleSigners: string[]
  proposalData: AggregatedData
  onSuccess: () => void
}

interface SubmittingCall {
  call?: GenericCall
  method?: string;
  section?: string;
  weight?: Weight;
}

const ProposalSigning = ({ onClose, className, possibleSigners, proposalData, onSuccess }: Props) => {
  const { api, isApiReady } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedMultisig, selectedMultisigSignerList } = useMultisig()
  const { selectedAccount, selectedSigner } = useAccountList()
  const [addedCallData, setAddedCallData] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const { addToast } = useToasts()
  const threshold = useMemo(() => selectedMultisig?.threshold, [selectedMultisig])
  const canSubmit = useMemo(() => {
    if (!threshold) return false
    return proposalData.info?.approvals.length === threshold - 1
  }, [proposalData, threshold])
  const needAddedCallData = useMemo(() => canSubmit && !proposalData.callData, [canSubmit, proposalData])
  const isProposerSelected = useMemo(() => proposalData?.info?.depositor === selectedAccount?.address, [proposalData, selectedAccount])
  const [callInfo, setCallInfo] = useState<SubmittingCall>({})
  console.log('callInfo', callInfo)

  useEffect(() => {
    if (isProposerSelected) {
      setAddedCallData("")
      setErrorMessage("")
    }
  }, [isProposerSelected])

  useEffect(() => {
    // the proposer doesn't need the call data
    if (isProposerSelected) {
      return
    }

    if (!api) {
      return
    }

    if (!proposalData.callData && !addedCallData) {
      return
    }

    if (!selectedAccount) {
      return
    }

    let call: GenericCall
    try {
      call = api.createType('Call', proposalData.callData || addedCallData)
    } catch {
      setCallInfo({})
      return
    }

    if (call.hash.toHex() !== proposalData.hash) {
      setErrorMessage('The callData provided doesnot match')
      setCallInfo({})
      return
    }

    api.tx(call).paymentInfo(selectedAccount.address).then(
      ({ weight }) => {
        setCallInfo({
          call,
          weight,
          method: call.method,
          section: call.section
        })
      }
    )

  }, [addedCallData, api, isProposerSelected, proposalData, selectedAccount])

  const onSign = useCallback(async (isApproving: boolean) => {
    const otherSigners = selectedMultisigSignerList.filter((signer) => signer !== selectedAccount?.address)

    if (!threshold) {
      const error = 'Threshold is undefined'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!proposalData?.hash) {
      const error = 'Hash is undefined'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!proposalData?.info?.when.height) {
      const error = 'No time point found'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!isApiReady) {
      const error = 'Api is not ready'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!selectedAccount) {
      const error = 'No selected address'
      console.error(error)
      setErrorMessage(error)
      return
    }

    setIsSubmitting(true)
    let tx: SubmittableExtrinsic<"promise">

    // if it's a rejection we can send it right away, no need for weight or calldata
    if (!isApproving) {
      tx = api.tx.multisig.cancelAsMulti(threshold, otherSigners, proposalData.info.when, proposalData.hash)

      // If we can submit the proposal and have the call data
    } else if (canSubmit && callInfo.call && callInfo.weight) {
      tx = api.tx.multisig.asMulti(threshold, otherSigners, proposalData.info.when, proposalData.callData || addedCallData, callInfo.weight)

      // if we can't submit yet (more signatures required), all we need is the call hash
    } else if (!canSubmit && proposalData.hash) {
      tx = api.tx.multisig.approveAsMulti(threshold, otherSigners, proposalData.info.when, proposalData.hash, 0)
    } else {
      console.error('We donnot have the required data to submit the call')
      return
    }

    tx.signAndSend(selectedAccount.address, { signer: selectedSigner }, ({ events = [], status }) => {
      setIsSubmitting(false)
      onClose()
      addToast({ title: `Tx status: ${status.type}`, type: "loading" })
      console.log('Transaction status:', status.type);
      let errorInfo;

      if (status.isInBlock) {
        console.log('Included at block hash', status.asInBlock.toHex());
        console.log('Events:');

        events.forEach(({ event, phase }) => {
          const { data, method, section } = event
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());

          if (api.events.system.ExtrinsicSuccess.is(event)) {
            addToast({ title: "Tx succeeded", type: "success" })
            onSuccess()
          }

          if (api.events.system.ExtrinsicFailed.is(event)) {
            // extract the data for this event
            const [dispatchError] = data;

            // decode the error
            if ((dispatchError as any).isModule) {
              // for module errors, we have the section indexed, lookup
              // (For specific known errors, we can also do a check against the
              // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
              const decoded = api.registry.findMetaError((dispatchError as any).asModule);

              errorInfo = `${decoded.docs} - ${decoded.section}.${decoded.name}`;
            } else {
              // Other, CannotLookup, BadOrigin, no extra info
              errorInfo = dispatchError.toString();
            }
            errorInfo && addToast({ title: errorInfo, type: "error" })
          }
        });
      } else if (status.isFinalized) {
        console.log('Finalized block hash', status.asFinalized.toHex());
      }
    }).catch((error: Error) => {
      setIsSubmitting(false)
      addToast({ title: error.message, type: "error" })
    });
  }, [selectedMultisigSignerList, threshold, proposalData, isApiReady, selectedAccount, canSubmit, callInfo, selectedSigner, api, addedCallData, onClose, addToast, onSuccess])

  const onAddedCallDataChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrorMessage("")
    setAddedCallData(event.target.value)
  }, [])

  return <Dialog
    fullWidth
    maxWidth={"md"}
    open
    onClose={onClose}
    className={className}
  >
    <DialogTitle>Signing proposal</DialogTitle>
    <DialogContent>
      <Grid container>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={6}>
          <SignerSelection possibleSigners={possibleSigners} onChange={() => setErrorMessage("")} />
        </Grid>
        <Grid item xs={0} md={5} />
        {!isProposerSelected && needAddedCallData && (
          <>
            <Grid item xs={0} md={1} />
            <Grid item xs={12} md={6}>
              <TextField
                className="addedCallData"
                label="Call data"
                onChange={onAddedCallDataChange}
                value={addedCallData}
                fullWidth
              />
            </Grid>
            <Grid item xs={0} md={5} />
          </>
        )}

        {!needAddedCallData && (
          <>
            <Grid item xs={0} md={1} />
            <Grid item xs={12} md={11} className="callInfo">
              <CallInfo aggregatedData={proposalData} expanded />
            </Grid>
          </>
        )}
        {!!needAddedCallData && !!callInfo.method && (
          <>
            <Grid item xs={0} md={1} />
            <Grid item xs={12} md={11} className="callInfo">
              <h4>{callInfo.method}.{callInfo.section}</h4>
            </Grid>
          </>
        )}
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={11} className="errorMessage">
          {!!errorMessage &&
            errorMessage
          }
        </Grid>
        <Grid item xs={12} className="buttonContainer">
          {isProposerSelected &&
            <Button
              onClick={() => onSign(false)}
              disabled={isSubmitting}
            >
              Reject
            </Button>
          }
          {!isProposerSelected && <Button
            onClick={() => onSign(true)}
            disabled={isSubmitting || (needAddedCallData && !callInfo.method)}
          >
            Approve
          </Button>}
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
}

export default styled(ProposalSigning)(({ theme }) => `
  .buttonContainer {
    text-align: right;
    margin-top: 1rem;
  }

  .addedCallData {
    margin-top: 1rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: firebrick;
  }

`)