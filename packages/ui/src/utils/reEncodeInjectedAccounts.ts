import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { encodeAddress } from '@polkadot/util-crypto'

export const reEncodeInjectedAccounts = (
  accounts: InjectedAccountWithMeta[],
  ss58Format: number
) => {
  return accounts.map(
    (account) =>
      ({
        ...account,
        address: encodeAddress(account.address, ss58Format)
      } as InjectedAccountWithMeta)
  )
}
