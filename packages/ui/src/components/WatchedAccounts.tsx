import { styled } from '@mui/material/styles'
import { Box, Grid, IconButton, Paper } from '@mui/material'
import { useWatchedAddresses } from '../contexts/WatchedAddressesContext'
import AccountDisplay from './AccountDisplay'
import { HiOutlineTrash } from 'react-icons/hi2'
import AccountSelection from './select/AccountSelection'

interface Props {
  className?: string
}

const WatchedAccounts = ({ className }: Props) => {
  const { watchedAddresses, removeWatchedAccount, addWatchedAccount } = useWatchedAddresses()

  return (
    <Grid
      className={className}
      container
      spacing={2}
    >
      {watchedAddresses.length > 0 && (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <PaperStyled>
            {watchedAddresses.map((address) => {
              const removeItem = () => removeWatchedAccount(address)
              return (
                <div
                  key={address}
                  className="selectedSignatory"
                  data-cy="container-account-details"
                >
                  <AccountDisplay address={address} />
                  <IconButton
                    className="deleteButton"
                    aria-label="delete"
                    onClick={removeItem}
                    data-cy="button-delete-watched-account"
                  >
                    <HiOutlineTrash />
                  </IconButton>
                </div>
              )
            })}
          </PaperStyled>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
      >
        <TitleStyled>Watch new account...</TitleStyled>
        <AccountSelectionWrapperStyled>
          <AccountSelection
            className="accountDropdown"
            currentSelection={watchedAddresses}
            addAccount={addWatchedAccount}
            withName
            withAddButton
            withPreselection={false}
            //make sure the first state is empty
            value=""
          />
        </AccountSelectionWrapperStyled>
      </Grid>
    </Grid>
  )
}

const PaperStyled = styled(Paper)`
  padding: 1rem;
  max-height: 13.5rem;
  overflow: auto;

  .selectedSignatory {
    margin-bottom: 1rem;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    .deleteButton {
      margin-left: 1rem;
      height: 2.5rem;
      align-self: center;
    }
  }
`
const TitleStyled = styled(Box)`
  margin-bottom: 0.5rem;
`

const AccountSelectionWrapperStyled = styled(Box)`
  display: flex;
  margin-bottom: 2rem;

  .accountDropdown {
    flex: 1;
  }
`

export default WatchedAccounts
