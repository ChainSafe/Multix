import { useMemo } from 'react'
import { AccountBaseInfo } from '../components/GenericAccountSelection'
import { useAccounts } from '../contexts/AccountsContext'

export const useAccountBaseFromAccountList = () => {
  const { accountList } = useAccounts()

  const accountBase = useMemo((): AccountBaseInfo[] => {
    return (
      (accountList &&
        accountList?.map(account => ({ address: account.address }))) ||
      []
    )
  }, [accountList])

  return accountBase
}
