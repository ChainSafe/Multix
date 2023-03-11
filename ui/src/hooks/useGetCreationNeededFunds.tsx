import { useEffect, useState } from "react";
import { useApi } from "../contexts/ApiContext"
import BN from "bn.js"

interface Props {
    threshold?: number
    signatories: string[]
}

export const useGetCreationNeededFunds = ({ threshold, signatories }: Props) => {
    const { isApiReady, api, chainInfo } = useApi()
    const [min, setMin] = useState(new BN(0))

    useEffect(() => {
        if (!isApiReady || signatories.length < 2) return

        if (!chainInfo?.tokenDecimals) return

        if (!threshold) return

        // FIXME duplicate code https://github.com/ChainSafe/Multix/issues/43
        const proxyTx = api.tx.proxy.createPure("Any", 0, 0)
        // What is important here is the number of sig, not who
        const multiSigProxyCall = api.tx.multisig.asMulti(threshold, signatories.slice(0, -1), null, proxyTx, 0)
        // Some funds are needed on the multisig for the pure proxy creation
        // it doesn't matter how much we take an arbitrary value
        const transferTx = api.tx.balances.transfer(signatories[0], 1000000000000)
        const batchCall = api.tx.utility.batchAll([transferTx, multiSigProxyCall])

        const call = api.createType('Call', batchCall)

        // get the fees for this call
        api.tx(call).paymentInfo("5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs")
            .then((info) => {
                const reserved = (api.consts.multisig.depositFactor as unknown as BN)
                    .muln(threshold)
                    .add(api.consts.multisig.depositBase as unknown as BN)

                // console.log('reserved', formatBnBalance(reserved, chainInfo.tokenDecimals, { tokenSymbol: chainInfo?.tokenSymbol, numberAfterComma: 3 }))
                setMin(reserved.add(info.partialFee))
            })
            .catch(console.error)

    }, [api, chainInfo, isApiReady, signatories, threshold])

    return { min }
}