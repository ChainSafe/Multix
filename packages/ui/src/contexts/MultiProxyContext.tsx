import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  MultisigsBySignatoriesOrWatchedQuery,
  ProxyType,
  PureByIdsQueryQuery
} from '../../types-and-hooks'
import { AccountBaseInfo } from '../components/select/GenericAccountSelection'
import { useQueryMultisigs } from '../hooks/useQueryMultisigs'
import { useAccounts } from './AccountsContext'
import { useWatchedAddresses } from './WatchedAddressesContext'
import { useAccountId } from '../hooks/useAccountId'
import { useQueryPure } from '../hooks/useQueryPure'
import { getMultiProxyAddress } from '../utils/getMultiProxyAddress'
import { useSearchParams } from 'react-router-dom'

interface MultisigContextProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface MultisigAggregated {
  address: string
  signatories?: string[]
  threshold?: number | null
  type: ProxyType
}

export interface MultiProxy {
  proxy?: string
  multisigs: MultisigAggregated[]
}

export const isMultiProxy = (value: any): value is MultiProxy =>
  value && value.multisigs && value.multisigs.length > 0

export interface IMultisigContext {
  selectedMultiProxy?: MultiProxy
  multiProxyList: MultiProxy[]
  isLoading: boolean
  selectMultiProxy: (multi: MultiProxy | string) => boolean
  selectedHasProxy: boolean
  error: unknown | Error | null
  getMultisigByAddress: (address: string) => MultisigAggregated | undefined
  getMultisigAsAccountBaseInfo: () => AccountBaseInfo[]
  selectedIsWatched: boolean
  isWatchedAccount: (who: string | MultiProxy | undefined) => boolean
  refetch: () => void
  defaultAddress?: string
  selectedMultiProxyAddress?: string
  setCanFindMultiProxyFromUrl: React.Dispatch<React.SetStateAction<boolean>>
  canFindMultiProxyFromUrl: boolean
  setRefetchMultisigTimeoutMinutes: React.Dispatch<React.SetStateAction<number>>
  resetLists: () => void
}

const MultisigContext = createContext<IMultisigContext | undefined>(undefined)

const getSignatoriesFromAccount = (
  signatories: MultisigsBySignatoriesOrWatchedQuery['accountMultisigs'][0]['multisig']['signatories']
) => {
  return signatories.map(({ signatory }) => signatory.address)
}

