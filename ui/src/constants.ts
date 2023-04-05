import { NetworkInfo } from "./contexts/NetworkContext"
import { chainsKusamaSVG } from "./logos/kusamaSVG"
import { chainsRococoSVG } from "./logos/rococoSVG"

export const DAPP_NAME = "Multix"
export const ICON_SIZE = 40
export const ICON_THEME = "polkadot"

export const networkList = {
    "kusama": {
        rpcUrl: "wss://kusama-rpc.polkadot.io",
        httpGraphqlUrl: "http://localhost:4350/graphql",
        wsGraphqlUrl: "ws://localhost:4350/graphql",
        logo: chainsKusamaSVG
    } as NetworkInfo,
    "rococo": {
        rpcUrl: "wss://rococo-rpc.polkadot.io",
        httpGraphqlUrl: "http://localhost:4350/graphql",
        wsGraphqlUrl: "ws://localhost:4350/graphql",
        logo: chainsRococoSVG
    } as NetworkInfo
}

export type SupportedNetworks = keyof typeof networkList