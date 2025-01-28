import { InjectedAccountWitMnemonic } from './testAccounts'

export const expectedPolkadotAHMultisigAddress = '13cJVjVjHpabhge4XEjdXmVPgD6w2UaSp8bpnYX9sDcgwp45'

export const polkadotAHMemberAccount = {
  // this is the member of a multisig on Polkadot Asset hub with 1 DOT and 1 USDC
  Nikos: {
    address: '15DCZocYEM2ThYCAj22QE4QENRvUNVrDtoLBVbCm5x4EQncr',
    publicKey: '0xba3ecfd7483cdcdad1132af7d1e8067816009cbd77fc0bc30eafe8d2218a1971',
    name: 'Nikos',
    type: 'sr25519',
    mnemonic: ''
  } as InjectedAccountWitMnemonic
}
