import { Account, AccountMultisig } from '../model'
import { Ctx } from '../main'
import { getOrCreateAccounts, getAccountMultisigId, JsonLog } from '../util'
import { shouldReplicateOn } from '../util/shouldReplicate'
import { getAccountId } from '../util/getAccountId'

export interface NewMultisigsInfo extends Omit<Account, 'id'> {
  newSignatories: string[]
}

export const handleNewMultisigs = async (
  ctx: Ctx,
  multisigs: NewMultisigsInfo[],
  chainId: string
) => {
  const newMultisigs: Map<string, Account> = new Map()
  const newAccountMultisigs: Map<string, AccountMultisig> = new Map()

  const replicatedNetworks = shouldReplicateOn(chainId) || [chainId]

  for (const { address, newSignatories, threshold, isMultisig, isPureProxy } of multisigs) {
    for (const network of replicatedNetworks) {
      const signatoriesAccounts = await getOrCreateAccounts(ctx, newSignatories, network)

      const multisigId = getAccountId(address, network)
      const newMultisig = new Account({
        id: multisigId,
        address,
        threshold,
        isMultisig,
        isPureProxy
      })

      newMultisigs.set(multisigId, newMultisig)

      signatoriesAccounts.forEach((account) => {
        const newAccountMultisigId = getAccountMultisigId(newMultisig.id, account.id, network)

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
}
