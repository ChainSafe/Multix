import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { useNetwork } from './NetworkContext'
import { CompatibilityToken, createClient, PolkadotClient, TypedApi } from 'polkadot-api'
import { getWsProvider } from 'polkadot-api/ws-provider/web'
import { dotPpl, ksmPpl, pasPpl, wesPpl } from '@polkadot-api/descriptors'
import { withPolkadotSdkCompat } from 'polkadot-api/polkadot-sdk-compat'

export const pplDescriptors = {
  dotPpl,
  ksmPpl,
  pasPpl,
  wesPpl
} as const
export type PplDescriptorKeys = keyof typeof pplDescriptors
export type PplDescriptors<Id extends PplDescriptorKeys> = (typeof pplDescriptors)[Id]
export type ApiOf<Id extends PplDescriptorKeys> = TypedApi<PplDescriptors<Id>>

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export type IPplApiContext<Id extends PplDescriptorKeys> = {
  pplApi?: ApiOf<Id>
  pplApiDescriptor?: Id
  pplChainInfo?: ChainInfoHuman
  pplClient?: PolkadotClient
  pplCompatibilityToken?: CompatibilityToken
}

export const isPplContextOf = <Id extends PplDescriptorKeys>(
  ctx: unknown,
  descriptor: Id
): ctx is IPplApiContext<Id> => {
  return !!ctx && (ctx as IPplApiContext<PplDescriptorKeys>).pplApiDescriptor === descriptor
}

export const isPplContextIn = <
  Id extends PplDescriptorKeys,
  Ids extends PplDescriptorKeys[] = Id[]
>(
  api: unknown,
  descriptors: Id[]
): api is IPplApiContext<Ids[number]> => {
  return descriptors.some((descriptor) => isPplContextOf(api, descriptor))
}

export interface ChainInfoHuman {
  ss58Format: number
  tokenDecimals: number
  tokenSymbol: string
}

const PplApiContext = createContext<IPplApiContext<PplDescriptorKeys> | undefined>(undefined)

const PplApiContextProvider = <Id extends PplDescriptorKeys>({ children }: ApiContextProps) => {
  const { selectedNetworkInfo } = useNetwork()
  const [pplChainInfo, setPplChainInfo] = useState<ChainInfoHuman | undefined>()
  const [pplApi, setPplApi] = useState<TypedApi<PplDescriptors<Id>>>()
  const [pplClient, setPplClient] = useState<PolkadotClient>()
  const [pplCompatibilityToken, setPplCompatibilityToken] = useState<CompatibilityToken>()
  const [pplApiDescriptor, setPplApiDescriptor] =
    useState<IPplApiContext<PplDescriptorKeys>['pplApiDescriptor']>()

  useEffect(() => {
    if (!pplApi) return

    pplApi.compatibilityToken.then(setPplCompatibilityToken).catch(console.error)
  }, [pplApi])

  useEffect(() => {
    if (!selectedNetworkInfo?.pplChainRpcUrls) return

    const cl = createClient(
      withPolkadotSdkCompat(getWsProvider(selectedNetworkInfo.pplChainRpcUrls))
    )
    setPplClient(cl)
    const id = selectedNetworkInfo.pplChainDescriptor as Id
    const typedApi = cl.getTypedApi(pplDescriptors[id])
    setPplApi(typedApi)
    setPplApiDescriptor(selectedNetworkInfo.pplChainDescriptor)
  }, [selectedNetworkInfo])

  useEffect(() => {
    if (!pplClient || !pplApi) return

    pplClient?.getChainSpecData().then(async ({ properties }) => {
      if (!properties || !pplCompatibilityToken) return

      const ss58prefix = pplApi.constants.System.SS58Prefix(pplCompatibilityToken)
      const tokenDecimals = Array.isArray(properties?.tokenDecimals)
        ? properties?.tokenDecimals[0]
        : properties?.tokenDecimals

      const tokensymbol = Array.isArray(properties?.tokenSymbol)
        ? properties?.tokenSymbol[0]
        : properties?.tokenSymbol

      setPplChainInfo({
        // some parachains such as interlay have a comma in the format, e.g: "2,042"
        ss58Format: Number(ss58prefix) || 0,
        tokenDecimals: Number(tokenDecimals) || 0,
        tokenSymbol: tokensymbol || ''
      })
    })
  }, [pplClient, pplCompatibilityToken, pplApi])

  return (
    <PplApiContext.Provider
      value={{
        pplClient,
        pplApiDescriptor,
        pplApi,
        pplChainInfo,
        pplCompatibilityToken
      }}
    >
      {children}
    </PplApiContext.Provider>
  )
}

const usePplApi = () => {
  const context = useContext(PplApiContext)
  if (context === undefined) {
    throw new Error('usePplApi must be used within a PplApiContextProvider')
  }
  return context
}

export { PplApiContextProvider, usePplApi }
