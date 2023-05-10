import { decodeHex } from '@subsquid/substrate-processor'
import { encodeId } from './accountEncoding'

export function getOriginAccountId(origin: any): string {
  if (
    origin &&
    origin.__kind === 'system' &&
    origin.value.__kind === 'Signed'
  ) {
    const id = origin.value.value
    if (id.__kind === 'Id') {
      return encodeId(decodeHex(id.value))
    } else {
      return encodeId(decodeHex(id))
    }
  } else {
    throw new Error('Unexpected origin')
  }
}
