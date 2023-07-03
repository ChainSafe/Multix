import { useMemo } from 'react'
import { AccountBaseInfo } from '../components/selectors/GenericAccountSelection'
import { useAccounts } from '../contexts/AccountsContext'

export const useAccountBaseFromAccountList = () => {
  const { ownAccountList } = useAccounts()

  const accountBase = useMemo((): AccountBaseInfo[] => {
    return (
      (ownAccountList && ownAccountList?.map((account) => ({ address: account.address }))) || []
    )
  }, [ownAccountList])

  return accountBase
}
