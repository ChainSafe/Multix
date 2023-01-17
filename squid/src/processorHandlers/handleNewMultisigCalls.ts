import { In } from "typeorm";
import { Multisig, MultisigCall } from "../model";
import { Ctx } from "../processor";

export interface MultisigCallInfo extends Omit<MultisigCall, "multisig"> {
    multisigAddress: string
}

export const handleNewMultisigCalls = async (ctx: Ctx, newMultisigCalls: MultisigCallInfo[]) => {
    const multisigAddresses = newMultisigCalls.map(multi => multi.multisigAddress)
    const multisigCalls: MultisigCall[] = []

    const multisigs = await ctx.store
        .findBy(Multisig, { id: In([...multisigAddresses]) })
        .then((q) => new Map(q.map((i) => [i.id, i])))

    for (let { blockHash, id, callIndex, multisigAddress, timestamp } of newMultisigCalls) {
        multisigCalls.push(new MultisigCall({
            id,
            blockHash,
            callIndex,
            multisig: multisigs.get(multisigAddress),
            timestamp
        }))
    }

    await ctx.store.save(multisigCalls)
}