import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from 'react'
import { MultisigsByAccountsSubscription, ProxyType } from '../../types-and-hooks'
import { AccountBaseInfo } from '../components/GenericAccountSelection'
import { useMultisigsByAccountSubscription } from '../hooks/useMultisigsByAccountSubscription'
import { useAccounts } from './AccountsContext'
import { useWatchedAddresses } from './WatchedAddressesContext'

const LOCALSTORAGE_KEY = 'multix.selectedMultiProxy'

interface MultisigContextProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface MultisigAggregated {
  address: string
  signatories?: string[]
  threshold?: number
  type: ProxyType
}

export interface MultiProxy {
  proxy?: string
  multisigs: MultisigAggregated[]
}

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
  signatories: MultisigsByAccountsSubscription['accounts'][0]['signatories']
) => {
  return signatories.map(({ signatory }) => signatory.id)
}

const MultiProxyContextProvider = ({ children }: MultisigContextProps) => {
  const [selectedMultiProxy, setSelectedMultiProxy] =
    useState<IMultisigContext['selectedMultiProxy']>(undefined)
  const [multiProxyList, setMultisigList] = useState<IMultisigContext['multiProxyList']>([])
  const { ownAddressList } = useAccounts()
  const { watchedAddresses } = useWatchedAddresses()
  const selectedHasProxy = useMemo(() => !!selectedMultiProxy?.proxy, [selectedMultiProxy])
  // This is true if the currently selected Multiproxy contains no signatory owned by the user
  // this happens with a watched account
  const selectedIsWatched = useMemo(
    () =>
      !selectedMultiProxy?.multisigs.some((multisig) =>
        multisig.signatories?.some((signatory) => ownAddressList.includes(signatory))
      ),
    [selectedMultiProxy, ownAddressList]
  )

  const refreshAccounList = useCallback((data: MultisigsByAccountsSubscription | null) => {
    // we do have an answer, but there is no multiproxy
    if (!!data?.accounts && data.accounts.length === 0) {
      setMultisigList([])
    }

    if (!!data?.accounts && data.accounts.length > 0) {
      // map of the pure proxy addresses and the multisigs associated
      const pureProxyMap = new Map<string, Omit<MultiProxy, 'proxy'>>()
      const res: MultiProxy[] = []

      // FIXME could be pp at this point
      // iterate through the multisigs
      data.accounts.forEach((account) => {
        // if the account is a pure proxy
        if (account.isPureProxy) {
          // find the delegatee that are multisigs and put all the infos right away
          account.delegatorFor.forEach(({ delegatee, type }) => {
            if (delegatee.isMultisig) {
              const previousMultisigsForProxy = pureProxyMap.get(account.id)?.multisigs || []

              const newMultisigForProxy = {
                address: delegatee.id,
                signatories: getSignatoriesFromAccount(delegatee.signatories),
                threshold: delegatee?.threshold || undefined,
                type
              }

              pureProxyMap.set(account.id, {
                multisigs: [...previousMultisigsForProxy, newMultisigForProxy]
              })
            }
          })

          return
        }

        // from this point, we should only be dealing with multisigs
        // looking for multisigs being delegatee for pure proxies
        const pureProxyAddresses: {
          pureAddress: string
          type: ProxyType
        }[] = []

        // one multisig could be a delegator for multiple
        account.isMultisig &&
          account.delegateeFor.forEach(({ delegator, type }) => {
            // if a pure was already added, e.g because it is watched
            // we shouldn't associate this multisig to it twice
            const currentMultisigsForProxy = pureProxyMap
              .get(delegator.id)
              ?.multisigs.map(({ address }) => address)

            // finding all the accounts that are pure proxy and that don't include this multisig already
            if (delegator?.isPureProxy && !currentMultisigsForProxy?.includes(account.id)) {
              pureProxyAddresses.push({
                pureAddress: delegator.id,
                type: type
              })
            }
          })

        // if this account is a multisig and is the delegatee for at least a pureProxy
        if (account.isMultisig && pureProxyAddresses?.length > 0) {
          pureProxyAddresses.forEach(({ pureAddress, type }) => {
            const previousMultisigsForProxy = pureProxyMap.get(pureAddress)?.multisigs || []

            const newMultisigForProxy = {
              address: account.id,
              signatories: getSignatoriesFromAccount(account.signatories),
              threshold: account?.threshold || undefined,
              type
            }

            // add this pureProxy to the Map
            pureProxyMap.set(pureAddress, {
              multisigs: [...previousMultisigsForProxy, newMultisigForProxy]
            })
          })
        } else if (account.isMultisig && pureProxyAddresses.length === 0) {
          // if this multisig doesn't have a proxy
          res.push({
            proxy: undefined,
            multisigs: [
              {
                address: account.id,
                signatories: getSignatoriesFromAccount(account.signatories),
                threshold: account.threshold
              }
            ]
          } as MultiProxy)
        } else {
          console.error('Unexpected account, it should be a multisig', account)
        }
      })

      // flatten out proxyMap
      const proxyArray = Array.from(pureProxyMap.entries()).map(
        ([proxy, agg]) =>
          ({
            proxy,
            multisigs: agg.multisigs
          } as MultiProxy)
      )

      res.push(...proxyArray)

      setMultisigList(res)
    }
  }, [])

  const { isLoading, error } = useMultisigsByAccountSubscription({
    accounts: ownAddressList,
    watchedAccounts: watchedAddresses,
    onUpdate: refreshAccounList
  })

  // useEffect(() => {
  //   console.log('--> refresh', data)
  //   !error && !!data && refreshAccounList(data)
  // }, [data, error, refreshAccounList])

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
        ? // select the new proxy by pure proxy address
          getMultiProxyByAddress(selectedMultiProxy.proxy)
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
    (newMulti: typeof selectedMultiProxy) => {
      // for MultiProxy without a pure, we only support one multisig
      const addressToUse = newMulti?.proxy || newMulti?.multisigs[0].address

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
        isLoading,
        selectedHasProxy,
        error,
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
