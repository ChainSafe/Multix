import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { formatBigIntBalance } from '../utils/formatBnBalance'
import { dotAssetHub, DotAssetHubQueries } from '@polkadot-api/descriptors'
import { TypedApi } from 'polkadot-api'

interface useGetBalanceProps {
  address?: string
  numberAfterComma?: number
  assetId: number
}

export const useGetAssetBalance = ({
  address,
  numberAfterComma = 4,
  assetId
}: useGetBalanceProps) => {
  const { api } = useApi()
  const [balance, setBalance] = useState<bigint | null>(null)
  const [balanceFormatted, setFormattedBalance] = useState<string | null>(null)
  const [assetMetadata, setAssetMetadata] = useState<
    DotAssetHubQueries['Assets']['Metadata']['Value'] | null
  >(null)

  useEffect(() => {
    if (!api || !assetId) return
    ;(api as TypedApi<typeof dotAssetHub>).query.Assets.Metadata.getValue(assetId)
      .then(setAssetMetadata)
      .catch(console.error)
  }, [api, assetId])

  useEffect(() => {
    if (!api || !address || !assetMetadata || !assetId) return

    const unsub = (api as TypedApi<typeof dotAssetHub>).query.Assets.Account.watchValue(
      assetId,
      address,
      'best'
    ).subscribe((res) => {
      const balance = res?.balance || 0n

      setBalance(balance)
      setFormattedBalance(
        formatBigIntBalance(balance, assetMetadata.decimals, {
          numberAfterComma,
          tokenSymbol: assetMetadata.symbol.asText()
        })
      )
    })

    return () => unsub && unsub.unsubscribe()
  }, [address, api, assetId, assetMetadata, numberAfterComma])

  return { balance, balanceFormatted }
}
