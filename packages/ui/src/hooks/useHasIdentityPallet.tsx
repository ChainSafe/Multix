import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'

export const useHasIdentityPallet = () => {
  const { api } = useApi()
  const hasIdentityPallet = useMemo(() => !!api && !!api.tx?.identity?.setIdentity, [api])

  return hasIdentityPallet
}
