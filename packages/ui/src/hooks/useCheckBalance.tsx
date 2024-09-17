import { useMemo } from 'react'
import { useGetBalance } from './useGetBalance'

export interface Props {
  min?: bigint
  address?: string
}

export const useCheckBalance = ({ min, address }: Props) => {
  const { balance } = useGetBalance({ address })

  const hasEnoughFreeBalance = useMemo(() => {
    if (!address || !min || !balance) return false
    return balance > min
  }, [address, min, balance])

  return { hasEnoughFreeBalance }
}
