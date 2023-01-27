import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { useMultisig } from "../contexts/MultisigContext";
import AccountDisplay from "./AccountDisplay";
import IdenticonBadge from "./IdenticonBadge";
import { useAccountNames } from "../contexts/AccountNamesContext";

interface Props {
  className?: string;
}

const MultisigSelection = ({ className }: Props) => {
  const { multisigList, selectedMultisig, selectMultisig } = useMultisig()
  const ref = useRef<HTMLInputElement>(null)
  const isSelectedProxy = useMemo(() => !!selectedMultisig?.proxy?.id, [selectedMultisig])
  const addressToShow = useMemo(() => selectedMultisig?.proxy?.id || selectedMultisig?.id, [selectedMultisig])
  const { accountNames } = useAccountNames()
  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof selectedMultisig) => `${option?.proxy?.id}${option?.id}` || ""
  });

  const getOptionLabel = useCallback((option: typeof selectedMultisig) => {
    const addressToSearch = option?.proxy?.id || option?.id

    const name = !!addressToSearch && accountNames[addressToSearch]
    return name || addressToSearch as string
  }, [accountNames])


  const onChange = useCallback((_: React.SyntheticEvent<Element, Event>, val: typeof selectedMultisig) => {
    if (!val) return

    selectMultisig(val)
  }, [selectMultisig])

  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', "Escape"].includes(e.key)) {
      ref?.current?.blur()
    }
  }, [])

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
          <Box component="li" sx={{ mr: ".5rem", pt: ".8rem !important", pl: "2rem !important", flexShrink: 0 }} {...props} key={displayAddress}>
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
            startAdornment: (
              <InputAdornment position="start">
                <IdenticonBadge
                  address={addressToShow}
                  badge={isSelectedProxy ? "proxy" : "multi"}
                />
              </InputAdornment>
            ),
          }}
          onKeyDown={handleSpecialKeys}
        />
      )}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      value={selectedMultisig || multisigList[0]}
    />
  )
}

export default styled(MultisigSelection)(({ theme }) => `
  flex: 1;
  text-align: right;

  .MuiTextField-root {
    max-width: 20rem;
  }

  .MuiInputBase-root {
    background-color: white;
  }
`)