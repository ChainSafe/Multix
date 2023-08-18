import { useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { MultiProxy } from '../contexts/MultiProxyContext'
import { MultisigStorageInfo } from '../types'
import { useMultisigCallSubscription } from './useMultisigCallsSubscription'
import { isEmptyArray } from '../utils'
import { useAccountId } from './useAccountId'

export interface PendingTx {
  from: string
  hash: string
  info: MultisigStorageInfo
}
export const usePendingTx = (multiProxy?: MultiProxy) => {
  const [isLoading, setIsLoading] = useState(true)
  const { api } = useApi()
  const [data, setData] = useState<PendingTx[]>([])
  const multisigs = useMemo(
    () => multiProxy?.multisigs.map(({ address }) => address) || [],
    [multiProxy]
  )

  const refresh = useCallback(() => {
    if (!api) return

    if (isEmptyArray(multisigs)) return

    if (!api?.query?.multisig?.multisigs) return

    setIsLoading(true)

    const newData: typeof data = []

    const callsPromises = multisigs.map((address) => api.query.multisig.multisigs.entries(address))

    Promise.all(callsPromises)
      .then((res1) => {
        res1.forEach((res, index) => {
          res.forEach((storage) => {
            // this is supposed to be the multisig address that we asked the storage for
            const multisigFromChain = (storage[0].toHuman() as Array<string>)[0]
            const hash = (storage[0].toHuman() as Array<string>)[1]
            const info = storage[1].toJSON() as unknown as MultisigStorageInfo

            // Fix for ghost proposals for https://github.com/polkadot-js/apps/issues/9103
            // These 2 should be the same
            if (multisigFromChain !== multisigs[index]) {
              return
            }

            newData.push({
              hash,
              info,
              from: multisigs[index]
            })
          })
        })
      })
      .finally(() => {
        setData(newData)
        setIsLoading(false)
      })
      .catch(console.error)
  }, [api, multisigs])

  useEffect(() => {
    refresh()
  }, [refresh])

  const multisigIds = useAccountId(multisigs)
  // re-fetch the on-chain if some new event appeared for any of the
  // multisig we are watching
  useMultisigCallSubscription({ onUpdate: refresh, multisigIds })

  return { isLoading, data, refresh }
}
