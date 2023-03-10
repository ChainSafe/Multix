import { Account, ProxyAccount, ProxyType } from "../model"
import { Ctx } from "../processor"
import { getOrCreateAccounts } from "../util";
import { getProxyAccountId } from "../util/getProxyAccountId"

export interface NewPureProxy {
    id: string
    who: string;
    pure: string;
    delay: number;
    type: ProxyType;
}

export const handleNewPureProxies = async (ctx: Ctx, newPureProxies: NewPureProxy[]) => {
    const dedupPure = new Set<string>()
    const dedupWho = new Set<string>()

    newPureProxies.forEach(({ who, pure }) => {
        dedupPure.add(pure)
        dedupWho.add(who)
    })

    const pureProxiestoSave = Array.from(dedupPure.values()).map((pure) => new Account({
        id: pure,
        isMultisig: false,
        isPureProxy: true,
    }))

    // save all new pure proxies
    await ctx.store.save(pureProxiestoSave)

    // get or create who accounts
    const whoAccounts = await getOrCreateAccounts(ctx, Array.from(dedupWho.values()))

    const proxyAccounts: ProxyAccount[] = []
    for (let { id, who, pure, delay, type } of newPureProxies) {
        proxyAccounts.push(new ProxyAccount({
            id: getProxyAccountId(who, pure, ProxyType.Any, delay),
            delegator: pureProxiestoSave.find(({ id }) => pure === id),
            delegatee: whoAccounts.find(({ id }) => who === id),
            type,
            delay
        }))
    }

    await ctx.store.save(proxyAccounts)
}