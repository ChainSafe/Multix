import { Box } from "@mui/material";
import { useCallback } from "react";
import styled from "styled-components";
import AccountSelection from "./AccountSelection";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountDisplay from "./AccountDisplay";

interface Props {
  className?: string;
  signatories: string[]
  setSignatories: React.Dispatch<React.SetStateAction<string[]>>
}

const SignatorySelection = ({ className, signatories, setSignatories }: Props) => {

  const addSignatory = useCallback((newSignatory: string) => {
    const newSignatories = [...signatories, newSignatory]
    setSignatories(newSignatories)
  }, [setSignatories, signatories])

  const removeSignatory = useCallback((indexToDelete: number) => {
    const newSignatories = signatories.filter((_, index) => indexToDelete !== index)
    setSignatories(newSignatories)
  }, [setSignatories, signatories])

  return (
    <Box className={className}>
      {signatories.map((address, index) => (
        <div
          className="selectedList"
          key={address}
        >
          <AccountDisplay address={address} />
          <IconButton
            className="deleteButton"
            aria-label="delete"
            onClick={() => removeSignatory(index)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
      {signatories.length > 0 && (
        <div className="additionText">
          New signatory...
        </div>
      )}
      <Box className="addSignatoryField">
        <AccountSelection
          className="accountDropdown"
          currentSignatories={signatories}
          addSignatory={addSignatory}
          withName
          withAddButton
          //make sure the first state is empty
          value=""
        />
      </Box>
    </Box>
  )
}

export default styled(SignatorySelection)(({ theme }) => `
  .selectedList{
    margin-bottom: 1rem;
  }

  .deleteButton, .addButton {
    margin-left: 1rem;
    height: 2.5rem;
    align-self: center;
  }
  .accountDropdown {
          flex: 1;
      }

  .selectedList, .addSignatoryField {
    display: flex;
  }


  .additionText {
      margin-top: .5rem;
      margin-bottom: .5rem;
  }
`)