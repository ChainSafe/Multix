import { Box, Paper } from '@mui/material'
import React, { useCallback } from 'react'
import { styled } from '@mui/material/styles'
import AccountSelection from './AccountSelection'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import AccountDisplay from './AccountDisplay'

interface Props {
  className?: string
  signatories: string[]
  setSignatories: React.Dispatch<React.SetStateAction<string[]>>
}

const SignatorySelection = ({ className, signatories, setSignatories }: Props) => {
  const addSignatory = useCallback(
    (newSignatory: string) => {
      const newSignatories = [...signatories, newSignatory]
      setSignatories(newSignatories)
    },
    [setSignatories, signatories]
  )

  const removeSignatory = useCallback(
    (indexToDelete: number) => {
      const newSignatories = signatories.filter((_, index) => indexToDelete !== index)
      setSignatories(newSignatories)
    },
    [setSignatories, signatories]
  )

  return (
    <Box className={className}>
      {signatories.length > 0 && (
        <>
          <div className="additionText">Selected:</div>
          <Paper className="selectedList">
            {signatories.map((address, index) => (
              <div
                key={address}
                className="selectedSignatory"
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
          </Paper>
          <div className="additionText">New signatory...</div>
        </>
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

export default styled(SignatorySelection)(
  ({ theme }) => `
  .selectedList {
    padding: 1rem;
    margin-bottom: 2rem;
  }

  .selectedSignatory {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .deleteButton, .addButton {
    margin-left: 1rem;
    height: 2.5rem;
    align-self: center;
  }
  .accountDropdown {
          flex: 1;
      }

  .selectedSignatory, .addSignatoryField {
    display: flex;
  }

  .additionText {
      margin-top: .5rem;
      margin-bottom: .5rem;
  }
`
)
