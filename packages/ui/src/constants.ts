// import { nodesAstarPNG } from './logos/astarPNG'
// import { nodesInterlaySVG } from './logos/interlaySVG'
// import { nodesMoonriverSVG } from './logos/moonriverSVG'
// import { nodesMoonbeamSVG } from './logos/moonbeamSVG'
// import { nodesKiltPNG } from './logos/kiltPNG'
// import { chainsPendulumSVG } from './logos/pendulumSVG'
// import { chainsAmplitudeSVG } from './logos/amplitudeSVG'
// import { nodesJoystreamSVG } from './logos/joystreamSVG'
// import { chainsWatrPNG } from './logos/watrPNG'
import { nodesKhalaSVG } from './logos/khalaSVG'
import { chainsKusamaSVG } from './logos/kusamaSVG '
import { localSVG } from './logos/localSVG'
import { chainsPolkadotCircleSVG } from './logos/polkadot-circleSVG'
import { phalaSVG } from './logos/phalaSVG'
import { nodesAssetHubSVG } from './logos/assetHubSVG'
import { hydrationSVG } from './logos/hydrationSVG'
import { nodesWestendColourSVG } from './logos/westend_colourSVG'
import { chainsAcalaSVG } from './logos/acalaSVG'
import { nodesBifrostSVG } from './logos/bifrostSVG'
import paseoSVG from './logos/paseoSVG.svg'
import { nodesCoretimeSVG } from './logos/coretimeSVG'
import { polimecSVG } from './logos/polimecSVG'
import usdc from './logos/usdc.svg'
import usdt from './logos/usdt.svg'
import { DESCRIPTORS } from './types'
import { PplDescriptorKeys } from './contexts/PeopleChainApiContext'

export const DAPP_NAME = 'Multix'
export const ICON_SIZE_LARGE = 92
export const ICON_SIZE_MEDIUM = 40
export const ICON_SIZE_SMALL = 30
export const DEFAULT_ICON_THEME = 'polkadot'
export const AH_SUPPORTED_ASSETS = [
  { assetId: 1984, logo: usdt },
  { assetId: 1337, logo: usdc }
]

export interface NetworkInfo {
  chainId: string
  explorerNetworkName?: string
  rpcUrls: string[]
  httpGraphqlUrl: string
  networkLogo: string
  nativeAssetLogo?: string
  pplChainRpcUrls?: string[]
  descriptor: keyof typeof DESCRIPTORS
  pplChainDescriptor?: PplDescriptorKeys
}

export const HTTP_GRAPHQL_URL = `https://chainsafe.squids.live/multix-arrow@v7/api/graphql`

export const PAYMENT_INFO_ACCOUNT = '5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs'

const polkadotPplChains = [
  'wss://sys.ibp.network/people-polkadot',
  'wss://people-polkadot.dotters.network',
  'wss://rpc-people-polkadot.luckyfriday.io',
  'wss://polkadot-people-rpc.polkadot.io'
  // 'wss://people-polkadot.public.curie.radiumblock.co/ws'
]
const kusamaPplChains = [
  'wss://people-kusama-rpc.dwellir.com',
  'wss://sys.ibp.network/people-kusama',
  'wss://people-kusama.dotters.network',
  'wss://rpc-people-kusama.luckyfriday.io',
  'wss://kusama-people-rpc.polkadot.io'
  // 'wss://ksm-rpc.stakeworld.io/people'
]
const westendPplChains = [
  'wss://people-westend-rpc.dwellir.com',
  'wss://sys.ibp.network/people-westend',
  'wss://people-westend.dotters.network',
  'wss://westend-people-rpc.polkadot.io'
]

