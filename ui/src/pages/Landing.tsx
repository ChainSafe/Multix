import { useCallback, useEffect, useState } from "react"
import styled from "styled-components";
import { Button } from "@mui/material";
import NewTxModal from "../components/modals/NewTx";
import { useApi } from "../contexts/ApiContext";
import { useMultisig } from "../contexts/MultisigContext";
import { usePendingTx } from "../hooks/usePendingTx";

interface Props {
  className?: string
}

const getMultisigMethodAndArgs = (extrinsic: Record<string, any> | undefined | null): any => {
  if (!extrinsic) return
  const { method, section, args } = extrinsic

  if (method === "asMulti" && section === "multisig") {
    return args.call
  }

  if (!!args?.call) {
    const res = getMultisigMethodAndArgs(args.call)
    return res
  }

  if (!!args?.calls && Array.isArray(args.calls)) {

    let res: any = undefined
    args.calls.forEach((arg: any) => {
      if (!!res) return
      res = getMultisigMethodAndArgs(arg)
      return res
    })

    return res
  }
}

interface AggregatedData {
  callData?: string;
  info?: {
    name: string;
    args: Record<string, any>
  }
}

const Landing = ({ className }: Props) => {
  const { api, isApiReady } = useApi()
  const [isNewTxModalOpen, setIsNewTxModalOpen] = useState(false)
  const { isLoading, multisigList, selectedMultisig } = useMultisig()
  const { data } = usePendingTx(selectedMultisig?.id)
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([])

  useEffect(() => {
    if (!isApiReady) {
      return
    }

    setAggregatedData([])

    if (!data || !data.length) {
      return
    }

    const agregatedDataPromise = data.map(async (pendingTx) => {
      const blockHash = await api.rpc.chain.getBlockHash(pendingTx.info.when.height);
      const signedBlock = await api.rpc.chain.getBlock(blockHash)

      const ext = signedBlock.block.extrinsics[pendingTx.info.when.index]
      // @ts-ignore
      const res = getMultisigMethodAndArgs(ext?.toHuman()?.method)
      const call = api.tx[res.section][res.method](...Object.values(res.args))
      console.log('call hash', call.toHex())
      console.log('call method', call.method.hash.toHex())

      if (call.method.hash.toHex() !== pendingTx.hash) {
        console.log('oops', call.toHex(), pendingTx.hash)
        return {}
      }

      return {
        callData: call.toHex(),
        info: {
          name: `${res.section}.${res.method}`,
          args: res.args
        }
      }
    })

    Promise.all(agregatedDataPromise)
      .then((res) => {
        setAggregatedData(res)
      })
      .catch(console.error)

    // const proxyTx = api.tx.proxy.createPure("Any", 0, 0)
    // console.log('proxyTx hex', proxyTx.toHex())
    // console.log('proxyTx hash', proxyTx.method.hash.toHex())
  }, [api, data, isApiReady, selectedMultisig])

  const onClose = useCallback(() => {
    setIsNewTxModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsNewTxModalOpen(true)
  }, [])


  return (
    <div className={className}>
      <>
        {isLoading && (
          <div>
            Loading...
          </div>
        )}
        {!isLoading && multisigList.length === 0 && (
          <div>
            No multisig found for your accounts
          </div>
        )}
        {selectedMultisig &&
          <div key={selectedMultisig.id}>
            {selectedMultisig.threshold}/{selectedMultisig.signers.length} {selectedMultisig.proxy?.id}
            <ul>
              {selectedMultisig.signers.map(({ signer }) =>
                <li key={signer.id}>{signer.id}</li>
              )}
            </ul>
          </div>
        }
        {!!data.length && !!aggregatedData.length && JSON.stringify(aggregatedData)}

        <Button onClick={onOpenModal}>New Tx</Button>
        {isNewTxModalOpen && <NewTxModal onClose={onClose} />}
      </>
    </div>
  )
}

export default styled(Landing)(({ theme }) => `
  padding: 1rem;
`)