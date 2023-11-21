import { ProxyAccount } from '../model'
import { Ctx } from '../main'
import { KillPureCallInfo } from '../util/getProxyKillPureArgs'
import { JsonLog } from '../util'

export const handleProxyKillPure = async (ctx: Ctx, proxyKillPureArgs: KillPureCallInfo[]) => {
  const proxyAccountsToRemove: ProxyAccount[] = []

  for (const { blockNumber, extrinsicIndex, spawner } of proxyKillPureArgs) {
    const matchingProxyAcccount = await ctx.store.findOne(ProxyAccount, {
      where: {
        creationBlockNumber: blockNumber,
        extrinsicIndex: extrinsicIndex,
        delegatee: {
          address: spawner
        }
      }
    })

    !!matchingProxyAcccount && ctx.log.info(`got one ${JsonLog(matchingProxyAcccount)}`)

    matchingProxyAcccount && proxyAccountsToRemove.push(matchingProxyAcccount)
  }

  await ctx.store.remove(proxyAccountsToRemove)
}
