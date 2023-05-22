import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { reEncodeInjectedAccounts } from '../utils/reEncodeInjectedAccounts'

export const META_SOURCE_WATCHED = 'watched'
const LOCALSTORAGE_WATCHED_ACCOUNTS_KEY = 'multix.watchedAccount'

const formatWatchedAccount = (address: string) =>
  ({
    address,
    meta: {
      source: META_SOURCE_WATCHED
    }
  } as InjectedAccountWithMeta)

const unformatWatched = (watchedList: InjectedAccountWithMeta[]) => {
  return watchedList.map(({ address }) => address)
}

export const useWatchedAccounts = () => {
  const [watchedAccounts, setWatchedAccounts] = useState<InjectedAccountWithMeta[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const { chainInfo } = useApi()
  const watchedAccountsAddresses = useMemo(
    () => watchedAccounts.map((account) => account.address),
    [watchedAccounts]
  )

  // update the current account list with the right network prefix
  // this will run for every network change
  useEffect(() => {
    if (chainInfo?.ss58Format) {
      setWatchedAccounts((prev) => {
        return reEncodeInjectedAccounts(prev, chainInfo.ss58Format)
      })
    }
  }, [chainInfo])

  const addWatchedAccount = useCallback(
    (address: string) => {
      setWatchedAccounts([...watchedAccounts, formatWatchedAccount(address)])
    },
    [watchedAccounts]
  )

  const removeWatchedAccount = useCallback(
    (addressToRemove: string) => {
      const filtered = watchedAccounts.filter(({ address }) => address !== addressToRemove)
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
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    loadWatchedAccounts()
  }, [loadWatchedAccounts])

  // persist the accounts watched every time there's a change
  useEffect(() => {
    if (!isInitialized) return

    localStorage.setItem(
      LOCALSTORAGE_WATCHED_ACCOUNTS_KEY,
      JSON.stringify(unformatWatched(watchedAccounts))
    )
  }, [isInitialized, watchedAccounts])

  return {
    watchedAccounts,
    loadWatchedAccounts,
    addWatchedAccount,
    removeWatchedAccount,
    watchedAccountsAddresses
  }
}
