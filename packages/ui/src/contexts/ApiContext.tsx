import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { useNetwork } from './NetworkContext'
import { ethereumChains } from '../utils/ethereumChains'
import { CompatibilityToken, createClient, PolkadotClient, TypedApi } from 'polkadot-api'
import { getWsProvider } from 'polkadot-api/ws-provider/web'
import { withPolkadotSdkCompat } from 'polkadot-api/polkadot-sdk-compat'
import {
  acala,
  bifrostDot,
  dot,
  dotAssetHub,
  hydration,
  khala,
  ksm,
  ksmAssetHub,
  paseo,
  phala,
  polimec,
  coretimeDot,
  westend
} from '@polkadot-api/descriptors'

export const DESCRIPTORS_first = {
  acala,
  bifrostDot,
  dot,
  dotAssetHub,
  hydration,
  khala,
  ksm,
  ksmAssetHub,
  paseo,
  phala,
  polimec,
  coretimeDot
} as const

export const DESCRIPTORS_seconds = {
  westend
} as const

export const DESCRIPTORS = {
  ...DESCRIPTORS_first,
  ...DESCRIPTORS_seconds
}

export type ApiDescriptors = keyof typeof DESCRIPTORS
export type Descriptors<Id extends ApiDescriptors> = (typeof DESCRIPTORS)[Id]

export const getDescriptor = (id: ApiDescriptors): Descriptors<ApiDescriptors> => DESCRIPTORS[id]

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export type IApiContext<Id extends ApiDescriptors> = {
  api?: TypedApi<Descriptors<Id>>
  apiDescriptor?: Id
  chainInfo?: ChainInfoHuman
  client?: PolkadotClient
  compatibilityToken?: CompatibilityToken
}

interface ChainInfoHuman {
  ss58Format: number
  tokenDecimals: number
  tokenSymbol: string
  isEthereum: boolean
}

const ApiContext = createContext<IApiContext<ApiDescriptors> | undefined>(undefined)

const ApiContextProvider = <Id extends ApiDescriptors>({ children }: ApiContextProps) => {
  const { selectedNetworkInfo } = useNetwork()
  const [chainInfo, setChainInfo] = useState<ChainInfoHuman>()
  const [client, setClient] = useState<PolkadotClient | undefined>()
  const [api, setApi] = useState<TypedApi<Descriptors<Id>> | undefined>()
  const [compatibilityToken, setCompatibilityToken] = useState<CompatibilityToken | undefined>()
  const [apiDescriptor, setApiDescriptor] = useState<IApiContext<ApiDescriptors>['apiDescriptor']>()

  useEffect(() => {
    if (!selectedNetworkInfo?.chainId || !selectedNetworkInfo?.descriptor) return

    const cl = createClient(withPolkadotSdkCompat(getWsProvider(selectedNetworkInfo.rpcUrls)))

    const typedApi = cl.getTypedApi(DESCRIPTORS[selectedNetworkInfo.descriptor])
    setClient(cl)
    const desc = DESCRIPTORS[selectedNetworkInfo.descriptor]
    setApi(typedApi as TypedApi<typeof desc>)
    setApiDescriptor(selectedNetworkInfo.descriptor)
  }, [selectedNetworkInfo])

  useEffect(() => {
    if (!client || !api) return

    client?.getChainSpecData().then(async ({ properties, name }) => {
      if (!properties || !compatibilityToken) return

      const ss58prefix = (api as TypedApi<Descriptors<ApiDescriptors>>).constants.System.SS58Prefix(
        compatibilityToken
      )
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
    ;(api as TypedApi<Descriptors<ApiDescriptors>>).compatibilityToken
      .then(setCompatibilityToken)
      .catch(console.error)
  }, [api])

  return (
    <ApiContext.Provider
      value={{
        api,
        apiDescriptor,
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
