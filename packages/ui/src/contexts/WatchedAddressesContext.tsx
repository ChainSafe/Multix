import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useApi } from './ApiContext'
import { reEncodeInjectedAccounts } from '../utils/reEncodeInjectedAccounts'

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
    if (chainInfo?.ss58Format) {
      setWatchedAddresses((prev) => {
        return reEncodeInjectedAccounts(prev, chainInfo.ss58Format) as string[]
      })
    }
  }, [chainInfo])

  const addWatchedAccount = useCallback((address: string) => {
    setWatchedAddresses((prev) => [...prev, address])
  }, [])

  const removeWatchedAccount = useCallback(
    (addressToRemove: string) => {
      const filtered = watchedAddresses.filter((address) => address !== addressToRemove)
      setWatchedAddresses([...filtered])
    },
    [watchedAddresses]
  )

  const loadWatchedAccounts = useCallback(() => {
    const localStorageWatchedAccount = localStorage.getItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY)
    const watchedArray: string[] = localStorageWatchedAccount
      ? JSON.parse(localStorageWatchedAccount)
      : []

    setWatchedAddresses(watchedArray)
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    !isInitialized && loadWatchedAccounts()
  }, [isInitialized, loadWatchedAccounts])

  // persist the accounts watched every time there's a change
  useEffect(() => {
    if (!isInitialized) return

    localStorage.setItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY, JSON.stringify(watchedAddresses))
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