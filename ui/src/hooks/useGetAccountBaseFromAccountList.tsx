import { useMemo } from "react"
import { AccountBaseInfo } from "../components/GenericAccountSelection"
import { useAccountList } from "../contexts/AccountsContext"

export const useGetAccountBaseFromAccountList = () => {
    const { accountList } = useAccountList()


    const accountBase = useMemo((): AccountBaseInfo[] =>
        accountList && accountList?.map((account) => ({ address: account.address })) || []
        , [accountList])

    return accountBase
}