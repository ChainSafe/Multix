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

export const DESCRIPTORS = {
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
} as const

export const DESCRIPTORS_NOT_HYDRATION_1 = {
  acala,
  bifrostDot,
  dot,
  dotAssetHub,
  khala,
  phala,
  paseo,
  polimec
} as const

export const DESCRIPTORS_NOT_HYDRATION_2 = {
  ksm,
  ksmAssetHub,
  coretimeDot,
  westend
} as const

export type ApiDescriptors = keyof typeof DESCRIPTORS
export type ApiDescriptorsNotHydration_1 = keyof typeof DESCRIPTORS_NOT_HYDRATION_1
export type ApiDescriptorsNotHydration_2 = keyof typeof DESCRIPTORS_NOT_HYDRATION_1

export type Descriptors<Id extends ApiDescriptors> = (typeof DESCRIPTORS)[Id]
type ApiOf<Id extends ApiDescriptors> = TypedApi<Descriptors<Id>>

export const noHydrationKeys_1 = Object.keys(
  DESCRIPTORS_NOT_HYDRATION_1
) as ApiDescriptorsNotHydration_1[]

export const noHydrationKeys_2 = Object.keys(
  DESCRIPTORS_NOT_HYDRATION_2
) as ApiDescriptorsNotHydration_2[]

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export type IApiContext<Id extends ApiDescriptors> = {
  apiDescriptor?: Id
  api?: ApiOf<Id>
  chainInfo?: ChainInfoHuman
  client?: PolkadotClient
  compatibilityToken?: CompatibilityToken
}

export const isContextOf = <Id extends ApiDescriptors>(
  ctx: unknown,
  descriptor: Id
): ctx is IApiContext<Id> => {
  return !!ctx && (ctx as IApiContext<ApiDescriptors>).apiDescriptor === descriptor
}

export const isContextIn = <Id extends ApiDescriptors, Ids extends ApiDescriptors[] = Id[]>(
  api: unknown,
  descriptors: Id[]
): api is IApiContext<Ids[number]> => {
  return descriptors.some((descriptor) => isContextOf(api, descriptor))
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
    setClient(cl)
    const id = selectedNetworkInfo.descriptor as Id
    const typedApi = cl.getTypedApi(DESCRIPTORS[id])
    setApi(typedApi as TypedApi<Descriptors<Id>>)

    // const typedApi = cl.getTypedApi(DESCRIPTORS[selectedNetworkInfo.descriptor])
    // setClient(cl)
    // setApi(typedApi as TypedApi<Descriptors<Id>>)
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
