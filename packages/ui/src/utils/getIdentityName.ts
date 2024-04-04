import { DeriveAccountRegistration } from '@polkadot/api-derive/types'

export interface IdentityNameResults {
  identityName: string
  sub: string
}

export const getIdentityName = (
  identity: DeriveAccountRegistration | undefined | null
): IdentityNameResults => {
  if (!identity) return { identityName: '', sub: '' }

  if (identity.displayParent && identity.display) {
    // when an identity is a sub identity `displayParent` is set
    // and `display` get the sub identity
    return {
      identityName: identity.displayParent,
      sub: identity.display
    }
  } else {
    // There should not be a `displayParent` without a `display`
    // but we can't be too sure.
    return {
      identityName: identity.displayParent || identity.display || '',
      sub: ''
    }
  }
}
