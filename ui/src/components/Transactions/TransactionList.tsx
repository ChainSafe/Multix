import { Box, CircularProgress, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PendingTx, usePendingTx } from "../../hooks/usePendingTx";
import { useMultiProxy } from "../../contexts/MultiProxyContext";
import { ApiPromise } from "@polkadot/api";
import { useApi } from "../../contexts/ApiContext";
import { getDifference, getIntersection } from "../../utils";
import { useAccounts } from "../../contexts/AccountsContext";
import { ISanitizedCall, parseGenericCall } from "../../utils/decode";
import { GenericCall } from '@polkadot/types';
import { AnyJson } from '@polkadot/types/types';
import FlareIcon from '@mui/icons-material/Flare';
import Transaction from "./Transaction";

export interface AggregatedData {
  callData?: `0x${string}`;
  hash?: string;
  name?: string;
  args?: AnyJson;
  info?: PendingTx["info"]
  from: string;
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
          name: "Unknown call",
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
    info: pendingTx.info,
    from: pendingTx.from
  } as AggregatedData
})

const TransactionList = ({ className }: Props) => {
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([])
  const { selectedMultiProxy, getMultisigByAddress } = useMultiProxy()
  const { data: pendingTxData, isLoading: isLoadingPendingTxs, refresh } = usePendingTx(selectedMultiProxy)
  const { api, isApiReady } = useApi()
  const { addressList } = useAccounts()

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
  }, [api, pendingTxData, isApiReady, selectedMultiProxy])

  return <Box className={className}>
    {isLoadingPendingTxs && (<Box className="loader">
      <CircularProgress />
    </Box>)
    }
    {!pendingTxData.length && !isLoadingPendingTxs && (
      <Paper className="noCall" >
        <FlareIcon className="noCallIcon" />
        <div className="noCallText">You're all set!</div>
      </Paper>
    )}
    {!!pendingTxData.length && (
      aggregatedData.map((agg, index) => {
        const { callData, info, from } = agg
        const multisig = getMultisigByAddress(from)

        if (!info || !multisig?.threshold) return null

        console.log('info?.approvals.length >= multisig.threshold', info?.approvals.length >= multisig.threshold)
        const multisigSignatories = multisig?.signatories || []
        // if the threshold is met, but the transaction is still not executed
        // it means we need one signtory to submit with asMulti
        const neededSigners = info?.approvals.length >= multisig.threshold
          ? multisigSignatories
          : getDifference(multisigSignatories, info?.approvals)
        const possibleSigners = getIntersection(neededSigners, addressList)
        const isProposer = !!info?.depositor && addressList.includes(info.depositor)

        // if we have the proposer in the extension it can always reject the proposal
        if (isProposer) {
          possibleSigners.push(info.depositor)
        }

        return <Transaction
          key={`${index}-${callData}`}
          aggregatedData={agg}
          isProposer={isProposer}
          onSuccess={refresh}
          possibleSigners={possibleSigners}
        />
      })
    )}
  </Box>
}

export default styled(TransactionList)(({ theme }) => `
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
`)