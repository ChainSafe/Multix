import { In } from "typeorm"
import { Account, Multisig } from "../model"
import { Ctx } from "../processor"

export type NewProxies = Map<string, string>

export const handleNewProxies = async (ctx: Ctx, proxyMap: NewProxies) => {

    const newProxies = [...proxyMap.values()].map((proxy) => new Account({
        id: proxy,
    }))

    await ctx.store.save(newProxies)

    // ctx.log.info(`proxyMap ${JsonLog([...proxyMap.entries()])}`)

    const multiSigsToUpdate = await ctx.store
        .findBy(Multisig, { id: In([...proxyMap.keys()]) })


    const updatedMultisigs = multiSigsToUpdate
        .map((multi) => {
            const associatedProxy = newProxies.find(proxy => proxy.id === proxyMap.get(multi.id))

            // ctx.log.info(`proxy: ${JsonLog(associatedProxy)}`)
            if (associatedProxy === undefined) {
                ctx.log.error(`No associated proxy found ${newProxies}`)
                return
            }

            multi.proxy = associatedProxy
            // ctx.log.info(`multi: ${JsonLog(multi)}`)
            return multi
        })
        .filter(multi => multi !== undefined)

    await ctx.store.save(updatedMultisigs as Multisig[])
}