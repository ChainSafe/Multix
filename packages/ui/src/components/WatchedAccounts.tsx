import { styled } from '@mui/material/styles'
import { Box, IconButton } from '@mui/material'
import { useWatchedAddresses } from '../contexts/WatchedAddressesContext'
import AccountDisplay from './AccountDisplay'
import { Close as CloseIcon } from '@mui/icons-material'
import AccountSelection from './AccountSelection'

interface Props {
  className?: string
}

const WatchedAccounts = ({ className }: Props) => {
  const { watchedAddresses, removeWatchedAccount, addWatchedAccount } = useWatchedAddresses()

  return (
    <Box className={className}>
      <ListStyled>
        {watchedAddresses.map((address) => {
          const removeItem = () => removeWatchedAccount(address)
          return (
            <li key={address}>
              <AccountDisplay
                address={address}
                withName
              />
              <IconButtontyled
                size="small"
                aria-label="close"
                color="inherit"
                onClick={removeItem}
              >
                <CloseIcon fontSize="small" />
              </IconButtontyled>
            </li>
          )
        })}
      </ListStyled>
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
    </Box>
  )
}

const TitleStyled = styled(Box)`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`

const AccountSelectionWrapperStyled = styled(Box)`
  display: flex;

  .accountDropdown {
    flex: 1;
  }
`

const ListStyled = styled('ul')`
  list-style: none;

  li {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
`

const IconButtontyled = styled(IconButton)`
  margin-left: 1rem;
`

export default WatchedAccounts
