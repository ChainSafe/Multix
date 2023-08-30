import { useCallback, useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'

export const useGetWalletConnectNamespace = () => {
  const { api } = useApi()
  const genesisTruncated = useMemo(() => {
    if (!api) return ''

    return api.genesisHash.toHex().substring(2, 34)
  }, [api])
  // const namespace = useMemo(() => `polkadot:${genesisTruncated}`, [genesisTruncated])
  // FIXME bring back the dynamic one
  const namespace = 'polkadot:afdc188f45c71dacbaa0b62e16a91f72'

  const getAccountsWithNamespace = useCallback(
    (accounts: string[]) => {
      return accounts.map((address) => `${namespace}:${address}`)
    },
    [namespace]
  )

  return { currentNamespace: namespace, getAccountsWithNamespace }
}
