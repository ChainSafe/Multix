import { nodesKhalaSVG } from './logos/khalaSVG'
import { chainsKusamaSVG } from './logos/kusamaSVG '
import { localSVG } from './logos/localSVG'
import { chainsPolkadotCircleSVG } from './logos/polkadot-circleSVG'
import { chainsRococoSVG } from './logos/rococoSVG'
import { phalaSVG } from './logos/phalaSVG'
import { nodesAstarPNG } from './logos/astarPNG'
import { nodesAssetHubSVG } from './logos/assetHubSVG'
import { hydradxSVG } from './logos/hydradxSVG'
// import { chainsAmplitudeSVG } from './logos/amplitudeSVG'
// import { chainsPendulumSVG } from './logos/pendulumSVG'
// import { nodesWestendColourSVG } from './logos/westend_colourSVG'
import { chainsAcalaSVG } from './logos/acalaSVG'
import { nodesBifrostSVG } from './logos/bifrostSVG'
import { nodesInterlaySVG } from './logos/interlaySVG'

export const DAPP_NAME = 'Multix'
export const ICON_SIZE_LARGE = 50
export const ICON_SIZE_MEDIUM = 40
export const ICON_SIZE_SMALL = 30
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
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-polkadot/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-polkadot/v/v1/graphql',
    logo: chainsPolkadotCircleSVG
  } as NetworkInfo,
  kusama: {
    chainId: 'kusama',
    explorerNetworkName: 'kusama',
    rpcUrl: 'wss://kusama-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-kusama/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-kusama/v/v1/graphql',
    logo: chainsKusamaSVG
  } as NetworkInfo,
  'assethub-dot': {
    chainId: 'assethub-polkadot',
    explorerNetworkName: 'assethub-polkadot',
    rpcUrl: 'wss://polkadot-asset-hub-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-assethub-polkadot/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-assethub-polkadot/v/v1/graphql',
    logo: nodesAssetHubSVG
  } as NetworkInfo,
  'assethub-ksm': {
    chainId: 'assethub-kusama',
    explorerNetworkName: 'assethub-kusama',
    rpcUrl: 'wss://kusama-asset-hub-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-assethub-kusama/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-assethub-kusama/v/v1/graphql',
    logo: nodesAssetHubSVG
  } as NetworkInfo,
  acala: {
    chainId: 'acala',
    explorerNetworkName: 'acala',
    rpcUrl: 'wss://acala-rpc-3.aca-api.network/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-2/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-2/v/v1/graphql',
    logo: chainsAcalaSVG
  } as NetworkInfo,
  // amplitude: {
  //   chainId: 'amplitude',
  //   explorerNetworkName: 'amplitude',
  //   rpcUrl: 'wss://rpc-amplitude.pendulumchain.tech',
  //   wsGraphqlUrl: 'wss://squid.subsquid.io/multix-2/v/v1/graphql',
  //   httpGraphqlUrl: 'https://squid.subsquid.io/multix-2/v/v1/graphql',
  //   logo: chainsAmplitudeSVG
  // } as NetworkInfo,
  astar: {
    chainId: 'astar',
    explorerNetworkName: 'astar',
    rpcUrl: 'wss://rpc.astar.network',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/graphql',
    logo: nodesAstarPNG
  } as NetworkInfo,
  'bifrost-dot': {
    chainId: 'bifrost-polkadot',
    explorerNetworkName: 'bifrost',
    rpcUrl: 'wss://bifrost-polkadot.api.onfinality.io/public-ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-2/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-2/v/v1/graphql',
    logo: nodesBifrostSVG
  } as NetworkInfo,
  hydradx: {
    chainId: 'hydradx',
    explorerNetworkName: 'hydradx',
    rpcUrl: 'wss://hydradx-rpc.dwellir.com',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/graphql',
    logo: hydradxSVG
  } as NetworkInfo,
  interlay: {
    chainId: 'interlay',
    explorerNetworkName: 'interlay',
    rpcUrl: 'wss://interlay.api.onfinality.io/public-ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-2/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-2/v/v1/graphql',
    logo: nodesInterlaySVG
  } as NetworkInfo,
  khala: {
    chainId: 'khala',
    explorerNetworkName: 'khala',
    rpcUrl: 'wss://khala-api.phala.network/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  // pendulum: {
  //   chainId: 'pendulum',
  //   explorerNetworkName: 'pendulum',
  //   rpcUrl: 'wss://rpc-pendulum.prd.pendulumchain.tech',
  //   wsGraphqlUrl: 'wss://squid.subsquid.io/multix-2/v/v1/graphql',
  //   httpGraphqlUrl: 'https://squid.subsquid.io/multix-2/v/v1/graphql',
  //   logo: chainsPendulumSVG
  // } as NetworkInfo,
  phala: {
    chainId: 'phala',
    explorerNetworkName: 'phala',
    rpcUrl: 'wss://api.phala.network/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/graphql',
    logo: phalaSVG
  } as NetworkInfo,
  'rhala testnet': {
    chainId: 'rhala',
    explorerNetworkName: '',
    rpcUrl: 'wss://subbridge-test.phala.network/rhala/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  rococo: {
    chainId: 'rococo',
    explorerNetworkName: 'rococo',
    rpcUrl: 'wss://rococo-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-rococo/v/v1/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-rococo/v/v1/graphql',
    logo: chainsRococoSVG
  } as NetworkInfo,
  // westend: {
  //   chainId: 'westend',
  //   explorerNetworkName: 'westend',
  //   rpcUrl: 'wss://westend-rpc.polkadot.io',
  //   wsGraphqlUrl: 'wss://squid.subsquid.io/multix-2/v/v1/graphql',
  //   httpGraphqlUrl: 'https://squid.subsquid.io/multix-2/v/v1/graphql',
  //   logo: nodesWestendColourSVG
  // } as NetworkInfo,
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
