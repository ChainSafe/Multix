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
    const [isValid, setIsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log('min', address, min.toString())
        if (!isApiReady || !address) return
        let unsubscribe: () => void;

        api.derive.balances.account(address, (info: DeriveBalancesAccount) => {
            setIsLoading(false)
            setIsValid(info.freeBalance.gt(min))
            // console.log('info.freeBalance', info.freeBalance.toString(), address)
        })
            .then(unsub => { unsubscribe = unsub; })
            .catch(console.error)

        return () => unsubscribe && unsubscribe();

    }, [address, api, isApiReady, min])

    return {
        isLoading,
        isValid
    }

} 