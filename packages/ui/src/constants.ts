import { nodesKhalaSVG } from './logos/khalaSVG'
import { chainsKusamaSVG } from './logos/kusamaSVG '
import { localSVG } from './logos/localSVG'
import { chainsPolkadotCircleSVG } from './logos/polkadot-circleSVG'
import { chainsRococoSVG } from './logos/rococoSVG'
import { phalaSVG } from './logos/phalaSVG'

export const DAPP_NAME = 'Multix'
export const ICON_SIZE = 40
export const ICON_THEME = 'polkadot'

export interface NetworkInfo {
  explorerNetworkName?: string
  rpcUrl: string
  wsGraphqlUrl: string
  httpGraphqlUrl: string
  logo: string
}

export const networkList = {
  kusama: {
    explorerNetworkName: 'kusama',
    rpcUrl: 'wss://kusama-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://kusama.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://kusama.multix.chainsafe.io/graphql',
    logo: chainsKusamaSVG
  } as NetworkInfo,
  polkadot: {
    explorerNetworkName: 'polkadot',
    rpcUrl: 'wss://rpc.polkadot.io',
    wsGraphqlUrl: 'wss://polkadot.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://polkadot.multix.chainsafe.io/graphql',
    logo: chainsPolkadotCircleSVG
  } as NetworkInfo,
  rococo: {
    explorerNetworkName: 'rococo',
    rpcUrl: 'wss://rococo-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://rococo.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://rococo.multix.chainsafe.io/graphql',
    logo: chainsRococoSVG
  } as NetworkInfo,
  phala: {
    explorerNetworkName: 'phala',
    rpcUrl: 'wss://api.phala.network/ws',
    wsGraphqlUrl: 'wss://phala.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://phala.multix.chainsafe.io/graphql',
    logo: phalaSVG
  } as NetworkInfo,
  khala: {
    explorerNetworkName: 'khala',
    rpcUrl: 'wss://khala-api.phala.network/ws',
    wsGraphqlUrl: 'wss://khala.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://khala.multix.chainsafe.io/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  'rhala testnet': {
    explorerNetworkName: '',
    rpcUrl: 'wss://subbridge-test.phala.network/rhala/ws',
    wsGraphqlUrl: 'wss://api.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://api.multix.chainsafe.io/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  local: {
    explorerNetworkName: import.meta.env.VITE_NETWORK_NAME as 'kusama',
    rpcUrl: import.meta.env.VITE_WS_PROVIDER,
    wsGraphqlUrl: import.meta.env.VITE_GRAPHQL_WS_PROVIDER,
    httpGraphqlUrl: import.meta.env.VITE_GRAPHQL_HTTP_PROVIDER,
    logo: localSVG
  }
}

export type SupportedNetworks = keyof typeof networkList
