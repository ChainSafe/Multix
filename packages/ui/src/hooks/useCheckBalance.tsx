import BN from 'bn.js'
import { useMemo } from 'react'
import { useGetBalance } from './useGetBalance'

export interface Props {
  min?: BN
  address?: string
}

export const useCheckBalance = ({ min, address }: Props) => {
  const { balance } = useGetBalance({ address })

  const hasEnoughFreeBalance = useMemo(() => {
    if (!address || !min || !balance) return false
    return balance.gt(min)
  }, [address, min, balance])

  return { hasEnoughFreeBalance }
}
