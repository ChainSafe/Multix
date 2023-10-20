import { testAccounts } from './testAccounts'

export const knownMultisigs = {
  'test-multisig-1': {
    address: '5CmwqwwLEkEtsmB9gFaTJdCfurz33xyggHnvwHaGKtvmQNxq',
    threshold: 2,
    signatories: [testAccounts['TestAccount 1'].address, testAccounts['TestAccount 2'].address]
  }
}
