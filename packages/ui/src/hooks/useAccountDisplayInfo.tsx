import { useMemo } from 'react'
import { useIdentity } from './useIdentity'
import { useAccountNames } from '../contexts/AccountNamesContext'
import { getDisplayName } from '../utils/getDisplayName'
import { getIdentityName } from '../utils/getIdentityName'

interface Props {
  address: string
}

export const useAccountDisplayInfo = ({ address }: Props) => {
  const identity = useIdentity(address)
  const { getNamesWithExtension } = useAccountNames()
  const localName = useMemo(() => getNamesWithExtension(address), [address, getNamesWithExtension])
  const isLocalNameDisplayed = useMemo(() => !!localName, [localName])
  const { identityName, sub } = useMemo(() => getIdentityName(identity), [identity])

  const displayName = useMemo(
    () => getDisplayName(localName || '', identityName),
    [localName, identityName]
  )

  return {
    identity,
    isLocalNameDisplayed,
    localName,
    displayName,
    subIdentity: sub,
    identityName
  }
}
