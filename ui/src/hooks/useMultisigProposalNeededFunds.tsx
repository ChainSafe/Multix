import { useEffect, useState } from "react";
import { useApi } from "../contexts/ApiContext"
import BN from "bn.js"
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";

interface Props {
    threshold?: number
    signatories?: string[]
    call?: SubmittableExtrinsic<"promise", ISubmittableResult>
}

export const useMultisigProposalNeededFunds = ({ threshold, signatories, call }: Props) => {
    const { isApiReady, api, chainInfo } = useApi()
    const [min, setMin] = useState(new BN(0))

    useEffect(() => {
        if (!isApiReady || !api || !signatories || signatories.length < 2) return

        if (!chainInfo?.tokenDecimals) return

        if (!threshold) return

        if (!call) return

        const genericCall = api.createType('Call', call)

        // get the fees for this call
        api.tx(genericCall).paymentInfo("5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs")
            .then((info) => {
                // add the funds reserved for a multisig call
                const reserved = (api.consts.multisig.depositFactor as unknown as BN)
                    .muln(threshold)
                    .add(api.consts.multisig.depositBase as unknown as BN)

                // console.log('reserved', formatBnBalance(reserved, chainInfo.tokenDecimals, { tokenSymbol: chainInfo?.tokenSymbol, numberAfterComma: 3 }))
                setMin(reserved.add(info.partialFee))
            })
            .catch(console.error)

    }, [api, call, chainInfo, isApiReady, signatories, threshold])

    return { multisigProposalNeededFunds: min }
}