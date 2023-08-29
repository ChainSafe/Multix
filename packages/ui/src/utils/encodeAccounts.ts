import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { encodesubstrateAddress } from './encodeSubstrateAddress'

export const encodeAccounts = (
  accounts: InjectedAccountWithMeta[] | string[],
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
        ? ({
            ...account,
            address: encodedAddress
          } as InjectedAccountWithMeta)
        : null
    })
    .filter((acc) => !!acc) as (string | InjectedAccountWithMeta)[]
}
