import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { formatBigIntBalance } from '../utils/formatBnBalance'

interface useGetBalanceProps {
  address?: string
  numberAfterComma?: number
}

export const useGetBalance = ({ address, numberAfterComma = 4 }: useGetBalanceProps) => {
  const { api, chainInfo } = useApi()
  const [balance, setBalance] = useState<bigint | null>(null)
  const [balanceFormatted, setFormattedBalance] = useState<string | null>(null)

  useEffect(() => {
    if (!api || !address) return

    const unsub = api.query.System.Account.watchValue(address, 'best').subscribe(
      ({ data: { free, frozen } }) => {
        const transferable = free - frozen

        setBalance(transferable)
        setFormattedBalance(
          formatBigIntBalance(transferable, chainInfo?.tokenDecimals, {
            numberAfterComma,
            tokenSymbol: chainInfo?.tokenSymbol
          })
        )
      }
    )

    return () => unsub && unsub.unsubscribe()
  }, [address, api, chainInfo?.tokenDecimals, chainInfo?.tokenSymbol, numberAfterComma])

  return { balance, balanceFormatted }
}
