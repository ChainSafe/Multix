import { ApiPromise } from '@polkadot/api'
import { useState, useEffect } from 'react'
import { useApi } from '../contexts/ApiContext'
import { ChainInfoHuman, usePplApi } from '../contexts/PeopleChainApiContext'

export const useIdenityApi = () => {
  const { api, chainInfo } = useApi()
  const { pplApi, pplChainInfo } = usePplApi()
  const [apiToUse, setApiToUse] = useState<ApiPromise | null>(null)
  const [chainInfoToUse, setChainInfoToUse] = useState<ChainInfoHuman | undefined>(undefined)

  useEffect(() => {
    if (!pplApi && !api) {
      return
    }

    if (pplApi) {
      setApiToUse(pplApi)
      setChainInfoToUse(pplChainInfo)
    } else if (api) {
      setApiToUse(api)
      setChainInfoToUse(chainInfo)
    }
  }, [api, chainInfo, pplApi, pplChainInfo])

  return { api: apiToUse, chainInfo: chainInfoToUse }
}
