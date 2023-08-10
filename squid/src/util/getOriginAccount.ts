import { decodeHex } from '@subsquid/substrate-processor'
import { encodeId } from './accountEncoding'
import { encodeAddress } from '@polkadot/util-crypto'
import { env } from '../main'

export function getOriginAccount(origin: any): string {
  if (origin && origin.__kind === 'system' && origin.value.__kind === 'Signed') {
    const id = origin.value.value
    if (id.__kind === 'Id') {
      return encodeAddress(encodeId(decodeHex(id.value)), env.prefix)
    } else {
      return encodeAddress(encodeId(decodeHex(id)), env.prefix)
    }
  } else {
    throw new Error('Unexpected origin')
  }
}
