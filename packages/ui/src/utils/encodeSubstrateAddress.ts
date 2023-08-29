import { encodeAddress } from '@polkadot/util-crypto'

export const encodesubstrateAddress = (address: string | Uint8Array, ss58Format: number) => {
  if (typeof address === 'string' && address.startsWith('0x') && address.length === 42) {
    console.log('invalid address format to encode', address)
    return address
  }

  try {
    return encodeAddress(address, ss58Format)
  } catch (e) {
    console.error(`Error encoding the address ${address}, skipping`, e)
  }
}
