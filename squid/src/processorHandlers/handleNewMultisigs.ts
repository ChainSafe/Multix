import { Account, AccountMultisig } from '../model'
import { Ctx } from '../main'
import { getOrCreateAccounts, getAccountMultisigId } from '../util'

export interface NewMultisigsInfo extends Account {
  newSignatories: string[]
}

export const handleNewMultisigs = async (
  ctx: Ctx,
  multisigs: NewMultisigsInfo[],
  chainId: string
) => {
  const newMultisigs: Map<string, Account> = new Map()
  const newAccountMultisigs: Map<string, AccountMultisig> = new Map()

  for (const { address, newSignatories, threshold, id, isMultisig, isPureProxy, byMultix } of multisigs) {
    const signatoriesAccounts = await getOrCreateAccounts(ctx, newSignatories, chainId)
    const newMultisig = new Account({
      id,
      address,
      threshold,
      isMultisig,
      isPureProxy,
      byMultix
    })

    !newMultisigs.has(id) && newMultisigs.set(id, newMultisig)

    signatoriesAccounts.forEach((account) => {
      const newAccountMultisigId = getAccountMultisigId(newMultisig.id, account.id, chainId)

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
