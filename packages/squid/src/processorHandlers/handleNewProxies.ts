import { Account, ProxyAccount, ProxyType } from '../model'
import { Ctx } from '../processor'
import { getOrCreateAccounts } from '../util'

export interface NewProxy {
  id: string
  delegator: string
  delegatee: string
  type: ProxyType
  delay: number
  createdAt: Date
}

export const handleNewProxies = async (ctx: Ctx, newProxies: NewProxy[]) => {
  // Aggregate all accounts we deal with using a set to make sure we don't have dublicates
  const allAccountsStringSet = new Set<string>()

  newProxies.forEach(({ delegatee, delegator }) => {
    allAccountsStringSet.add(delegatee)
    allAccountsStringSet.add(delegator)
  })

  const accountsToUpdate = await getOrCreateAccounts(ctx, Array.from(allAccountsStringSet.values()))

  const accountMap = new Map<string, Account>()
  accountsToUpdate.forEach((account) => accountMap.set(account.id, account))
  const proxyAccounts: ProxyAccount[] = []

  for (const { id, delegatee, delegator, delay, type, createdAt } of newProxies) {
    ctx.log.info(`---> type ${type}`)
    proxyAccounts.push(
      new ProxyAccount({
        id,
        delegator: accountMap.get(delegator),
        delegatee: accountMap.get(delegatee),
        type,
        delay,
        createdAt
      })
    )
  }

  await ctx.store.save(proxyAccounts)
}
