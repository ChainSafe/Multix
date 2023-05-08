import BN from "bn.js"
import { useEffect, useState } from "react"
import { useApi } from "../contexts/ApiContext"
import { useGetBalance } from "./useGetBalance";

export interface Props {
    min?: BN
    address?: string
}

export const useCheckBalance = ({ min, address }: Props) => {
  const { isApiReady, api } = useApi()
  const { balance }  = useGetBalance({ address })
  const [hasEnoughFreeBalance, setHasEnoughFreeBalance] = useState(false)

  useEffect(() => {
    if (!isApiReady || !api || !address || !min || !balance) return
    setHasEnoughFreeBalance(balance.gte(min))
  }, [balance, address, api, isApiReady, min])

  return { hasEnoughFreeBalance }
}