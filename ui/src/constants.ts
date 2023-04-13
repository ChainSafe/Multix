import { chainsKusamaSVG } from "./logos/kusamaSVG"
import { localSVG } from "./logos/localSVG"
import { chainsRococoSVG } from "./logos/rococoSVG"

export const DAPP_NAME = "Multix"
export const ICON_SIZE = 40
export const ICON_THEME = "polkadot"

export interface NetworkInfo {
    explorerNetworkName: string
    rpcUrl: string
    wsGraphqlUrl: string
    httpGraphqlUrl: string
    logo: string
}

export const networkList = {
    "kusama": {
        explorerNetworkName: 'kusama',
        rpcUrl: "wss://kusama-rpc.polkadot.io",
        wsGraphqlUrl: "wss://api.multix.chainsafe.io/graphql",
        httpGraphqlUrl: "https://api.multix.chainsafe.io/graphql",
        logo: chainsKusamaSVG
    } as NetworkInfo,
    "rococo": {
        explorerNetworkName: 'rococo',
        rpcUrl: "wss://rococo-rpc.polkadot.io",
        wsGraphqlUrl: "wss://api.multix.chainsafe.io/graphql",
        httpGraphqlUrl: "https://api.multix.chainsafe.io/graphql",
        logo: chainsRococoSVG
    } as NetworkInfo,
    "local": {
        explorerNetworkName: import.meta.env.VITE_NETWORK_NAME as 'kusama',
        rpcUrl: import.meta.env.VITE_WS_PROVIDER,
        wsGraphqlUrl: import.meta.env.VITE_GRAPHQL_WS_PROVIDER,
        httpGraphqlUrl: import.meta.env.VITE_GRAPHQL_HTTP_PROVIDER,
        logo: localSVG
    }
}

export type SupportedNetworks = keyof typeof networkList