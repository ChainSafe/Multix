import { useCallback, useEffect, useRef, useState } from "react"
import { useApi } from "../contexts/ApiContext"
import { MultiProxy } from "../contexts/MultiProxyContext";
import { WhenInfo } from "../types"
import { useMultisigCallSubscription } from "./useMultisigCallsSubscription";

export interface PendingTx {
  hash: string;
  info: WhenInfo;
}
export const usePendingTx = (multiProxy?: MultiProxy) => {
  const [isLoading, setIsLoading] = useState(false)
  const { isApiReady, api } = useApi()
  const [data, setData] = useState<PendingTx[]>([])
  const dataRef = useRef<PendingTx[]>([])

  const refresh = useCallback(() => {
    dataRef.current = []
    setData(dataRef.current)

    if (!isApiReady) return

    if (!multiProxy) return

    setIsLoading(true)
    const newData: typeof data = []

    // FIXME this only taked one multisig into account
    !!api?.query?.multisig?.multisigs && api.query.multisig.multisigs.entries(multiProxy.multisigs[0].address)
      .then((res) => {
        res.forEach((storage) => {
          const hash = (storage[0].toHuman() as Array<string>)[1]
          const info = storage[1].toJSON() as unknown as WhenInfo

          newData.push({ hash, info })
          // setData((previousData) => [...previousData, { hash, info }])
          // console.log("hash", hash)
          // console.log("info", info)
        })
        setIsLoading(false)
      })
      .finally(() => {
        dataRef.current = newData
        setData(dataRef.current)
        setIsLoading(false)
      })
      .catch(console.error)

    setIsLoading(false)

  }, [api, isApiReady, multiProxy])

  useEffect(() => {
    refresh()
  }, [refresh])

  // re-fetch the on-chain if some new event appeared for any of the 
  // multisig we are watching 
  useMultisigCallSubscription({ onUpdate: refresh })

  return { isLoading, data: dataRef.current, refresh }
}
