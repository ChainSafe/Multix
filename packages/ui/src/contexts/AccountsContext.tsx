import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from 'react'
import { web3Enable, web3FromSource, web3AccountsSubscribe } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta, InjectedExtension } from '@polkadot/extension-inject/types'
import { DAPP_NAME } from '../constants'
import { Signer } from '@polkadot/api/types'
import { useApi } from './ApiContext'
import { encodeAccounts } from '../utils/encodeAccounts'

const LOCALSTORAGE_SELECTED_ACCOUNT_KEY = 'multix.selectedAccount'
const LOCALSTORAGE_ALLOWED_CONNECTION_KEY = 'multix.canConnectToExtension'

type AccountContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export interface IAccountContext {
  selectedAccount?: InjectedAccountWithMeta
  ownAccountList: InjectedAccountWithMeta[]
  ownAddressList: string[]
  selectAccount: (account: InjectedAccountWithMeta) => void
  getAccountByAddress: (address: string) => InjectedAccountWithMeta | undefined
  isAccountLoading: boolean
  isExtensionError: boolean
  selectedSigner?: Signer
  allowConnectionToExtension: () => void
  isAllowedToConnectToExtension: boolean
}

const AccountContext = createContext<IAccountContext | undefined>(undefined)

const AccountContextProvider = ({ children }: AccountContextProps) => {
  const [ownAccountList, setOwnAccountList] = useState<InjectedAccountWithMeta[]>([])
  const [selectedAccount, setSelected] = useState<InjectedAccountWithMeta>(ownAccountList[0])
  const [isAccountLoading, setIsAccountLoading] = useState(false)
  const [isExtensionError, setIsExtensionError] = useState(false)
  const [selectedSigner, setSelectedSigner] = useState<Signer | undefined>()
  const [isAllowedToConnectToExtension, setIsAllowedToConnectToExtension] = useState(false)
  const ownAddressList = useMemo(() => ownAccountList.map((a) => a.address), [ownAccountList])
  const [extensions, setExtensions] = useState<InjectedExtension[] | undefined>()
  const [timeoutElapsed, setTimoutElapsed] = useState(false)
  const { chainInfo } = useApi()
  console.log('isAccountLoading', isAccountLoading)
  console.log('isExtensionError', isExtensionError)

  // update the current account list with the right network prefix
  // this will run for every network change
  useEffect(() => {
    if (chainInfo) {
      setOwnAccountList((prev) => {
        return encodeAccounts(prev, chainInfo.ss58Format) as InjectedAccountWithMeta[]
      })
    }
  }, [chainInfo])

  const getAccountByAddress = useCallback(
    (address: string) => {
      return ownAccountList.find((account) => account.address === address)
    },
    [ownAccountList]
  )

  const allowConnectionToExtension = useCallback(() => {
    localStorage.setItem(LOCALSTORAGE_ALLOWED_CONNECTION_KEY, 'true')
    setIsAllowedToConnectToExtension(true)
  }, [])

  const selectAccount = useCallback((account: InjectedAccountWithMeta) => {
    localStorage.setItem(LOCALSTORAGE_SELECTED_ACCOUNT_KEY, account.address)
    setSelected(account)
  }, [])

  const getaccountList = useCallback(async (): Promise<void> => {
    setIsAccountLoading(true)

    web3Enable(DAPP_NAME)
      .then((ext) => {
        setExtensions(ext)
      })
      .catch(console.error)

    web3AccountsSubscribe(
      (accountList) => {
        if (accountList.length === 0) {
          setIsExtensionError(true)
          return
        }

        setOwnAccountList([...accountList])

        if (accountList.length > 0) {
          const previousAccountAddress = localStorage.getItem(LOCALSTORAGE_SELECTED_ACCOUNT_KEY)
          const account = previousAccountAddress && getAccountByAddress(previousAccountAddress)

          selectAccount(account || accountList[0])
        }
      },
      { ss58Format: chainInfo?.ss58Format }
    ).catch((error) => {
      setIsExtensionError(true)
      console.error(error)
    })

    setIsAccountLoading(false)
  }, [chainInfo, getAccountByAddress, selectAccount])

  useEffect(() => {
    if (!isAllowedToConnectToExtension) return

    if (isAccountLoading) return

    if (extensions?.length === 0 && !ownAccountList.length) {
      if (!timeoutElapsed && isAllowedToConnectToExtension) {
        // give it another chance #ugly hack
        // race condition see https://github.com/polkadot-js/extension/issues/938
        setTimeout(() => {
          getaccountList()
          setTimoutElapsed(true)
        }, 500)
      } else {
        setIsExtensionError(true)
      }
    }
  }, [
    ownAccountList,
    extensions,
    getaccountList,
    isAccountLoading,
    isAllowedToConnectToExtension,
    timeoutElapsed
  ])

  useEffect(() => {
    // don't request if we have accounts
    if (ownAccountList.length > 0 || isAccountLoading) return

    // don't request before explicitely asking
    if (isAllowedToConnectToExtension) {
      getaccountList()
    }
  }, [ownAccountList, getaccountList, isAllowedToConnectToExtension, isAccountLoading])

  useEffect(() => {
    if (!isAllowedToConnectToExtension) {
      const previouslyAllowed = localStorage.getItem(LOCALSTORAGE_ALLOWED_CONNECTION_KEY)
      if (previouslyAllowed === 'true') {
        setIsAllowedToConnectToExtension(true)
      }
    }
  }, [isAllowedToConnectToExtension])

  useEffect(() => {
    if (!selectedAccount) return

    // to be able to retrieve the signer interface from this account
    // we can use web3FromSource which will return an InjectedExtension type

    web3FromSource(selectedAccount.meta.source)
      .then((injector) => {
        setSelectedSigner(injector.signer)
      })
      .catch(console.error)
  })

  return (
    <AccountContext.Provider
      value={{
        selectedAccount,
        ownAccountList,
        ownAddressList,
        selectAccount,
        isAccountLoading,
        isExtensionError,
        getAccountByAddress,
        selectedSigner,
        allowConnectionToExtension,
        isAllowedToConnectToExtension
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

const useAccounts = () => {
  const context = useContext(AccountContext)
  if (context === undefined) {
    throw new Error('useAccounts must be used within a AccountContextProvider')
  }
  return context
}

export { AccountContextProvider, useAccounts }
