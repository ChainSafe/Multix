import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { useNetwork } from './NetworkContext'
import { ethereumChains } from '../utils/ethereumChains'
import { createClient, PolkadotClient, TypedApi } from 'polkadot-api'
import { getWsProvider } from 'polkadot-api/ws-provider/web'
import { withPolkadotSdkCompat } from 'polkadot-api/polkadot-sdk-compat'
import {
  acala,
  bifrostDot,
  dot,
  dotAssetHub,
  // dotPpl,
  hydration,
  khala,
  ksm,
  ksmAssetHub,
  // ksmPpl,
  paseo,
  phala,
  polimec,
  coretimeDot,
  westend
  // rhala,
} from '@polkadot-api/descriptors'

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

type BaseContext = {
  chainInfo?: ChainInfoHuman
  client?: PolkadotClient
  compatibilityToken?: Awaited<ReturnType<PolkadotClient['getTypedApi']>['compatibilityToken']>
}

export type IApiContext =
  | ({
      api?: TypedApi<typeof dot>
      apiDescriptor: 'polkadot'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof ksm>
      apiDescriptor: 'kusama'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof dotAssetHub>
      apiDescriptor: 'asset-hub-polkadot'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof ksmAssetHub>
      apiDescriptor: 'asset-hub-kusama'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof coretimeDot>
      apiDescriptor: 'coretime-polkadot'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof acala>
      apiDescriptor: 'acala'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof bifrostDot>
      apiDescriptor: 'bifrost-dot'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof hydration>
      apiDescriptor: 'hydration'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof khala>
      apiDescriptor: 'khala'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof phala>
      apiDescriptor: 'phala'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof westend>
      apiDescriptor: 'westend'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof paseo>
      apiDescriptor: 'paseo'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof polimec>
      apiDescriptor: 'polimec'
    } & BaseContext)
  | ({
      api?: TypedApi<typeof dot>
      apiDescriptor: 'local'
    } & BaseContext)

interface ChainInfoHuman {
  ss58Format: number
  tokenDecimals: number
  tokenSymbol: string
  isEthereum: boolean
}

const ApiContext = createContext<IApiContext | undefined>(undefined)

const ApiContextProvider = ({ children }: ApiContextProps) => {
  const { selectedNetworkInfo } = useNetwork()
  const [chainInfo, setChainInfo] = useState<IApiContext['chainInfo']>()
  const [client, setClient] = useState<IApiContext['client']>()
  const [api, setApi] = useState<IApiContext['api']>()
  const [compatibilityToken, setCompatibilityToken] = useState<IApiContext['compatibilityToken']>()

  useEffect(() => {
    if (!selectedNetworkInfo?.chainId || !selectedNetworkInfo?.descriptor) return

    const cl = createClient(withPolkadotSdkCompat(getWsProvider(selectedNetworkInfo.rpcUrls)))
    const typedApi = cl.getTypedApi(selectedNetworkInfo.descriptor)
    setClient(cl)
    setApi(typedApi)
  }, [selectedNetworkInfo])

  useEffect(() => {
    if (!client || !api) return

    client?.getChainSpecData().then(async ({ properties, name }) => {
      if (!properties || !compatibilityToken) return

      const ss58prefix = api.constants.System.SS58Prefix(compatibilityToken)
      const tokenDecimals = Array.isArray(properties?.tokenDecimals)
        ? properties?.tokenDecimals[0]
        : properties?.tokenDecimals

      const tokensymbol = Array.isArray(properties?.tokenSymbol)
        ? properties?.tokenSymbol[0]
        : properties?.tokenSymbol

      const isEthereum = ethereumChains.includes(name)

      setChainInfo({
        // some parachains such as interlay have a comma in the format, e.g: "2,042"
        ss58Format: Number(ss58prefix) || 0,
        tokenDecimals: Number(tokenDecimals) || 0,
        tokenSymbol: tokensymbol || '',
        isEthereum
      })
    })
  }, [client, api, compatibilityToken])

  useEffect(() => {
    if (!api) return

    api.compatibilityToken.then(setCompatibilityToken).catch(console.error)
  }, [api])

  return (
    <ApiContext.Provider
      value={{
        // @ts-ignore
        api,
        chainInfo,
        client,
        compatibilityToken
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
