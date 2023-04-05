import { useEffect, useState } from "react";
import { useApi } from "../contexts/ApiContext"
import BN from "bn.js"

export const useProxyAdditionNeededFunds = () => {
    const { isApiReady, api, chainInfo } = useApi()
    const [min, setMin] = useState(new BN(0))

    useEffect(() => {
        if (!isApiReady || !api) return

        if (!chainInfo?.tokenDecimals) return

        // the proxy is already created (with proxyDepositBase already deposited by the first account
        // that added the first proxy) we are only adding one account as proxy
        const reserved = (api.consts.proxy.proxyDepositFactor as unknown as BN)
        setMin(reserved)
    }, [api, chainInfo, isApiReady])

    return { proxyAdditionNeededFunds: min }
}