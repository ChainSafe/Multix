import { Box } from "@mui/material";
import styled from "styled-components";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { useCallback, useEffect, useState } from "react";
import { useApi } from "../../contexts/ApiContext";

interface Props {
    className?: string
    from: string
    onSetExtrinsic: (ext: SubmittableExtrinsic<"promise", ISubmittableResult>) => void
    onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const argIsOptional = (arg: any) => arg.type.toString().startsWith('Option<')

const ManualExtrinsic = ({ className, onSetExtrinsic, onSetErrorMessage, from }: Props) => {
    const { api, isApiReady, chainInfo } = useApi()
    const [palletRPCs, setPalletRPCs] = useState<any[]>([])
    const [callables, setCallables] = useState<any[]>([])
    const [paramFields, setParamFields] = useState<any[]>([])

    console.log('palletRPCs', palletRPCs)
    console.log('callables', callables)
    const initFormState = {
        palletRpc: '',
        callable: '',
        inputParams: [],
    }

    const [formState, setFormState] = useState(initFormState)
    const { palletRpc, callable, inputParams } = formState

    const updatePalletRPCs = useCallback(() => {
        if (!api) {
            return
        }
        const apiType = api.tx
        const palletRPCs = Object.keys(apiType)
            .sort()
            .filter(pr => Object.keys(apiType[pr]).length > 0)
            .map(pr => ({ key: pr, value: pr, text: pr }))
        setPalletRPCs(palletRPCs)
    }, [api])

    const updateCallables = useCallback(() => {
        if (!api || palletRpc === '') {
            return
        }

        const callables = Object.keys(api.tx)
            .sort()
            .map(c => ({ key: c, value: c, text: c }))
        setCallables(callables)
    }, [api, palletRpc])

    const updateParamFields = useCallback(() => {
        if (!api || palletRpc === '' || callable === '') {
            setParamFields([])
            return
        }

        let paramFields: any[] = []

        // if (interxType === 'QUERY') {
        //     const metaType = api.query[palletRpc][callable].meta.type
        //     if (metaType.isPlain) {
        //         // Do nothing as `paramFields` is already set to []
        //     } else if (metaType.isMap) {
        //         paramFields = [
        //             {
        //                 name: metaType.asMap.key.toString(),
        //                 type: metaType.asMap.key.toString(),
        //                 optional: false,
        //             },
        //         ]
        //     } else if (metaType.isDoubleMap) {
        //         paramFields = [
        //             {
        //                 name: metaType.asDoubleMap.key1.toString(),
        //                 type: metaType.asDoubleMap.key1.toString(),
        //                 optional: false,
        //             },
        //             {
        //                 name: metaType.asDoubleMap.key2.toString(),
        //                 type: metaType.asDoubleMap.key2.toString(),
        //                 optional: false,
        //             },
        //         ]
        //     }
        // } else if (interxType === 'EXTRINSIC') {
        const metaArgs = api.tx[palletRpc][callable].meta.args

        if (metaArgs && metaArgs.length > 0) {
            paramFields = metaArgs.map(arg => ({
                name: arg.name.toString(),
                type: arg.type.toString(),
                optional: argIsOptional(arg),
            }))
        }
        // } else if (interxType === 'RPC') {
        //     let metaParam = []

        //     if (jsonrpc[palletRpc] && jsonrpc[palletRpc][callable]) {
        //         metaParam = jsonrpc[palletRpc][callable].params
        //     }

        //     if (metaParam.length > 0) {
        //         paramFields = metaParam.map(arg => ({
        //             name: arg.name,
        //             type: arg.type,
        //             optional: arg.isOptional || false,
        //         }))
        //     }
        // } else if (interxType === 'CONSTANT') {
        //     paramFields = []
        // }

        setParamFields(paramFields)
    }, [api, callable, palletRpc])

    useEffect(updatePalletRPCs, [updatePalletRPCs])
    useEffect(updateCallables, [updateCallables])
    useEffect(updateParamFields, [updateParamFields])

    // const onPalletCallableParamChange = useCallback((_, data) => {
    //     setFormState(formState => {
    //         let res
    //         const { state, value } = data
    //         if (typeof state === 'object') {
    //             // Input parameter updated
    //             const {
    //                 ind,
    //                 paramField: { type },
    //             } = state
    //             const inputParams = [...formState.inputParams]
    //             inputParams[ind] = { type, value }
    //             res = { ...formState, inputParams }
    //         } else if (state === 'palletRpc') {
    //             res = { ...formState, [state]: value, callable: '', inputParams: [] }
    //         } else if (state === 'callable') {
    //             res = { ...formState, [state]: value, inputParams: [] }
    //         }
    //         return res
    //     })
    // }, [])

    useEffect(() => {
        if (!isApiReady || !api) {
            return
        }

        // onSetExtrinsic(api.tx.balances.transfer(toAddress, amount.toString()))
    }, [api, chainInfo, isApiReady, onSetExtrinsic])


    return (
        <Box className={className}>

        </Box>
    )
}


export default styled(ManualExtrinsic)(({ theme }) => `

`)