import type { Config } from '@reactive-dot/core'
import { InjectedWalletProvider } from '@reactive-dot/core/wallets.js'
import { registerDotConnect } from 'dot-connect'
import { DAPP_NAME } from './constants'

export const config = {
  chains: {},
  wallets: [new InjectedWalletProvider({ originName: DAPP_NAME })]
} satisfies Config

// Register dot-connect custom elements & configure supported wallets
registerDotConnect({
  wallets: config.wallets
})
