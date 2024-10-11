import type { Config } from '@reactive-dot/core'
import { InjectedWalletAggregator } from '@reactive-dot/core/wallets.js'
import { registerDotConnect } from 'dot-connect'

export const config = {
  chains: {},
  wallets: [new InjectedWalletAggregator()],
} satisfies Config

// Register dot-connect custom elements & configure supported wallets
registerDotConnect({
  wallets: config.wallets,
})
