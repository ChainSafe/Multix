import { InjectedWalletProvider } from '@reactive-dot/core/wallets.js'
import { registerDotConnect } from 'dot-connect'
import { DAPP_NAME, WALLETCONNECT_PROJECT_ID } from './constants'
import { WalletConnect } from '@reactive-dot/wallet-walletconnect'
import { Config } from '@reactive-dot/core'

export const config = {
  chains: {},
  wallets: [
    new InjectedWalletProvider({ originName: DAPP_NAME }),
    new WalletConnect({
      projectId: WALLETCONNECT_PROJECT_ID,
      providerOptions: {
        metadata: {
          name: 'Multix',
          description: 'The best interface to create and manage multisigs on Polkadot.',
          url: 'https://multix.chainsafe.io',
          icons: ['https://multix.chainsafe.io/android-chrome-192x192.png?raw=true']
        }
      },
      chainIds: [
        // https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-13.md
        'polkadot:91b171bb158e2d3848fa23a9f1c25182', // Polkadot
        'polkadot:b0a8d493285c2df73290dfb7e61f870f', // Kusama
        'polkadot:e143f23803ac50e8f6f8e62695d1ce9e' // Westend
      ]
    })
  ]
} satisfies Config

// Register dot-connect custom elements & configure supported wallets
registerDotConnect({
  wallets: config.wallets
})
