import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { useCallback, useEffect, useState } from 'react'
import { isEmptyArray } from '../utils'

export const META_SOURCE_WATCHED = 'watched'
const LOCALSTORAGE_WATCHED_ACCOUNTS_KEY = 'multix.watchedAccount'

const formatWatchedAccount = (address: string) =>
  ({
    address,
    meta: {
      source: META_SOURCE_WATCHED
    }
  } as InjectedAccountWithMeta)

export const useWatchedAccounts = () => {
  const [watchedAccounts, setWatchedAccounts] = useState<InjectedAccountWithMeta[]>([])

  const addWatchedAccount = useCallback(
    (address: string) => {
      setWatchedAccounts([...watchedAccounts, formatWatchedAccount(address)])
    },
    [watchedAccounts]
  )

  const removeWatchedAccount = useCallback(
    (addressToRemove: string) => {
      const filtered = watchedAccounts.filter(({ address }) => address === addressToRemove)
      setWatchedAccounts([...filtered])
    },
    [watchedAccounts]
  )

  const loadWatchedAccounts = useCallback(() => {
    const localStorageWatchedAccount = localStorage.getItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY)
    const watchedArray: string[] = localStorageWatchedAccount
      ? JSON.parse(localStorageWatchedAccount)
      : []

    const toStore = watchedArray.map((address) => {
      return formatWatchedAccount(address)
    })

    setWatchedAccounts(toStore)
  }, [])

  useEffect(() => {
    loadWatchedAccounts()
  }, [loadWatchedAccounts])

  // persist the accounts watched every time there's a change
  useEffect(() => {
    if (isEmptyArray(watchedAccounts)) return

    localStorage.setItem(LOCALSTORAGE_WATCHED_ACCOUNTS_KEY, JSON.stringify(watchedAccounts))
  }, [watchedAccounts])

  return {
    watchedAccounts,
    loadWatchedAccounts,
    addWatchedAccount,
    removeWatchedAccount
  }
}
