import { InputAdornment } from '@mui/material'
import { useCallback, useEffect, useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { useAccounts } from '../../contexts/AccountsContext'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import AccountDisplay from '../AccountDisplay'
import MultixIdenticon from '../MultixIdenticon'
import { Autocomplete, TextFieldStyled } from '../library'
import OptionMenu from './OptionMenu'

interface Props {
  className?: string
  possibleSigners: string[]
  onChange?: () => void
}

const getOptionLabel = (option: InjectedAccountWithMeta | undefined) => {
  if (!option) return ''

  return option.meta.name || ''
}

const isOptionEqualToValue = (
  option: InjectedAccountWithMeta | undefined,
  value: InjectedAccountWithMeta | undefined
) => {
  if (!option || !value) return false

  return option.address === value.address
}

const SignerSelection = ({ className, possibleSigners, onChange }: Props) => {
  const { selectAccount, selectedAccount, ownAccountList } = useAccounts()
  const signersList = useMemo(() => {
    return ownAccountList?.filter((account) => possibleSigners.includes(account.address)) || []
  }, [ownAccountList, possibleSigners])

  useEffect(() => {
    if (!selectedAccount || signersList.length === 0) {
      return
    }

    if (!possibleSigners.includes(selectedAccount.address)) {
      selectAccount(signersList[0])
    }
  }, [possibleSigners, selectAccount, selectedAccount, signersList])

  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof selectedAccount) => `${option?.address}${option?.meta.name}` || ''
  })

  const onChangeSigner = useCallback(
    (_: any, newSelected: (typeof signersList)[0]) => {
      newSelected && selectAccount(newSelected)
      onChange && onChange()
    },
    [onChange, selectAccount]
  )

  if (signersList.length === 0) {
    return null
  }

  return (
    <Autocomplete
      isOptionEqualToValue={isOptionEqualToValue}
      disableClearable
      className={className}
      options={signersList}
      filterOptions={filterOptions}
      renderOption={(props, option) => (
        <OptionMenu
          component="li"
          {...props}
          key={option?.address}
        >
          <AccountDisplay address={option?.address || ''} />
        </OptionMenu>
      )}
      renderInput={(params) => (
        <TextFieldStyled
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <MultixIdenticon value={selectedAccount?.address} />
              </InputAdornment>
            )
          }}
        />
      )}
      getOptionLabel={getOptionLabel}
      onChange={onChangeSigner}
      value={selectedAccount || signersList[0]}
    />
  )
}

export default styled(SignerSelection)`
  margin-top: 0.3rem;
`
