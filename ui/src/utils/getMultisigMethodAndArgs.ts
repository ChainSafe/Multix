export const getMultisigMethodAndArgs = (extrinsic: Record<string, any> | undefined | null): any => {
    if (!extrinsic) return
    const { method, section, args } = extrinsic

    if (method === "asMulti" && section === "multisig") {
        return args.call
    }

    if (!!args?.call) {
        const res = getMultisigMethodAndArgs(args.call)
        return res
    }

    if (!!args?.calls && Array.isArray(args.calls)) {

        let res: any = undefined
        args.calls.forEach((arg: any) => {
            if (!!res) return
            res = getMultisigMethodAndArgs(arg)
            return res
        })

        return res
    }
}
