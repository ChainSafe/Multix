import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { useNetwork } from './NetworkContext'
import { CompatibilityToken, createClient, PolkadotClient, TypedApi } from 'polkadot-api'
import { getWsProvider } from 'polkadot-api/ws-provider/web'
import { dotPpl, ksmPpl, pasPpl, wesPpl } from '@polkadot-api/descriptors'

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

type BaseTypes = {
  pplChainInfo?: ChainInfoHuman
  pplClient?: PolkadotClient
  pplCompatibilityToken?: CompatibilityToken
}

export type IPplApiContext =
  | ({
      pplApi?: TypedApi<typeof dotPpl>
      pplApiDescriptor: 'dotPpl'
    } & BaseTypes)
  | ({
      pplApi?: TypedApi<typeof ksmPpl>
      pplApiDescriptor: 'ksmPpl'
    } & BaseTypes)
  | ({
      pplApi?: TypedApi<typeof pasPpl>
      pplApiDescriptor: 'pasPpl'
    } & BaseTypes)
  | ({
      pplApi?: TypedApi<typeof wesPpl>
      pplApiDescriptor: 'wesPpl'
    } & BaseTypes)

export interface ChainInfoHuman {
  ss58Format: number
  tokenDecimals: number
  tokenSymbol: string
}

const PplApiContext = createContext<IPplApiContext | undefined>(undefined)

const PplApiContextProvider = ({ children }: ApiContextProps) => {
  const { selectedNetworkInfo } = useNetwork()
  const [pplChainInfo, setPplChainInfo] = useState<ChainInfoHuman | undefined>()
  const [pplApi, setPplApi] = useState<IPplApiContext['pplApi']>()
  const [client, setClient] = useState<IPplApiContext['pplClient']>()
  const [compatibilityToken, setCompatibilityToken] =
    useState<IPplApiContext['pplCompatibilityToken']>()

  useEffect(() => {
    if (!pplApi) return

    pplApi.compatibilityToken.then(setCompatibilityToken).catch(console.error)
  }, [pplApi])

  useEffect(() => {
    if (!selectedNetworkInfo?.pplChainRpcUrls) return

    let cl: PolkadotClient | undefined
    let typedApi: IPplApiContext['pplApi']

    switch (selectedNetworkInfo?.chainId) {
      case 'kusama':
        cl = createClient(getWsProvider(selectedNetworkInfo.pplChainRpcUrls))
        typedApi = cl.getTypedApi(ksmPpl)
        break
      case 'polkadot':
        cl = createClient(getWsProvider(selectedNetworkInfo.pplChainRpcUrls))
        typedApi = cl.getTypedApi(dotPpl)
        break
      case 'paseo':
        cl = createClient(getWsProvider(selectedNetworkInfo.pplChainRpcUrls))
        typedApi = cl.getTypedApi(pasPpl)
        break
      case 'westend':
        cl = createClient(getWsProvider(selectedNetworkInfo.pplChainRpcUrls))
        typedApi = cl.getTypedApi(wesPpl)
        break
    }

    if (!cl || !typedApi) return

    setClient(cl)
    setPplApi(typedApi)
  }, [selectedNetworkInfo])

  useEffect(() => {
    if (!client || !pplApi) return

    client?.getChainSpecData().then(async ({ properties }) => {
      if (!properties || !compatibilityToken) return

      const ss58prefix = pplApi.constants.System.SS58Prefix(compatibilityToken)
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
  }, [client, compatibilityToken, pplApi])

  return (
    <PplApiContext.Provider
      value={{
        pplClient: client,
        // @ts-ignore
        pplApi,
        pplChainInfo,
        pplCompatibilityToken: compatibilityToken
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
