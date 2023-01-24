import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { ICON_THEME, ICON_SIZE } from "../constants";
import AccountDisplay from "./AccountDisplay";

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
  // const { multisigList, selectedMultisig, selectMultisig } = useMultisig()
  const inputRef = useRef<HTMLInputElement>(null)
  // const addressToShow = useMemo(() => selectedMultisig?.proxy?.id || selectedMultisig?.id, [selectedMultisig])

  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof accountList[0]) => `${option.address}${option.name}`
  });

  const getOptionLabel = useCallback((option: typeof accountList[0]) => {
    return option.address
  }, [])

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
      renderOption={(props, option) =>
        <Box component="li" key={option.address} {...props}>
          <AccountDisplay address={option.address} />
        </Box>
      }
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
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