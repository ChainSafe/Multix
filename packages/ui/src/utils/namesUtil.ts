import { encodeAddress, decodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'
import { AccountNames } from '../contexts/AccountNamesContext'

export const encodeNames = (accounts: AccountNames, ss58Format: number) => {
  const res = {} as AccountNames

  Object.entries(accounts).forEach(([pubkey, name]) => {
    let address: string | undefined

    try {
      address = encodeAddress(pubkey, ss58Format)
      res[address] = name
    } catch (e) {
      console.error(`Error encoding the address ${address}, skipping`, e)
    }
  })
  return res
}

export const decodeNames = (accounts: AccountNames) => {
  const res = {} as AccountNames

  Object.entries(accounts).forEach(([address, name]) => {
    let pubkey: string | undefined
    try {
      pubkey = u8aToHex(decodeAddress(address))
      res[pubkey] = name
    } catch (e) {
      console.error(`Error decoding the address ${address}, skipping`, e)
    }
  })
  return res
}
