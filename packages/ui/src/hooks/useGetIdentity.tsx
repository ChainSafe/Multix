import { useCallback } from 'react'
import { useApi } from '../contexts/ApiContext'

export const useGetIdentity = () => {
  const { api } = useApi()

  const getIdentity = useCallback(
    async (address: string) => {
      if (!api) {
        return
      }

      try {
        const info = await api.derive.accounts.info(address)
        return info.identity
      } catch (e) {
        console.error(e)
      }
    },
    [api]
  )

  return getIdentity
}
