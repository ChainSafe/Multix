import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { DeriveBalancesAccount } from '@polkadot/api-derive/types'
import { formatBnBalance } from '../utils/formatBnBalance'
import { Balance } from '@polkadot/types/interfaces/runtime'

interface useGetBalanceProps {
  address?: string
  numberAfterComma?: number
}
export const useGetBalance = ({ address, numberAfterComma = 4 }: useGetBalanceProps) => {
  const { api, chainInfo } = useApi()
  const [balance, setBalance] = useState<Balance | null>(null)
  const [balanceFormatted, setFormattedBalance] = useState<string | null>(null)

  useEffect(() => {
    if (!api || !address) return

    let unsubscribe: () => void

    api.derive.balances
      .account(address, (info: DeriveBalancesAccount) => {
        setBalance(info.freeBalance)
        setFormattedBalance(
          formatBnBalance(info.freeBalance, chainInfo?.tokenDecimals, {
            numberAfterComma,
            tokenSymbol: chainInfo?.tokenSymbol
          })
        )
      })
      .then((unsub) => {
        unsubscribe = unsub
      })
      .catch(console.error)

    return () => unsubscribe && unsubscribe()
  }, [address, api, chainInfo?.tokenDecimals, chainInfo?.tokenSymbol, numberAfterComma])

  return { balance, balanceFormatted }
}
