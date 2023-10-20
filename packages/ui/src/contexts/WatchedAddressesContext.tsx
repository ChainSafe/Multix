import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { useApi } from './ApiContext'
import { encodeAccounts } from '../utils/encodeAccounts'
import { getPubKeyFromAddress } from '../utils/getPubKeyFromAddress'
import { useGetEncodedAddress } from '../hooks/useGetEncodedAddress'

const LOCALSTORAGE_WATCHED_ACCOUNTS_KEY = 'multix.watchedAccount'

type WatchedAddressesProps = {
  children: ReactNode | ReactNode[]
}

export interface IWatchedAddressesContext {
  addWatchedAccount: (address: string) => void
  removeWatchedAccount: (address: string) => void
  watchedAddresses: string[]
  isInitialized: boolean
}

const WatchedAddressesContext = createContext<IWatchedAddressesContext | undefined>(undefined)

const WatchedAddressesContextProvider = ({ children }: WatchedAddressesProps) => {
  const [watchedAddresses, setWatchedAddresses] = useState<string[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const { chainInfo } = useApi()
  const getEncodedAddress = useGetEncodedAddress()

  // update the current account list with the right network prefix
  // this will run for every network change
  useEffect(() => {
    if (chainInfo) {
      setWatchedAddresses((prev) => {
        return encodeAccounts(prev, chainInfo.ss58Format) as string[]
      })
    }
  }, [chainInfo])

  const addWatchedAccount = useCallback(
    (address: string) => {
      const encodedAddress = getEncodedAddress(address)
      encodedAddress && setWatchedAddresses((prev) => [...prev, encodedAddress])
    },
    [getEncodedAddress]
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

    const encodedAddresses = encodeAccounts(watchedArray, chainInfo.ss58Format) as string[]

    setWatchedAddresses(encodedAddresses)
    setIsInitialized(true)
  }, [chainInfo])

  useEffect(() => {
    !isInitialized && loadWatchedAccounts()
  }, [isInitialized, loadWatchedAccounts])

  // persist the accounts watched every time there's a change
  useEffect(() => {
    if (!isInitialized) return

    const pubKeyArray = getPubKeyFromAddress(watchedAddresses)

    localStorage.setItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY, JSON.stringify(pubKeyArray))
  }, [isInitialized, watchedAddresses])

  return (
    <WatchedAddressesContext.Provider
      value={{
        addWatchedAccount,
        removeWatchedAccount,
        watchedAddresses,
        isInitialized
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
