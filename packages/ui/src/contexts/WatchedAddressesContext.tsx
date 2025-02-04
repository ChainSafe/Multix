import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useApi } from './ApiContext'
import { encodeAccounts } from '../utils/encodeAccounts'
import { getPubKeyFromAddress } from '../utils/getPubKeyFromAddress'

const LOCALSTORAGE_WATCHED_ACCOUNTS_KEY = 'multix.watchedAccount'

type WatchedAddressesProps = {
  children: ReactNode | ReactNode[]
}

export interface IWatchedAddressesContext {
  addWatchedAccount: (address: string) => void
  removeWatchedAccount: (address: string) => void
  watchedPubKeys: string[]
  watchedAddresses: string[]
  isInitialized: boolean
}

const WatchedAddressesContext = createContext<IWatchedAddressesContext | undefined>(undefined)

const WatchedAddressesContextProvider = ({ children }: WatchedAddressesProps) => {
  const [watchedPubKeys, setWatchedPubKeys] = useState<string[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const { chainInfo } = useApi()
  const watchedAddresses = useMemo(() => {
    if (!chainInfo) return []

    return encodeAccounts(watchedPubKeys, chainInfo.ss58Format)
  }, [chainInfo, watchedPubKeys])

  const addWatchedAccount = useCallback((address: string) => {
    const pubKey = getPubKeyFromAddress(address)
    pubKey && setWatchedPubKeys((prev) => [...prev, pubKey])
  }, [])

  const removeWatchedAccount = useCallback(
    (addressToRemove: string) => {
      const pubKeyToRemove = getPubKeyFromAddress(addressToRemove)
      const filtered = watchedPubKeys.filter((pubKey) => pubKey !== pubKeyToRemove)
      setWatchedPubKeys([...filtered])
    },
    [watchedPubKeys]
  )

  const loadWatchedPubKeys = useCallback(() => {
    if (!chainInfo) {
      return
    }

    const localStorageWatchedAccount = localStorage.getItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY)
    const watchedArray: string[] = localStorageWatchedAccount
      ? JSON.parse(localStorageWatchedAccount)
      : []

    setWatchedPubKeys(watchedArray)
    setIsInitialized(true)
  }, [chainInfo])

  useEffect(() => {
    !isInitialized && loadWatchedPubKeys()
  }, [isInitialized, loadWatchedPubKeys])

  // persist the accounts watched every time there's a change
  useEffect(() => {
    if (!isInitialized) return

    localStorage.setItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY, JSON.stringify(watchedPubKeys))
  }, [isInitialized, watchedPubKeys])

  return (
    <WatchedAddressesContext.Provider
      value={{
        addWatchedAccount,
        removeWatchedAccount,
        watchedAddresses,
        watchedPubKeys,
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
