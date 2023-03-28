import BN from "bn.js"
import { useEffect, useState } from "react"
import { useApi } from "../contexts/ApiContext"
import { DeriveBalancesAccount } from '@polkadot/api-derive/types';

export interface Props {
    min: BN
    address?: string
}

export const useCheckBalance = ({ min, address }: Props) => {
    const { isApiReady, api } = useApi()
    const [hasEnoughFreeBalance, setHasEnoughFreeBalance] = useState(false)

    useEffect(() => {
        if (!isApiReady || !address) return

        let unsubscribe: () => void;

        api.derive.balances.account(address, (info: DeriveBalancesAccount) => {
            setHasEnoughFreeBalance(info.freeBalance.gte(min))
            // console.log('info.freeBalance', info.freeBalance.toString(), address)
        })
            .then(unsub => { unsubscribe = unsub; })
            .catch(console.error)

        return () => unsubscribe && unsubscribe();

    }, [address, api, isApiReady, min])

    return { hasEnoughFreeBalance }

} 