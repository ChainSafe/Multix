import { Box, Button, CircularProgress, Paper } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { PendingTx, usePendingTx } from "../hooks/usePendingTx";
import GestureIcon from '@mui/icons-material/Gesture';
import { useMultisig } from "../contexts/MultisigContext";
import { ApiPromise } from "@polkadot/api";
import { useApi } from "../contexts/ApiContext";
import { getDifference, getIntersection, getMultisigMethodAndArgs } from "../utils";
import { useAccountList } from "../contexts/AccountsContext";
import ProposalSigningModal from "./modals/ProposalSigning";
import CallInfo from "./CallInfo";
import { SubmittableExtrinsic } from "@polkadot/api/types";

export interface AggregatedData {
  call?: SubmittableExtrinsic<"promise", any>;
  callData?: string;
  hash?: string;
  name?: string;
  args?: Record<string, any>
  info?: PendingTx["info"]
}

interface Props {
  className?: string;
}

const getAgregatedDataPromise = (pendingTxData: PendingTx[], api: ApiPromise) => pendingTxData.map(async (pendingTx) => {
  const blockHash = await api.rpc.chain.getBlockHash(pendingTx.info.when.height);
  const signedBlock = await api.rpc.chain.getBlock(blockHash)

  const ext = signedBlock.block.extrinsics[pendingTx.info.when.index]

  // FIXME as any
  const res = getMultisigMethodAndArgs((ext?.toHuman() as any)?.method)
  const call = api.tx[res.section][res.method](...Object.values(res.args))
  const callHash = call.method.hash.toHex()
  const callData = call.toHex().replace("0x2804", "0x")
  console.log('call data', callData)
  console.log('method hash', callHash)

  if (callHash !== pendingTx.hash) {
    console.log('oops we didnot find the right extrinsic', call.toHex(), pendingTx.hash)
    return {}
  }

  return {
    call,
    callData,
    hash: callHash,
    name: `${res.section}.${res.method}`,
    args: res.args,
    info: pendingTx.info
  }
})

const ProposalList = ({ className }: Props) => {
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([])
  const { selectedMultisig, selectedMultisigSignerList } = useMultisig()
  const { data: pendingTxData, isLoading: isLoadingPendingTxs } = usePendingTx(selectedMultisig?.id)
  const { api, isApiReady } = useApi()
  const { addressList } = useAccountList()
  const [isSigningModalOpen, setIsSigningModalOpen] = useState(false)

  const onClose = useCallback(() => {
    setIsSigningModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsSigningModalOpen(true)
  }, [])
  useEffect(() => {
    if (!isApiReady) {
      return
    }

    setAggregatedData([])

    if (!pendingTxData || !pendingTxData.length) {
      return
    }

    const agregatedDataPromise = getAgregatedDataPromise(pendingTxData, api)

    Promise.all(agregatedDataPromise)
      .then((res) => {
        setAggregatedData(res)
      })
      .catch(console.error)

    // const proxyTx = api.tx.proxy.createPure("Any", 0, 0)
    // console.log('proxyTx hex', proxyTx.toHex())
    // console.log('proxyTx hash', proxyTx.method.hash.toHex())
  }, [api, pendingTxData, isApiReady, selectedMultisig])

  return <Box className={className}>
    {isLoadingPendingTxs && (<Box className="loader">
      <CircularProgress />
    </Box>)
    }
    {!!pendingTxData.length && (
      aggregatedData.map((agg, index) => {
        const { callData, info } = agg
        const neededSigners = getDifference(selectedMultisigSignerList, info?.approvals)
        const possibleSigners = getIntersection(addressList, neededSigners)
        return (
          <Paper
            className="callWrapper"
            key={`${index}-${callData}`}
          >
            <GestureIcon className="callIcon" />
            <CallInfo aggregatedData={agg} />
            {possibleSigners.length > 0 && (
              <div className="buttonWrapper">
                <Button onClick={onOpenModal}>Sign</Button>
              </div>
            )}
            {isSigningModalOpen && (
              <ProposalSigningModal
                possibleSigners={possibleSigners}
                onClose={onClose}
                proposalData={agg}
              />
            )}
          </Paper>
        )
      })
    )}
  </Box>
}

export default styled(ProposalList)(({ theme }) => `
  .loader {
    display: flex;
    justify-content: center;
  }

  .callWrapper {
    display: flex;
    flex-direction: row;
    margin-left: .5rem;
  }

  .callIcon {
    font-size: 7rem;
    background-color: #ebebeb;
    margin: .5rem;
    padding: 1rem;
  }

  .callName {
    margin-top: 0.5rem;
    margin-left: .5rem;
  }

  .buttonWrapper {
    flex: 1;
    align-self: flex-end;
    text-align: end;
    margin-right: .5rem;
    margin-bottom: .5rem;
  }
`)