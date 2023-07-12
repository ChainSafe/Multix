import { Box, InputAdornment } from '@mui/material'
import * as React from 'react'
import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { getDisplayAddress, isValidAddress } from '../../utils'
import { useAccountNames } from '../../contexts/AccountNamesContext'
import MultixIdenticon from '../MultixIdenticon'
import { Autocomplete, Button, InputField, TextFieldStyled } from '../library'
import OptionMenuItem from './OptionMenuItem'
import {
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState
} from '@mui/material/Autocomplete/Autocomplete'

interface Props {
  className?: string
  addressDisabled?: boolean
  nameDisabled?: boolean
  addAccount?: (address: string) => void
  value?: string
  inputLabel?: string
  currentSelection?: string[]
  withName?: boolean
  withAddButton?: boolean
  withPreselection?: boolean
}

const filterOptions = createFilterOptions({
  ignoreCase: true,
  stringify: (option: InjectedAccountWithMeta) => option.address + option.meta.name
})

const isInjectedAccountWithMeta = (value: any): value is InjectedAccountWithMeta =>
  value && value.address && value.meta && value.meta.source

const getOptionLabel = (option: string | InjectedAccountWithMeta | null) => {
  if (!option) return ''

  return typeof option === 'string' ? option : option.address
}
const AccountSelection = ({
  className,
  addAccount,
  addressDisabled = false,
  nameDisabled = false,
  value,
  inputLabel = 'Address',
  currentSelection = [],
  withName = false,
  withAddButton = false,
  withPreselection = true
}: Props) => {
  const { ownAccountList = [], getAccountByAddress } = useAccounts()
  const [selected, setSelected] = useState(value)
  const [errorMessage, setErrorMessage] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  const { accountNames, addName } = useAccountNames()
  const [name, setName] = useState('')
  const dedupedSignatories = useMemo(() => {
    return ownAccountList.filter((account) => !currentSelection.includes(account.address))
  }, [ownAccountList, currentSelection])
  const extensionName = useMemo(() => {
    if (!selected) return ''
    return getAccountByAddress(selected)?.meta.name
  }, [getAccountByAddress, selected])

  useEffect(() => {
    const previouslyNameAccount = selected && accountNames[selected]
    if (previouslyNameAccount) {
      setName(previouslyNameAccount)
    }
  }, [accountNames, selected])

  const onChangeAutocomplete = useCallback(
    (
      _: SyntheticEvent<Element, Event>,
      val: NonNullable<
        | InjectedAccountWithMeta
        | string
        | undefined
        | (string | InjectedAccountWithMeta | undefined)[]
      >
    ) => {
      setErrorMessage('')
      setName('')

      const value = getOptionLabel(val as string)
      setSelected(value)
    },
    []
  )

  const onAddSignatory = useCallback(() => {
    if (!selected) {
      return
    }

    if (!isValidAddress(selected)) {
      setErrorMessage('Invalid address')
      return
    }

    if (currentSelection.includes(selected)) {
      setErrorMessage('Signatory already added')
      return
    }

    if (addAccount) {
      name && addName(name, selected)
      addAccount(selected)
      setSelected('')
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

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: InjectedAccountWithMeta,
    _: AutocompleteRenderOptionState
  ) => (
    <OptionMenuItem
      keyValue={option.address}
      {...props}
    >
      <MultixIdenticonStyled value={option.address} />
      {getDisplayAddress(option.address)} - {option.meta.name}
    </OptionMenuItem>
  )

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextFieldStyled
      {...params}
      inputRef={ref}
      error={!!errorMessage}
      helperText={errorMessage}
      label={inputLabel}
      InputProps={{
        ...params.InputProps,
        startAdornment: selected ? (
          <InputAdornment position="start">
            <MultixIdenticonAutocompleteStyled
              size={24}
              value={selected}
            />
          </InputAdornment>
        ) : null
      }}
      onKeyDown={handleSpecialKeys}
    />
  )

  return (
    <BoxStyled className={className}>
      <Autocomplete
        freeSolo
        disabled={addressDisabled}
        filterOptions={filterOptions}
        options={withPreselection ? dedupedSignatories : []}
        onKeyDown={handleSpecialKeys}
        renderInput={renderInput}
        renderOption={renderOption}
        getOptionLabel={getOptionLabel}
        onInputChange={onChangeAutocomplete}
        value={selected}
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

const MultixIdenticonAutocompleteStyled = styled(MultixIdenticon)``

const MultixIdenticonStyled = styled(MultixIdenticon)`
  margin-right: 0.5rem;
  flex-shrink: 0;
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
