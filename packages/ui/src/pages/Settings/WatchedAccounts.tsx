import { styled } from '@mui/material/styles'
import { Box, Grid, IconButton, Paper } from '@mui/material'
import { useWatchedAddresses } from '../../contexts/WatchedAddressesContext'
import AccountDisplay from '../../components/AccountDisplay'
import { HiOutlineTrash } from 'react-icons/hi2'
import AccountSelection from '../../components/select/AccountSelection'

interface Props {
  className?: string
}

const WatchedAccounts = ({ className }: Props) => {
  const { watchedAddresses, removeWatchedAccount, addWatchedAccount } = useWatchedAddresses()

  return (
    <>
      <WatchAccountsHeaderStyled>Currently watched accounts:</WatchAccountsHeaderStyled>
      <Grid
        className={className}
        container
        spacing={2}
      >
        {watchedAddresses.length > 0 && (
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
          >
            <PaperStyled>
              {watchedAddresses.map((address, index) => {
                return (
                  <AccountItemWrapperStyled
                    key={address}
                    className="selectedSignatory"
                    data-cy="container-account-details"
                  >
                    <AccountCountStyled>{index + 1}</AccountCountStyled>
                    <AccountDisplayStyled address={address} />
                    <IconButtonDeleteStyled
                      className="deleteButton"
                      aria-label="delete"
                      onClick={() => removeWatchedAccount(address)}
                      data-cy="button-delete-watched-account"
                    >
                      <HiOutlineTrash />
                    </IconButtonDeleteStyled>
                  </AccountItemWrapperStyled>
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
          <WatchAccountsHeaderStyled>Watch an account</WatchAccountsHeaderStyled>
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
    </>
  )
}

const WatchAccountsHeaderStyled = styled('h3')`
  color: ${({ theme }) => theme.custom.gray[800]};
  font-size: 1rem;
  font-weight: 400;
`

const PaperStyled = styled(Paper)`
  .selectedSignatory {
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const IconButtonDeleteStyled = styled(IconButton)`
  margin-left: 1rem;
  height: 2.5rem;
  align-self: center;
`

const AccountCountStyled = styled(Box)`
  margin-right: 1rem;
`

const AccountDisplayStyled = styled(AccountDisplay)`
  flex: 1;
`

const AccountItemWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
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
