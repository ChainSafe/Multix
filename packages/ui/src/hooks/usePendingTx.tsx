import { useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { MultiProxy } from '../contexts/MultiProxyContext'
import { MultisigStorageInfo } from '../types'
import { useMultisigCallSubscription } from './useMultisigCallsSubscription'

export interface PendingTx {
  from: string
  hash: string
  info: MultisigStorageInfo
}
export const usePendingTx = (multiProxy?: MultiProxy) => {
  const [isLoading, setIsLoading] = useState(true)
  const { isApiReady, api } = useApi()
  const [data, setData] = useState<PendingTx[]>([])
  const multisigs = useMemo(
    () => multiProxy?.multisigs.map(({ address }) => address) || [],
    [multiProxy]
  )

  const refresh = useCallback(() => {
    if (!isApiReady || !api) return

    if (!multiProxy) return

    if (!api?.query?.multisig?.multisigs) return

    setIsLoading(true)

    const newData: typeof data = []

    const callsPromises = multiProxy.multisigs.map((multisig) =>
      api.query.multisig.multisigs.entries(multisig.address)
    )
    Promise.all(callsPromises)
      .then((res1) => {
        res1.forEach((res, index) => {
          res.forEach((storage) => {
            const hash = (storage[0].toHuman() as Array<string>)[1]
            const info = storage[1].toJSON() as unknown as MultisigStorageInfo

            newData.push({
              hash,
              info,
              from: multiProxy.multisigs[index].address,
            })
          })
        })
      })
      .finally(() => {
        setData(newData)
        setIsLoading(false)
      })
      .catch(console.error)
  }, [api, isApiReady, multiProxy])

  useEffect(() => {
    refresh()
  }, [refresh])

  // re-fetch the on-chain if some new event appeared for any of the
  // multisig we are watching
  useMultisigCallSubscription({ onUpdate: refresh, multisigs })

  return { isLoading, data, refresh }
}
