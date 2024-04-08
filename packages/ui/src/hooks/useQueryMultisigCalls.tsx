import { useMultisigCallsByMultisigIdQuery } from '../../types-and-hooks'
import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

interface Args {
  multisigIds: string[]
}

export const useMultisigCallQuery = ({ multisigIds }: Args) => {
  const { selectedNetwork } = useNetwork()
  const hasSomethingToQuery = useMemo(() => multisigIds.length > 0, [multisigIds])

  const { error, data, isLoading, refetch } = useMultisigCallsByMultisigIdQuery(
    { multisigs: multisigIds },
    {
      enabled: hasSomethingToQuery,
      queryKey: [`KeyMultisigCallsByMultisigId-${multisigIds}-${selectedNetwork}`],
      refetchInterval: 5000
    }
  )

  return { error, data, isLoading, refetch }
}
