import React, { useMemo } from "react"
import { ApiPromise, WsProvider } from "@polkadot/api"
import { ApiOptions } from "@polkadot/api/types"
import { TypeRegistry } from "@polkadot/types"
import { useState, useEffect, createContext, useContext } from "react"
import { useNetwork } from "./NetworkContext"

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
  types?: ApiOptions["types"]
}

const registry = new TypeRegistry()

export interface IApiContext {
  api?: ApiPromise
  isApiReady: boolean
  chainInfo?: ChainInfoHuman
}

interface ChainInfoHuman {
  ss58Format: number
  tokenDecimals: number
  tokenSymbol: string
}

interface RawChainInfoHuman {
  ss58Format: string
  tokenDecimals: string[]
  tokenSymbol: string[]
}

const ApiContext = createContext<IApiContext | undefined>(undefined)


const ApiContextProvider = ({ children, types }: ApiContextProps) => {
  const { selectedNetworkInfo } = useNetwork()
  const provider = useMemo(() => !!selectedNetworkInfo?.rpcUrl && new WsProvider(selectedNetworkInfo?.rpcUrl), [selectedNetworkInfo])
  const [chainInfo, setChainInfo] = useState<ChainInfoHuman | undefined>()
  const [apiPromise, setApiPromise] = useState<ApiPromise | undefined>()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!provider) return

    // console.log('---> connecting to', provider.endpoint)
    setApiPromise(new ApiPromise({ provider, types }))

    return () => {
      setIsReady(false)
      // console.log('<---disconnecting')
      !!apiPromise && apiPromise.disconnect()
    }

    // prevent an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, types])

  useEffect(() => {

    if (!apiPromise || !provider || isReady) return

    apiPromise.isReady
      .then((api) => {
        if (types) {
          registry.register(types)
        }

        setIsReady(true)
        const info = api.registry.getChainProperties()
        const raw = info?.toHuman() as unknown as RawChainInfoHuman

        setChainInfo({
          ss58Format: Number(raw?.ss58Format) || 0,
          tokenDecimals: Number(raw?.tokenDecimals[0]) || 0,
          tokenSymbol: raw?.tokenSymbol[0] || ""
        })
      })
      .catch(e => console.error(e))
  }, [apiPromise, isReady, provider, types])

  return (
    <ApiContext.Provider
      value={{
        api: apiPromise,
        isApiReady: isReady,
        chainInfo
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

const useApi = () => {
  const context = useContext(ApiContext)
  if (context === undefined) {
    throw new Error("useApi must be used within a ApiContextProvider")
  }
  return context
}

export { ApiContextProvider, useApi }
