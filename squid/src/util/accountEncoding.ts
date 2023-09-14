import { env } from '../main'
import { toHex } from '@subsquid/substrate-processor'
import { encodeAddress } from '@polkadot/util-crypto'
import { isUint8Array } from 'util/types'

export function encodeId(id: string | Uint8Array): string {
  if (env.isEthereum) {
    return isUint8Array(id) ? toHex(id as Uint8Array).toString() : (id as string)
  }

  return encodeAddress(id, env.prefix)
}
