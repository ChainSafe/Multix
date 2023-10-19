import { watchSignatories } from './watchSignatories'

export const watchMultisigs = {
  'multisig-with-pure': {
    name: 'Multisig With Pure',
    address: '5EwAYK9noidJUqDXT7RmDABzh8Ag1PEd4HWy9DW82KU3H6tq',
    pureAddress: '5EfdqwwuyjjtEa4UhdjbZJu3UxHEHbzh8LMRvE13xTD7z6Wd',
    threshold: 2,
    signatories: [watchSignatories[0].address, watchSignatories[1].address]
  },

  'multisig-without-pure': {
    name: 'Multisig No Pure',
    address: '5GysXAKXrGjNvpQruKWH3RwxtYrJqqWLN1A15gUMht6EXmzC',
    threshold: 2,
    signatories: [watchSignatories[2].address, watchSignatories[3].address]
  }
}
