import { InjectedAccountWitMnemonic } from './testAccounts'

export const westendMemberAccount = {
  // this is the member of a multisig and a multisig with Pure
  // use in hidden-accounts
  hidden: {
    account: {
      address: '5CPG8FMciJBBE47YwSQHte23tTz91egixJw514g6BCt5nHPz',
      publicKey: '0x0e270b0984354e0f6033dee93293dbeaea366220ca59e584ba7614d8bf393040',
      name: 'hidden',
      type: 'sr25519',
      mnemonic: ''
    } as InjectedAccountWitMnemonic,
    expectedSingleMultisig: {
      westEndAddress: '5CvCLBVHufgqTDUVJL3xY6Pd7TVaYtaTGzvYRfGeaAPJLdDS',
      paseoAddress: '1rVUWkMmSxJtkV1Fy6xgFDmy5VEFC8bMVf2axG18FQpX7hE',
      pubKey: '0x25bee0c82d1a5ea1ef4f75b4cb517286a78ed51ab934b1636ac4d8b018811b1b'
    },
    expectedPure: {
      address: '5DqS9vsnXotmczKu87xb5KMUARCVF5JUUVveZz9R8UvXKExK',
      pubKey: '0x4e596aec4922957174ba3f86860cca88fa4664006b511f11260cc34ca303d0dd'
    }
  }
}
