import React, { useMemo } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { useState, useEffect, createContext, useContext } from 'react'
import { useNetwork } from './NetworkContext'
import '@polkadot/api-augment'

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export interface IApiContext {
  pplApi?: false | ApiPromise
  pplChainInfo?: ChainInfoHuman
}

export interface ChainInfoHuman {
  ss58Format: number
  tokenDecimals: number
  tokenSymbol: string
}

interface RawChainInfoHuman {
  ss58Format: string
  tokenDecimals: string[]
  tokenSymbol: string[]
}

const PplApiContext = createContext<IApiContext | undefined>(undefined)

const PplApiContextProvider = ({ children }: ApiContextProps) => {
  const { selectedNetworkInfo } = useNetwork()
  const [chainInfo, setChainInfo] = useState<ChainInfoHuman | undefined>()
  const [pplApiPromise, setPplApiPromise] = useState<ApiPromise | undefined>()
  const [isPplApiReady, setIsPplApiReady] = useState(false)
  const provider = useMemo(
    () =>
      !!selectedNetworkInfo?.pplChainRpcUrl && new WsProvider(selectedNetworkInfo?.pplChainRpcUrl),
    [selectedNetworkInfo]
  )

  useEffect(() => {
    if (!provider) return

    // console.log('---> connecting to', provider.endpoint)
    setIsPplApiReady(false)
    const pplApi = new ApiPromise({ provider })
    pplApi.isReady.then((newApi) => setPplApiPromise(newApi)).catch(console.error)

    return () => {
      // console.log('<---disconnecting')
      setIsPplApiReady(false)
      !!pplApi && pplApi.disconnect()
      setPplApiPromise(undefined)
    }

    // prevent an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider])

  useEffect(() => {
    if (!pplApiPromise) return

    pplApiPromise.isReady
      .then((pplApi) => {
        setIsPplApiReady(true)

        const info = pplApi.registry.getChainProperties()
        const raw = info?.toHuman() as unknown as RawChainInfoHuman
        setChainInfo({
          // some parachains such as interlay have a comma in the format, e.g: "2,042"
          ss58Format: Number(raw?.ss58Format.replace(',', '')) || 0,
          tokenDecimals: Number(raw?.tokenDecimals[0]) || 0,
          tokenSymbol: raw?.tokenSymbol[0] || ''
        })
      })
      .catch(console.error)
  }, [pplApiPromise])

  return (
    <PplApiContext.Provider
      value={{
        pplApi: isPplApiReady && pplApiPromise,
        pplChainInfo: chainInfo
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
