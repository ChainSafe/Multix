import { useCallback, useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { reEncodeInjectedAccounts } from '../utils/reEncodeInjectedAccounts'

const LOCALSTORAGE_WATCHED_ACCOUNTS_KEY = 'multix.watchedAccount'

export const useWatchedAccounts = () => {
  const [watchedAddresses, setWatchedAddresses] = useState<string[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const { chainInfo } = useApi()
  console.log('watchedAddresses source', watchedAddresses)
  // update the current account list with the right network prefix
  // this will run for every network change
  useEffect(() => {
    if (chainInfo?.ss58Format) {
      console.log('---reencode  ')
      setWatchedAddresses((prev) => {
        return reEncodeInjectedAccounts(prev, chainInfo.ss58Format) as string[]
      })
    }
  }, [chainInfo])

  const addWatchedAccount = useCallback((address: string) => {
    console.log('add')
    setWatchedAddresses((prev) => [...prev, address])
  }, [])

  const removeWatchedAccount = useCallback(
    (addressToRemove: string) => {
      console.log('remove')
      const filtered = watchedAddresses.filter((address) => address !== addressToRemove)
      setWatchedAddresses([...filtered])
    },
    [watchedAddresses]
  )

  const loadWatchedAccounts = useCallback(() => {
    console.log('load')
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

    console.log('----> save')
    localStorage.setItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY, JSON.stringify(watchedAddresses))
  }, [isInitialized, watchedAddresses])

  return {
    addWatchedAccount,
    removeWatchedAccount,
    watchedAddresses
  }
}
