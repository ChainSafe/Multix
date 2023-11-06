import { testAccounts } from './testAccounts'

export const knownMultisigs = {
  'test-multisig-1': {
    address: '5CmwqwwLEkEtsmB9gFaTJdCfurz33xyggHnvwHaGKtvmQNxq',
    threshold: 2,
    signatories: [
      testAccounts['Multisig Member Account 1'].address,
      testAccounts['Multisig Member Account 2'].address
    ]
  }
}
