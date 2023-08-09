import { useCallback, useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'

export const useGetWCNamespace = () => {
  const { isApiReady, api } = useApi()
  const genesisTruncated = useMemo(() => {
    if (!isApiReady || !api) return ''

    return api.genesisHash.toHex().substring(2, 34)
  }, [api, isApiReady])
  const namespace = useMemo(() => `polkadot:${genesisTruncated}`, [genesisTruncated])

  const getAccountsWithNamespace = useCallback(
    (accounts: string[]) => {
      return accounts.map((address) => `${namespace}:${address}`)
    },
    [namespace]
  )

  return { currentNamespace: namespace, getAccountsWithNamespace }
}
