import { useCallback, useEffect, useState } from "react"
import { useAccountList } from "../contexts/AccountsContext"

export type AccountNames = { [address: string]: string }

const LOCALSTORAGE_ACCOUNT_KEY = "multix.accountNames"

export const useAccountNames = () => {
    const [accoutNames, setAccountNames] = useState<AccountNames>({})
    const { getAccountByAddress } = useAccountList()

    const getNamesWithExtension = useCallback((address: string) => {
        const extensionAccount = getAccountByAddress(address)
        if (extensionAccount) {
            return extensionAccount.meta.name
        }

        return accoutNames[address] || ""
    }, [accoutNames, getAccountByAddress])

    const loadNames = useCallback(() => {
        const names = localStorage.getItem(LOCALSTORAGE_ACCOUNT_KEY)

        if (!names) {
            console.error("No local name to load")
            return
        }

        setAccountNames(JSON.parse(names))
    }, [])

    const saveNames = useCallback(() => {
        if (!accoutNames) return

        localStorage.setItem(LOCALSTORAGE_ACCOUNT_KEY, JSON.stringify(accoutNames))
    }, [accoutNames])

    const addName = useCallback((name: string, address: string) => {
        if (!accoutNames) return

        const newNames = accoutNames
        newNames[address] = name;
        setAccountNames(newNames);

        saveNames()
    }, [accoutNames, saveNames])

    const deleteName = useCallback((name: string, address: string) => {
        if (!accoutNames) return

        const newNames = accoutNames
        delete newNames[address];
        setAccountNames(newNames);

        saveNames()
    }, [accoutNames, saveNames])

    useEffect(() => {
        loadNames()
    }, [loadNames])

    return {
        accoutNames,
        addName,
        deleteName,
        saveNames,
        loadNames,
        getNamesWithExtension
    }
}