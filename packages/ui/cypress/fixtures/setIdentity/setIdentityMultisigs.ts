import { identitySignatories } from './setIdentitySignatories'

export const setIdentityMultisigs = {
  'multisig-without-identity': {
    name: 'Multisig With Pure',
    address: '5Hca6oEWVEYobPv8vw1PYUmGiz8AHUD2CDgXdedqoBwWZPK9',
    threshold: 2,
    signatories: [identitySignatories[1].address, identitySignatories[2].address]
  },

  // this is a multisig I use all the time. Because Rococo now filters identity calls
  // I couldn't re-create a dedicated one so only sharing here 1 signatory
  'pure-with-polkadot-identity': {
    name: 'Multisig with identity',
    address: '15KHTWdJyzyxaQbBNRmQN89KmFr1jPXXsPHM5Rxvd1Tkb2XZ',
    threshold: 2,
    signatories: [identitySignatories[4]]
  }
}
