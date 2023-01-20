import { Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../../contexts/AccountsContext";
import { useApi } from "../../contexts/ApiContext";
import { useMultisig } from "../../contexts/MultisigContext";
import CallInfo from "../CallInfo";
import { AggregatedData } from "../ProposalList";
import SignerSelection from "../SignerSelection";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { useToasts } from "../../contexts/ToastContext";

interface Props {
  onClose: () => void
  className?: string
  possibleSigners: string[]
  proposalData: AggregatedData
}

const ProposalSigning = ({ onClose, className, possibleSigners, proposalData }: Props) => {
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

  const onSign = useCallback(async (isApproving: boolean) => {
    const otherSigners = selectedMultisigSignerList.filter((signer) => signer !== selectedAccount?.address)

    if (!threshold) {
      const error = 'Threshold is undefined'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!proposalData?.hash) {
      const error = 'hash is undefined'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!proposalData?.info?.when.height) {
      const error = 'no time point'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!isApiReady) {
      const error = 'api is not ready'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!selectedAccount) {
      const error = 'no selected address'
      console.error(error)
      setErrorMessage(error)
      return
    }

    setIsSubmitting(true)
    let tx: SubmittableExtrinsic<"promise">

    // if it's a rejection we can do it right away
    if (!isApproving) {
      tx = api.tx.multisig.cancelAsMulti(threshold, otherSigners, proposalData.info.when, proposalData.hash)

      // If we can submit the proposal and have the call data
    } else if (isApproving && canSubmit && (proposalData.callData || !!addedCallData)) {
      const call = api.createType('Call', proposalData.callData || addedCallData)
      const weight = await (await api.tx(call).paymentInfo(selectedAccount.address)).weight;
      tx = api.tx.multisig.asMulti(threshold, otherSigners, proposalData.info.when, proposalData.callData || addedCallData, weight)

      // if we can't submit, all we need is the call hash
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

          if (!!event && api.events.system.ExtrinsicFailed.is(event)) {
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

      } else if (status.isFinalized && !errorInfo) {
        const success = events.find(
          ({ event }) => event.method === "ExtrinsicSuccess"
        );
        const failed = events.find(
          ({ event }) => event.method === "ExtrinsicFailed"
        );

        console.log('Finalized block hash', status.asFinalized.toHex());

        if (success) {
          addToast({ title: "Tx finalized", type: "success" })
        } else if (failed) {
          addToast({ title: `Tx failed ${failed.toHuman(true)}`, type: "error" })
        } else {
          addToast({ title: "Unknown extrinsic result", type: "error" })
        }
      }
    }).catch((error: Error) => {
      setIsSubmitting(false)
      addToast({ title: error.message, type: "error" })
    });
  }, [selectedMultisigSignerList, threshold, proposalData, isApiReady, selectedAccount, canSubmit, addedCallData, selectedSigner, api, onClose, addToast])

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
          <SignerSelection possibleSigners={possibleSigners} />
        </Grid>
        <Grid item xs={0} md={5} />
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={11} className="callInfo">
          <CallInfo aggregatedData={proposalData} expanded />
        </Grid>
        {!!errorMessage &&
          <Grid item xs={12} md={11} className="errorMessage">
            {errorMessage}
          </Grid>}
        <Grid item xs={12} className="buttonContainer">
          {isProposerSelected &&
            <Button
              onClick={() => onSign(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          }
          {!isProposerSelected && <Button
            onClick={() => onSign(true)}
            disabled={isSubmitting}
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
`)