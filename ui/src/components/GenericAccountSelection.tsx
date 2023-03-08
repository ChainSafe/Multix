import { Autocomplete, Box, FilterOptionsState, InputAdornment, TextField } from "@mui/material";
import { useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import { createFilterOptions } from '@mui/material/Autocomplete';
import AccountDisplay from "./AccountDisplay";
import { useAccountNames } from "../contexts/AccountNamesContext";
import IdenticonBadge from "./IdenticonBadge";
import { AccountBadge } from "../types";

export interface AccountBaseInfo {
  address: string
  meta?: {
    isProxy?: boolean
    isMulti?: boolean
  }
}

interface Props {
  className?: string;
  accountList?: AccountBaseInfo[]
  onChange: (account: AccountBaseInfo) => void
  value: AccountBaseInfo
  label?: string
  allowAnyAddressInput?: boolean
}

const getBadge = (account: AccountBaseInfo | string) => {
  return typeof account === "string"
    ? undefined
    : account.meta?.isProxy
      ? AccountBadge.PURE
      : account.meta?.isMulti
        ? AccountBadge.MULTI
        : undefined
}

const isOptionEqualToValue = (option: AccountBaseInfo, value: AccountBaseInfo) => {
  return option.address === value.address
}

const GenericAccountSelection = ({ className, accountList = [], value, onChange, label = "", allowAnyAddressInput = false }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { getNamesWithExtension } = useAccountNames()
  const valueAddress = useMemo(() => typeof value === "string" ? value : value.address, [value])
  const valueBadge = useMemo(() => getBadge(value), [value])

  const getOptionLabel = useCallback((option: typeof accountList[0] | string) => {
    // this happens when allowAnyAddressInput === true and users enter a string manually
    if (typeof option === "string") {
      return option
    }

    return getNamesWithExtension(option.address) || option.address
  }, [getNamesWithExtension])

  const filter = useMemo(() => createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof accountList[0]) => `${option.address}${getOptionLabel(option)}`
  }), [getOptionLabel]);

  const filterOptions = useCallback((options: AccountBaseInfo[], state: FilterOptionsState<AccountBaseInfo>): AccountBaseInfo[] => {
    const filtered = filter(options, state);

    const { inputValue } = state;

    // Suggest the creation of a new value
    const isExisting = filtered.length !== 0
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        address: inputValue,
      });
    }

    return filtered;
  }, [filter])

  const onInputBlur = useCallback(() => {
    inputRef.current?.setSelectionRange(0, 0)
    // inputRef?.current?.blur()
  }, [])

  const onChangeAutocomplete = useCallback((_: React.SyntheticEvent<Element, Event>, val: AccountBaseInfo | string) => {
    if (typeof val === "string") {
      onChange({
        address: val
      })
    } else {
      onChange(val)
    }
    onInputBlur()
  }, [onChange, onInputBlur])


  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', "Escape"].includes(e.key)) {
      onInputBlur()
    }
  }, [onInputBlur])

  if (accountList.length === 0) {
    return null
  }

  return (
    <Autocomplete
      isOptionEqualToValue={isOptionEqualToValue}
      freeSolo={allowAnyAddressInput}
      selectOnFocus={allowAnyAddressInput}
      clearOnBlur={allowAnyAddressInput}
      handleHomeEndKeys={allowAnyAddressInput}
      className={className}
      disableClearable
      filterOptions={filterOptions}
      options={accountList}
      renderOption={(props, option) => {
        return <Box component="li" sx={{ mr: ".5rem", pt: ".8rem !important", pl: "2rem !important" }} {...props} key={option.address}>
          <AccountDisplay
            address={option.address}
            badge={getBadge(option)}
          />
        </Box>
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <IdenticonBadge
                  address={valueAddress}
                  badge={valueBadge}
                />
              </InputAdornment>
            ),
          }}
          onBlur={onInputBlur}
          onKeyDown={handleSpecialKeys}
        />
      )}
      getOptionLabel={getOptionLabel}
      onChange={onChangeAutocomplete}
      value={value}
    />
  )
}

export default styled(GenericAccountSelection)(({ theme }) => `
  flex: 1;

  .MuiInputBase-root {
    background-color: white;
  }
`)