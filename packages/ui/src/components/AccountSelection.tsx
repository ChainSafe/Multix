import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material'
import Identicon from '@polkadot/react-identicon'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  SyntheticEvent
} from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../contexts/AccountsContext'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { isValidAddress } from '../utils'
import { ICON_THEME, ICON_SIZE } from '../constants'
import { useAccountNames } from '../contexts/AccountNamesContext'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

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
  inputLabel = 'Account',
  currentSelection = [],
  withName = false,
  withAddButton = false,
  withPreselection = true
}: Props) => {
  const { accountList = [], getAccountByAddress } = useAccounts()
  const [selected, setSelected] = useState(value)
  const [errorMessage, setErrorMessage] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  const { accountNames, addName } = useAccountNames()
  const [name, setName] = useState('')
  const dedupedSignatories = useMemo(() => {
    return accountList.filter((account) => !currentSelection.includes(account.address))
  }, [accountList, currentSelection])
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
    (_: SyntheticEvent<Element, Event>, val: string | InjectedAccountWithMeta | null) => {
      setErrorMessage('')
      setName('')
      const value = getOptionLabel(val)
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

  return (
    <Box className={className}>
      <Autocomplete
        className="addressField"
        disabled={addressDisabled}
        freeSolo
        filterOptions={filterOptions}
        options={withPreselection ? dedupedSignatories : []}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{
              '& > .renderOptionIdenticon': { mr: '.5rem', flexShrink: 0 }
            }}
            {...props}
            key={option.address}
          >
            <Identicon
              className="renderOptionIdenticon"
              value={option.address}
              theme={ICON_THEME}
              size={ICON_SIZE}
            />
            {option.address} - {option.meta.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputRef={ref}
            error={!!errorMessage}
            helperText={errorMessage}
            label={inputLabel}
            InputProps={{
              ...params.InputProps,
              startAdornment: selected ? (
                <InputAdornment position="start">
                  <Identicon
                    value={selected}
                    theme={ICON_THEME}
                    size={ICON_SIZE}
                  />
                </InputAdornment>
              ) : null
            }}
            onKeyDown={handleSpecialKeys}
          />
        )}
        getOptionLabel={getOptionLabel}
        onInputChange={onChangeAutocomplete}
        value={selected}
      />
      {withName && (
        <TextField
          className="nameField"
          label="Name"
          onChange={onNameChange}
          disabled={!!extensionName || nameDisabled}
          value={extensionName || name || ''}
          onKeyDown={handleSpecialKeys}
        />
      )}
      {withAddButton && (
        <IconButton
          className="addButton"
          aria-label="add"
          onClick={onAddSignatory}
          disabled={!selected || !!errorMessage}
        >
          <AddIcon />
        </IconButton>
      )}
    </Box>
  )
}

export default styled(AccountSelection)`
  display: flex;
  flex: 1;

  .addressField {
    flex: 1;
    margin-right: 0.5rem;
  }

  .nameField {
    flex: 1;
  }

  .addButton {
    margin-left: 1rem;
    height: 2.5rem;
    align-self: center;
  }
`
