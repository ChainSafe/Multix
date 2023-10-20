import { setIdentitySignatories } from './setIdentitySignatories'

export const setIdentityMultisigs = {
  'multisig-without-identity': {
    name: 'Multisig With Pure',
    address: '5Hca6oEWVEYobPv8vw1PYUmGiz8AHUD2CDgXdedqoBwWZPK9',
    threshold: 2,
    signatories: [setIdentitySignatories[1].address, setIdentitySignatories[2].address]
  },

  // this is a multisig I use all the time. Because Rococo now filters identity calls
  // I couldn't re-create a dedicated one so only sharing here 1 signatory
  'multisig-with-identity': {
    name: 'Multisig with identity',
    address: '5EMm18Z8WWWT2wit1RxpoZv39goPdYmSksnDTePYAzrUhdJv',
    threshold: 2,
    signatories: [setIdentitySignatories[0].address]
  }
}
