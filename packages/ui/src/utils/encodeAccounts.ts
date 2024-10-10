import { encodesubstrateAddress } from './encodeSubstrateAddress'
import { InjectedPolkadotAccount } from 'polkadot-api/pjs-signer'

export const encodeAccounts = (
  accounts: InjectedPolkadotAccount[] | string[],
  ss58Format: number
) => {
  return accounts
    .map((account) => {
      const addressToEncode = typeof account === 'string' ? account : account.address

      const encodedAddress = encodesubstrateAddress(addressToEncode, ss58Format)

      if (typeof account === 'string') {
        return encodedAddress
      }

      return encodedAddress
        ? {
            ...account,
            address: encodedAddress
          }
        : null
    })
    .filter((acc) => !!acc) as InjectedPolkadotAccount[]
}
