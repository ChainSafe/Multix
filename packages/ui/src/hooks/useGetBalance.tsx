import { useEffect, useMemo, useState } from 'react'
import { formatBigIntBalance } from '../utils/formatBnBalance'
import { bigIntMax } from '../utils/bnUtils'
import { useAnyApi } from './useAnyApi'

interface useGetBalanceProps {
  address?: string
  numberAfterComma?: number
  withPplApi?: boolean
}

export const useGetBalance = ({
  address,
  numberAfterComma = 2,
  withPplApi = false
}: useGetBalanceProps) => {
  const { api, chainInfo, compatibilityToken } = useAnyApi({ withPplApi })
  const [balance, setBalance] = useState<bigint | null>(null)
  const [balanceFormatted, setFormattedBalance] = useState<string | null>(null)
  const existentialDeposit = useMemo(() => {
    if (!api || !compatibilityToken) return

    return api.constants.Balances.ExistentialDeposit(compatibilityToken)
  }, [api, compatibilityToken])

  useEffect(() => {
    if (!api || !address || !existentialDeposit) return

    const unsub = api.query.System.Account.watchValue(address, 'best').subscribe(
      ({ data: { free, frozen, reserved } }) => {
        const res = free - bigIntMax(frozen - reserved, existentialDeposit)
        const transferable = res < 0n ? 0n : res
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
  }, [address, api, chainInfo, existentialDeposit, numberAfterComma])

  return { balance, balanceFormatted }
}
