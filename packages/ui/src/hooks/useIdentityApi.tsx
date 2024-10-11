import { useState, useEffect } from 'react'
import { ChainInfoHuman, PplApiType, usePplApi } from '../contexts/PeopleChainApiContext'
import { ApiType, useApi } from '../contexts/ApiContext'

export const useIdenityApi = () => {
  const { pplApi, pplChainInfo } = usePplApi()
  const { api, chainInfo } = useApi()
  const [apiToUse, setApiToUse] = useState<PplApiType | ApiType | null>(null)
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
