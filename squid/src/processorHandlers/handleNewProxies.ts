import { Account, ProxyAccount, ProxyType } from "../model"
import { Ctx } from "../processor"
import { getOrCreateAccounts } from "../util"
import { getProxyAccountId } from "../util/getProxyAccountId"

export interface NewProxy {
    delegator: string;
    delegatee: string;
    type: ProxyType;
    delay: number;
}

export const handleNewProxies = async (ctx: Ctx, newProxies: NewProxy[]) => {

    // using a set to make sure we don't have dublicates
    const allAccountsStringSet = new Set<string>()

    newProxies.forEach(({ delegatee, delegator }) => {
        allAccountsStringSet.add(delegatee)
        allAccountsStringSet.add(delegator)
    })

    const accountsToUpdate = await getOrCreateAccounts(ctx, Array.from(allAccountsStringSet.values()))

    const accountMap = new Map<string, Account>()
    accountsToUpdate.forEach((account) => accountMap.set(account.id, account))
    const proxyAccounts: ProxyAccount[] = []

    for (let { delegatee, delegator, delay, type } of newProxies) {
        proxyAccounts.push(new ProxyAccount({
            id: getProxyAccountId(delegatee, delegator, type, delay),
            delegator: accountMap.get(delegator),
            delegatee: accountMap.get(delegatee),
            type,
            delay
        }))
    }

    await ctx.store.save(proxyAccounts)
}