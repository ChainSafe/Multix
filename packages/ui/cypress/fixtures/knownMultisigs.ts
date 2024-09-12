import { testAccounts } from './testAccounts'

export const knownMultisigs = {
  // this multisig is doing transactions and
  // has logic to remove the pending tx
  'test-simple-multisig-1': {
    address: '1iEzHCQ6XWNKJBfdtdTSn2pmUygkGXpknXR6aZcsyxHaped',
    publicKey: '0x1f7425dfe88e50fbef6826d117bb06c9d7d672b6ddfc1d578c581c7359beeb52',
    threshold: 2,
    signatories: [
      testAccounts['Multisig Member Account 1'].address,
      testAccounts['Multisig Member Account 2'].address
    ]
  },
  'multisig-with-pure': {
    address: '1gkDr5CdZZ6BodjWkVTgALLH75vVKU1SSSgibBC7UPMXS3A',
    pureAddress: '161hfudUKvdgBMRzHviDGm6MZM55VoyA1thjnUFN12fYD7Jv',
    purePublicKey: '0xddb613d315b4a0bb1aeb28fb256cc28d41f4704cc92191faae0881ebf99412d4',
    threshold: 2,
    signatories: [
      testAccounts['Multisig Member Account 1'].address,
      testAccounts['Multisig Member Account 2'].address,
      testAccounts['Multisig Member Account 3'].address
    ]
  },
  // this multisig has 2 unkown tx that should
  // not be removed
  // it needs to have unique users never used in any other multisig
  'multisigs-unique-users': {
    address: '1MJF5WZd31i3vvsLmvgVx4uN1y9AqAGrCXhjnNThxPUVbM1',
    publicKey: '0x0f7af3c714b7cb4b0365aca43c586371bb10560b770f53f20a2dddad8db1365d',
    threshold: 2,
    hashOfUknownCall: '0x15d556c6576d26ff46f46ce9032d4a2a2107ceb2974a7bfc84124faa36d5cee7',
    callData: '0x0000286d756c74697820667477',
    signatories: [
      testAccounts['Multisig Member Account 4'].address,
      testAccounts['Multisig Member Account 5'].address
    ]
  }
}
