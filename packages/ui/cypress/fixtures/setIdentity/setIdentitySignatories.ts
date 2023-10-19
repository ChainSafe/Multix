import { InjectedAccountWitMnemonic } from '../injectedAccounts'

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
  }
] as InjectedAccountWitMnemonic[]
