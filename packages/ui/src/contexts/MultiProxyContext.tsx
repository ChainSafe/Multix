import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  MultisigsBySignatoriesOrWatchedSubscription,
  ProxyType,
  PureByIdsSubscription
} from '../../types-and-hooks'
import { AccountBaseInfo } from '../components/select/GenericAccountSelection'
import { useMultisigsBySignatoriesOrWatchedSubscription } from '../hooks/useMultisigsBySignatoriesOrWatchedSubscription'
import { useAccounts } from './AccountsContext'
import { useWatchedAddresses } from './WatchedAddressesContext'
import { useAccountId } from '../hooks/useAccountId'
import { usePureByIdsSubscription } from '../hooks/usePureByIdSubscription'

const LOCALSTORAGE_KEY = 'multix.selectedMultiProxy'

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
  selectMultiProxy: (multi: MultiProxy) => void
  selectedHasProxy: boolean
  error: Error | null
  getMultisigByAddress: (address: string) => MultisigAggregated | undefined
  getMultisigAsAccountBaseInfo: () => AccountBaseInfo[]
  selectedIsWatched: boolean
}

const MultisigContext = createContext<IMultisigContext | undefined>(undefined)

const getSignatoriesFromAccount = (
  signatories: MultisigsBySignatoriesOrWatchedSubscription['accountMultisigs'][0]['multisig']['signatories']
) => {
  return signatories.map(({ signatory }) => signatory.address)
}

const MultiProxyContextProvider = ({ children }: MultisigContextProps) => {
  const [selectedMultiProxy, setSelectedMultiProxy] =
    useState<IMultisigContext['selectedMultiProxy']>(undefined)
  const [pureProxyList, setPureProxyList] = useState<IMultisigContext['multiProxyList']>([])
  const [multisigList, setMultisigList] = useState<IMultisigContext['multiProxyList']>([])
  const [pureToQuery, setPureToQuery] = useState<string[]>([])
  const multiProxyList = useMemo(
    () => [...pureProxyList, ...multisigList],
    [multisigList, pureProxyList]
  )
  const { ownAddressList } = useAccounts()
  const { watchedAddresses } = useWatchedAddresses()
  const selectedHasProxy = useMemo(() => !!selectedMultiProxy?.proxy, [selectedMultiProxy])
  // This is true if the currently selected Multiproxy contains no signatory owned by the user
  // this happens with a watched account
  const pureToQueryIds = useAccountId(pureToQuery)
  const selectedIsWatched = useMemo(
    () =>
      !selectedMultiProxy?.multisigs.some((multisig) =>
        multisig.signatories?.some((signatory) => ownAddressList.includes(signatory))
      ),
    [selectedMultiProxy, ownAddressList]
  )

  const refreshPureToQueryAndMultisigList = useCallback(
    (data: MultisigsBySignatoriesOrWatchedSubscription | null) => {
      // we do have an answer, but there is no multisig
      if (!!data?.accountMultisigs && data.accountMultisigs.length === 0) {
        setPureToQuery([])
        setMultisigList([])
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
        setPureToQuery(Array.from(pureToQuerySet))
      }
    },
    []
  )

  const refreshWatchedPureList = useCallback((data: PureByIdsSubscription | null) => {
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
        } as MultiProxy)
    )

    setPureProxyList(pureProxyArray)
  }, [])

  const ownAddressIds = useAccountId(ownAddressList)
  const watchedAddressesIds = useAccountId(watchedAddresses)
  const { isLoading: isMultisigsubLoading, error: isMultisigSubError } =
    useMultisigsBySignatoriesOrWatchedSubscription({
      accountIds: ownAddressIds,
      watchedAccountIds: watchedAddressesIds,
      onUpdate: refreshPureToQueryAndMultisigList
    })
  const { isLoading: isPureSubLoading, error: isPureSubError } = usePureByIdsSubscription({
    pureIds: [...watchedAddressesIds, ...pureToQueryIds],
    onUpdate: refreshWatchedPureList
  })

  const getMultiProxyByAddress = useCallback(
    (address?: string) => {
      if (!address) return undefined

      return multiProxyList.find(
        (multiProxy) =>
          // either by proxy address
          multiProxy?.proxy === address ||
          // or by multisig address
          multiProxy.multisigs.some((multisig) => multisig.address === address)
      )
    },
    [multiProxyList]
  )

  // effect to update selectedMultiproxy when the multiproxyList is updated
  useEffect(() => {
    if (!!multiProxyList.length && !!selectedMultiProxy) {
      const newlySelected = selectedMultiProxy.proxy
        ? getMultiProxyByAddress(selectedMultiProxy.proxy) // select the new proxy by pure proxy address
        : getMultiProxyByAddress(selectedMultiProxy.multisigs[0].address)

      setSelectedMultiProxy(newlySelected)
    }
  }, [getMultiProxyByAddress, multiProxyList, selectedMultiProxy])

  const getMultisigByAddress = useCallback(
    (address: string) => {
      return selectedMultiProxy?.multisigs.find((multisig) => multisig.address === address)
    },
    [selectedMultiProxy?.multisigs]
  )

  const getMultisigAsAccountBaseInfo = () =>
    selectedMultiProxy?.multisigs.map(
      ({ address }) =>
        ({
          address,
          meta: {
            isMulti: true
          }
        } as AccountBaseInfo)
    ) || []

  const selectMultiProxy = useCallback(
    (newMulti: typeof selectedMultiProxy | string) => {
      let _multi: MultiProxy | undefined

      if (typeof newMulti === 'string') {
        _multi = getMultiProxyByAddress(newMulti)
      } else {
        _multi = newMulti
      }

      // for MultiProxy without a pure, we only support one multisig
      const addressToUse = _multi?.proxy || _multi?.multisigs[0].address

      if (!addressToUse) {
        return
      }

      localStorage.setItem(LOCALSTORAGE_KEY, addressToUse)
      const multi = getMultiProxyByAddress(addressToUse)

      if (!multi) {
        return
      }

      setSelectedMultiProxy(multi)
    },
    [getMultiProxyByAddress]
  )

  useEffect(() => {
    if (multiProxyList.length > 0 && !selectedMultiProxy) {
      const multiAddress = localStorage.getItem(LOCALSTORAGE_KEY)
      const previouslySelected = multiAddress && getMultiProxyByAddress(multiAddress)

      setSelectedMultiProxy(previouslySelected || multiProxyList[0])
    }
  }, [getMultiProxyByAddress, multiProxyList, selectedMultiProxy])

  return (
    <MultisigContext.Provider
      value={{
        selectedMultiProxy,
        multiProxyList,
        selectMultiProxy,
        isLoading: isMultisigsubLoading || isPureSubLoading,
        selectedHasProxy,
        error: isMultisigSubError || isPureSubError,
        getMultisigByAddress,
        getMultisigAsAccountBaseInfo,
        selectedIsWatched
      }}
    >
      {children}
    </MultisigContext.Provider>
  )
}

const useMultiProxy = () => {
  const context = useContext(MultisigContext)
  if (context === undefined) {
    throw new Error('useMultisigList must be used within a MultisigContextProvider')
  }
  return context
}

export { MultiProxyContextProvider, useMultiProxy }
