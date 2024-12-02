import { useEffect, useMemo, useState } from 'react'
import { IdentityInfo, useGetIdentity } from './useGetIdentity'
import { useAccountNames } from '../contexts/AccountNamesContext'
import { getDisplayName } from '../utils/getDisplayName'
import { getIdentityName } from '../utils/getIdentityName'

interface Props {
  address: string
}

export const useAccountDisplayInfo = ({ address }: Props) => {
  const getIdentity = useGetIdentity()
  const { getNamesWithExtension } = useAccountNames()
  const localName = useMemo(() => getNamesWithExtension(address), [address, getNamesWithExtension])
  const isLocalNameDisplayed = useMemo(() => !!localName, [localName])
  const [identity, setIdentity] = useState<IdentityInfo | undefined>()
  const { identityName, sub } = useMemo(() => getIdentityName(identity), [identity])

  useEffect(() => {
    getIdentity(address).then(setIdentity).catch(console.error)
  }, [address, getIdentity])

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
