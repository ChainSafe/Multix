import { env } from '../main'
import { toHex } from '@subsquid/substrate-processor'
import { encodeAddress } from '@polkadot/util-crypto'

export function encodeId(id: string | Uint8Array): string {
  if(env.isEthereum) {
    return Array.isArray(id) ? toHex(id as Uint8Array).toString() : id as string
  }

  return encodeAddress(id, env.prefix)
}
