import { Box } from '@mui/material'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { isValidAddress } from '../../utils'
import { useAccountNames } from '../../contexts/AccountNamesContext'
import { Button, InputField } from '../library'
import GenericAccountSelection, { AccountBaseInfo } from './GenericAccountSelection'
import { useAccountBaseFromAccountList } from '../../hooks/useAccountBaseFromAccountList'

interface Props {
  className?: string
  addressDisabled?: boolean
  nameDisabled?: boolean
  addAccount?: (address: string) => void
  value?: string
  label?: string
  currentSelection?: string[]
  withName?: boolean
  withAddButton?: boolean
  withPreselection?: boolean
}

const AccountSelection = ({
  className,
  addAccount,
  addressDisabled = false,
  nameDisabled = false,
  value,
  label = 'Address',
  currentSelection = [],
  withName = false,
  withAddButton = false,
  withPreselection = true
}: Props) => {
  const { getAccountByAddress } = useAccounts()
  const [errorMessage, setErrorMessage] = useState('')
  const { accountNames, addName } = useAccountNames()
  const [name, setName] = useState('')
  const accountBase = useAccountBaseFromAccountList()
  const [selected, setSelected] = useState(accountBase.find(({ address }) => address === value))
  const dedupedSignatories = useMemo(() => {
    return accountBase.filter((account) => !currentSelection.includes(account.address))
  }, [accountBase, currentSelection])
  const extensionName = useMemo(() => {
    if (!selected) return ''
    return getAccountByAddress(selected.address)?.meta.name
  }, [getAccountByAddress, selected])

  useEffect(() => {
    const previouslyNameAccount = selected && accountNames[selected.address]
    if (previouslyNameAccount) {
      setName(previouslyNameAccount)
    }
  }, [accountNames, selected])

  const onChange = useCallback((newAccount?: AccountBaseInfo) => {
    newAccount && setSelected(newAccount)
  }, [])

  const onAddSignatory = useCallback(() => {
    if (!selected) {
      return
    }

    if (!isValidAddress(selected.address)) {
      setErrorMessage('Invalid address')
      return
    }

    if (currentSelection.includes(selected.address)) {
      setErrorMessage('Signatory already added')
      return
    }

    if (addAccount) {
      name && addName(name, selected.address)
      addAccount(selected.address)
      setSelected(undefined)
      setName('')
    }
  }, [addName, addAccount, currentSelection, name, selected])

  const handleSpecialKeys = useCallback(
    (e: any) => {
      if (['Enter', 'Escape'].includes(e.key)) {
        onAddSignatory()
      }
    },
    [onAddSignatory]
  )

  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setName(value)
  }, [])

  return (
    <BoxStyled className={className}>
      <GenericAccountSelection
        allowAnyAddressInput={true}
        disabled={addressDisabled}
        accountList={withPreselection ? dedupedSignatories : []}
        onChange={onChange}
        value={selected}
        label={label}
      />
      {withName && (
        <InputField
          label="Name"
          onChange={onNameChange}
          disabled={!!extensionName || nameDisabled}
          value={extensionName || name || ''}
          onKeyDown={handleSpecialKeys}
        />
      )}
      {withAddButton && (
        <ButtonStyled
          onClick={onAddSignatory}
          variant="secondary"
          disabled={!selected || !!errorMessage}
        >
          Add
        </ButtonStyled>
      )}
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)`
  align-items: center;
`

const ButtonStyled = styled(Button)`
  margin-left: 1rem;
  align-self: end;
`

export default styled(AccountSelection)`
  display: flex;
  flex: 1;

  .MuiAutocomplete-root {
    margin-right: 0.5rem;
  }

  & > * {
    flex: 1;
  }

  & > button {
    flex: 0;
  }
`
