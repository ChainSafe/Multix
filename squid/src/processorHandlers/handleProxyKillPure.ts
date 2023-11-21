import { ProxyAccount } from '../model'
import { Ctx } from '../main'
import { KillPureCallInfo } from '../util/getProxyKillPureArgs'
import { JsonLog } from '../util'

export const handleProxyKillPure = async (ctx: Ctx, proxyKillPureArgs: KillPureCallInfo[]) => {
  const toRemove: ProxyAccount[] = []
  for (const { blockNumber, extrinsicIndex, spawner } of proxyKillPureArgs) {
    const getAll = await ctx.store.find(ProxyAccount)
    ctx.log.info(`--> ALL ${JsonLog(getAll)}`)
    const temp = await ctx.store.findOneBy(ProxyAccount, {
      creationBlockNumber: blockNumber,
      extrinsicIndex: extrinsicIndex,
      delegatee: {
        address: spawner
      }
    })

    temp && toRemove.push(temp)
  }

  ctx.log.info(`--> Remove ${toRemove.map((proxyAccount) => JSON.stringify(proxyAccount))}`)

  await ctx.store.remove(toRemove)
}
