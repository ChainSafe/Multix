import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { formatBnBalance } from '../utils/formatBnBalance'
import BN from 'bn.js'
import { FrameSystemAccountInfo } from '@polkadot/types/lookup'

interface useGetBalanceProps {
  address?: string
  numberAfterComma?: number
}

export const useGetBalance = ({ address, numberAfterComma = 4 }: useGetBalanceProps) => {
  const { api, chainInfo } = useApi()
  const [balance, setBalance] = useState<BN | null>(null)
  const [balanceFormatted, setFormattedBalance] = useState<string | null>(null)

  useEffect(() => {
    if (!api || !address) return

    let unsubscribe: () => void

    api.query.system
      .account(address, ({ data: { free, frozen } }: FrameSystemAccountInfo) => {
        const transferable = free.sub(frozen)

        setBalance(transferable)
        setFormattedBalance(
          formatBnBalance(transferable, chainInfo?.tokenDecimals, {
            numberAfterComma,
            tokenSymbol: chainInfo?.tokenSymbol
          })
        )
      })
      .then((unsub) => {
        unsubscribe = unsub as unknown as () => void
      })
      .catch(console.error)

    return () => unsubscribe && unsubscribe()
  }, [address, api, chainInfo?.tokenDecimals, chainInfo?.tokenSymbol, numberAfterComma])

  return { balance, balanceFormatted }
}
