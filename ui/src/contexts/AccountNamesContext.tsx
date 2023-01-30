import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useAccountList } from "./AccountsContext"

export type AccountNames = { [address: string]: string }

const LOCALSTORAGE_ACCOUNT_KEY = "multix.accountNames"

type AccountNamesContextProps = {
    children: React.ReactNode | React.ReactNode[]
}

export interface IAccountNamesContext {
    accountNames: AccountNames
    getNamesWithExtension: (address: string) => string | undefined
    addName: (name: string, address: string) => void
    addNames: (newAdditions: AccountNames) => void
    deleteName: (address: string) => void
}

const AccountNamesContext = createContext<IAccountNamesContext | undefined>(undefined)

const AccountNamesContextProvider = ({ children }: AccountNamesContextProps) => {
    const [accountNames, setAccountNames] = useState<AccountNames>({})
    const { getAccountByAddress } = useAccountList()

    const getNamesWithExtension = useCallback((address: string) => {
        const extensionAccount = getAccountByAddress(address)
        if (extensionAccount) {
            return extensionAccount.meta.name
        }

        return accountNames[address] || ""
    }, [accountNames, getAccountByAddress])

    const loadNames = useCallback(() => {
        const names = localStorage.getItem(LOCALSTORAGE_ACCOUNT_KEY)

        if (!names) {
            console.error("No local name to load")
            return
        }

        setAccountNames(JSON.parse(names))
    }, [setAccountNames])

    const saveNames = useCallback(() => {
        if (!Object.entries(accountNames).length) return

        localStorage.setItem(LOCALSTORAGE_ACCOUNT_KEY, JSON.stringify(accountNames))
    }, [accountNames])

    const addName = useCallback((name: string, address: string) => {
        setAccountNames({ ...accountNames, ...{ [address]: name } });
    }, [accountNames, setAccountNames])

    const addNames = useCallback((newAdditions: AccountNames) => {
        const newNames = { ...accountNames, ...newAdditions }
        setAccountNames(newNames);

    }, [accountNames])

    const deleteName = useCallback((address: string) => {
        if (!accountNames) return

        const newNames = accountNames
        delete newNames[address];
        setAccountNames(newNames);

    }, [accountNames, setAccountNames])

    useEffect(() => {
        loadNames()
    }, [loadNames])

    // save names each time it changes
    useEffect(() => {
        if (!Object.entries(accountNames).length) {
            return
        }

        saveNames()
    }, [accountNames, saveNames])

    return (
        <AccountNamesContext.Provider
            value={{
                accountNames,
                addName,
                addNames,
                deleteName,
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
        throw new Error("useAccountNames must be used within a AccountNamesContextProvider")
    }
    return context
}

export { AccountNamesContextProvider, useAccountNames }