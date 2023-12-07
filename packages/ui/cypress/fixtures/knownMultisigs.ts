import { testAccounts } from './testAccounts'

export const knownMultisigs = {
  'test-multisig-1': {
    address: '5CmwqwwLEkEtsmB9gFaTJdCfurz33xyggHnvwHaGKtvmQNxq',
    threshold: 2,
    signatories: [
      testAccounts['Multisig Member Account 1'].address,
      testAccounts['Multisig Member Account 2'].address
    ]
  },
  'multisig-with-unknown-transaction': {
    address: '5CNUH7K6RgXqEo4zK3i9cEDX1CDozJkmvuK6cRZ3z8ovY5CN',
    pureAddress: '5GeQBX3xT9oV5PVjnuakx6tRFEwxKGqnohfduWpp4MVt1uC6',
    purePublicKey: '0xcaa3c7393cdc0d101797a216222c1d44a92bdc3653f6d0fadfad040adad4e091',
    threshold: 2,
    hashOfUknownCall: '0x78dde73fae42b1728ce6feef5c1c4eac85efb70edb51eb1bda8cf47bd3f13fec',
    callData: '0x00005c556b6e6f776e205472616e73616374696f6e2054657374',
    signatories: [
      testAccounts['Signatory 1 Of Multisig With Unknown Tx'].address,
      testAccounts['Signatory 2 Of Multisig With Unknown Tx'].address
    ]
  }
}
