import { Account, AccountMultisig } from "../model"
import { Ctx } from "../processor"
import { getOrCreateAccounts, getAccountMultisigId } from "../util"

export interface NewMultisigsInfo extends Account {
    newSignatories: string[]
}

export const handleNewMultisigs = async (ctx: Ctx, multisigs: NewMultisigsInfo[]) => {
    for (let { newSignatories, threshold, id, createdAt, isMultisig, isPureProxy } of multisigs) {
        // const multiAddress = encodeAddress(createKeyMulti(signers, threshold), config.prefix)

        // persist all accounts
        const accounts = await getOrCreateAccounts(ctx, newSignatories)
        // const accounts = await Promise.all(accountPromise)

        const newMultisig = new Account({
            id,
            threshold,
            createdAt,
            isMultisig,
            isPureProxy
        })

        // persist the multisig
        await ctx.store.save(newMultisig)

        const newAccountMultisig = accounts.map((account) => {
            return new AccountMultisig({
                id: getAccountMultisigId(newMultisig.id, account.id),
                multisig: newMultisig,
                signatory: account
            })
        })

        await ctx.store.save(newAccountMultisig)
    }
}