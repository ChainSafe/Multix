import { InjectedAccount } from '@polkadot/extension-inject/types'

export interface InjectedAccountWitMnemonic extends InjectedAccount {
  mnemonic: string
  publicKey?: string
}

export const testAccounts = {
  'Multisig Member Account 1': {
    address: '5H679cx9tkuHqyReUgBxeTqXKjVikVwLySDH1buiYuoqhi2w',
    publicKey: '0xde3ed24acdfe71c13b4d42539c5390ddee147ba6b29b0593ce842e77ff034445',
    name: 'Multisig Member Account 1',
    type: 'sr25519',
    mnemonic: 'climb worth pioneer mushroom cloth expose tube high half final curtain toward'
  } as InjectedAccountWitMnemonic,
  'Multisig Member Account 2': {
    address: '5GCXBrumiRDQ8KQsgbG39HdBNLQKt6XCQbeHZJccGdZbYTgt',
    publicKey: '0xb6e6fb4f2a2268bf6e8a211d958cbf602881418bcc533216cadfae3e24785f28',
    name: 'Multisig Member Account 2',
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
  } as InjectedAccountWitMnemonic,
  'Many Multisig And Pure Member 1': {
    address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    publicKey: '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d',
    name: 'Many Multisig And Pure Member 1',
    type: 'sr25519',
    mnemonic: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice'
  } as InjectedAccountWitMnemonic,
  'Funded Account 1 Chopsticks Kusama': {
    address: 'JEqfw2FPda5eycsqqXN2Ay67eEh5R85aSHcArs3XdUYjj5H',
    publicKey: '0xfa8e003cb5d22db1e8658e05245c3bab0851e516b71a8256bc3edf006b817161',
    name: 'Funded Account 1 Chopsticks',
    type: 'sr25519',
    mnemonic: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//chopsticks/1'
  } as InjectedAccountWitMnemonic,
  'Funded Account 2 Chopsticks Kusama': {
    address: 'JF3RaX21TrQuPrRbEV7i1iT5QXNQZBN6qvKx3iZN8CEN9bB',
    publicKey: '0xfab5903e86cb55051903d16a94bdd454f8db9e377d79dd6d420dfe9734d00c4f',
    name: 'Funded Account 2 Chopsticks',
    type: 'sr25519',
    mnemonic: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//chopsticks/2'
  } as InjectedAccountWitMnemonic,
  'Funded Account 3 Chopsticks Kusama': {
    address: 'HxehWqUZGorCrahv3PiWWqdcFNBG9oQhZ2ft5VXueWaSBEs',
    publicKey: '0xee35231494a285e552ba4592c8e32ac42192f3bb3443618f8e62ecc896f0e749',
    name: 'Funded Account 3 Chopsticks',
    type: 'sr25519',
    mnemonic: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//chopsticks/3'
  } as InjectedAccountWitMnemonic,
  'Not Funded Account 4 Chopsticks Kusama': {
    address: 'GecgyHrgdLEqkx34Ca5FW45QZ2wh66h3xbzzzgnxLKg2n8R',
    publicKey: '0xb437b8ddcd4d0b6086b06e70027f96626a51376bf285531e9e7d3acf45a2c113',
    name: 'Not Funded Account 4 Chopsticks',
    type: 'sr25519',
    mnemonic: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//chopsticks/4'
  } as InjectedAccountWitMnemonic,
  'Signatory 1 Of Multisig With Unknown Tx': {
    address: '5C5RWYL7zoV6V2vdwXENSpSzWHXUxyhHBrEzhfySdQmkiF9d',
    publicKey: '0x008c37659f858da7ec1416ce01b975af4c6eb5931805047d173d63123174a74e',
    name: 'Signatory 1 Of Multisig With Unknown Tx',
    type: 'sr25519',
    mnemonic: 'various sun sell patch follow stove warfare worry cupboard kick wise wild'
  } as InjectedAccountWitMnemonic,
  'Signatory 2 Of Multisig With Unknown Tx': {
    address: '5DAA5LQP8C4Cus1caXr3rwDa5LuPCJmXeoj3HrCUWEpGUV7g',
    publicKey: '0x3064b82d59077c4d2d7b924b72e63fb9b829b5cd0706b9236c35b79ffa89995b',
    name: 'Signatory 2 Of Multisig With Unknown Tx',
    type: 'sr25519',
    mnemonic: 'canyon narrow primary zoo purpose double rice faculty critic embark trophy economy'
  } as InjectedAccountWitMnemonic
}
