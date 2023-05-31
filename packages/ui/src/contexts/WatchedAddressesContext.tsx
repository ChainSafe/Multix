import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useApi } from './ApiContext'
import { reEncodeInjectedAccounts } from '../utils/reEncodeInjectedAccounts'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'

const LOCALSTORAGE_WATCHED_ACCOUNTS_KEY = 'multix.watchedAccount'

type WatchedAddressesProps = {
  children: React.ReactNode | React.ReactNode[]
}

export interface IWatchedAddressesContext {
  addWatchedAccount: (address: string) => void
  removeWatchedAccount: (address: string) => void
  watchedAddresses: string[]
}

const WatchedAddressesContext = createContext<IWatchedAddressesContext | undefined>(undefined)

const WatchedAddressesContextProvider = ({ children }: WatchedAddressesProps) => {
  const [watchedAddresses, setWatchedAddresses] = useState<string[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const { chainInfo } = useApi()

  // update the current account list with the right network prefix
  // this will run for every network change
  useEffect(() => {
    if (chainInfo) {
      setWatchedAddresses((prev) => {
        return reEncodeInjectedAccounts(prev, chainInfo.ss58Format) as string[]
      })
    }
  }, [chainInfo])

  const addWatchedAccount = useCallback(
    (address: string) => {
      try {
        const encodedAddress = encodeAddress(address, chainInfo?.ss58Format)
        setWatchedAddresses((prev) => [...prev, encodedAddress])
      } catch (e) {
        console.error(`Error encoding the address ${address}, skipping`, e)
      }
    },
    [chainInfo]
  )

  const removeWatchedAccount = useCallback(
    (addressToRemove: string) => {
      const filtered = watchedAddresses.filter((address) => address !== addressToRemove)
      setWatchedAddresses([...filtered])
    },
    [watchedAddresses]
  )

  const loadWatchedAccounts = useCallback(() => {
    if (!chainInfo) {
      return
    }

    const localStorageWatchedAccount = localStorage.getItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY)
    const watchedArray: string[] = localStorageWatchedAccount
      ? JSON.parse(localStorageWatchedAccount)
      : []

    const encodedAddresses = reEncodeInjectedAccounts(
      watchedArray,
      chainInfo.ss58Format
    ) as string[]

    setWatchedAddresses(encodedAddresses)
    setIsInitialized(true)
  }, [chainInfo])

  useEffect(() => {
    !isInitialized && loadWatchedAccounts()
  }, [isInitialized, loadWatchedAccounts])

  // persist the accounts watched every time there's a change
  useEffect(() => {
    if (!isInitialized) return

    const pubKeyArray = watchedAddresses
      .map((address) => {
        try {
          return u8aToHex(decodeAddress(address))
        } catch (e) {
          console.error(`Error decoding the address ${address}, skipping`, e)
          return undefined
        }
      })
      .filter((address) => !!address)

    localStorage.setItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY, JSON.stringify(pubKeyArray))
  }, [isInitialized, watchedAddresses])

  return (
    <WatchedAddressesContext.Provider
      value={{
        addWatchedAccount,
        removeWatchedAccount,
        watchedAddresses
      }}
    >
      {children}
    </WatchedAddressesContext.Provider>
  )
}

const useWatchedAddresses = () => {
  const context = useContext(WatchedAddressesContext)
  if (context === undefined) {
    throw new Error('useWatchedAddresses must be used within a WatchedAddressesContextProvider')
  }
  return context
}

export { WatchedAddressesContextProvider, useWatchedAddresses }
