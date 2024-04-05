import { nodesKhalaSVG } from './logos/khalaSVG'
import { chainsKusamaSVG } from './logos/kusamaSVG '
import { localSVG } from './logos/localSVG'
import { chainsPolkadotCircleSVG } from './logos/polkadot-circleSVG'
import { chainsRococoSVG } from './logos/rococoSVG'
import { phalaSVG } from './logos/phalaSVG'
import { nodesAstarPNG } from './logos/astarPNG'
import { nodesAssetHubSVG } from './logos/assetHubSVG'
import { hydradxSVG } from './logos/hydradxSVG'
import { nodesWestendColourSVG } from './logos/westend_colourSVG'
import { chainsAcalaSVG } from './logos/acalaSVG'
import { nodesBifrostSVG } from './logos/bifrostSVG'
import { nodesInterlaySVG } from './logos/interlaySVG'
import { nodesMoonriverSVG } from './logos/moonriverSVG'
import { nodesMoonbeamSVG } from './logos/moonbeamSVG'
import { nodesKiltPNG } from './logos/kiltPNG'
import { chainsPendulumSVG } from './logos/pendulumSVG'
import { chainsAmplitudeSVG } from './logos/amplitudeSVG'
import { nodesJoystreamSVG } from './logos/joystreamSVG'
import { chainsWatrPNG } from './logos/watrPNG'
import paseoSVG from './logos/paseoSVG.svg'

export const DAPP_NAME = 'Multix'
export const ICON_SIZE_LARGE = 92
export const ICON_SIZE_MEDIUM = 40
export const ICON_SIZE_SMALL = 30
export const DEFAULT_ICON_THEME = 'polkadot'

export interface NetworkInfo {
  chainId: string
  explorerNetworkName?: string
  rpcUrl: string
  httpGraphqlUrl: string
  logo: string
}

export const HTTP_GRAPHQL_URL = `https://squid.subsquid.io/multix-arrow/v/v3/graphql`

export const PAYMENT_INFO_ACCOUNT = '5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs'