export const networkList: Record<string, NetworkInfo> = {
  polkadot: {
    chainId: 'polkadot',
    explorerNetworkName: 'polkadot',
    pplChainRpcUrls: polkadotPplChains,
    rpcUrls: [
      'wss://rpc.ibp.network/polkadot',
      'wss://rpc-polkadot.luckyfriday.io',
      'wss://polkadot.dotters.network',
      'wss://polkadot-rpc.dwellir.com',
      'wss://polkadot-rpc-tn.dwellir.com'
      // 'wss://polkadot.api.onfinality.io/public-ws'
      // 'wss://polkadot-rpc.publicnode.com',
      // 'wss://polkadot-public-rpc.blockops.network/ws',
      // 'wss://polkadot.public.curie.radiumblock.co/ws',
      // 'wss://rockx-dot.w3node.com/polka-public-dot/ws',
      // 'wss://dot-rpc.stakeworld.io',
      // 'wss://polkadot.rpc.subquery.network/public/ws'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: chainsPolkadotCircleSVG,
    descriptor: 'dot',
    pplChainDescriptor: 'dotPpl'
  },
  kusama: {
    chainId: 'kusama',
    explorerNetworkName: 'kusama',
    pplChainRpcUrls: kusamaPplChains,
    rpcUrls: [
      // 'wss://kusama-rpc.publicnode.com',
      'wss://kusama-rpc.dwellir.com',
      'wss://kusama-rpc-tn.dwellir.com',
      'wss://rpc.ibp.network/kusama',
      'wss://kusama.dotters.network',
      'wss://rpc-kusama.luckyfriday.io'
      // 'wss://kusama.api.onfinality.io/public-ws',
      // 'wss://rockx-ksm.w3node.com/polka-public-ksm/ws',
      // 'wss://ksm-rpc.stakeworld.io',
      // 'wss://kusama.rpc.subquery.network/public/ws'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: chainsKusamaSVG,
    descriptor: 'ksm',
    pplChainDescriptor: 'ksmPpl'
  },
  'asset-hub-polkadot': {
    chainId: 'asset-hub-polkadot',
    explorerNetworkName: 'assethub-polkadot',
    rpcUrls: [
      // 'wss://asset-hub-polkadot-rpc.dwellir.com'
      // 'wss://statemint-rpc-tn.dwellir.com',
      'wss://sys.ibp.network/asset-hub-polkadot'
      // 'wss://asset-hub-polkadot.dotters.network',
      // 'wss://rpc-asset-hub-polkadot.luckyfriday.io'
      // 'wss://statemint.api.onfinality.io/public-ws',
      // 'wss://polkadot-asset-hub-rpc.polkadot.io',
      // 'wss://statemint.public.curie.radiumblock.co/ws',
      // 'wss://dot-rpc.stakeworld.io/assethub'
    ],
    pplChainRpcUrls: polkadotPplChains,
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    nativeAssetLogo: chainsPolkadotCircleSVG,
    networkLogo: nodesAssetHubSVG,
    descriptor: 'dotAssetHub',
    pplChainDescriptor: 'dotPpl'
  },
  'asset-hub-kusama': {
    chainId: 'asset-hub-kusama',
    explorerNetworkName: 'assethub-kusama',
    rpcUrls: [
      'wss://asset-hub-kusama-rpc.dwellir.com',
      'wss://statemine-rpc-tn.dwellir.com',
      'wss://sys.ibp.network/statemine',
      'wss://asset-hub-kusama.dotters.network',
      'wss://rpc-asset-hub-kusama.luckyfriday.io',
      'wss://kusama-asset-hub-rpc.polkadot.io'
      // 'wss://statemine.public.curie.radiumblock.co/ws',
      // 'wss://ksm-rpc.stakeworld.io/assethub'
    ],
    pplChainRpcUrls: kusamaPplChains,
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    nativeAssetLogo: chainsKusamaSVG,
    networkLogo: nodesAssetHubSVG,
    descriptor: 'ksmAssetHub',
    pplChainDescriptor: 'ksmPpl'
  },
  'coretime-polkadot': {
    chainId: 'coretime-polkadot',
    explorerNetworkName: 'coretime-polkadot',
    rpcUrls: [
      'wss://sys.ibp.network/coretime-polkadot',
      'wss://coretime-polkadot.dotters.network',
      'wss://polkadot-coretime-rpc.polkadot.io'
    ],
    pplChainRpcUrls: polkadotPplChains,
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: nodesCoretimeSVG,
    descriptor: 'coretimeDot',
    pplChainDescriptor: 'dotPpl'
  },
  // 'coretime-kusama': {
  //   chainId: 'coretime-kusama',
  //   explorerNetworkName: 'coretime-kusama',
  //   rpcUrls: [
  //     'wss://coretime-kusama-rpc.dwellir.com',
  //     'wss://sys.ibp.network/coretime-kusama',
  //     'wss://coretime-kusama.dotters.network',
  //     'wss://rpc-coretime-kusama.luckyfriday.io',
  //     'wss://kusama-coretime-rpc.polkadot.io'
  //     // 'wss://ksm-rpc.stakeworld.io/coretime'
  //   ],
  //   pplChainRpcUrls: kusamaPplChains,
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesCoretimeSVG,
  //   descriptor: coretimeKsm
  // },
  acala: {
    chainId: 'acala',
    explorerNetworkName: 'acala',
    rpcUrls: [
      'wss://acala-rpc-3.aca-api.network/ws',
      'wss://acala-rpc.dwellir.com',
      'wss://acala-polkadot.api.onfinality.io/public-ws'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: chainsAcalaSVG,
    descriptor: 'acala'
  },
  // astar: {
  //   chainId: 'astar',
  //   explorerNetworkName: 'astar',
  //   rpcUrls: [
  //     'wss://rpc.astar.network',
  //     'wss://1rpc.io/astr',
  //     'wss://astar-rpc.dwellir.com',
  //     'wss://astar.api.onfinality.io/public-ws',
  //     'wss://astar.public.curie.radiumblock.co/ws'
  //   ],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesAstarPNG
  // },
  'bifrost-dot': {
    chainId: 'bifrost-polkadot',
    explorerNetworkName: 'bifrost',
    rpcUrls: [
      'wss://bifrost-polkadot-rpc.dwellir.com',
      'wss://bifrost-polkadot.ibp.network',
      'wss://bifrost-polkadot.dotters.network',
      'wss://hk.p.bifrost-rpc.liebi.com/ws',
      'wss://eu.bifrost-polkadot-rpc.liebi.com/ws',
      'wss://bifrost.public.curie.radiumblock.co/ws'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: nodesBifrostSVG,
    descriptor: 'bifrostDot'
  },
  hydration: {
    chainId: 'hydradx',
    explorerNetworkName: 'hydration',
    rpcUrls: [
      'wss://rpc.helikon.io/hydradx',
      'wss://hydradx-rpc.dwellir.com',
      'wss://rpc.hydradx.cloud',
      'wss://hydradx.paras.ibp.network',
      'wss://hydration.dotters.network'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: hydrationSVG,
    descriptor: 'hydration'
  },
  // interlay: {
  //   chainId: 'interlay',
  //   explorerNetworkName: 'interlay',
  //   rpcUrls: ['wss://interlay-rpc.dwellir.com'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesInterlaySVG,
  // },
  khala: {
    chainId: 'khala',
    explorerNetworkName: 'khala',
    rpcUrls: [
      'wss://khala-rpc.dwellir.com',
      'wss://rpc.helikon.io/khala',
      'wss://khala.api.onfinality.io/public-ws',
      'wss://khala-api.phala.network/ws',
      'wss://khala.public.curie.radiumblock.co/ws'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: nodesKhalaSVG,
    descriptor: 'khala'
  },
  // moonbeam: {
  //   chainId: 'moonbeam',
  //   explorerNetworkName: 'moonbeam',
  //   rpcUrls: ['wss://moonbeam-rpc.dwellir.com'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesMoonbeamSVG
  // },
  // moonriver: {
  //   chainId: 'moonriver',
  //   explorerNetworkName: 'moonriver',
  //   rpcUrls: ['wss://moonriver-rpc.dwellir.com'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesMoonriverSVG
  // },
  phala: {
    chainId: 'phala',
    explorerNetworkName: 'phala',
    rpcUrls: [
      'wss://phala-rpc.dwellir.com',
      'wss://rpc.helikon.io/phala',
      'wss://phala.api.onfinality.io/public-ws',
      'wss://api.phala.network/ws',
      'wss://phala.public.curie.radiumblock.co/ws'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: phalaSVG,
    descriptor: 'phala'
  },
  // 'rhala testnet': {
  //   chainId: 'rhala',
  //   explorerNetworkName: '',
  //   rpcUrls: ['wss://rhala-node.phala.network/ws'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesKhalaSVG
  // },
  // rococo: {
  //   chainId: 'rococo',
  //   explorerNetworkName: 'rococo',
  //   rpcUrl: ['wss://rococo-rpc.polkadot.io'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: chainsRococoSVG
  // },
  westend: {
    chainId: 'westend',
    explorerNetworkName: 'westend',
    pplChainRpcUrls: westendPplChains,
    rpcUrls: [
      'wss://westend-rpc.polkadot.io',
      'wss://westend-rpc.dwellir.com',
      'wss://westend-rpc-tn.dwellir.com',
      'wss://rpc.ibp.network/westend',
      'wss://westend.dotters.network',
      'wss://westend.api.onfinality.io/public-ws',
      'wss://westend.public.curie.radiumblock.co/ws'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: nodesWestendColourSVG,
    descriptor: 'westend',
    pplChainDescriptor: 'wesPpl'
  },
  'asset-hub-westend': {
    chainId: 'asset-hub-westend',
    explorerNetworkName: 'assethub-westend',
    rpcUrls: [
      'wss://asset-hub-westend-rpc.dwellir.com',
      'wss://sys.ibp.network/asset-hub-westend',
      'wss://asset-hub-westend.dotters.network',
      'wss://westend-asset-hub-rpc.polkadot.io'
    ],
    pplChainRpcUrls: westendPplChains,
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    nativeAssetLogo: nodesWestendColourSVG,
    networkLogo: nodesAssetHubSVG,
    descriptor: 'wesAssetHub',
    pplChainDescriptor: 'wesPpl'
  },
  paseo: {
    chainId: 'paseo',
    explorerNetworkName: 'paseo',
    rpcUrls: [
      'wss://pas-rpc.stakeworld.io',
      'wss://paseo-rpc.dwellir.com',
      'wss://paseo.rpc.amforc.com',
      'wss://rpc.ibp.network/paseo',
      'wss://paseo.dotters.network'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    pplChainRpcUrls: ['wss://people-paseo.rpc.amforc.com', 'wss://people-paseo.dotters.network'],
    networkLogo: paseoSVG,
    descriptor: 'paseo',
    pplChainDescriptor: 'pasPpl'
  },
  // amplitude: {
  //   chainId: 'amplitude',
  //   explorerNetworkName: 'amplitude',
  //   rpcUrls: ['wss://rpc-amplitude.pendulumchain.tech'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: chainsAmplitudeSVG
  // },
  // pendulum: {
  //   chainId: 'pendulum',
  //   explorerNetworkName: 'pendulum',
  //   rpcUrls: ['wss://rpc-pendulum.prd.pendulumchain.tech'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: chainsPendulumSVG
  // },
  // joystream: {
  //   chainId: 'joystream',
  //   explorerNetworkName: 'joystream',
  //   rpcUrls: ['wss://rpc.joystream.org'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesJoystreamSVG
  // },
  // watr: {
  //   chainId: 'watr',
  //   explorerNetworkName: '',
  //   rpcUrls: ['wss://watr-rpc.watr-api.network'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: chainsWatrPNG
  // },
  // kilt: {
  //   chainId: 'kilt',
  //   explorerNetworkName: 'spiritnet',
  //   rpcUrls: ['wss://spiritnet.kilt.io'],
  //   httpGraphqlUrl: HTTP_GRAPHQL_URL,
  //   logo: nodesKiltPNG
  // },
  polimec: {
    chainId: 'polimec',
    explorerNetworkName: 'polimec',
    rpcUrls: [
      'wss://polimec.rpc.amforc.com',
      'wss://rpc.helikon.io/polimec',
      'wss://polimec.ibp.network'
    ],
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    networkLogo: polimecSVG,
    descriptor: 'polimec'
  },
  local: {
    chainId: import.meta.env.VITE_CHAIN_ID,
    explorerNetworkName: import.meta.env.VITE_NETWORK_NAME as 'kusama',
    rpcUrls: [import.meta.env.VITE_WS_PROVIDER],
    httpGraphqlUrl: import.meta.env.VITE_GRAPHQL_HTTP_PROVIDER,
    networkLogo: localSVG,
    descriptor: 'dot',
    pplChainDescriptor: 'dotPpl'
  }
}

export const polkadotNetworksAndParachains: Partial<keyof typeof networkList>[] = [
  'polkadot',
  'asset-hub-polkadot',
  'coretime-polkadot',
  'acala',
  // 'astar',
  'bifrost-dot',
  'hydration',
  // 'interlay',
  // 'kilt',
  // 'moonbeam',
  // 'pendulum',
  'phala',
  'polimec'
  // 'watr'
]
export const kusamaNetworksAndParachains: Partial<keyof typeof networkList>[] = [
  'kusama',
  'asset-hub-kusama',
  // 'coretime-kusama'
  // 'amplitude',
  'khala'
  // 'moonriver'
]
export const soloChains: Partial<keyof typeof networkList>[] = [
  //joystream
]
export const testChains: Partial<keyof typeof networkList>[] = [
  // 'rococo',
  'paseo',
  // 'rhala testnet',
  'westend',
  'asset-hub-westend',
  'local'
]

export type SupportedNetworks = keyof typeof networkList

/**
 * Methods
 */
export const POLKADOT_SIGNING_METHODS = {
  POLKADOT_SIGN_TRANSACTION: 'polkadot_signTransaction',
  POLKADOT_SIGN_MESSAGE: 'polkadot_signMessage'
}

// from https://github.com/polkadot-js/apps/blob/acb87b52e52eda082b3d600abeadfed0f7ca3cc2/packages/react-params/src/overrides.ts#L4
export const balanceCalls = [
  'auctions.bid',
  'balances.forceTransfer',
  'balances.forceUnreserve',
  'balances.setBalance',
  'balances.transfer',
  'balances.transferAllowDeath',
  'balances.transferKeepAlive',
  'bounties.proposeBounty',
  'bounties.proposeCurator',
  'childBounties.proposeCurator',
  'childBounties.addChildBounty',
  'claims.mintClaim',
  'convictionVoting.delegate',
  'convictionVoting.vote',
  'crowdloan.contribute',
  'crowdloan.create',
  'crowdloan.edit',
  'democracy.delegate',
  'democracy.propose',
  'democracy.vote',
  'identity.requestJudgement',
  'identity.setFee',
  'nominationPools.create',
  'nominationPools.createWithPoolId',
  'nominationPools.bondExtra',
  'nominationPools.join',
  'nominationPools.unbond',
  'phragmenElection.vote',
  'society.bid',
  'society.vouch',
  'staking.bond',
  'staking.bondExtra',
  'staking.rebond',
  'staking.unbond',
  'tips.tip',
  'tips.tipNew',
  'treasury.proposeSpend',
  'treasury.spend',
  'vesting.forceVestedTransfer',
  'vesting.vestedTransfer'
]
