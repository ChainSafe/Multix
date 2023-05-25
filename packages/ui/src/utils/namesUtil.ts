import { encodeAddress, decodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'
import { AccountNames } from '../contexts/AccountNamesContext'

export const encodeNames = (accounts: AccountNames, ss58Format: number) => {
  const res = {} as AccountNames

  Object.entries(accounts).forEach(([pubkey, name]) => {
    const address = encodeAddress(pubkey, ss58Format)
    res[address] = name
  })
  return res
}

export const decodeNames = (accounts: AccountNames) => {
  const res = {} as AccountNames

  Object.entries(accounts).forEach(([address, name]) => {
    const pubkey = u8aToHex(decodeAddress(address))
    res[pubkey] = name
  })
  return res
}
