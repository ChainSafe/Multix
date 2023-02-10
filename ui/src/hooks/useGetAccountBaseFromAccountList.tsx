import { useMemo } from "react"
import { AccountBaseInfo } from "../components/GenericAccountSelection"
import { useAccounts } from "../contexts/AccountsContext"

export const useGetAccountBaseFromAccountList = () => {
    const { accountList } = useAccounts()


    const accountBase = useMemo((): AccountBaseInfo[] =>
        accountList && accountList?.map((account) => ({ address: account.address })) || []
        , [accountList])

    return accountBase
}