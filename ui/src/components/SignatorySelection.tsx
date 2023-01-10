import { Grid } from "@mui/material";
import { useCallback } from "react";
import styled from "styled-components";
import { Signatory } from "../pages/Creation";
import AccountSelection from "./AccountSelection";
import IconButton from '@mui/material/IconButton';
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
    <Grid
      item
      xs={12}
      md={6}
      className={className}
    >
      <>
        {signatories.map(({ address }, index) => (
          <div
            className="accountSelection"
            key={address}
          >
            <AccountSelection
              className="accountDropdown"
              addSignatory={addSignatory}
              disabled
              value={address}
              inputLabel={`Account ${index + 1}`}
            />
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
        <AccountSelection
          addSignatory={addSignatory}
          value=""
        />
      </>

    </Grid>
  )
}

export default styled(SignatorySelection)(({ theme }) => `
    .accountSelection {
        margin-bottom: 1rem;
        display: flex;

        .accountDropdown {
            flex: 1;
        }
        
        .deleteButton {
            margin-left: 1rem;
        }
    }

    .additionText {
        margin-top: .5rem;
        margin-bottom: .5rem;
    }
`)