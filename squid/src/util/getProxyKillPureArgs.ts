import { Ctx } from '../main'
import { encodeId } from './accountEncoding'
import { getAccountId } from './getAccountId'

export interface KillPureCallInfo {
  spawner: string
  extrinsicIndex: number
  blockNumber: number
}

export const getProxyKillPureArgs = (ctx: Ctx, proxyKillArgs: any, chainId: string) => {
  // const toRemove = await ctx.store.findBy(ProxyAccount, {
  //   id: In(proxyRemovals)
  // })

  // // ctx.log.info(`--> Remove ${toRemove.map((proxyAccount) => JSON.stringify(proxyAccount))}`)

  // await ctx.store.remove(toRemove)

  return {
    extrinsicIndex: proxyKillArgs.extrinsicIndex,
    blockNumber: proxyKillArgs.height,
    spawner: getAccountId(encodeId(proxyKillArgs.spawner.value), chainId)
  } as KillPureCallInfo
}
