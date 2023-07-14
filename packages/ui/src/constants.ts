import { nodesKhalaSVG } from './logos/khalaSVG'
import { chainsKusamaSVG } from './logos/kusamaSVG '
import { localSVG } from './logos/localSVG'
import { chainsPolkadotCircleSVG } from './logos/polkadot-circleSVG'
import { chainsRococoSVG } from './logos/rococoSVG'
import { phalaSVG } from './logos/phalaSVG'
import { nodesAstarPNG } from './logos/astarPNG'
import { nodesAssetHubSVG } from './logos/assetHubSVG'
import { hydradxSVG } from './logos/hydradxSVG'

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
  polkadot: {
    chainId: 'polkadot',
    explorerNetworkName: 'polkadot',
    rpcUrl: 'wss://rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: chainsPolkadotCircleSVG
  } as NetworkInfo,
  kusama: {
    chainId: 'kusama',
    explorerNetworkName: 'kusama',
    rpcUrl: 'wss://kusama-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: chainsKusamaSVG
  } as NetworkInfo,
  'assethub-ksm': {
    chainId: 'assethub-kusama',
    explorerNetworkName: 'assethub-kusama',
    rpcUrl: 'wss://kusama-asset-hub-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: nodesAssetHubSVG
  } as NetworkInfo,
  'assethub-dot': {
    chainId: 'assethub-polkadot',
    explorerNetworkName: 'assethub-polkadot',
    rpcUrl: 'wss://polkadot-asset-hub-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: nodesAssetHubSVG
  } as NetworkInfo,
  astar: {
    chainId: 'astar',
    explorerNetworkName: 'astar',
    rpcUrl: 'wss://rpc.astar.network',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: nodesAstarPNG
  } as NetworkInfo,
  hydradx: {
    chainId: 'hydradx',
    explorerNetworkName: 'hydradx',
    rpcUrl: 'wss://hydradx.api.onfinality.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: hydradxSVG
  } as NetworkInfo,
  phala: {
    chainId: 'phala',
    explorerNetworkName: 'phala',
    rpcUrl: 'wss://api.phala.network/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: phalaSVG
  } as NetworkInfo,
  khala: {
    chainId: 'khala',
    explorerNetworkName: 'khala',
    rpcUrl: 'wss://khala-api.phala.network/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  rococo: {
    chainId: 'rococo',
    explorerNetworkName: 'rococo',
    rpcUrl: 'wss://rococo-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
    logo: chainsRococoSVG
  } as NetworkInfo,
  'rhala testnet': {
    chainId: 'rhala',
    explorerNetworkName: '',
    rpcUrl: 'wss://subbridge-test.phala.network/rhala/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/v/v2/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/v/v2/graphql',
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
