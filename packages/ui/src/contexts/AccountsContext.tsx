import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from 'react'
import { web3Enable, web3FromSource, web3AccountsSubscribe } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
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
  isLocalStorageSetupDone: boolean
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
  const [accountGotRequested, setAccountGotRequested] = useState(false)
  const { chainInfo } = useApi()
  const [isLocalStorageSetupDone, setIsLocalStorageSetupDone] = useState(false)
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

  const getaccountList = useCallback(
    async (isEthereum: boolean): Promise<void> => {
      web3Enable(DAPP_NAME)
        .then((ext) => {
          if (ext.length === 0) {
            setIsExtensionError(true)
          }
        })
        .catch((e) => {
          console.log('ooops web3Enable failed')
          console.error(e)
          setIsExtensionError(true)
        })
        .finally(() => {
          setIsAccountLoading(false)
        })

      web3AccountsSubscribe(
        (accountList) => {
          if (accountList.length === 0) {
            setIsExtensionError(true)
            return
          }

          let listToPersist = accountList
          //lower case ethereum addresses
          if (isEthereum) {
            listToPersist = accountList.map((account) => ({
              ...account,
              address: account.address.toLowerCase()
            }))
          }

          setOwnAccountList([...listToPersist])

          if (listToPersist.length > 0) {
            const previousAccountAddress = localStorage.getItem(LOCALSTORAGE_SELECTED_ACCOUNT_KEY)
            const account = previousAccountAddress && getAccountByAddress(previousAccountAddress)

            selectAccount(account || listToPersist[0])
          }
        },
        {
          ss58Format: chainInfo?.ss58Format,
          accountType: isEthereum ? ['ethereum'] : undefined
        }
      ).catch((error) => {
        setIsExtensionError(true)
        console.error('web3AccountSubscribe error', error)
      })
    },
    [chainInfo?.ss58Format, getAccountByAddress, selectAccount]
  )

  useEffect(() => {
    if (isExtensionError || ownAccountList.length > 0 || isAccountLoading || !chainInfo) return

    if (!accountGotRequested && isAllowedToConnectToExtension) {
      setAccountGotRequested(true)
      setIsAccountLoading(true)
      // delay the request by 500ms
      // race condition see https://github.com/polkadot-js/extension/issues/938
      setTimeout(() => {
        getaccountList(chainInfo.isEthereum)
      }, 500)
    }
  }, [
    ownAccountList,
    getaccountList,
    isAccountLoading,
    isAllowedToConnectToExtension,
    chainInfo,
    isExtensionError,
    accountGotRequested
  ])

  useEffect(() => {
    if (!isAllowedToConnectToExtension) {
      const previouslyAllowed = localStorage.getItem(LOCALSTORAGE_ALLOWED_CONNECTION_KEY)
      if (previouslyAllowed === 'true') {
        setIsAllowedToConnectToExtension(true)
      }
      setIsLocalStorageSetupDone(true)
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
        isAllowedToConnectToExtension,
        isLocalStorageSetupDone
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
