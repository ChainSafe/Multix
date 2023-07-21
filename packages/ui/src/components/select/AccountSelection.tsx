import { Box, Grid } from '@mui/material'
import { ChangeEvent, SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { isValidAddress } from '../../utils'
import { useAccountNames } from '../../contexts/AccountNamesContext'
import { Button, InputField } from '../library'
import GenericAccountSelection, { AccountBaseInfo } from './GenericAccountSelection'
import { useAccountBaseFromAccountList } from '../../hooks/useAccountBaseFromAccountList'
import Warning from '../Warning'

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

const getOptionLabel = (option: string | AccountBaseInfo | null) => {
  if (!option) return ''

  return typeof option === 'string' ? option : option.address
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

  const onAdd = useCallback(() => {
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
        onAdd()
      }
    },
    [onAdd]
  )

  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setName(value)
  }, [])

  const onInputChange = useCallback(
    (
      _: SyntheticEvent<Element, Event>,
      val: NonNullable<
        AccountBaseInfo | string | undefined | (string | AccountBaseInfo | undefined)[]
      >
    ) => {
      setErrorMessage('')
      setName('')

      const value = getOptionLabel(val as string)
      isValidAddress(value)
      setSelected(value && isValidAddress(value) ? { address: value } : undefined)
    },
    []
  )

  return (
    <Grid container>
      {!!errorMessage && (
        <Grid
          item
          xs={12}
        >
          <WarningStyled text={errorMessage} />
        </Grid>
      )}
      <Grid
        item
        xs={12}
      >
        <BoxStyled className={className}>
          <GenericAccountSelection
            allowAnyAddressInput={true}
            disabled={addressDisabled}
            accountList={withPreselection ? dedupedSignatories : []}
            onChange={onChange}
            onInputChange={onInputChange}
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
              onClick={onAdd}
              variant="secondary"
              disabled={!selected || !!errorMessage}
            >
              Add
            </ButtonStyled>
          )}
        </BoxStyled>
      </Grid>
    </Grid>
  )
}

const WarningStyled = styled(Warning)`
  margin: 1rem 0 1rem 0;
`

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
