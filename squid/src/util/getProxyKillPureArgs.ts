import { Call } from '@subsquid/substrate-processor'
import { encodeId } from './accountEncoding'

export interface KillPureCallInfo {
  spawner: string
  extrinsicIndex: number
  blockNumber: number
}

export const getProxyKillPureArgs = (proxyKillArgs: Call['args']) => {
  return {
    extrinsicIndex: proxyKillArgs.extIndex,
    blockNumber: proxyKillArgs.height,
    spawner: encodeId(
      proxyKillArgs.spawner.value || proxyKillArgs.spawner.id || proxyKillArgs.spawner
    )
  } as KillPureCallInfo
}
