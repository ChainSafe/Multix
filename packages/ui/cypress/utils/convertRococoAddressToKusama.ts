import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'

function convertRococoAddressToKusama(rococoAddress: string): string {
  // Decode the Rococo address to its public key.
  const publicKey = decodeAddress(rococoAddress)

  // Kusama prefix is 2
  return encodeAddress(publicKey, 2)
}

export default convertRococoAddressToKusama
