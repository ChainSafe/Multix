import { Account, AccountMultisig } from '../model'
import { Ctx } from '../main'
import { getOrCreateAccounts, getAccountMultisigId } from '../util'

export interface NewMultisigsInfo extends Account {
  newSignatories: string[]
}

export const handleNewMultisigs = async (ctx: Ctx, multisigs: NewMultisigsInfo[]) => {
  const newMultisigs: Map<string, Account> = new Map()
  const newAccountMultisigs: Map<string, AccountMultisig> = new Map()

  for (const { newSignatories, threshold, id, isMultisig, isPureProxy } of multisigs) {
    const accounts = await getOrCreateAccounts(ctx, newSignatories)

    const newMultisig = new Account({
      id,
      threshold,
      isMultisig,
      isPureProxy
    })

    newMultisigs.set(id, newMultisig)

    accounts.forEach((account) => {
      const newAccountMultisigId = getAccountMultisigId(newMultisig.id, account.id)

      const newAccountMultisig = new AccountMultisig({
        id: newAccountMultisigId,
        multisig: newMultisig,
        signatory: account
      })
      newAccountMultisigs.set(newAccountMultisigId, newAccountMultisig)
    })
  }

  await ctx.store.save(Array.from(newMultisigs.values()))
  await ctx.store.save(Array.from(newAccountMultisigs.values()))
}
