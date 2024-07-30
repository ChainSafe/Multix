import './styles/App.css'
import { CssBaseline } from '@mui/material'
import { AccountContextProvider } from './contexts/AccountsContext'
import { ApiContextProvider } from './contexts/ApiContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MultiProxyContextProvider } from './contexts/MultiProxyContext'
import ToastContextProvider from './contexts/ToastContext'
import { theme } from './styles/theme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AccountNamesContextProvider } from './contexts/AccountNamesContext'
import { NetworkContextProvider } from './contexts/NetworkContext'
import MainLayout from './components/layout/Main'
import { WatchedAddressesContextProvider } from './contexts/WatchedAddressesContext'
import { WalletConnectContextProvider } from './contexts/WalletConnectContext'
import { ModalsContextProvider } from './contexts/ModalsContext'
import { PplApiContextProvider } from './contexts/PeopleChainApiContext'
import { Web3OnboardProvider, init } from '@subwallet-connect/react'
import { ModalContextProvider } from '@subwallet/react-ui'
import walletConnectPolkadotModule from '@subwallet-connect/walletconnect-polkadot'
import talismanModule from '@subwallet-connect/talisman'
import polkadot_jsModule from '@subwallet-connect/polkadot-js'
import subwalletPolkadotModule from '@subwallet-connect/subwallet-polkadot'
import injectedModule from '@subwallet-connect/injected-wallets'

const polkadotWallet = polkadot_jsModule()
const subwalletPolkadotWalet = subwalletPolkadotModule()
const talismanWallet = talismanModule()
const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here
  ],
  filter: {
    // mapping of wallet labels to filter here
  }
})

const walletConnectPolkadot = walletConnectPolkadotModule({
  projectId: '59b5826141a56b204e9e0a3f7e46641d',
  dappUrl: 'https://w3o-demo.subwallet.app/'
})

const web3Onboard = init({
  theme: 'light',
  connect: {
    autoConnectLastWallet: true,
    autoConnectAllPreviousWallet: true
  },
  accountCenter: {
    desktop: {
      enabled: false
    },
    mobile: {
      enabled: false
    }
  },
  wcConfigOption: {
    projectId: '59b5826141a56b204e9e0a3f7e46641d'
    // explorerRecommendedWalletIds: [subwalletWCIds, coinbaseWCIds, metamaskWCIds]
  },

  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [
    talismanWallet,
    polkadotWallet,
    walletConnectPolkadot,
    subwalletPolkadotWalet,
    // ledger,
    injected
  ],
  // An array of Chains that your app supports
  chains: [
    {
      id: '0x507',
      rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
      label: 'Moonbase Alpha',
      token: 'DEV',
      namespace: 'evm',
      decimal: 18
    },
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: '0x1',
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: 'evm',
      // the native token symbol, eg ETH, BNB, MATIC
      token: 'ETH',
      // used for display, eg Ethereum Mainnet
      label: 'Ethereum',
      // used for network requests
      rpcUrl: `https://ethereum.publicnode.com`,
      decimal: 18
    },
    {
      id: '0x504',
      rpcUrl: 'https://rpc.api.moonbeam.network',
      label: 'Moonbeam',
      token: 'GLMR',
      namespace: 'evm',
      decimal: 18
    },
    {
      id: '0x505',
      rpcUrl: 'https://rpc.api.moonriver.moonbeam.network',
      label: 'Moonriver',
      namespace: 'evm',
      token: 'MOVR',
      decimal: 18
    },
    {
      id: '0x250',
      rpcUrl: 'https://astar.api.onfinality.io/public',
      label: 'Astar - EVM',
      namespace: 'evm',
      token: 'ASTR',
      decimal: 18
    },
    {
      id: '0x150', // 336
      rpcUrl: 'https://shiden.public.blastapi.io',
      label: 'Shiden',
      token: 'SDN',
      namespace: 'evm',
      decimal: 18
    }
  ],

  chainsPolkadot: [
    {
      id: '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e',
      token: 'WND',
      decimal: 12,
      label: 'Westend',
      blockExplorerUrl: 'westend.subscan.io',
      namespace: 'substrate'
    },
    {
      id: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
      namespace: 'substrate',
      token: 'DOT',
      label: 'Polkadot',
      blockExplorerUrl: `polkadot.api.subscan.io`,
      decimal: 10
    },
    {
      id: '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
      label: 'Polkadot Asset Hub',
      namespace: 'substrate',
      decimal: 10,
      token: 'DOT',
      blockExplorerUrl: 'assethub-polkadot.subscan.io'
    },

    {
      id: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
      label: 'Kusama',
      decimal: 12,
      namespace: 'substrate',
      token: 'KSM',
      blockExplorerUrl: 'kusama.api.subscan.io'
    },

    {
      id: '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
      label: 'Kusama Asset Hub',
      decimal: 12,
      namespace: 'substrate',
      token: 'KSM',
      blockExplorerUrl: 'assethub-kusama.subscan.io'
    }
  ],

  appMetadata: {
    // The name of your dApp
    name: 'Multix',
    icon: undefined,
    logo: undefined,
    description: 'Multix Dapp',
    // The url to a getting started guide for app
    gettingStartedGuide: 'http://mydapp.io/getting-started',
    // url that points to more information about app
    explore: 'http://mydapp.io/about',
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: 'MetaMask',
        // link to download wallet
        url: 'https://metamask.io'
      },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ]
  }
})

const App = () => {
  const queryClient = new QueryClient()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContextProvider>
        <NetworkContextProvider>
          <QueryClientProvider client={queryClient}>
            <ApiContextProvider>
              <PplApiContextProvider>
                <Web3OnboardProvider web3Onboard={web3Onboard}>
                  <ModalContextProvider>
                    <WatchedAddressesContextProvider>
                      <AccountContextProvider>
                        <AccountNamesContextProvider>
                          <MultiProxyContextProvider>
                            <WalletConnectContextProvider>
                              <ModalsContextProvider>
                                <MainLayout />
                              </ModalsContextProvider>
                            </WalletConnectContextProvider>
                          </MultiProxyContextProvider>
                        </AccountNamesContextProvider>
                      </AccountContextProvider>
                    </WatchedAddressesContextProvider>
                  </ModalContextProvider>
                </Web3OnboardProvider>
              </PplApiContextProvider>
            </ApiContextProvider>
          </QueryClientProvider>
        </NetworkContextProvider>
      </ToastContextProvider>
    </MuiThemeProvider>
  )
}

export default App
