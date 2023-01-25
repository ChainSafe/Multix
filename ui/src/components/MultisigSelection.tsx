import { Autocomplete, Badge, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { useMultisig } from "../contexts/MultisigContext";
import { ICON_THEME, ICON_SIZE } from "../constants";
import AccountDisplay from "./AccountDisplay";

interface Props {
  className?: string;
}

const MultisigSelection = ({ className }: Props) => {
  const { multisigList, selectedMultisig, selectMultisig } = useMultisig()
  const ref = useRef<HTMLInputElement>(null)
  const addressToShow = useMemo(() => selectedMultisig?.proxy?.id || selectedMultisig?.id, [selectedMultisig])

  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof selectedMultisig) => `${option?.proxy?.id}${option?.id}` || "" // need to add the name here+ option.meta.name,
  });

  const getOptionLabel = useCallback((option: string | typeof selectedMultisig | null) => {
    if (!option) return ""

    return typeof option === "string"
      ? option
      : option?.proxy?.id || option?.id
  }, [])


  const onChangeAutocomplete = useCallback((_: React.SyntheticEvent<Element, Event>, val: typeof selectedMultisig) => {
    if (!val) return

    selectMultisig(val)
  }, [selectMultisig])


  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', "Escape"].includes(e.key)) {
      ref?.current?.blur()
    }
  }, [])

  const AccountIcon = () => <Identicon
    value={addressToShow}
    theme={ICON_THEME}
    size={ICON_SIZE}
  />

  if (multisigList.length === 0) {
    return null
  }

  return (
    <Autocomplete
      className={className}
      disableClearable
      filterOptions={filterOptions}
      options={multisigList}
      renderOption={(props, option) => {
        const isProxy = !!option?.proxy?.id
        const displayAddress = isProxy ? option?.proxy?.id : option?.id

        return (
          <Box component="li" sx={{ mr: ".5rem", pt: ".8rem !important", pl: "1.5rem !important", flexShrink: 0 }} {...props}>
            <AccountDisplay
              address={displayAddress || ""}
              badge={isProxy ? "proxy" : "multi"}
            />
          </Box>
        )
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={ref}
          label=""
          InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Badge
                  color="secondary"
                  badgeContent={selectedMultisig?.proxy?.id ? "proxy" : "multi"}
                  anchorOrigin={{ horizontal: "left", vertical: "top" }}
                >
                  <AccountIcon />
                </Badge>
              </InputAdornment>
            ),
          }}
          value={addressToShow}
          onKeyDown={handleSpecialKeys}
        />
      )}
      getOptionLabel={getOptionLabel}
      onChange={onChangeAutocomplete}
      value={selectedMultisig || multisigList[0]}
    />
  )
}

export default styled(MultisigSelection)(({ theme }) => `
  flex: 1;

  .MuiInputBase-root {
    background-color: white;
  }
`)