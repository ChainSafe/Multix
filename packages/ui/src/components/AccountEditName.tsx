import { Grid, TextField } from "@mui/material"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { useAccounts } from "../contexts/AccountsContext"
import { useAccountNames } from "../contexts/AccountNamesContext"
import AccountDisplay from "./AccountDisplay"

export interface OnChangeArgs {
    addresses: (string | undefined)[]
    name: string
}

interface Props {
    className?: string
    address: string
    onNameChange: (args: OnChangeArgs) => void
}

const AccountEditName = ({ address, onNameChange, className }: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const { addressList } = useAccounts()
  const [name, setName] = useState("")
  const isExtensionAccount = useMemo(() => addressList.includes(address), [address, addressList])

  useEffect(() => {
    if (!name) {
      const defaultName = getNamesWithExtension(address) || ""
      setName(defaultName)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getNamesWithExtension])

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setName(value)
    onNameChange({ addresses: [address], name: value })
  }, [address, onNameChange])

  return (
    <Grid
      className={className}
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        alignItems="center"
      >
        <AccountDisplay
          address={address}
          withName={false}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={8}
      >
        <TextField
          className="nameField"
          label={`Name${isExtensionAccount ? " (from extension)" : ""}`}
          onChange={onChange}
          disabled={isExtensionAccount}
          value={name}
          // onKeyDown={handleSpecialKeys}
        />
      </Grid>
    </Grid>)
}

export default styled(AccountEditName)(({ theme }) => `
  
`)