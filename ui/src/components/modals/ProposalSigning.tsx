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
  const threshold = useMemo(() => selectedMultisig?.threshold, [selectedMultisig])
  const canSubmit = useMemo(() => {
    if (!threshold) return false
    return proposalData.info?.approvals.length === threshold - 1
  }, [proposalData, threshold])
  const needAddedCallData = useMemo(() => canSubmit && !proposalData.callData, [canSubmit, proposalData])
  const onApprove = useCallback(async () => {
    setIsSubmitting(true)
    const otherSigners = selectedMultisigSignerList.filter((signer) => signer !== selectedAccount?.address)

    if (!threshold) {
      console.error('Threshold is undefined')
      return
    }

    if (!proposalData?.hash) {
      console.error('hash is undefined')
      return
    }

    if (!isApiReady) {
      console.error('api is not ready')
      return
    }

    if (!selectedAccount) {
      console.error('no selected address')
      return
    }

    if (!proposalData?.info?.when.height) {
      console.error('no time point')
      return
    }

    let tx: SubmittableExtrinsic<"promise">

    // If we can submit the proposal and have the call data
    if (canSubmit && (proposalData.callData || !!addedCallData)) {
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
  }, [selectedMultisigSignerList, threshold, proposalData, isApiReady, selectedAccount, canSubmit, addedCallData, selectedSigner, api])

  const onReject = useCallback(() => {
    setIsSubmitting(true)
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
          <SignerSelection possibleSigners={possibleSigners} />
        </Grid>
        <Grid item xs={0} md={5} />
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={11} className="callInfo">
          <CallInfo aggregatedData={proposalData} expanded />
        </Grid>
        <Grid item xs={12} className="buttonContainer">
          <Button
            onClick={onReject}
            disabled={isSubmitting}
          >
            Reject
          </Button>
          <Button
            onClick={onApprove}
            disabled={isSubmitting}
          >
            Approve
          </Button>
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