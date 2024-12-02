import { useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../contexts/ApiContext'

export const useGetWalletConnectNamespace = () => {
  const { client } = useApi()
  const [genesisHash, setGenesisHash] = useState('')

  useEffect(() => {
    if (!client) return

    client
      .getChainSpecData()
      .then((data) => setGenesisHash(data.genesisHash))
      .catch(console.error)
  }, [client])

  const genesisTruncated = useMemo(() => genesisHash.substring(2, 34), [genesisHash])

  const namespace = useMemo(() => `polkadot:${genesisTruncated}`, [genesisTruncated])

  const getAccountsWithNamespace = useCallback(
    (accounts: string[]) => {
      return accounts.map((address) => `${namespace}:${address}`)
    },
    [namespace]
  )

  return { currentNamespace: namespace, getAccountsWithNamespace }
}
