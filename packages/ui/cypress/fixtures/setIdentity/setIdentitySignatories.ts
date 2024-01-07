import { InjectedAccountWitMnemonic } from '../testAccounts'

export const setIdentitySignatories = [
  // signatories of multisig-with-identity
  {
    address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    name: 'identity Signatory 1',
    type: 'sr25519',
    mnemonic: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice'
  },

  // signatories of multisig-without-identity
  {
    address: '5CJ4bFw9prEAhqQ84cvR63AA7JinYo1DKX4PEirJ4zENRMBA',
    name: 'no identity Signatory 1',
    type: 'sr25519',
    mnemonic: 'pattern crater clog vacuum position maze equip useful peanut birth offer identify'
  },
  {
    address: '5CVCFPcCxiqSpFYyaqF1Pr61yT6kfDAznNd4hy9NEBJyxFjt',
    name: 'no identity Signatory 2',
    type: 'sr25519',
    mnemonic: 'will hero hire retreat capital dash ordinary trap loop dragon dog parade'
  },
  {
    // this is a joystream account, with multisig, but not one of our accounts, we don't actually know the mnemonic,
    // so we can't sign anything with it
    address: 'j4WauZ6dVC6G8C1gDYKMbTZVVJoMAud6znTbdpNhKDpcZD4yX',
    name: 'Real account with Multisig',
    type: 'sr25519',
    mnemonic: ''
  }
] as InjectedAccountWitMnemonic[]
