import { useEffect, useState } from 'react'
import { isContextIn, useApi } from '../contexts/ApiContext'
import { formatBigIntBalance } from '../utils/formatBnBalance'
import { DotAssetHubQueries } from '@polkadot-api/descriptors'
import { assetHubKeys } from '../types'

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
  const ctx = useApi()
  const [balance, setBalance] = useState<bigint | null>(null)
  const [balanceFormatted, setFormattedBalance] = useState<string | null>(null)
  const [assetMetadata, setAssetMetadata] = useState<
    DotAssetHubQueries['Assets']['Metadata']['Value'] | null
  >(null)

  useEffect(() => {
    if (!ctx?.api || !isContextIn(ctx, assetHubKeys) || !assetId) return
    ctx.api.query.Assets.Metadata.getValue(assetId).then(setAssetMetadata).catch(console.error)
  }, [ctx, assetId])

  useEffect(() => {
    if (!ctx?.api || !isContextIn(ctx, assetHubKeys) || !address || !assetMetadata || !assetId)
      return

    const unsub = ctx.api.query.Assets.Account.watchValue(assetId, address, 'best').subscribe(
      (res) => {
        const balance = res?.balance || 0n

        setBalance(balance)
        setFormattedBalance(
          formatBigIntBalance(balance, assetMetadata.decimals, {
            numberAfterComma,
            tokenSymbol: assetMetadata.symbol.asText()
          })
        )
      }
    )

    return () => unsub && unsub.unsubscribe()
  }, [address, assetId, assetMetadata, ctx, numberAfterComma])

  return { balance, balanceFormatted }
}
