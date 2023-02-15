import { Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { useMultiProxy } from "../../contexts/MultiProxyContext";
import { AccountNames, useAccountNames } from "../../contexts/AccountNamesContext";
import AccountEditName, { OnChangeArgs } from "../AccountEditName";

interface Props {
  onClose: () => void
  className?: string
}

const EditNames = ({ onClose, className }: Props) => {
  const { selectedMultiProxy, selectedMultiProxySignatories } = useMultiProxy()
  const { addNames } = useAccountNames()
  const [newNames, setNewNames] = useState<AccountNames>({})

  const onSave = useCallback(async () => {
    addNames(newNames)
    onClose()
  }, [addNames, newNames, onClose])

  const onNameChange = useCallback(({ name, addresses }: OnChangeArgs) => {
    const uniqueAddresses = addresses.filter(address => !!address) as string[]

    const namesToBeAdded = uniqueAddresses.reduce((previousValue: AccountNames, currentValue: string) => {
      return { ...previousValue, [currentValue]: name }
    }, {} as AccountNames)

    setNewNames({ ...newNames, ...namesToBeAdded })
  }, [newNames])

  return <Dialog
    fullWidth
    maxWidth={"sm"}
    open
    onClose={onClose}
    className={className}
  >
    <DialogTitle>Edit names</DialogTitle>
    <DialogContent className="generalContainer">
      <Grid container>
        <Grid item xs={12}>
          <h4>Multisig & Proxy</h4>
          <AccountEditName
            className='accountEdition'
            address={selectedMultiProxy?.multisigs[0].address || ""}
            proxyAddress={selectedMultiProxy?.proxy}
            onNameChange={onNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <h4>Signatories</h4>
          {selectedMultiProxySignatories.map(signer => <AccountEditName
            key={signer}
            className='accountEdition'
            address={signer}
            onNameChange={onNameChange}
          />)}
        </Grid>
        <Grid item xs={12} className="buttonContainer">
          <Button
            onClick={onSave}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
}

export default styled(EditNames)(({ theme }) => `
  .buttonContainer {
    text-align: right;
  }

  .accountEdition {
    margin-bottom: 1rem;
    align-items: center;
  }
`)