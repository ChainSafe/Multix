import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../contexts/AccountsContext";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { createFilterOptions } from '@mui/material/Autocomplete';
import { isValidAddress } from "../utils";
import { ICON_THEME, ICON_SIZE } from "../constants";

interface Props {
  className?: string;
  disabled?: boolean
  addSignatory?: (address: string) => void
  value?: string
  inputLabel?: string
  currentSignatories?: string[]
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
const AccountSelection = ({ className, addSignatory, disabled = false, value, inputLabel = "Account", currentSignatories = [] }: Props) => {
  const { accountList = [] } = useAccountList()
  const [selected, setSelected] = useState(value)
  const [errorMessage, setErrorMessage] = useState("")
  const ref = useRef<HTMLInputElement>(null)
  const dedupedSignatories = useMemo(() => {
    return accountList.filter((account) => !currentSignatories.includes(account.address))
  }, [accountList, currentSignatories])

  const onChangeAutocomplete = useCallback((_: React.SyntheticEvent<Element, Event>, val: string | InjectedAccountWithMeta | null) => {
    setErrorMessage("")
    const value = getOptionLabel(val)
    setSelected(value)
  }, [])

  const onAddSignatory = useCallback(() => {
    if (!selected) {
      return
    }

    if (!isValidAddress(selected)) {
      setErrorMessage("Invalid address")
      return
    }

    if (currentSignatories.includes(selected)) {
      setErrorMessage("Signatory already added")
      return
    }

    if (!!addSignatory) {
      addSignatory(selected)
      setSelected("")
    }

  }, [addSignatory, currentSignatories, selected])

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
        options={dedupedSignatories}
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
            error={!!errorMessage}
            helperText={errorMessage}
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