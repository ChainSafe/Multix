import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'
import { useIdenityApi } from './useIdentityApi'
import { dotPpl } from '@polkadot-api/descriptors'
import { TypedApi } from 'polkadot-api'

export const useHasIdentityFeature = () => {
  const { api } = useIdenityApi()
  const { selectedNetworkInfo } = useNetwork()
  const hasIdentityPallet = useMemo(
    () => !!api && !!(api as TypedApi<typeof dotPpl>).tx?.Identity?.set_identity,
    [api]
  )
  const hasPplChain = useMemo(() => !!selectedNetworkInfo?.pplChainRpcUrls, [selectedNetworkInfo])
  return {
    hasPplChain,
    hasIdentityPallet
  }
}
