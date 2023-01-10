import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../contexts/AccountsContext";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { createFilterOptions } from '@mui/material/Autocomplete';
import { isValidAddress } from "../utils";

const ICON_SIZE = 30
const ICON_THEME = "polkadot"

interface Props {
  className?: string;
  disabled?: boolean
  addSignatory?: (address: string) => void
  value?: string
  inputLabel?: string
}

const filterOptions = createFilterOptions({
  ignoreCase: true,
  stringify: (option: InjectedAccountWithMeta) => option.address + option.meta.name,
});

const getOptionLabel = (option: string | InjectedAccountWithMeta | null) => {
  if (!option) return ""

  return typeof option === "string"
    ? option
    : option.address
}
const AccountSelection = ({ className, addSignatory, disabled = false, value, inputLabel = "Account" }: Props) => {
  const { accountList = [] } = useAccountList()
  const [selected, setSelected] = useState(value)
  const isError = useMemo(() => !!selected && !isValidAddress(selected), [selected])
  const ref = useRef<HTMLInputElement>(null)

  const onChangeAutocomplete = useCallback((_: React.SyntheticEvent<Element, Event>, val: string | InjectedAccountWithMeta | null) => {
    const value = getOptionLabel(val)
    setSelected(value)
  }, [])

  const onAddSignatory = useCallback(() => {
    if (selected && !isError && !!addSignatory) {
      addSignatory(selected)
      setSelected("")
    }
  }, [addSignatory, isError, selected])

  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', "Escape"].includes(e.key)) {
      ref?.current?.blur()
    }
  }, [])
  return (
    <Box className={className}>
      <Autocomplete
        disabled={disabled}
        freeSolo
        selectOnFocus
        filterOptions={filterOptions}
        options={accountList}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > .renderOptionIdenticon': { mr: ".5rem", flexShrink: 0 } }} {...props}>
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
            error={isError}
            helperText={isError && "Invalid address"}
            label={inputLabel}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Identicon
                    value={selected}
                    theme={ICON_THEME}
                    size={ICON_SIZE}
                  />
                </InputAdornment>
              ),
            }}
            onKeyDown={handleSpecialKeys}
          />

        )}
        getOptionLabel={getOptionLabel}
        onInputChange={onChangeAutocomplete}
        onBlur={onAddSignatory}
        value={selected}
      />
    </Box>
  )
}

export default styled(AccountSelection)(({ theme }) => `
`)