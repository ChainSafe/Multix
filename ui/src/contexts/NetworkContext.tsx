import React, { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const LOCALSTORAGE_SELECTED_NETWORK = "multix.selectedNetwork"

type NetworkContextProps = {
    children: React.ReactNode | React.ReactNode[]
}

export const networkArray = ["kusama", "rococo"] as const
export type SupportedNetworks = typeof networkArray[number]
export interface NetworkInfo {
    rpcUrl: string
    httpGraphqlUrl: string
    wsGraphqlUrl: string
}

const networkList: Record<SupportedNetworks, NetworkInfo> = {
    "kusama": {
        rpcUrl: "wss://kusama-rpc.polkadot.io",
        httpGraphqlUrl: "http://localhost:4350/graphql",
        wsGraphqlUrl: "ws://localhost:4350/graphql"
    },
    "rococo": {
        rpcUrl: "wss://rococo-rpc.polkadot.io",
        httpGraphqlUrl: "http://localhost:4350/graphql",
        wsGraphqlUrl: "ws://localhost:4350/graphql"
    }
}

export interface IToastContext {
    selectNetwork: (network: SupportedNetworks) => void
    selectedNetworkInfo?: NetworkInfo
}

const NetworkContext = React.createContext<IToastContext | undefined>(undefined)

const NetworkContextProvider = ({ children }: NetworkContextProps) => {
    const [selectedNetworkInfo, setSelectedNetworkInfo] = useState<NetworkInfo | undefined>()
    const [selectedNetwork, setSelectedNetwork] = useState<SupportedNetworks | undefined>()
    const [searchParams, setSearchParams] = useSearchParams({ network: "" });

    const selectNetwork = useCallback((network: SupportedNetworks) => {
        setSelectedNetworkInfo(networkList[network])
        setSelectedNetwork(selectedNetwork)
        setSearchParams({ network })
        localStorage.setItem(LOCALSTORAGE_SELECTED_NETWORK, network)
    }, [selectedNetwork, setSearchParams])

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
