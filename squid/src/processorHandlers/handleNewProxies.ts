import { In } from "typeorm"
import { Account, ProxyAccount, ProxyType } from "../model"
import { Ctx } from "../processor"
import { getProxyAccountId } from "../util/getProxyAccountId"

export type NewProxies = Map<string, string>

export const handleNewProxies = async (ctx: Ctx, proxyMap: NewProxies) => {

    const newProxies = [...proxyMap.values()].map((proxy) => new Account({
        id: proxy,
        isMultisig: false,
        isPureProxy: true,
    }))

    await ctx.store.save(newProxies)

    const proxyAccounts: ProxyAccount[] = []

    const accountsToUpdate = await ctx.store
        .findBy(Account, { id: In([...proxyMap.keys(), ...proxyMap.values()]) })

    const accountSet = new Map<string, Account>()
    accountsToUpdate.forEach((account) => accountSet.set(account.id, account))

    for (let [who, pure] of proxyMap.entries()) {
        proxyAccounts.push(new ProxyAccount({
            id: getProxyAccountId(who, pure),
            origin: accountSet.get(pure),
            proxy: accountSet.get(who),
            type: ProxyType.Any
        }))
    }

    await ctx.store.save(proxyAccounts)

    // ctx.log.info(`proxyMap ${JsonLog([...proxyMap.entries()])}`)

    // const multiSigsToUpdate = await ctx.store
    //     .findBy(Account, { id: In([...proxyMap.keys()]) })

    // const updatedMultisigs = multiSigsToUpdate
    //     .map((multi) => {
    //         const associatedProxy = newProxies.find(proxy => proxy.id === proxyMap.get(multi.id))

    //         // ctx.log.info(`proxy: ${JsonLog(associatedProxy)}`)
    //         if (associatedProxy === undefined) {
    //             ctx.log.error(`No associated proxy found ${newProxies}`)
    //             return
    //         }

    //         multi.proxy = associatedProxy
    //         // ctx.log.info(`multi: ${JsonLog(multi)}`)
    //         return multi
    //     })
    //     .filter(multi => multi !== undefined)

    // await ctx.store.save(updatedMultisigs as Multisig[])
}