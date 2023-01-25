import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { ICON_THEME, ICON_SIZE } from "../constants";
import AccountDisplay from "./AccountDisplay";
import { useAccountNames } from "../hooks/useAccountNames";

export interface AccountBaseInfo {
  address: string
  name: string
  meta: { [index: string]: any }
}

interface Props {
  className?: string;
  accountList?: AccountBaseInfo[]
  onChange: (account: AccountBaseInfo) => void
  value: AccountBaseInfo
  label?: string
}

const GenericAccountSelection = ({ className, accountList = [], value, onChange, label = "" }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { getNamesWithExtension } = useAccountNames()

  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof accountList[0]) => `${option.address}${option.name}`
  });

  const getOptionLabel = useCallback((option: typeof accountList[0]) => {
    return getNamesWithExtension(value.address) || option.address
  }, [getNamesWithExtension, value.address])

  const onInputBlur = useCallback(() => {
    inputRef.current?.setSelectionRange(0, 0)
  }, [])

  const onChangeAutocomplete = useCallback((_: React.SyntheticEvent<Element, Event>, val: typeof accountList[0]) => {
    if (!val) return
    onInputBlur()

    onChange(val)
  }, [onChange, onInputBlur])


  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', "Escape"].includes(e.key)) {
      inputRef?.current?.blur()
    }
  }, [])

  if (accountList.length === 0) {
    return null
  }

  return (
    <Autocomplete
      className={className}
      disableClearable
      filterOptions={filterOptions}
      options={accountList}
      renderOption={(props, option) => {
        return <Box component="li" {...props} key={option.address}>
          <AccountDisplay
            address={option.address}
            badge={
              option.meta.isProxy
                ? "proxy"
                : option.meta.isMulti
                  ? "multi"
                  : undefined
            }
          />
        </Box>
      }
      }
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              // FIXME add badge here
              <InputAdornment position="start">
                <Identicon
                  value={value.address}
                  theme={ICON_THEME}
                  size={ICON_SIZE}
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