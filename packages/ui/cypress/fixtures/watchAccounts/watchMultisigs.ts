import { watchSignatories } from './watchSignatories'

export const watchMultisigs = {
  'multisig-with-pure': {
    name: 'Multisig With Pure',
    address: '5EwAYK9noidJUqDXT7RmDABzh8Ag1PEd4HWy9DW82KU3H6tq',
    publicKey: '0x7ef48fd94cff8f6a6e03f3bf1d3b7a9606b1b85ad09f7a056fe56ba484942974',
    pureAddress: '5EfdqwwuyjjtEa4UhdjbZJu3UxHEHbzh8LMRvE13xTD7z6Wd',
    purePublicKey: '0x731c8c8da47c7b980f4f6968fdc461dc7d67b6d255974937761e510a927b6e55',
    threshold: 2,
    signatories: [watchSignatories[0].address, watchSignatories[1].address]
  },

  'multisig-without-pure': {
    name: 'Multisig No Pure',
    address: '5GysXAKXrGjNvpQruKWH3RwxtYrJqqWLN1A15gUMht6EXmzC',
    publicKey: '0xd97d7896b3cc0410dbb83bf0a8d9c5a87b293c077165fc1c154546718d1a10e0',
    threshold: 2,
    signatories: [watchSignatories[2].address, watchSignatories[3].address]
  }
}
