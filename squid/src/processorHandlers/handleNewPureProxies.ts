import { In } from "typeorm"
import { Account, ProxyAccount, ProxyType } from "../model"
import { Ctx } from "../processor"
import { getProxyAccountId } from "../util/getProxyAccountId"

export type NewPureProxies = Map<string, {
    pure: string;
    delay: number | null;
}>

export const handleNewPureProxies = async (ctx: Ctx, proxyMap: NewPureProxies) => {

    const newPureProxies = [...proxyMap.values()].map(({ pure }) => new Account({
        id: pure,
        isMultisig: false,
        isPureProxy: true,
    }))

    await ctx.store.save(newPureProxies)

    const delegatorAccounts = Array.from(proxyMap.values()).map(({ pure }) => pure)
    const delegateeAccounts = [...proxyMap.keys()]

    const allAccountWithPossibleDubplicate = await ctx.store
        .findBy(Account, { id: In([...delegateeAccounts, ...delegatorAccounts]) })

    // deduplicate accounts
    const accountSet = new Map<string, Account>()
    allAccountWithPossibleDubplicate.forEach((account) => accountSet.set(account.id, account))

    const proxyAccounts: ProxyAccount[] = []
    for (let [who, { pure, delay }] of proxyMap.entries()) {
        proxyAccounts.push(new ProxyAccount({
            id: getProxyAccountId(who, pure, ProxyType.Any, delay),
            delegator: accountSet.get(pure),
            delegatee: accountSet.get(who),
            type: ProxyType.Any,
            delay
        }))
    }

    await ctx.store.save(proxyAccounts)
}