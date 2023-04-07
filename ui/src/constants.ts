import { NetworkInfo } from "./contexts/NetworkContext"
import { chainsKusamaSVG } from "./logos/kusamaSVG"
import { chainsRococoSVG } from "./logos/rococoSVG"

export const DAPP_NAME = "Multix"
export const ICON_SIZE = 40
export const ICON_THEME = "polkadot"

export const networkList = {
    "kusama": {
        rpcUrl: "wss://kusama-rpc.polkadot.io",
        httpGraphqlUrl: "https://api.multix.chainsafe.io/graphql",
        wsGraphqlUrl: "wss://api.multix.chainsafe.io/graphql",
        logo: chainsKusamaSVG
    } as NetworkInfo,
    "rococo": {
        rpcUrl: "wss://rococo-rpc.polkadot.io",
        httpGraphqlUrl: "https://api.multix.chainsafe.io/graphql",
        wsGraphqlUrl: "wss://api.multix.chainsafe.io/graphql",
        logo: chainsRococoSVG
    } as NetworkInfo
}

export type SupportedNetworks = keyof typeof networkList