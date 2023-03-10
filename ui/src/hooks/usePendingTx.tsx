import { useCallback, useEffect, useRef, useState } from "react"
import { useApi } from "../contexts/ApiContext"
import { MultiProxy } from "../contexts/MultiProxyContext";
import { WhenInfo } from "../types"
import { useMultisigCallSubscription } from "./useMultisigCallsSubscription";

export interface PendingTx {
  from: string;
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

    if (!api?.query?.multisig?.multisigs) return

    setIsLoading(true)
    const newData: typeof data = []

    const callsPromises = multiProxy.multisigs.map((multisig) => api.query.multisig.multisigs.entries(multisig.address))
    Promise.all(callsPromises)
      .then((res1) => {
        res1.forEach((res, index) => {
          res.forEach((storage) => {
            const hash = (storage[0].toHuman() as Array<string>)[1]
            const info = storage[1].toJSON() as unknown as WhenInfo

            newData.push({ hash, info, from: multiProxy.multisigs[index].address })
          })
        })
      })
      .finally(() => {
        dataRef.current = newData
        setData(dataRef.current)
        setIsLoading(false)
      })
      .catch(console.error)
  }, [api, isApiReady, multiProxy])

  useEffect(() => {
    refresh()
  }, [refresh])

  // re-fetch the on-chain if some new event appeared for any of the 
  // multisig we are watching 
  useMultisigCallSubscription({ onUpdate: refresh })

  return { isLoading, data: dataRef.current, refresh }
}
