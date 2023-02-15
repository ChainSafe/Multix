import { In } from "typeorm"
import { ProxyAccount, ProxyType } from "../model"
import { Ctx } from "../processor"
import { getProxyAccountId } from "../util/getProxyAccountId"

export type ProxyRemoval = { delegator: string, delegatee: string, type: ProxyType, delay: number }

export const handleProxyRemovals = async (ctx: Ctx, proxyRemovals: ProxyRemoval[]) => {
    // using a set to make sure we don't have dublicates
    const proxyAccountIdSet = new Set<string>()

    proxyRemovals.forEach(({ delegatee, delegator, type, delay }) => {
        const id = getProxyAccountId(delegatee, delegator, type, delay)
        proxyAccountIdSet.add(id)
    })

    // ctx.log.info(`Set of id to remove ${Array.from(proxyAccountIdSet)}`)
    const toRemove = await ctx.store.findBy(ProxyAccount, { id: In([...Array.from(proxyAccountIdSet.values())]) })
    // ctx.log.info(`--> Removed ${toRemove.map((proxyAccount) => JSON.stringify(proxyAccount))}`)

    await ctx.store.remove(toRemove)
}