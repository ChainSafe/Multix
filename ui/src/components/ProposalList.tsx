import { Box, Button, CircularProgress, Paper } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { PendingTx, usePendingTx } from "../hooks/usePendingTx";
import GestureIcon from '@mui/icons-material/Gesture';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { useMultisig } from "../contexts/MultisigContext";
import { ApiPromise } from "@polkadot/api";
import { useApi } from "../contexts/ApiContext";
import { getDifference, getIntersection } from "../utils";
import { useAccountList } from "../contexts/AccountsContext";
import ProposalSigningModal from "./modals/ProposalSigning";
import CallInfo from "./CallInfo";
import { ISanitizedCall, parseGenericCall } from "../utils/decode";
import { GenericCall } from '@polkadot/types';
import { AnyJson } from '@polkadot/types/types';
import FlareIcon from '@mui/icons-material/Flare';

export interface AggregatedData {
  callData?: `0x${string}`;
  hash?: string;
  name?: string;
  args?: AnyJson;
  info?: PendingTx["info"]
}

interface Props {
  className?: string;
}

const getMultisigInfo = (c: ISanitizedCall): Partial<AggregatedData>[] => {
  const result: Partial<AggregatedData>[] = []

  const getCallResult = (c: ISanitizedCall) => {
    if (typeof c.method !== "string" && c.method.pallet === "multisig") {
      if (c.method.method === "asMulti" && typeof c.args.call?.method !== "string") {
        result.push({
          name: `${c.args.call?.method?.pallet}.${c.args.call?.method.method}`,
          hash: c.args.call?.hash,
          callData: c.args.callData as AggregatedData['callData']
        })
      } else {
        result.push({
          name: "Unkown call",
          hash: (c.args?.call_hash as Uint8Array).toString() || undefined,
          callData: undefined
        })
      }
      // this is not a multisig call
      // try to dig deeper
    } else {
      if (!!c.args.calls) {
        for (const call of c.args.calls) {
          getCallResult(call)
        }
      } else if (!!c.args.call) {
        getCallResult(c.args.call)
      }
    }
  }

  getCallResult(c)
  return result
}

const getAgregatedDataPromise = (pendingTxData: PendingTx[], api: ApiPromise) => pendingTxData.map(async (pendingTx) => {
  const blockHash = await api.rpc.chain.getBlockHash(pendingTx.info.when.height);
  const signedBlock = await api.rpc.chain.getBlock(blockHash)

  const ext = signedBlock.block.extrinsics[pendingTx.info.when.index]

  const decoded = parseGenericCall(ext.method as GenericCall, ext.registry)
  // console.log('pendingTxData', pendingTxData)
  // console.log('decoded', decoded)
  const multisigInfos = getMultisigInfo(decoded) || {}

  // console.log("multisigInfos", multisigInfos)

  const info = multisigInfos.find(({ name, hash, callData }) => {
    if (!!hash && hash === pendingTx.hash) {
      return { name, hash, callData }
    }

    return false
  })

  if (!info) {
    console.log('oops we didnot find the right extrinsic', multisigInfos, pendingTx.hash)
    return
  }

  const { name, hash, callData } = info

  const call = !!callData && !!hash && ext.registry.createType('Call', callData)

  return {
    callData,
    hash: hash || pendingTx.hash,
    name,
    args: call && call.toHuman().args,
    info: pendingTx.info
  }
})

const ProposalList = ({ className }: Props) => {
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([])
  const { selectedMultisig, selectedMultisigSignerList } = useMultisig()
  const { data: pendingTxData, isLoading: isLoadingPendingTxs, refresh } = usePendingTx(selectedMultisig?.id)
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
        const filtered = res.filter((agg) => agg !== undefined) as AggregatedData[]
        setAggregatedData(filtered)
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
    {!pendingTxData.length && !isLoadingPendingTxs && (
      <Paper className="noCall" >
        <FlareIcon className="noCallIcon" />
        <div className="noCallText">You're all set!</div></Paper>)}
    {!!pendingTxData.length && (
      aggregatedData.map((agg, index) => {
        const { callData, info } = agg
        const isProposer = !!info?.depositor && selectedMultisigSignerList.includes(info.depositor)
        const neededSigners = getDifference(selectedMultisigSignerList, info?.approvals)
        const possibleSigners = getIntersection(addressList, neededSigners)

        if (isProposer) {
          possibleSigners.push(info.depositor)
        }

        return (
          <Paper
            className="callWrapper"
            key={`${index}-${callData}`}
          >
            {!agg.callData
              ? <QuestionMarkIcon className="callIcon unknownCall" />
              : <GestureIcon className="callIcon" />
            }

            <CallInfo
              aggregatedData={agg}
              children={
                (isProposer || possibleSigners.length > 0) && (
                  <div className="buttonWrapper">
                    <Button onClick={onOpenModal}>Review</Button>
                  </div>
                )
              }
            />
            {isSigningModalOpen && (
              <ProposalSigningModal
                possibleSigners={possibleSigners}
                onClose={onClose}
                proposalData={agg}
                onSuccess={refresh}
              />
            )}
          </Paper>
        )
      })
    )}
  </Box>
}

export default styled(ProposalList)(({ theme }) => `
  .noCallIcon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .noCall {
    background-color: ${theme.custom.background.backgroundColorLightGray};
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 2rem;
  }

  .loader {
    display: flex;
    justify-content: center;
  }

  .callWrapper {
    display: flex;
    flex-direction: row;
    margin-left: .5rem;
    margin-bottom: 1rem;
  }

  .callIcon {
    font-size: 7rem;
    background-color: ${theme.custom.background.backgroundColorLightGray};
    margin: .5rem;
    padding: 1rem;
    height: auto;

    &.unknownCall {
      height: 5rem;
    }
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