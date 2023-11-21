import { useApi } from '../contexts/ApiContext'

export const useHasIdentityPallet = () => {
  const { api } = useApi()

  return !!api && api.tx.identity
}
