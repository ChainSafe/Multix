import { Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../../contexts/AccountsContext";
import { useApi } from "../../contexts/ApiContext";
import { useMultisig } from "../../contexts/MultisigContext";
import CallInfo from "../CallInfo";
import { AggregatedData } from "../ProposalList";
import SignerSelection from "../SignerSelection";

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

  const onApprove = useCallback(async () => {
    setIsSubmitting(true)
    const threshold = selectedMultisig?.threshold
    const otherSigners = selectedMultisigSignerList.filter((signer) => signer !== selectedAccount?.address)

    if (!threshold) {
      console.error('Threshold is undefined')
      return
    }

    if (!proposalData?.hash || !proposalData?.callData || !proposalData?.call) {
      console.error('proposalData is not fully filled', proposalData)
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

    const weight = (await proposalData.call.paymentInfo(selectedAccount.address)).weight;

    const tx = proposalData.info?.approvals.length === threshold - 1
      ? api.tx.multisig.asMulti(threshold, otherSigners, proposalData.info.when, proposalData.callData, weight)
      : api.tx.multisig.approveAsMulti(threshold, otherSigners, proposalData.info.when, proposalData.hash, weight)


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
  }, [selectedMultisig, selectedMultisigSignerList, proposalData, isApiReady, selectedAccount, api, selectedSigner])

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
        <Grid item xs={12} md={6} className="callInfo">
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