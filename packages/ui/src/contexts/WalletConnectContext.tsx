import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Core } from '@walletconnect/core'
import { ICore, PairingTypes } from '@walletconnect/types'
import { Web3Wallet, IWeb3Wallet } from '@walletconnect/web3wallet'
import { DAPP_NAME, WALLETCONNECT_PROJECT_ID } from '../constants'

export type WalletConnect = { [address: string]: string }

type WalletConnectContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export interface IWalletConnectContext {
  web3wallet: IWeb3Wallet | undefined
  core: ICore
  pair: (params: { uri: string }) => Promise<PairingTypes.Struct>
  refresh: () => Promise<void>
}

const WalletConnectContext = createContext<IWalletConnectContext | undefined>(undefined)

const WalletConnectContextProvider = ({ children }: WalletConnectContextProps) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [web3wallet, setWeb3wallet] = useState<IWeb3Wallet | undefined>()
  const core = useMemo(
    () =>
      new Core({
        logger: undefined, // use 'debug' to get more insight
        projectId: WALLETCONNECT_PROJECT_ID
        // relayUrl: relayerRegionURL ?? import.meta.env.VITE_WALLETCONNECT_PUBLIC_RELAY_URL
      }),
    []
  )
  const createWeb3Wallet = useCallback(() => {
    return Web3Wallet.init({
      core,
      metadata: {
        name: DAPP_NAME,
        description: 'Multix Client as Wallet/Peer',
        url: 'multix.cloud',
        icons: ['https://avatars.githubusercontent.com/u/37784886']
      }
    })
      .then((web) => {
        setWeb3wallet(web)
        setIsInitialized(true)
      })
      .catch(console.error)
  }, [core])

  const pair = useCallback(
    async (params: { uri: string }) => {
      return await core.pairing.pair({ uri: params.uri })
    },
    [core]
  )

  const refresh = useCallback(() => {
    return createWeb3Wallet()
  }, [createWeb3Wallet])

  useEffect(() => {
    if (!isInitialized) {
      createWeb3Wallet()
    }
  }, [createWeb3Wallet, isInitialized])

  return (
    <WalletConnectContext.Provider value={{ web3wallet, core, pair, refresh }}>
      {children}
    </WalletConnectContext.Provider>
  )
}

const useWalletConnect = () => {
  const context = useContext(WalletConnectContext)
  if (context === undefined) {
    throw new Error('useWalletConnect must be used within a WalletConnectContextProvider')
  }
  return context
}

export { WalletConnectContextProvider, useWalletConnect }
