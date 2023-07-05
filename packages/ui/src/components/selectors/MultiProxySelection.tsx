import { Box, InputAdornment, TextField } from '@mui/material'
import React, { useCallback, useMemo, useRef } from 'react'
import { styled } from '@mui/material/styles'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { MultiProxy, useMultiProxy } from '../../contexts/MultiProxyContext'
import AccountDisplay from '../AccountDisplay'
import IdenticonBadge from '../IdenticonBadge'
import { useAccountNames } from '../../contexts/AccountNamesContext'
import { AccountBadge } from '../../types'
import { Autocomplete } from '../library'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete'

interface Props {
  className?: string
}

const getDisplayAddress = (option?: MultiProxy) =>
  option?.proxy ? option?.proxy : option?.multisigs[0].address

const isOptionEqualToValue = (option: MultiProxy | undefined, value: MultiProxy | undefined) => {
  if (!option || !value) return false

  if (!!option.proxy || !!value.proxy) {
    return option.proxy === value.proxy
  }
  return option.multisigs[0].address === value.multisigs[0].address
}

const MultiProxySelection = ({ className }: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const { multiProxyList, selectedMultiProxy, selectMultiProxy } = useMultiProxy()

  const isSelectedProxy = useMemo(() => !!selectedMultiProxy?.proxy, [selectedMultiProxy])
  // We only support one multisigs if they have no proxy
  const addressToShow = useMemo(
    () => selectedMultiProxy?.proxy || selectedMultiProxy?.multisigs[0].address,
    [selectedMultiProxy]
  )
  const { accountNames } = useAccountNames()
  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof selectedMultiProxy) => {
      const displayAddress = getDisplayAddress(option) || ''
      return `${option?.proxy}${option?.multisigs[0].address}${accountNames[displayAddress]}` || ''
    }
  })

  const getOptionLabel = useCallback(
    (option: typeof selectedMultiProxy) => {
      // We only support one multisigs if they have no proxy
      const addressToSearch = option?.proxy || option?.multisigs[0].address
      const name = !!addressToSearch && accountNames[addressToSearch]
      return name || (addressToSearch as string)
    },
    [accountNames]
  )

  const onChange = useCallback(
    (_: React.SyntheticEvent<Element, Event>, val: typeof selectedMultiProxy) => {
      if (!val) return

      selectMultiProxy(val)
    },
    [selectMultiProxy]
  )

  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', 'Escape'].includes(e.key)) {
      ref?.current?.blur()
    }
  }, [])

  const renderOptions = (props: React.HTMLAttributes<HTMLLIElement>, option: any) => {
    const displayAddress = getDisplayAddress(option)

    return (
      <Box
        component="li"
        sx={{
          mr: '.5rem',
          pt: '.8rem !important',
          pl: '2rem !important',
          flexShrink: 0
        }}
        {...props}
        key={displayAddress}
      >
        <AccountDisplay
          address={displayAddress || ''}
          badge={option?.proxy ? AccountBadge.PURE : AccountBadge.MULTI}
        />
      </Box>
    )
  }

  const renderInputs = (params: AutocompleteRenderInputParams) => (
    <TextFieldStyled
      {...params}
      inputRef={ref}
      label=""
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <IdenticonBadge
              address={addressToShow}
              badge={isSelectedProxy ? AccountBadge.PURE : AccountBadge.MULTI}
            />
          </InputAdornment>
        )
      }}
      onKeyDown={handleSpecialKeys}
    />
  )

  if (multiProxyList.length === 0) {
    return null
  }

  return (
    <Autocomplete
      className={className}
      isOptionEqualToValue={isOptionEqualToValue}
      disableClearable
      filterOptions={filterOptions}
      options={multiProxyList}
      renderOption={renderOptions}
      renderInput={renderInputs}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      value={selectedMultiProxy || multiProxyList[0]}
    />
  )
}

const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    height: 3.5rem;
    padding: 0.5rem 0.75rem 0.5rem 1rem;
    border: none;
    outline: 1.5px solid ${({ theme }) => theme.custom.text.borderColor};

    &:hover {
      border: none;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  fieldset {
    &:hover {
      border: none;
    }
  }

  input {
    max-width: 8.625rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.custom.text.primary};
  }
`

export default styled(MultiProxySelection)(
  ({ theme }) => `
  min-width: 180px;
  flex: 1;
  text-align: right;

  .MuiTextField-root {
    max-width: 18.875rem;
  }

  .MuiInputBase-root {
    background-color: ${theme.palette.primary.white};
  }
  
  .MuiAutocomplete-endAdornment {
    right: 1rem !important;
  }
`
)
