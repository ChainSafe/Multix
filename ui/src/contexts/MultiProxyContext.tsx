import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from "react"
import { MultisigCall, MultisigsByAccountsQuery, useMultisigsByAccountsQuery } from "../../types-and-hooks"
import { useAccountNames } from "./AccountNamesContext"
import { useAccounts } from "./AccountsContext"

const LOCALSTORAGE_KEY = "multix.selectedMultiProxy"

interface MultisigContextProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface MultisigAggregated {
  address: string;
  signatories?: string[];
  threshold?: number;
}

export interface MultiProxy {
  proxy?: string;
  multisigCalls?: MultisigCall[]
  multisigs: MultisigAggregated[]
}

export interface IMultisigContext {
  selectedMultiProxy?: MultiProxy
  multiProxyList: MultiProxy[]
  isLoading: boolean,
  selectMultiProxy: (multi: MultiProxy) => void
  selectedHasProxy: boolean
  error: unknown
  selectedMultiProxySignatories: string[]
  getMultisigByAddress: (address: string) => MultisigAggregated | undefined
}

const MultisigContext = createContext<IMultisigContext | undefined>(undefined)

const getSignatoriesFromAccount = (account: MultisigsByAccountsQuery["accounts"][0]) => {
  return account.signatories.map(({ signatory }) => signatory.id)
}

const MultiProxyContextProvider = ({ children }: MultisigContextProps) => {
  const [selectedMultiProxy, setSelectedMultiProxy] = useState<IMultisigContext['selectedMultiProxy']>(undefined)
  const [multiProxyList, setMultisigList] = useState<IMultisigContext['multiProxyList']>([])
  const { addressList } = useAccounts()
  const { data, isLoading, error } = useMultisigsByAccountsQuery({ accounts: addressList })
  const selectedHasProxy = useMemo(() => !!selectedMultiProxy?.proxy, [selectedMultiProxy])
  // FIXME we should get rid of this alltogether
  const selectedMultiProxySignatories = useMemo(() =>
    // FIXME this won't be nice with several multisigs
    selectedMultiProxy?.multisigs[0].signatories || [],
    [selectedMultiProxy]
  )
  const { accountNames, addName } = useAccountNames()

  useEffect(() => {
    if (!!error) {
      console.error(error)
    }
  }, [error])

  useEffect(() => {
    if (!error && data?.accounts) {
      // map of the pure proxy addresses and the multisigs associated
      const pureProxyMap = new Map<string, Omit<MultiProxy, "proxy">>()
      const res: MultiProxy[] = []

      // iterate through the multisigs
      data.accounts.forEach((account) => {
        // one multisig could be a delegatee for multiple
        const pureProxyAddresses = account.delegateeFor.map((delegatee) => {
          // finding all the accounts that are pure proxy
          if (!!delegatee.delegator?.isPureProxy) {
            return delegatee.delegator.id
          }

          return undefined
        })
          .filter((address) => address !== undefined) as string[]

        // it should all be multisigs cf the query
        // if this account has at least a pureProxy
        if (account.isMultisig && pureProxyAddresses?.length > 0) {
          pureProxyAddresses.forEach((pureProxyAddress) => {
            // add this pureProxy to the set with the multisig infos and calls
            const previousMultisigsForProxy = pureProxyMap.get(pureProxyAddress)?.multisigs || []
            // console.log('previousMultisigsForProxy', previousMultisigsForProxy.length)
            const previousMultisigCalls = pureProxyMap.get(pureProxyAddress)?.multisigCalls || []
            // console.log('previousMultisigCalls', previousMultisigCalls.length)
            const newMultisigForProxy = {
              address: account.id,
              signatories: getSignatoriesFromAccount(account),
              threshold: account?.threshold || undefined
            }

            pureProxyMap.set(pureProxyAddress, {
              multisigs: [...previousMultisigsForProxy, newMultisigForProxy],
              multisigCalls: [...previousMultisigCalls, ...account.multisigsCalls]
            })
          })
        } else if (account.isMultisig && pureProxyAddresses.length === 0) {
          console.log('---> here we are')
          // if this multisig doesn't have a proxy
          res.push({
            proxy: undefined,
            multisigs: [{
              address: account.id,
              signatories: getSignatoriesFromAccount(account),
              threshold: account.threshold
            }]
          } as MultiProxy)
        } else {
          console.error("Unexpected account, it should be a multisig", account)
        }
      })

      // flatten out proxyMap
      const proxyArray = Array.from(pureProxyMap.entries()).map(([proxy, agg]) => ({
        proxy,
        multisigs: agg.multisigs,
        multisigCalls: agg.multisigCalls
      }) as MultiProxy)

      res.push(...proxyArray)

      setMultisigList(res)
    }
  }, [data, error])

  const updateProxyNames = useCallback(() => {
    multiProxyList.forEach(multiProxy => {
      const multi = multiProxy.multisigs[0].address
      const proxy = multiProxy.proxy
      if (multi && accountNames[multi] && proxy && !accountNames[proxy]) {
        addName(accountNames[multi], proxy)
      }
    })
  }, [accountNames, addName, multiProxyList])

  const getMultiProxyByAddress = useCallback((address?: string) => {
    if (!address) return undefined

    return multiProxyList.find(multiProxy =>
      // either by proxy address
      multiProxy?.proxy === address
      // or by multisig address
      || multiProxy.multisigs.some(multisig => multisig.address === address))
  }, [multiProxyList])

  const getMultisigByAddress = useCallback((address: string) => {
    return selectedMultiProxy?.multisigs.find((multisig) => multisig.address === address)
  }, [selectedMultiProxy?.multisigs])

  const selectMultisig = useCallback(async (newMulti: typeof selectedMultiProxy) => {
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
  }, [getMultiProxyByAddress])

  useEffect(() => {
    if (multiProxyList.length && !selectedMultiProxy) {
      updateProxyNames()

      const multiAddress = localStorage.getItem(LOCALSTORAGE_KEY)
      const previouslySelected = multiAddress && getMultiProxyByAddress(multiAddress)

      setSelectedMultiProxy(previouslySelected || multiProxyList[0])
    }
  }, [getMultiProxyByAddress, multiProxyList, selectedMultiProxy, updateProxyNames])

  // const getMultisigByProxyAddress = useCallback((address: string) => {
  //   return multisigList.find(multisig => multisig.proxy?.id === address)
  // }, [multisigList])

  return (
    <MultisigContext.Provider
      value={{
        selectedMultiProxy: selectedMultiProxy,
        multiProxyList: multiProxyList,
        selectMultiProxy: selectMultisig,
        isLoading,
        selectedHasProxy,
        error,
        selectedMultiProxySignatories,
        getMultisigByAddress
      }}
    >
      {children}
    </MultisigContext.Provider>
  )
}

const useMultiProxy = () => {
  const context = useContext(MultisigContext)
  if (context === undefined) {
    throw new Error("useMultisigList must be used within a MultisigContextProvider")
  }
  return context
}

export { MultiProxyContextProvider, useMultiProxy }
