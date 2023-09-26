import { InjectedAccount } from '@polkadot/extension-inject/types'

export interface InjectedAccountWitMnemonic extends InjectedAccount {
  mnemonic: string
}
export const injectedAccounts = [
  {
    address: '5H679cx9tkuHqyReUgBxeTqXKjVikVwLySDH1buiYuoqhi2w',
    name: 'TestAccount 1',
    type: 'sr25519',
    mnemonic: 'climb worth pioneer mushroom cloth expose tube high half final curtain toward'
  },
  {
    address: '5GCXBrumiRDQ8KQsgbG39HdBNLQKt6XCQbeHZJccGdZbYTgt',
    name: 'TestAccount 2',
    type: 'sr25519',
    mnemonic: 'divorce lottery slender again adapt process slow pigeon suit chase news begin'
  }
] as InjectedAccountWitMnemonic[]
