import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material'
import Identicon from '@polkadot/react-identicon'
import React, { useCallback, useEffect, useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { ICON_SIZE, ICON_THEME } from '../constants'
import { useAccounts } from '../contexts/AccountsContext'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import AccountDisplay from './AccountDisplay'

interface Props {
  className?: string
  possibleSigners: string[]
  onChange?: () => void
}

const getOptionLabel = (option: InjectedAccountWithMeta | undefined) => {
  if (!option) return ''

  return option.meta.name || ''
}

const SignerSelection = ({ className, possibleSigners, onChange }: Props) => {
  const { selectAccount, selectedAccount, accountList } = useAccounts()
  const signersList = useMemo(() => {
    return accountList?.filter((account) => possibleSigners.includes(account.address)) || []
  }, [accountList, possibleSigners])

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
    stringify: (option: typeof selectedAccount) => `${option?.address}${option?.meta.name}` || '',
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
      disableClearable
      className={className}
      options={signersList}
      filterOptions={filterOptions}
      renderOption={(props, option, index) => (
        <Box
          component="li"
          sx={{
            mr: '.5rem',
            pt: '.8rem !important',
            pl: '1.5rem !important',
            flexShrink: 0,
          }}
          {...props}
          key={option?.address}
        >
          <AccountDisplay address={option?.address || ''} />
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Signing with"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Identicon
                  value={selectedAccount?.address}
                  theme={ICON_THEME}
                  size={ICON_SIZE}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
      getOptionLabel={getOptionLabel}
      onChange={onChangeSigner}
      value={selectedAccount || signersList[0]}
    />
  )
}

export default styled(SignerSelection)(
  ({ theme }) => `
margin-top: .3rem;
  /* flex: 1;

  .MuiInputBase-root {
    background-color: white;
  } */
`
)
