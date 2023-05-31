import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { encodeAddress } from '@polkadot/util-crypto'

export const encodeAccounts = (
  accounts: InjectedAccountWithMeta[] | string[],
  ss58Format: number
) => {
  return accounts
    .map((account) => {
      let encodedAddress: string | undefined
      const addressToEncode = typeof account === 'string' ? account : account.address

      try {
        encodedAddress = encodeAddress(addressToEncode, ss58Format)
      } catch (e) {
        console.error(`Error encoding the address ${addressToEncode}, skipping`, e)
      }

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
