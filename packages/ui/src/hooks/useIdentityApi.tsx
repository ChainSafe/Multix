import { useState, useEffect } from 'react'
import { ChainInfoHuman, IPplApiContext, usePplApi } from '../contexts/PeopleChainApiContext'
import { ApiDescriptors, IApiContext, useApi } from '../contexts/ApiContext'

export const useIdenityApi = () => {
  const { pplApi, pplChainInfo } = usePplApi()
  const { api, chainInfo } = useApi()
  const [apiToUse, setApiToUse] = useState<
    IPplApiContext['pplApi'] | IApiContext<ApiDescriptors>['api'] | null
  >(null)
  const [chainInfoToUse, setChainInfoToUse] = useState<ChainInfoHuman | undefined>(undefined)

  useEffect(() => {
    if (!pplApi) {
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