const MultiProxyContextProvider = ({ children }: MultisigContextProps) => {
  const [refetchMultisigTimeoutMinutes, setRefetchMultisigTimeoutMinutes] = useState(0)
  const [shouldPollMultisigs, setShouldPollMultisigs] = useState(false)
  const [canFindMultiProxyFromUrl, setCanFindMultiProxyFromUrl] = useState(false)
  const [selectedMultiProxyAddress, setSelectedMultiProxyAddress] = useState('')
  // if set to null, it means that it hasn't been initialized yet
  const [pureProxyList, setPureProxyList] = useState<IMultisigContext['multiProxyList'] | null>(
    null
  )
  // if set to null, it means that it hasn't been initialized yet
  const [multisigList, setMultisigList] = useState<IMultisigContext['multiProxyList'] | null>(null)
  const [pureLinkedToMultisigs, setPureLinkedToMultisigs] = useState<string[]>([])
  const multiProxyList = useMemo(() => {
    return [...(pureProxyList || []), ...(multisigList || [])]
  }, [multisigList, pureProxyList])
  const { ownAddressList } = useAccounts()
  const { watchedAddresses } = useWatchedAddresses()
  const getMultiProxyByAddress = useCallback(
    (address?: string) => {
      if (!address) return undefined

      return multiProxyList.find(
        (multiProxy) =>
          // either by proxy address
          multiProxy.proxy === address ||
          // or by multisig address
          multiProxy.multisigs.some((multisig) => multisig.address === address)
      )
    },
    [multiProxyList]
  )

  const selectedMultiProxy = useMemo(() => {
    if (!selectedMultiProxyAddress) return

    return getMultiProxyByAddress(selectedMultiProxyAddress)
  }, [getMultiProxyByAddress, selectedMultiProxyAddress])
  const selectedHasProxy = useMemo(() => !!selectedMultiProxy?.proxy, [selectedMultiProxy])
  const pureLinkedToMultisigsIds = useAccountId(pureLinkedToMultisigs)

  // This is true if the currently Multiproxy passed as param contains no signatory
  // owned by the user this happens with a watched account
  const isWatchedAccount = useCallback(
    (who: string | MultiProxy | undefined) => {
      if (!who) return false

      const account = typeof who === 'string' ? getMultiProxyByAddress(who) : who
      return !account?.multisigs.some((multisig) =>
        multisig.signatories?.some((signatory) => ownAddressList.includes(signatory))
      )
    },
    [getMultiProxyByAddress, ownAddressList]
  )

  const selectedIsWatched = useMemo(
    () => isWatchedAccount(selectedMultiProxy),
    [isWatchedAccount, selectedMultiProxy]
  )
  const [, setSearchParams] = useSearchParams({
    address: ''
  })

  const resetLists = useCallback(() => {
    setMultisigList(null)
    setPureProxyList(null)
  }, [])

  const setAddressInUrl = useCallback(
    (address: string) => {
      setSearchParams((prev) => {
        prev.set('address', address)
        return prev
      })
    },
    [setSearchParams]
  )

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (refetchMultisigTimeoutMinutes > 0) {
      setShouldPollMultisigs(true)
      const timeoutInMs = refetchMultisigTimeoutMinutes * 60 * 1000
      timeout = setTimeout(() => {
        setShouldPollMultisigs(false)
        setRefetchMultisigTimeoutMinutes(0)
      }, timeoutInMs)
    }

    return () => timeout && clearTimeout(timeout)
  }, [refetchMultisigTimeoutMinutes])

  const ownAddressIds = useAccountId(ownAddressList)
  const watchedAddressesIds = useAccountId(watchedAddresses)
  const {
    data: multisigData,
    isLoading: isMultisigQueryLoading,
    error: multisigQueryError,
    refetch: refetchMultisigQuery
  } = useQueryMultisigs({
    accountIds: ownAddressIds,
    watchedAccountIds: watchedAddressesIds,
    shouldRefetch: shouldPollMultisigs
  })
  const {
    data: pureQueryResultData,
    isLoading: isPureQueryLoading,
    error: isPureQueryError,
    refetch: refetchPureQuery
  } = useQueryPure({
    pureIds: [...watchedAddressesIds, ...pureLinkedToMultisigsIds],
    shouldRefetch: shouldPollMultisigs
  })

  const refreshPureToQueryAndMultisigList = useCallback(
    (data: MultisigsBySignatoriesOrWatchedQuery) => {
      // we do have an answer, but there is no multisig
      if (!!data?.accountMultisigs && data.accountMultisigs.length === 0) {
        setPureLinkedToMultisigs([])
        setMultisigList([])
        // watched addresses are part of the pure to query though
        // only signal we're done querying by setting pureProxyList to []
        // if there are no watched addresses
        watchedAddresses.length === 0 && setPureProxyList([])
      }

      if (!!data?.accountMultisigs && data.accountMultisigs.length > 0) {
        const pureToQuerySet = new Set<string>()
        const multisigMap = new Map<string, MultiProxy>()

        // iterate through the multisigs and populate the multiproxy map
        // and the list of pure to query
        data.accountMultisigs.forEach(({ multisig }) => {
          const hasPureDelegation =
            multisig.delegateeFor.length > 0 &&
            multisig.delegateeFor.some(({ delegator }) => delegator.isPureProxy)
          // if the multisig is a delegatee for at least one pure
          if (hasPureDelegation) {
            // add the pures to the list to query if they are pure proxies
            multisig.delegateeFor.forEach(({ delegator }) => {
              delegator.isPureProxy && pureToQuerySet.add(delegator.address)
            })
          } else {
            // if this multisig doesn't have a proxy
            // we add it to the map and it'll be in the multiproxylist right away
            multisigMap.set(multisig.address, {
              proxy: undefined,
              multisigs: [
                {
                  address: multisig.address,
                  signatories: getSignatoriesFromAccount(multisig.signatories),
                  threshold: multisig.threshold
                }
              ]
            } as MultiProxy)
          }
        })

        // flatten out multisigMap
        const multisigArray = Array.from(multisigMap.values())
        setMultisigList(multisigArray)

        // add the selection to the pure to query
        setPureLinkedToMultisigs(Array.from(pureToQuerySet))

        // if there is no pure to query, set the PureProxyList to empty array
        // to signify that the pure proxies are done loading
        pureToQuerySet.size === 0 && watchedAddresses.length === 0 && setPureProxyList([])
      }
    },
    [watchedAddresses]
  )

  const refreshPureList = useCallback((data: PureByIdsQueryQuery) => {
    const pureProxyMap = new Map<string, Omit<MultiProxy, 'proxy'>>()
    // we do have an answer, but there is nothing
    if (!!data?.accounts && data.accounts.length === 0) {
      setPureProxyList([])
    }

    if (!!data?.accounts && data.accounts.length > 0) {
      // any account here should be a pure proxy with some multisigs eventually
      data.accounts.forEach((account) => {
        // find the delegatee that are multisigs and put all the infos right away
        account.delegatorFor.forEach(({ delegatee, type }) => {
          if (delegatee.isMultisig) {
            const previousMultisigsForProxy = pureProxyMap.get(account.address)?.multisigs || []

            const isAlreadyInMultisigList = previousMultisigsForProxy.some(
              ({ address }) => address === delegatee.address
            )

            // do not add a second time a multisig
            if (isAlreadyInMultisigList) return

            const newMultisigForProxy = {
              address: delegatee.address,
              signatories: getSignatoriesFromAccount(delegatee.signatories),
              threshold: delegatee?.threshold || undefined,
              type
            }

            pureProxyMap.set(account.address, {
              multisigs: [...previousMultisigsForProxy, newMultisigForProxy]
            })
          }
        })
      })
    }

    // flatten out pureProxyMap
    const pureProxyArray = Array.from(pureProxyMap.entries()).map(
      ([proxy, agg]) =>
        ({
          proxy,
          multisigs: agg.multisigs
        }) as MultiProxy
    )

    setPureProxyList(pureProxyArray)
  }, [])

  useEffect(() => {
    if (!multisigData) return
    refreshPureToQueryAndMultisigList(multisigData)
  }, [multisigData, refreshPureToQueryAndMultisigList])

  useEffect(() => {
    if (!pureQueryResultData) return

    refreshPureList(pureQueryResultData)
  }, [pureQueryResultData, refreshPureList])

  const getMultisigByAddress = useCallback(
    (address: string) => {
      return selectedMultiProxy?.multisigs.find((multisig) => multisig.address === address)
    },
    [selectedMultiProxy]
  )

  const getMultisigAsAccountBaseInfo = () =>
    selectedMultiProxy?.multisigs.map(
      ({ address }) =>
        ({
          address,
          meta: {
            isMulti: true
          }
        }) as AccountBaseInfo
    ) || []

  const selectMultiProxy = useCallback(
    (newMulti: typeof selectedMultiProxy | string) => {
      let multi: string | undefined

      if (typeof newMulti === 'string') {
        multi = newMulti
      } else {
        multi = getMultiProxyAddress(newMulti)
      }

      const multiProxyFound = getMultiProxyByAddress(multi)

      if (!multi || !multiProxyFound) {
        return false
      }

      setAddressInUrl(multi)
      setSelectedMultiProxyAddress(multi)
      return true
    },
    [getMultiProxyByAddress, setAddressInUrl]
  )

  const refetch = useCallback(() => {
    refetchMultisigQuery()
    refetchPureQuery()
  }, [refetchMultisigQuery, refetchPureQuery])

  const isDoneFetchingIndexerInfo = useMemo(() => {
    if (ownAddressList.length === 0 && watchedAddresses.length === 0) {
      // nothing to fetch
      return true
    }

    if (multisigList === null || pureProxyList === null) {
      // if any is null, we're still fetching
      return false
    }

    return true
  }, [multisigList, ownAddressList, pureProxyList, watchedAddresses])

  const isLoading = useMemo(
    () => isMultisigQueryLoading || isPureQueryLoading || !isDoneFetchingIndexerInfo,
    [isDoneFetchingIndexerInfo, isMultisigQueryLoading, isPureQueryLoading]
  )

  const defaultAddress = useMemo(() => {
    if (multiProxyList?.length === 0 || isLoading) {
      return undefined
    }

    return multiProxyList?.[0].proxy || multiProxyList?.[0].multisigs[0].address
  }, [isLoading, multiProxyList])

  return (
    <MultisigContext.Provider
      value={{
        selectedMultiProxyAddress,
        defaultAddress,
        selectedMultiProxy,
        multiProxyList,
        selectMultiProxy,
        isLoading,
        selectedHasProxy,
        error: multisigQueryError || isPureQueryError,
        getMultisigByAddress,
        getMultisigAsAccountBaseInfo,
        selectedIsWatched,
        refetch,
        canFindMultiProxyFromUrl,
        setCanFindMultiProxyFromUrl,
        isWatchedAccount,
        setRefetchMultisigTimeoutMinutes,
        resetLists
      }}
    >
      {children}
    </MultisigContext.Provider>
  )
}

const useMultiProxy = () => {
  const context = useContext(MultisigContext)
  if (context === undefined) {
    throw new Error('useMultiProxy must be used within a MultiProxyContextProvider')
  }
  return context
}

export { MultiProxyContextProvider, useMultiProxy }
