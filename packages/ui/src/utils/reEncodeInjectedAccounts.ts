import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { encodeAddress } from '@polkadot/util-crypto'

export const reEncodeInjectedAccounts = (
  accounts: InjectedAccountWithMeta[] | string[],
  ss58Format: number
) => {
  return accounts.map((account) =>
    typeof account === 'string'
      ? encodeAddress(account, ss58Format)
      : ({
          ...account,
          address: encodeAddress(account.address, ss58Format)
        } as InjectedAccountWithMeta)
  )
}
