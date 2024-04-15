import { usePureByIdsQueryQuery } from '../../types-and-hooks'
import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

const DEFAULT_REFETCH_INTERVAL = 5000

interface Args {
  pureIds: string[]
  shouldRefetch: boolean
}

export const useQueryPure = ({ pureIds, shouldRefetch = false }: Args) => {
  const { selectedNetwork } = useNetwork()
  const hasSomethingToQuery = useMemo(() => pureIds.length > 0, [pureIds])

  const { error, data, isLoading, refetch } = usePureByIdsQueryQuery(
    { pureIds },
    {
      enabled: hasSomethingToQuery,
      queryKey: [`KeyPureByIde-${pureIds}-${selectedNetwork}`],
      refetchInterval: !!shouldRefetch && DEFAULT_REFETCH_INTERVAL
    }
  )

  return { data, isLoading: isLoading && hasSomethingToQuery, error, refetch }
}
