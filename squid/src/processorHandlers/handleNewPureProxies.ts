import { Account, ProxyAccount, ProxyType } from "../model"
import { Ctx } from "../processor"
import { getOrCreateAccounts } from "../util";
import { getProxyAccountId } from "../util/getProxyAccountId"

export interface NewPureProxy {
    who: string;
    pure: string;
    delay: number;
}

export const handleNewPureProxies = async (ctx: Ctx, newPureProxies: NewPureProxy[]) => {
    const dedupNewPureProxies = newPureProxies.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.who === value.who && t.pure === value.pure && t.delay === value.delay
        ))
    )

    const dedupPure = new Set<string>()
    const dedupWho = new Set<string>()

    dedupNewPureProxies.forEach(({ who, pure }) => {
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
    for (let { who, pure, delay } of dedupNewPureProxies) {
        proxyAccounts.push(new ProxyAccount({
            id: getProxyAccountId(who, pure, ProxyType.Any, delay),
            delegator: pureProxiestoSave.find(({ id }) => pure === id),
            delegatee: whoAccounts.find(({ id }) => who === id),
            type: ProxyType.Any,
            delay
        }))
    }

    await ctx.store.save(proxyAccounts)
}