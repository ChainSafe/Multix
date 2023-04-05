import React, { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SupportedNetworks, networkArray, networkList } from "../constants"

const LOCALSTORAGE_SELECTED_NETWORK = "multix.selectedNetwork"

type NetworkContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export interface NetworkInfo {
  rpcUrl: string
  httpGraphqlUrl: string
  wsGraphqlUrl: string
  logo: string
}

export interface IToastContext {
  selectNetwork: (network: SupportedNetworks) => void
  selectedNetworkInfo?: NetworkInfo
  selectedNetwork?: SupportedNetworks
}

const NetworkContext = React.createContext<IToastContext | undefined>(undefined)

const NetworkContextProvider = ({ children }: NetworkContextProps) => {
  const [selectedNetworkInfo, setSelectedNetworkInfo] = useState<NetworkInfo | undefined>()
  const [selectedNetwork, setSelectedNetwork] = useState<SupportedNetworks | undefined>()
  const [searchParams, setSearchParams] = useSearchParams({ network: "" });

  const selectNetwork = useCallback((network: string) => {
    const newSelectedNetwork = networkList[network]

    if (!newSelectedNetwork) return

    setSelectedNetworkInfo(newSelectedNetwork)
    setSelectedNetwork(network)
    setSearchParams({ network })
    localStorage.setItem(LOCALSTORAGE_SELECTED_NETWORK, network)
  }, [setSearchParams])

  useEffect(() => {
    if (!selectedNetwork) {
      const networkParam = searchParams.get("network")

      if (!!networkParam && networkArray.includes(networkParam as SupportedNetworks)) {
        selectNetwork(networkParam as SupportedNetworks)
        return
      }

      const previouslysSelectedNetwork = localStorage.getItem(LOCALSTORAGE_SELECTED_NETWORK)
      if (!!previouslysSelectedNetwork && previouslysSelectedNetwork.includes(networkParam as SupportedNetworks)) {
        selectNetwork(networkParam as SupportedNetworks)
        return
      }

      selectNetwork("rococo")
    }
  }, [searchParams, selectNetwork, selectedNetwork])


  return (
    <NetworkContext.Provider
      value={{
        selectNetwork,
        selectedNetwork,
        selectedNetworkInfo
      }}
    >
      {children}
    </NetworkContext.Provider>
  )
}

const useNetwork = () => {
  const context = React.useContext(NetworkContext)
  if (context === undefined) {
    throw new Error("useNetwork must be used within a NetworkProvider")
  }
  return context
}

export { NetworkContextProvider, useNetwork }
