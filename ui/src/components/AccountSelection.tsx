import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useAccounts } from "../contexts/AccountsContext";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { createFilterOptions } from '@mui/material/Autocomplete';
import { isValidAddress } from "../utils";
import { ICON_THEME, ICON_SIZE } from "../constants";
import { useAccountNames } from "../contexts/AccountNamesContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  className?: string;
  addressDisabled?: boolean
  nameDisabled?: boolean
  addSignatory?: (address: string) => void
  value?: string
  inputLabel?: string
  currentSignatories?: string[]
  withName?: boolean
  withAddButton?: boolean
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
const AccountSelection = ({ className, addSignatory, addressDisabled = false, nameDisabled = false, value, inputLabel = "Account", currentSignatories = [], withName = false, withAddButton = false }: Props) => {
  const { accountList = [], getAccountByAddress } = useAccounts()
  const [selected, setSelected] = useState(value)
  const [errorMessage, setErrorMessage] = useState("")
  const ref = useRef<HTMLInputElement>(null)
  const { accountNames, addName } = useAccountNames()
  const [name, setName] = useState("")
  const dedupedSignatories = useMemo(() => {
    return accountList.filter((account) => !currentSignatories.includes(account.address))
  }, [accountList, currentSignatories])
  const extensionName = useMemo(() => {
    if (!selected) return ""
    return getAccountByAddress(selected)?.meta.name
  }, [getAccountByAddress, selected])


  useEffect(() => {
    const previouslyNameAccount = selected && accountNames[selected]
    if (previouslyNameAccount) {
      setName(previouslyNameAccount)
    }
  }, [accountNames, selected])

  const onChangeAutocomplete = useCallback((_: React.SyntheticEvent<Element, Event>, val: string | InjectedAccountWithMeta | null) => {
    setErrorMessage("")
    setName("")
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
      name && addName(name, selected)
      addSignatory(selected)
      setSelected("")
      setName("")
    }

  }, [addName, addSignatory, currentSignatories, name, selected])

  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', "Escape"].includes(e.key)) {
      onAddSignatory()
    }
  }, [onAddSignatory])

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
        // selectOnFocus
        filterOptions={filterOptions}
        options={dedupedSignatories}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > .renderOptionIdenticon': { mr: ".5rem", flexShrink: 0 } }} {...props} key={option.address}>
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
              startAdornment: (
                !!selected
                  ? <InputAdornment position="start">
                    <Identicon
                      value={selected}
                      theme={ICON_THEME}
                      size={ICON_SIZE}
                    />
                  </InputAdornment>
                  : null
              ),
            }}
            onKeyDown={handleSpecialKeys}
          />
        )}
        getOptionLabel={getOptionLabel}
        onInputChange={onChangeAutocomplete}
        value={selected}
      />
      {withName && <TextField
        className="nameField"
        label="Name"
        onChange={onNameChange}
        disabled={!!extensionName || nameDisabled}
        value={extensionName || name || ""}
        onKeyDown={handleSpecialKeys}
      />}
      {withAddButton && <IconButton
        className="addButton"
        aria-label="add"
        onClick={onAddSignatory}
        disabled={!selected}
      >
        <AddIcon />
      </IconButton>}
    </Box>
  )
}

export default styled(AccountSelection)(({ theme }) => `
  display: flex;

  .addressField {
    flex: 1;
    margin-right: 0.5rem;
  }

  .nameField {
    flex: 1
  }
`)