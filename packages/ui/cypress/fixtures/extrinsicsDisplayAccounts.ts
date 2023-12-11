import { InjectedAccountWitMnemonic } from './testAccounts'

export const expectedMultisigAddress = '7J9rSWpjfQjSYr1QDKPr6KjhnC2b2kLWfyBTiTpMgkNvD7vr'

export const extrinsicsDisplayAccounts = {
  // it has no token but is part of a multisig
  Alice: {
    address: '7NPoMQbiA6trJKkjB35uk96MeJD4PGWkLQLH7k7hXEkZpiba',
    publicKey: '0xb4b72576a091c5d691c2fd37f6eaa3d51c7480c2baaeab48737e5a209db4a431',
    name: 'Alice',
    type: 'sr25519',
    mnemonic: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice'
  } as InjectedAccountWitMnemonic
}
