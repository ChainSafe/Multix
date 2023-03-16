import React from "react"
import { ApiPromise, WsProvider } from "@polkadot/api"
import { ApiOptions } from "@polkadot/api/types"
import { TypeRegistry } from "@polkadot/types"
import { useState, useEffect, createContext, useContext } from "react"
import { useDidUpdateEffect } from "../hooks/useDidUpdateEffect"

type ApiContextProps = {
  children: React.ReactNode | React.ReactNode[]
  types?: ApiOptions["types"]
}

const registry = new TypeRegistry()

export interface IApiContext {
  api: ApiPromise // From @polkadot/api\
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
  const WS_PROVIDER = import.meta.env.VITE_WS_PROVIDER
  const provider = new WsProvider(WS_PROVIDER)
  const [chainInfo, setChainInfo] = useState<ChainInfoHuman | undefined>()
  const [apiPromise, setApiPromise] = useState<ApiPromise>(
    new ApiPromise({ provider, types })
  )
  const [isReady, setIsReady] = useState(false)

  useDidUpdateEffect(() => {
    // We want to fetch all the information again each time we reconnect. We
    // might be connecting to a different node, or the node might have changed
    // settings.
    // setApiPromise(new ApiPromise({ provider, types, rpc }))
    setApiPromise(new ApiPromise({ provider, types }))

    setIsReady(false)
  })

  useEffect(() => {
    // We want to fetch all the information again each time we reconnect. We
    // might be connecting to a different node, or the node might have changed
    // settings.
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
  }, [apiPromise.isReady, types])


  if (!WS_PROVIDER) {
    console.error("REACT_APP_WS_PROVIDER not set")
    return null
  }

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
