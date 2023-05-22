import { styled } from '@mui/material/styles'
import { Box, IconButton } from '@mui/material'
import { useWatchedAccounts } from '../hooks/useWatchedAccounts'
import AccountDisplay from './AccountDisplay'
import CloseIcon from '@mui/icons-material/Close'
import AccountSelection from './AccountSelection'
import { useMemo } from 'react'

interface Props {
  className?: string
}

const WatchedSignatories = ({ className }: Props) => {
  const { watchedAccounts, removeWatchedAccount, addWatchedAccount } = useWatchedAccounts()
  const watchedAccountsString = useMemo(
    () => watchedAccounts.map((a) => a.address),
    [watchedAccounts]
  )
  return (
    <Box className={className}>
      <ListStyled>
        {watchedAccounts.map(({ address }) => {
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
          currentSelection={watchedAccountsString}
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
    align-content: center;
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

export default WatchedSignatories
