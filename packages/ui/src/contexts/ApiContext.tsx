import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { useNetwork } from './NetworkContext'
import { ethereumChains } from '../utils/ethereumChains'
import '@polkadot/api-augment'
import { createClient, PolkadotClient, TypedApi } from 'polkadot-api'
import { getWsProvider } from 'polkadot-api/ws-provider/web'
import {
  acala,
  bifrostDot,
  dot,
  dotAssetHub,
  dotPpl,
  hydration,
  khala,
  ksm,
  ksmAssetHub,
  ksmPpl,
  paseo,
  phala,
  rhala,
  rococo,
  rococoAssetHub,
  rococoPpl
} from '@polkadot-api/descriptors'

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export type ApiType = TypedApi<
  | typeof dot
  | typeof dotAssetHub
  | typeof dotPpl
  | typeof ksm
  | typeof ksmAssetHub
  | typeof ksmPpl
  | typeof hydration
  | typeof acala
  | typeof bifrostDot
  | typeof phala
  | typeof khala
  | typeof rhala
  | typeof rococo
  | typeof rococoAssetHub
  | typeof rococoPpl
  | typeof paseo
>

export interface IApiContext {
  api?: ApiType
  chainInfo?: ChainInfoHuman
  client?: PolkadotClient
}

interface ChainInfoHuman {
  ss58Format: number
  tokenDecimals: number
  tokenSymbol: string
  isEthereum: boolean
}

const ApiContext = createContext<IApiContext | undefined>(undefined)

const ApiContextProvider = ({ children }: ApiContextProps) => {
  const { selectedNetworkInfo } = useNetwork()
  const [chainInfo, setChainInfo] = useState<ChainInfoHuman | undefined>()
  const [client, setClient] = useState<PolkadotClient>()
  const [api, setApi] = useState<ApiType>()

  useEffect(() => {
    if (!selectedNetworkInfo) return

    let cl: PolkadotClient
    let typedApi: ApiType

    switch (selectedNetworkInfo?.chainId) {
      case 'kusama':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(ksm)
        break
      case 'asset-hub-dot':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(dotAssetHub)
        break
      case 'asset-hub-ksm':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(ksmAssetHub)
        break
      case 'acala':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(acala)
        break
      case 'bifrost-dot':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(bifrostDot)
        break
      case 'phala':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(phala)
        break
      case 'rhala':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(rhala)
        break
      case 'khala':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(khala)
        break
      case 'rococo':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(rococo)
        break
      case 'rococo-asset-hub':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(rococoAssetHub)
        break
      case 'hydration':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(hydration)
        break
      case 'paseo':
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(paseo)
        break

      default:
        cl = createClient(getWsProvider(selectedNetworkInfo.rpcUrl))
        typedApi = cl.getTypedApi(dot)
    }
    setClient(cl)
    setApi(typedApi)
  }, [selectedNetworkInfo])

  useEffect(() => {
    if (!client) return

    client?.getChainSpecData().then(({ properties, name }) => {
      if (!properties) return

      const tokenDecimals = Array.isArray(properties?.tokenDecimals)
        ? properties?.tokenDecimals[0]
        : properties?.tokenDecimals

      const tokensymbol = Array.isArray(properties?.tokenSymbol)
        ? properties?.tokenSymbol[0]
        : properties?.tokenSymbol

      const isEthereum = ethereumChains.includes(name)

      setChainInfo({
        // some parachains such as interlay have a comma in the format, e.g: "2,042"
        ss58Format: Number(properties?.ss58Format.replace(',', '')) || 0,
        tokenDecimals: Number(tokenDecimals) || 0,
        tokenSymbol: tokensymbol || '',
        isEthereum
      })
    })
  }, [client])

  return (
    <ApiContext.Provider
      value={{
        api,
        chainInfo,
        client
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

const useApi = () => {
  const context = useContext(ApiContext)
  if (context === undefined) {
    throw new Error('useApi must be used within a ApiContextProvider')
  }
  return context
}

export { ApiContextProvider, useApi }
