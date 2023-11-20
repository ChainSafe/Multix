import { Equal } from 'typeorm'
import { ProxyAccount } from '../model'
import { Ctx } from '../main'
import { KillPureCallInfo } from '../util/getProxyKillPureArgs'

export const handleProxyKillPure = async (ctx: Ctx, proxyKillPureArgs: KillPureCallInfo[]) => {
  const toRemove: ProxyAccount[] = []

  proxyKillPureArgs.forEach(async ({ blockNumber, extrinsicIndex, spawner }) => {
    const temp = await ctx.store.findOneBy(ProxyAccount, {
      creationBlockNumber: Equal(blockNumber),
      extrinsicIndex: Equal(extrinsicIndex),
      delegatee: Equal(spawner)
    })

    temp && toRemove.push(temp)
  })

  ctx.log.info(`--> Remove ${toRemove.map((proxyAccount) => JSON.stringify(proxyAccount))}`)

  await ctx.store.remove(toRemove)
}
