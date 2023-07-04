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
  chainId: string
  explorerNetworkName?: string
  rpcUrl: string
  wsGraphqlUrl: string
  httpGraphqlUrl: string
  logo: string
}

export const PAYMENT_INFO_ACCOUNT = '5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs'

export const networkList = {
  kusama: {
    chainId: 'kusama',
    explorerNetworkName: 'kusama',
    rpcUrl: 'wss://kusama-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://kusama.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://kusama.multix.chainsafe.io/graphql',
    logo: chainsKusamaSVG
  } as NetworkInfo,
  polkadot: {
    chainId: 'polkadot',
    explorerNetworkName: 'polkadot',
    rpcUrl: 'wss://rpc.polkadot.io',
    wsGraphqlUrl: 'wss://polkadot.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://polkadot.multix.chainsafe.io/graphql',
    logo: chainsPolkadotCircleSVG
  } as NetworkInfo,
  rococo: {
    chainId: 'rococo',
    explorerNetworkName: 'rococo',
    rpcUrl: 'wss://rococo-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://rococo.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://rococo.multix.chainsafe.io/graphql',
    logo: chainsRococoSVG
  } as NetworkInfo,
  phala: {
    chainId: 'phala',
    explorerNetworkName: 'phala',
    rpcUrl: 'wss://api.phala.network/ws',
    wsGraphqlUrl: 'wss://phala.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://phala.multix.chainsafe.io/graphql',
    logo: phalaSVG
  } as NetworkInfo,
  khala: {
    chainId: 'khala',
    explorerNetworkName: 'khala',
    rpcUrl: 'wss://khala-api.phala.network/ws',
    wsGraphqlUrl: 'wss://khala.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://khala.multix.chainsafe.io/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  'rhala testnet': {
    chainId: 'rhala',
    explorerNetworkName: '',
    rpcUrl: 'wss://subbridge-test.phala.network/rhala/ws',
    wsGraphqlUrl: 'wss://api.multix.chainsafe.io/graphql',
    httpGraphqlUrl: 'https://api.multix.chainsafe.io/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  local: {
    chainId: import.meta.env.VITE_CHAIN_ID,
    explorerNetworkName: import.meta.env.VITE_NETWORK_NAME as 'kusama',
    rpcUrl: import.meta.env.VITE_WS_PROVIDER,
    wsGraphqlUrl: import.meta.env.VITE_GRAPHQL_WS_PROVIDER,
    httpGraphqlUrl: import.meta.env.VITE_GRAPHQL_HTTP_PROVIDER,
    logo: localSVG
  }
}

export type SupportedNetworks = keyof typeof networkList