export const networkList: Record<string, NetworkInfo> = {
  polkadot: {
    chainId: 'polkadot',
    explorerNetworkName: 'polkadot',
    rpcUrl: 'wss://rpc.ibp.network/polkadot',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: chainsPolkadotCircleSVG
  },
  kusama: {
    chainId: 'kusama',
    explorerNetworkName: 'kusama',
    rpcUrl: 'wss://rpc.ibp.network/kusama',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: chainsKusamaSVG
  },
  'asset-hub-dot': {
    chainId: 'asset-hub-polkadot',
    explorerNetworkName: 'asset-hub-polkadot',
    rpcUrl: 'wss://sys.ibp.network/statemint',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesAssetHubSVG
  },
  'asset-hub-ksm': {
    chainId: 'asset-hub-kusama',
    explorerNetworkName: 'asset-hub-kusama',
    rpcUrl: 'wss://sys.ibp.network/statemine',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesAssetHubSVG
  },
  acala: {
    chainId: 'acala',
    explorerNetworkName: 'acala',
    rpcUrl: 'wss://acala-rpc-3.aca-api.network/ws',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: chainsAcalaSVG
  },
  astar: {
    chainId: 'astar',
    explorerNetworkName: 'astar',
    rpcUrl: 'wss://rpc.astar.network',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesAstarPNG
  },
  'bifrost-dot': {
    chainId: 'bifrost-polkadot',
    explorerNetworkName: 'bifrost',
    rpcUrl: 'wss://eu.bifrost-polkadot-rpc.liebi.com/ws',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesBifrostSVG
  },
  hydradx: {
    chainId: 'hydradx',
    explorerNetworkName: 'hydradx',
    rpcUrl: 'wss://rpc.helikon.io/hydradx',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: hydradxSVG
  },
  interlay: {
    chainId: 'interlay',
    explorerNetworkName: 'interlay',
    rpcUrl: 'wss://interlay-rpc.dwellir.com',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesInterlaySVG
  },
  khala: {
    chainId: 'khala',
    explorerNetworkName: 'khala',
    rpcUrl: 'wss://khala-api.phala.network/ws',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesKhalaSVG
  },
  moonbeam: {
    chainId: 'moonbeam',
    explorerNetworkName: 'moonbeam',
    rpcUrl: 'wss://moonbeam-rpc.dwellir.com',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesMoonbeamSVG
  },
  moonriver: {
    chainId: 'moonriver',
    explorerNetworkName: 'moonriver',
    rpcUrl: 'wss://moonriver-rpc.dwellir.com',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesMoonriverSVG
  },
  phala: {
    chainId: 'phala',
    explorerNetworkName: 'phala',
    rpcUrl: 'wss://api.phala.network/ws',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: phalaSVG
  },
  'rhala testnet': {
    chainId: 'rhala',
    explorerNetworkName: '',
    rpcUrl: 'wss://rhala-node.phala.network/ws',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesKhalaSVG
  },
  rococo: {
    chainId: 'rococo',
    explorerNetworkName: 'rococo',
    rpcUrl: 'wss://rococo-rpc.polkadot.io',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: chainsRococoSVG
  },
  westend: {
    chainId: 'westend',
    explorerNetworkName: 'westend',
    rpcUrl: 'wss://westend-rpc.polkadot.io',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesWestendColourSVG
  },
  paseo: {
    chainId: 'paseo',
    explorerNetworkName: '',
    rpcUrl: 'wss://paseo.rpc.amforc.com',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: paseoSVG
  },
  amplitude: {
    chainId: 'amplitude',
    explorerNetworkName: 'amplitude',
    rpcUrl: 'wss://rpc-amplitude.pendulumchain.tech',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: chainsAmplitudeSVG
  },
  pendulum: {
    chainId: 'pendulum',
    explorerNetworkName: 'pendulum',
    rpcUrl: 'wss://rpc-pendulum.prd.pendulumchain.tech',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: chainsPendulumSVG
  },
  joystream: {
    chainId: 'joystream',
    explorerNetworkName: 'joystream',
    rpcUrl: 'wss://rpc.joystream.org',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesJoystreamSVG
  },
  watr: {
    chainId: 'watr',
    explorerNetworkName: '',
    rpcUrl: 'wss://watr-rpc.watr-api.network',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: chainsWatrPNG
  },
  kilt: {
    chainId: 'kilt',
    explorerNetworkName: 'spiritnet',
    rpcUrl: 'wss://spiritnet.kilt.io',
    httpGraphqlUrl: HTTP_GRAPHQL_URL,
    logo: nodesKiltPNG
  },
  local: {
    chainId: import.meta.env.VITE_CHAIN_ID,
    explorerNetworkName: import.meta.env.VITE_NETWORK_NAME as 'kusama',
    rpcUrl: import.meta.env.VITE_WS_PROVIDER,
    httpGraphqlUrl: import.meta.env.VITE_GRAPHQL_HTTP_PROVIDER,
    logo: localSVG
  }
}

export const polkadotNetworksAndParachains: Partial<keyof typeof networkList>[] = [
  'polkadot',
  'asset-hub-dot',
  'acala',
  'astar',
  'bifrost-dot',
  'hydradx',
  'interlay',
  // 'kilt',
  // 'moonbeam',
  // 'pendulum',
  'phala'
  // 'watr'
]
export const kusamaNetworksAndParachains: Partial<keyof typeof networkList>[] = [
  'kusama',
  'asset-hub-ksm',
  // 'amplitude',
  'khala'
  // 'moonriver'
]
export const soloChains: Partial<keyof typeof networkList>[] = [
  //joystream
]
export const testChains: Partial<keyof typeof networkList>[] = [
  'rococo',
  'paseo',
  'rhala testnet',
  'westend',
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
