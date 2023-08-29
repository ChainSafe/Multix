import { u8aToHex } from '@polkadot/util'
import { decodeAddress } from '@polkadot/util-crypto'
import { HexString } from '../types'

const decode = (address: string) => {
  if (address.startsWith('0x')) {
    return null
  }

  try {
    return u8aToHex(decodeAddress(address))
  } catch (e) {
    console.error(`Error decoding the address ${address}, skipping`, e)
    return null
  }
}
export function getPubKeyFromAddress(address: string[]): HexString[]
export function getPubKeyFromAddress(address: string): HexString | null
export function getPubKeyFromAddress(address: string | string[]) {
  if (Array.isArray(address)) {
    return address.map(decode).filter((address) => !!address) as HexString[]
  }

  return decode(address)
}
