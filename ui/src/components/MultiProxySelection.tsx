import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import React, { useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { useMultiProxy } from "../contexts/MultiProxyContext";
import AccountDisplay from "./AccountDisplay";
import IdenticonBadge from "./IdenticonBadge";
import { useAccountNames } from "../contexts/AccountNamesContext";
import { AccountBadge } from "../types";

interface Props {
  className?: string;
}

const MultiProxySelection = ({ className }: Props) => {
  const { multiProxyList, selectedMultiProxy, selectMultiProxy } = useMultiProxy()
  const ref = useRef<HTMLInputElement>(null)
  const isSelectedProxy = useMemo(() => !!selectedMultiProxy?.proxy, [selectedMultiProxy])
  // We only support one multisigs if they have no proxy
  const addressToShow = useMemo(() => selectedMultiProxy?.proxy || selectedMultiProxy?.multisigs[0].address, [selectedMultiProxy])
  const { accountNames } = useAccountNames()
  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof selectedMultiProxy) => `${option?.proxy}${option?.multisigs[0].address}` || ""
  });

  const getOptionLabel = useCallback((option: typeof selectedMultiProxy) => {
    // We only support one multisigs if they have no proxy
    const addressToSearch = option?.proxy || option?.multisigs[0].address

    const name = !!addressToSearch && accountNames[addressToSearch]
    return name || addressToSearch as string
  }, [accountNames])


  const onChange = useCallback((_: React.SyntheticEvent<Element, Event>, val: typeof selectedMultiProxy) => {
    if (!val) return

    selectMultiProxy(val)
  }, [selectMultiProxy])

  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', "Escape"].includes(e.key)) {
      ref?.current?.blur()
    }
  }, [])

  if (multiProxyList.length === 0) {
    return null
  }

  return (
    <Autocomplete
      className={className}
      disableClearable
      filterOptions={filterOptions}
      options={multiProxyList}
      renderOption={(props, option) => {
        const isProxy = !!option?.proxy
        const displayAddress = isProxy ? option?.proxy : option?.multisigs[0].address

        return (
          <Box component="li" sx={{ mr: ".5rem", pt: ".8rem !important", pl: "2rem !important", flexShrink: 0 }} {...props} key={displayAddress}>
            <AccountDisplay
              address={displayAddress || ""}
              badge={isProxy ? AccountBadge.PURE : AccountBadge.MULTI}
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
                  badge={isSelectedProxy ? AccountBadge.PURE : AccountBadge.MULTI}
                />
              </InputAdornment>
            ),
          }}
          onKeyDown={handleSpecialKeys}
        />
      )}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      value={selectedMultiProxy || multiProxyList[0]}
    />
  )
}

export default styled(MultiProxySelection)(({ theme }) => `
  min-width: 180px;
  flex: 1;
  text-align: right;

  .MuiTextField-root {
    max-width: 20rem;
  }

  .MuiInputBase-root {
    background-color: white;
  }
`)