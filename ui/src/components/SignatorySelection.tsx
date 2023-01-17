import { Box } from "@mui/material";
import { useCallback } from "react";
import styled from "styled-components";
import { Signatory } from "../pages/Creation";
import AccountSelection from "./AccountSelection";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  className?: string;
  signatories: Signatory[]
  setSignatories: React.Dispatch<React.SetStateAction<Signatory[]>>
}

const SignatorySelection = ({ className, signatories, setSignatories }: Props) => {

  const addSignatory = useCallback((newSignatory: string) => {
    const newSet = [...signatories, { address: newSignatory }]
    setSignatories(newSet)
  }, [setSignatories, signatories])

  const removeSignatory = useCallback((indexToDelete: number) => {
    const newSet = signatories.filter((_, index) => indexToDelete !== index)
    setSignatories(newSet)
  }, [setSignatories, signatories])

  return (
    <Box className={className}>
      <>
        {signatories.map(({ address }, index) => (
          <div
            className="selectedList"
            key={address}
          >
            <AccountSelection
              className="accountDropdown"
              disabled
              value={address}
              inputLabel={`Account ${index + 1}`}
            />
            <IconButton
              className="signatoryButton"
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
            currentSignatories={signatories.map(s => s.address)}
            addSignatory={addSignatory}
            value=""
          />
          <IconButton
            className="signatoryButton"
            aria-label="add"
            onClick={() => {
              //noop
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </>
    </Box>
  )
}

export default styled(SignatorySelection)(({ theme }) => `
  .selectedList{
    margin-bottom: 1rem;
  }

  .signatoryButton {
    margin-left: 1rem;
    width: 3rem;
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