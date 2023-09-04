import { createKeyMulti } from '@polkadot/util-crypto'
import { encodeId } from './accountEncoding'
import { Ctx, env } from '../main'
import { JsonLog } from './JsonLog'
import { isUint8Array } from 'util/types'

export const getMultisigAddress = (signatories: (string | Uint8Array)[], threshold: number, ctx: Ctx) => {
  const key = createKeyMulti(signatories, threshold)
  const res = encodeId(key)
  ctx.log.info(`signatories: ${JsonLog(signatories)}`)
  ctx.log.info(`key: ${JsonLog(key)}`)
  ctx.log.info(`Array.isArray: ${isUint8Array(key)}`)
  ctx.log.info(`res ${JsonLog(res)}`)

  // truncate the address at 42 chars for Ethereum addresses
  if(env.isEthereum && res.startsWith('0x')){
    return res.slice(0,42)
  }

  return res
}
