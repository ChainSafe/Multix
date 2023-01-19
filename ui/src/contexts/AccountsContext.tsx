import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from "react"
import { web3Accounts, web3Enable, web3FromSource } from "@polkadot/extension-dapp"
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { DAPP_NAME } from "../constants"
import { Signer } from "@polkadot/api/types"

const LOCALSTORAGE_KEY = "multix.selectedAccount"

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
  extensionNotFound: boolean
  isAccountListEmpty: boolean
  selectedSigner?: Signer
}

const AccountContext = createContext<IAccountContext | undefined>(undefined)

const AccountContextProvider = ({ children }: AccountContextProps) => {
  const [accountList, setAccountList] = useState<InjectedAccountWithMeta[]>([])
  const [selectedAccount, setSelected] = useState<InjectedAccountWithMeta>(accountList[0])
  const [isAccountLoading, setIsAccountLoading] = useState(false)
  const [extensionNotFound, setExtensionNotFound] = useState(false)
  const [isAccountListEmpty, setIsAccountListEmpty] = useState(false)
  const [selectedSigner, setSelectedSigner] = useState<Signer | undefined>()
  const addressList = useMemo(() => accountList.map(a => a.address), [accountList])

  const getAccountByAddress = useCallback((address: string) => {
    return accountList.find(account => account.address === address)
  }, [accountList])

  const selectAccount = useCallback((account: InjectedAccountWithMeta) => {
    localStorage.setItem(LOCALSTORAGE_KEY, account.address)
    setSelected(account)
  }, [])

  const getaccountList = useCallback(async (): Promise<undefined> => {
    const extensions = await web3Enable(DAPP_NAME)

    if (extensions.length === 0) {
      setExtensionNotFound(true)
      setIsAccountLoading(false)
      return
    } else {
      setExtensionNotFound(false)
    }

    const accountList = await web3Accounts()

    if (accountList.length === 0) {
      setIsAccountListEmpty(true)
      setIsAccountLoading(false)
      return
    }

    setAccountList(accountList)

    if (accountList.length > 0) {
      const previousAccountAddress = localStorage.getItem(LOCALSTORAGE_KEY)
      const account = previousAccountAddress && getAccountByAddress(previousAccountAddress)

      selectAccount(account || accountList[0])
    }

    setIsAccountLoading(false)
    return
  }, [getAccountByAddress, selectAccount])

  useEffect(() => {
    if (!accountList.length) {
      getaccountList()
    }
  }, [accountList, getaccountList])

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
        selectedAccount: selectedAccount,
        accountList,
        addressList,
        selectAccount,
        isAccountLoading,
        extensionNotFound,
        isAccountListEmpty,
        getAccountByAddress,
        selectedSigner
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
