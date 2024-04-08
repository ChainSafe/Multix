import { usePureByIdsQueryQuery } from '../../types-and-hooks'
import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

interface Args {
  pureIds: string[]
}

export const useQueryPure = ({ pureIds }: Args) => {
  const { selectedNetwork } = useNetwork()
  const hasSomethingToQuery = useMemo(() => pureIds.length > 0, [pureIds])

  const { error, data, isLoading, refetch } = usePureByIdsQueryQuery(
    { pureIds },
    {
      enabled: hasSomethingToQuery,
      queryKey: [`KeyPureByIde-${pureIds}-${selectedNetwork}`]
    }
  )

  return { data, isLoading: isLoading && hasSomethingToQuery, error, refetch }
}
