import { Ctx } from '../main'
import { encodeId } from './accountEncoding'

export interface KillPureCallInfo {
  spawner: string
  extrinsicIndex: number
  blockNumber: number
}

export const getProxyKillPureArgs = (ctx: Ctx, proxyKillArgs: any) => {
  // const toRemove = await ctx.store.findBy(ProxyAccount, {
  //   id: In(proxyRemovals)
  // })

  // // ctx.log.info(`--> Remove ${toRemove.map((proxyAccount) => JSON.stringify(proxyAccount))}`)

  // await ctx.store.remove(toRemove)

  return {
    extrinsicIndex: proxyKillArgs.extrinsicIndex,
    blockNumber: proxyKillArgs.height,
    spawner: encodeId(proxyKillArgs.spawner.value)
  } as KillPureCallInfo
}
