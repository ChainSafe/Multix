import { Box, InputAdornment } from '@mui/material'
import React, { useCallback, useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { MultiProxy, useMultiProxy } from '../../contexts/MultiProxyContext'
import AccountDisplay from '../AccountDisplay'
import IdenticonBadge from '../IdenticonBadge'
import { useAccountNames } from '../../contexts/AccountNamesContext'
import { AccountBadge } from '../../types'
import { Autocomplete } from '../library'

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

  if (multiProxyList.length === 0) {
    return null
  }

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

  return (
    <Autocomplete
      className={className}
      isOptionEqualToValue={isOptionEqualToValue}
      disableClearable
      filterOptions={filterOptions}
      options={multiProxyList}
      renderOption={renderOptions}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IdenticonBadge
              address={addressToShow}
              badge={isSelectedProxy ? AccountBadge.PURE : AccountBadge.MULTI}
            />
          </InputAdornment>
        )
      }}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      value={selectedMultiProxy || multiProxyList[0]}
    />
  )
}

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
