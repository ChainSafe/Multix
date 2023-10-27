import { InjectedAccount } from '@polkadot/extension-inject/types'

export interface InjectedAccountWitMnemonic extends InjectedAccount {
  mnemonic: string
  publicKey?: string
}

export const testAccounts = {
  'Test Account 1': {
    address: '5H679cx9tkuHqyReUgBxeTqXKjVikVwLySDH1buiYuoqhi2w',
    publicKey: '0xde3ed24acdfe71c13b4d42539c5390ddee147ba6b29b0593ce842e77ff034445',
    name: 'Test Account 1',
    type: 'sr25519',
    mnemonic: 'climb worth pioneer mushroom cloth expose tube high half final curtain toward'
  } as InjectedAccountWitMnemonic,
  'Test Account 2': {
    address: '5GCXBrumiRDQ8KQsgbG39HdBNLQKt6XCQbeHZJccGdZbYTgt',
    publicKey: '0xb6e6fb4f2a2268bf6e8a211d958cbf602881418bcc533216cadfae3e24785f28',
    name: 'Test Account 2',
    type: 'sr25519',
    mnemonic: 'divorce lottery slender again adapt process slow pigeon suit chase news begin'
  } as InjectedAccountWitMnemonic,
  'Non Multisig Member 1': {
    address: '5EnfL3AjWckttY6xuUqfFsfjcbxr1KqdzUKHTmh7cWrDKjGd',
    publicKey: '0x78784374dbeba13ff9789fca0e46c4960e219a1fff11ea69d6f0b57a7f3bfb61',
    name: 'Non Multisig Member 1',
    type: 'sr25519',
    mnemonic: 'consider hockey practice evolve stool jaguar follow sponsor party trial view entry'
  } as InjectedAccountWitMnemonic,
  'Non Multisig Member 2': {
    address: '5G9et86FAJ48fPgkHytVwdpHi9mCLKPpyT5fo1HGtRN9ZwKP',
    publicKey: '0xb4b72576a091c5d691c2fd37f6eaa3d51c7480c2baaeab48737e5a209db4a431',
    name: 'Non Multisig Member 2',
    type: 'sr25519',
    mnemonic: 'erosion never fee pill vocal fetch enforce soap betray zero answer hollow'
  } as InjectedAccountWitMnemonic
}
