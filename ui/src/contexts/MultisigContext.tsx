import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from "react"
import { MultisigsByAccountsQuery, useMultisigsByAccountsQuery } from "../../types-and-hooks"
import { useAccountList } from "./AccountsContext"

const LOCALSTORAGE_KEY = "multix.selectedMultisig"

type MultisigContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export interface IMultisigContext {
  selectedMultisig?: MultisigsByAccountsQuery["multisigs"][0]
  multisigList: MultisigsByAccountsQuery["multisigs"]
  multisigAddressList: string[]
  isLoading: boolean,
  selectMultisig: (multi: MultisigsByAccountsQuery["multisigs"][0]) => void
  selectedHasProxy: boolean
}

const MultisigContext = createContext<IMultisigContext | undefined>(undefined)

const MultisigContextProvider = ({ children }: MultisigContextProps) => {
  const [selectedMultisig, setSelectedMultisig] = useState<IMultisigContext['selectedMultisig']>(undefined)
  const [multisigList, setMultisigList] = useState<IMultisigContext['multisigList']>([])
  const { addressList } = useAccountList()
  const { data, isLoading, error } = useMultisigsByAccountsQuery({ accounts: addressList })
  const selectedHasProxy = useMemo(() => !!selectedMultisig?.proxy?.id, [selectedMultisig?.proxy?.id])

  useEffect(() => {
    if (!!error) {
      console.error(error)
    }
  })

  useEffect(() => {
    if (!error && data?.multisigs) {
      setMultisigList(data.multisigs)
    }
  }, [data, error])

  const getMultisigByAddress = useCallback((address?: string) => {
    if (!address) return undefined

    return multisigList.find(multisig => multisig?.id === address)
  }, [multisigList])

  const selectMultisig = useCallback(async (newMulti: typeof selectedMultisig) => {
    if (!newMulti) {
      return
    }

    localStorage.setItem(LOCALSTORAGE_KEY, newMulti?.id)
    const multi = getMultisigByAddress(newMulti?.id)

    if (!multi) {
      return
    }

    setSelectedMultisig(multi)
  }, [getMultisigByAddress])

  useEffect(() => {
    if (multisigList.length && !selectedMultisig) {
      const multiAddress = localStorage.getItem(LOCALSTORAGE_KEY)
      const previouslySelected = multiAddress && getMultisigByAddress(multiAddress)

      setSelectedMultisig(previouslySelected || multisigList[0])
    }
  }, [getMultisigByAddress, multisigList, selectedMultisig])

  const multisigAddressList = useMemo(
    () => multisigList
      .map(a => a.proxy?.id)
      .filter(address => !!address) as string[],
    [multisigList]
  )

  // const getMultisigByProxyAddress = useCallback((address: string) => {
  //   return multisigList.find(multisig => multisig.proxy?.id === address)
  // }, [multisigList])

  return (
    <MultisigContext.Provider
      value={{
        selectedMultisig,
        multisigList,
        multisigAddressList,
        selectMultisig,
        isLoading,
        selectedHasProxy,
      }}
    >
      {children}
    </MultisigContext.Provider>
  )
}

const useMultisig = () => {
  const context = useContext(MultisigContext)
  if (context === undefined) {
    throw new Error("useMultisigList must be used within a MultisigContextProvider")
  }
  return context
}

export { MultisigContextProvider, useMultisig }
