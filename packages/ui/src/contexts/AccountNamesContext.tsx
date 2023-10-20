import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useAccounts } from './AccountsContext'
import { useApi } from './ApiContext'
import { decodeNames, encodeNames } from '../utils/namesUtil'

export type AccountNames = { [address: string]: string }
const LOCALSTORAGE_ACCOUNT_NAMES_KEY = 'multix.accountNames'

type AccountNamesContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

const MAX_NAME_LENGTH = 50

export interface IAccountNamesContext {
  accountNames: AccountNames
  getNamesWithExtension: (address: string) => string | undefined
  addName: (name: string, address: string) => void
  addNames: (newAdditions: AccountNames) => void
}

const AccountNamesContext = createContext<IAccountNamesContext | undefined>(undefined)

const AccountNamesContextProvider = ({ children }: AccountNamesContextProps) => {
  const [accountNames, setAccountNames] = useState<AccountNames>({})
  const { getAccountByAddress } = useAccounts()
  const { chainInfo } = useApi()

  const getNamesWithExtension = useCallback(
    (address: string) => {
      const extensionAccount = getAccountByAddress(address)
      if (extensionAccount) {
        return extensionAccount.meta.name
      }

      return accountNames[address] || ''
    },
    [accountNames, getAccountByAddress]
  )

  const loadNames = useCallback(() => {
    const namesHexString = localStorage.getItem(LOCALSTORAGE_ACCOUNT_NAMES_KEY)

    if (!chainInfo) {
      return
    }

    if (!namesHexString) {
      console.error('No local name to load')
      return
    }
    const namePubkeyParsed = JSON.parse(namesHexString) as AccountNames

    const namesString = encodeNames(namePubkeyParsed, chainInfo.ss58Format)
    setAccountNames(namesString)
  }, [chainInfo])

  const saveNames = useCallback(() => {
    if (!Object.entries(accountNames).length) return

    const decodedNames = decodeNames(accountNames)
    localStorage.setItem(LOCALSTORAGE_ACCOUNT_NAMES_KEY, JSON.stringify(decodedNames))
  }, [accountNames])

  const addName = useCallback(
    (name: string, address: string) => {
      setAccountNames({
        ...accountNames,
        ...{ [address]: name.slice(0, MAX_NAME_LENGTH) }
      })
    },
    [accountNames, setAccountNames]
  )

  const addNames = useCallback(
    (newAdditions: AccountNames) => {
      const truncated = Object.entries(newAdditions).reduce(
        (acc, [address, name]) => ({
          ...acc,
          [address]: name.slice(0, MAX_NAME_LENGTH)
        }),
        {}
      )
      const newNames = { ...accountNames, ...truncated }
      setAccountNames(newNames)
    },
    [accountNames]
  )

  useEffect(() => {
    loadNames()
  }, [loadNames])

  // save names each time it changes
  useEffect(() => {
    saveNames()
  }, [accountNames, saveNames])

  return (
    <AccountNamesContext.Provider
      value={{
        accountNames,
        addName,
        addNames,
        getNamesWithExtension
      }}
    >
      {children}
    </AccountNamesContext.Provider>
  )
}

const useAccountNames = () => {
  const context = useContext(AccountNamesContext)
  if (context === undefined) {
    throw new Error('useAccountNames must be used within a AccountNamesContextProvider')
  }
  return context
}

export { AccountNamesContextProvider, useAccountNames }
