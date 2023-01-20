import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useCallback, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { ICON_SIZE, ICON_THEME } from "../constants";
import { useAccountList } from "../contexts/AccountsContext";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"

interface Props {
  className?: string;
  possibleSigners: string[];
  onChange: () => void;
}

const getOptionLabel = (option: string | InjectedAccountWithMeta | null | undefined,) => {
  if (!option) return ""

  return typeof option === "string"
    ? option
    : option.address
}

const SignerSelection = ({ className, possibleSigners, onChange }: Props) => {
  const { selectAccount, selectedAccount, accountList } = useAccountList()
  const signersList = useMemo(() =>
    accountList?.filter((account) => possibleSigners.includes(account.address)) || []
    , [accountList, possibleSigners])


  useEffect(() => {
    if (!selectedAccount) {
      return
    }

    if (!possibleSigners.includes(selectedAccount.address)) {
      selectAccount(signersList[0])
    }

  }, [possibleSigners, selectAccount, selectedAccount, signersList])

  const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: typeof selectedAccount) => `${option?.address}${option?.meta.name}` || ""
  });

  const onChangeSigner = useCallback((_: any, newSelected: typeof signersList[0] | null | undefined) => {
    newSelected && selectAccount(newSelected)
    onChange()
  }, [onChange, selectAccount])

  // const handleSpecialKeys = useCallback((e: any) => {
  //   if (['Enter', "Escape"].includes(e.key)) {
  //     ref?.current?.blur()
  //   }
  // }, [])

  if (signersList.length === 0) {
    return null
  }

  return (
    <Autocomplete
      disableClearable
      className={className}
      options={signersList}
      filterOptions={filterOptions}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > .renderOptionIdenticon': { mr: ".5rem", flexShrink: 0 } }} {...props}>
          <Identicon
            className="renderOptionIdenticon"
            value={option?.address}
            theme={ICON_THEME}
            size={ICON_SIZE}
          />
          {option?.address} - {option?.meta.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Signing with"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Identicon
                  value={selectedAccount?.address}
                  theme={ICON_THEME}
                  size={ICON_SIZE}
                />
              </InputAdornment>
            ),
          }}
        //   onKeyDown={handleSpecialKeys}
        />
      )}
      getOptionLabel={getOptionLabel}
      onChange={onChangeSigner}
      value={selectedAccount}
    />
  )
}

export default styled(SignerSelection)(({ theme }) => `
margin-top: .3rem;
  /* flex: 1;

  .MuiInputBase-root {
    background-color: white;
  } */
`)