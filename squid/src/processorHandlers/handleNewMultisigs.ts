import { Multisig, AccountMultisig } from "../model"
import { Ctx } from "../processor"
import { getOrCreateAccounts, getAccountMultisigId } from "../util"

export interface NewMultisigsInfo extends Omit<Multisig, "signers" | "proxy" | "multisigsCalls"> {
    signatories: string[]
}

export const handleNewMultisigs = async (ctx: Ctx, multisigs: NewMultisigsInfo[]) => {
    for (let { signatories, threshold, id, createdAt } of multisigs) {
        // const multiAddress = encodeAddress(createKeyMulti(signers, threshold), config.prefix)

        // persist all accounts
        const accounts = await getOrCreateAccounts(ctx, signatories)
        // const accounts = await Promise.all(accountPromise)

        const newMultisig = new Multisig({
            id,
            threshold,
            createdAt,
        })

        // persist the multisig
        ctx.store.save(newMultisig)

        const newAccountMultisig = accounts.map((account) => {
            return new AccountMultisig({
                id: getAccountMultisigId(newMultisig.id, account.id),
                multisig: newMultisig,
                signer: account
            })
        })

        ctx.store.save(newAccountMultisig)
    }
}