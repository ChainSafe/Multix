import { useCallback, useEffect, useRef, useState } from "react"
import { useApi } from "../contexts/ApiContext"
import { WhenInfo } from "../types"

export interface PendingTx {
  hash: string;
  info: WhenInfo;
}
export const usePendingTx = (multisigAddress?: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const { isApiReady, api } = useApi()
  const [data, setData] = useState<PendingTx[]>([])
  const dataRef = useRef<PendingTx[]>([])

  const refresh = useCallback(() => {
    dataRef.current = []
    setData(dataRef.current)

    if (!isApiReady) return

    if (!multisigAddress) return

    setIsLoading(true)
    const newData: typeof data = []

    api.query.multisig.multisigs.entries(multisigAddress)
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
      })
      .catch(console.error)
  }, [api, isApiReady, multisigAddress])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { isLoading, data: dataRef.current, refresh }
}
