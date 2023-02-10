import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from "react"
import { web3Enable, web3FromSource, web3AccountsSubscribe, isWeb3Injected } from "@polkadot/extension-dapp"
import { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types"
import { DAPP_NAME } from "../constants"
import { Signer } from "@polkadot/api/types"

const LOCALSTORAGE_SELECTED_ACCOUNT_KEY = "multix.selectedAccount"
const LOCALSTORAGE_ALLOWED_CONNECTION_KEY = "multix.canConnectToExtension"

type AccountContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export interface IAccountContext {
  selectedAccount?: InjectedAccountWithMeta
  accountList?: InjectedAccountWithMeta[]
  addressList: string[]
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
  const [accountList, setAccountList] = useState<InjectedAccountWithMeta[]>([])
  const [selectedAccount, setSelected] = useState<InjectedAccountWithMeta>(accountList[0])
  const [isAccountLoading, setIsAccountLoading] = useState(false)
  const [isExtensionError, setIsExtensionError] = useState(false)
  const [selectedSigner, setSelectedSigner] = useState<Signer | undefined>()
  const [isAllowedToConnectToExtension, setIsAllowedToConnectToExtension] = useState(false)
  const addressList = useMemo(() => accountList.map(a => a.address), [accountList])
  const [extensions, setExtensions] = useState<InjectedExtension[]>([])

  console.log('isAccountLoading', isAccountLoading)
  console.log('isAllowedToConnectToExtension', isAllowedToConnectToExtension)
  console.log('accountList', accountList)
  console.log('isExtensionError', isExtensionError)
  console.log('extensions', extensions)
  console.log('isWeb3Injected', isWeb3Injected)

  const getAccountByAddress = useCallback((address: string) => {
    return accountList.find(account => account.address === address)
  }, [accountList])

  const allowConnectionToExtension = useCallback(() => {
    localStorage.setItem(LOCALSTORAGE_ALLOWED_CONNECTION_KEY, "true");
    setIsAllowedToConnectToExtension(true)
  }, [])

  const selectAccount = useCallback((account: InjectedAccountWithMeta) => {
    localStorage.setItem(LOCALSTORAGE_SELECTED_ACCOUNT_KEY, account.address)
    setSelected(account)
  }, [])

  useEffect(() => {
    if (!isAllowedToConnectToExtension) return

    if (isAccountLoading) return

    if (extensions.length === 0 && !accountList.length) {
      setIsExtensionError(true)
    }
  }, [accountList, extensions, isAccountLoading, isAllowedToConnectToExtension])

  const getaccountList = useCallback(async (): Promise<void> => {
    console.log('getAccountList')

    setIsAccountLoading(true)
    const extensions = await web3Enable(DAPP_NAME)
    setExtensions(extensions)

    web3AccountsSubscribe((accountList) => {
      console.log('accountList from web3AccountSub', accountList)
      if (accountList.length === 0) {
        setIsExtensionError(true)
        return
      }

      setAccountList(accountList)

      if (accountList.length > 0) {
        const previousAccountAddress = localStorage.getItem(LOCALSTORAGE_SELECTED_ACCOUNT_KEY)
        const account = previousAccountAddress && getAccountByAddress(previousAccountAddress)

        selectAccount(account || accountList[0])
      }
    })
      .finally(() => setIsAccountLoading(false))
      .catch(console.error)

  }, [getAccountByAddress, selectAccount])

  useEffect(() => {
    // don't request if we have accounts
    if (accountList.length > 0 || !isWeb3Injected) return

    // don't request before explicitely asking
    if (isAllowedToConnectToExtension || isWeb3Injected) {
      getaccountList()
    }

  }, [accountList, getaccountList, isAllowedToConnectToExtension])

  useEffect(() => {
    if (!isAllowedToConnectToExtension) {
      console.log('check local storage')
      const previouslyAllowed = localStorage.getItem(LOCALSTORAGE_ALLOWED_CONNECTION_KEY)
      console.log('previouslyAllowed', previouslyAllowed)
      if (previouslyAllowed === "true") {
        setIsAllowedToConnectToExtension(true)
      }
    }
  }, [isAllowedToConnectToExtension])

  useEffect(() => {
    if (!selectedAccount) return

    // to be able to retrieve the signer interface from this account
    // we can use web3FromSource which will return an InjectedExtension type

    web3FromSource(selectedAccount.meta.source).then(
      (injector) => {
        setSelectedSigner(injector.signer)
      }).catch(console.error);

  })

  return (
    <AccountContext.Provider
      value={{
        selectedAccount,
        accountList,
        addressList,
        selectAccount,
        isAccountLoading,
        isExtensionError,
        getAccountByAddress,
        selectedSigner,
        allowConnectionToExtension,
        isAllowedToConnectToExtension: isAllowedToConnectToExtension || isWeb3Injected,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

const useAccountList = () => {
  const context = useContext(AccountContext)
  if (context === undefined) {
    throw new Error("useAccountList must be used within a AccountContextProvider")
  }
  return context
}

export { AccountContextProvider, useAccountList }
