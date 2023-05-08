
import { useEffect, useState } from "react"
import { useApi } from "../contexts/ApiContext"
import { DeriveBalancesAccount } from '@polkadot/api-derive/types';
import { formatBnBalance } from "../utils/formatBnBalance";
import { Balance } from "@polkadot/types/interfaces/runtime";

interface useGetBalanceProps {
    address?: string
}
export const useGetBalance = ({ address }: useGetBalanceProps) => {
  const { isApiReady, api, chainInfo } = useApi()
  const [balance, setBalance] = useState<Balance | null>(null)
  const [balanceFormatted, setFormattedBalance] = useState<string | null>(null)

  useEffect(() => {
    if (!isApiReady || !api || !address) return

    let unsubscribe: () => void;

    api.derive.balances.account(address, (info: DeriveBalancesAccount) => {
      setBalance(info.freeBalance)
      setFormattedBalance(
        formatBnBalance(info.freeBalance, chainInfo?.tokenDecimals,
          { numberAfterComma: 4, tokenSymbol: chainInfo?.tokenSymbol }))
    })
      .then(unsub => { unsubscribe = unsub; })
      .catch(console.error)

    return () => unsubscribe && unsubscribe();

  }, [address, api, chainInfo?.tokenDecimals, chainInfo?.tokenSymbol, isApiReady])


  function hasEnoughFreeBalance(min: Balance) {
    return balance?.gte(min)
  }


  return { balance, balanceFormatted, hasEnoughFreeBalance }
}