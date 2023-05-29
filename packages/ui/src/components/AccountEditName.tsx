import { Grid, TextField } from '@mui/material'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useAccounts } from '../contexts/AccountsContext'
import { useAccountNames } from '../contexts/AccountNamesContext'
import AccountDisplay from './AccountDisplay'
import { debounce } from '../utils/debounce'

export interface OnChangeArgs {
  address: string
  name: string
}

interface Props {
  className?: string
  address: string
  onNameChange: (args: OnChangeArgs) => void
}

const AccountEditName = ({ address, onNameChange, className }: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const { ownAddressList } = useAccounts()
  const [name, setName] = useState('')
  const isExtensionAccount = useMemo(
    () => ownAddressList.includes(address),
    [address, ownAddressList]
  )

  useEffect(() => {
    if (!name) {
      const defaultName = getNamesWithExtension(address) || ''
      setName(defaultName)
    }
  }, [address, getNamesWithExtension, name])

  // debounce isn't working without useCallback
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedNameChange = useCallback(debounce(onNameChange, 300), [onNameChange])

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setName(value)
      debouncedNameChange({ address, name: value })
    },
    [address, debouncedNameChange]
  )

  return (
    <Grid
      className={className}
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        alignItems="center"
      >
        <AccountDisplay
          address={address}
          withName={false}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={8}
      >
        <TextField
          className="nameField"
          label={`Name${isExtensionAccount ? ' (from extension)' : ''}`}
          onChange={onChange}
          disabled={isExtensionAccount}
          value={name}
          // onKeyDown={handleSpecialKeys}
        />
      </Grid>
    </Grid>
  )
}

export default AccountEditName
