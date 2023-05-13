import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from 'react'
import { MultisigsByAccountsSubscription, ProxyType } from '../../types-and-hooks'
import { AccountBaseInfo } from '../components/GenericAccountSelection'
import { useMultisigsByAccountSubscription } from '../hooks/useMultisigsByAccountSubscription'
import { useAccounts } from './AccountsContext'

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
}

const MultisigContext = createContext<IMultisigContext | undefined>(undefined)

const getSignatoriesFromAccount = (account: MultisigsByAccountsSubscription['accounts'][0]) => {
  return account.signatories.map(({ signatory }) => signatory.id)
}

const MultiProxyContextProvider = ({ children }: MultisigContextProps) => {
  const [selectedMultiProxy, setSelectedMultiProxy] =
    useState<IMultisigContext['selectedMultiProxy']>(undefined)
  const [multiProxyList, setMultisigList] = useState<IMultisigContext['multiProxyList']>([])
  const { addressList } = useAccounts()
  const selectedHasProxy = useMemo(() => !!selectedMultiProxy?.proxy, [selectedMultiProxy])

  const refreshAccounList = useCallback((data: MultisigsByAccountsSubscription | null) => {
    if (!!data?.accounts && data.accounts.length > 0) {
      // map of the pure proxy addresses and the multisigs associated
      const pureProxyMap = new Map<string, Omit<MultiProxy, 'proxy'>>()
      const res: MultiProxy[] = []

      // iterate through the multisigs
      data.accounts.forEach((account) => {
        // one multisig could be a delegatee for multiple
        const pureProxyAddresses = account.delegateeFor
          .map((delegatee) => {
            // finding all the accounts that are pure proxy
            if (delegatee.delegator?.isPureProxy) {
              return {
                pureAddress: delegatee.delegator.id,
                type: delegatee.type
              }
            }

            return { pureAddress: undefined }
          })
          .filter(({ pureAddress }) => pureAddress !== undefined) as {
          pureAddress: string
          type: ProxyType
        }[]

        // it should all be multisigs cf the query
        // if this account has at least a pureProxy
        if (account.isMultisig && pureProxyAddresses?.length > 0) {
          pureProxyAddresses.forEach(({ pureAddress, type }) => {
            // add this pureProxy to the set with the multisig infos and calls
            const previousMultisigsForProxy = pureProxyMap.get(pureAddress)?.multisigs || []

            const newMultisigForProxy = {
              address: account.id,
              signatories: getSignatoriesFromAccount(account),
              threshold: account?.threshold || undefined,
              type
            }

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
                signatories: getSignatoriesFromAccount(account),
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
    accounts: addressList,
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
        getMultisigAsAccountBaseInfo
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
