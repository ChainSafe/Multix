import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'
import { useIdenityApi } from './useIdentityApi'

export const useHasIdentityFeature = () => {
  const { api } = useIdenityApi()
  const { selectedNetworkInfo } = useNetwork()
  const hasIdentityPallet = useMemo(() => !!api && !!api.tx?.identity?.setIdentity, [api])
  const hasPplChain = useMemo(() => !!selectedNetworkInfo?.pplChainRpcUrl, [selectedNetworkInfo])
  return {
    hasPplChain,
    hasIdentityPallet
  }
}
