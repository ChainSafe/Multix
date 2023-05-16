import { styled } from '@mui/material/styles'
import { Box, IconButton } from '@mui/material'
import { useWatchedAccounts } from '../hooks/useWatchedAccounts'
import AccountDisplay from './AccountDisplay'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  className?: string
}

const WatchedSignatories = ({ className }: Props) => {
  const { watchedAccounts, removeWatchedAccount } = useWatchedAccounts()
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
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={removeItem}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </li>
          )
        })}
      </ListStyled>
    </Box>
  )
}

const ListStyled = styled('ul')`
  list-style: none;

  li {
    margin-top: 1rem;
    display: flex;
  }
`

export default styled(WatchedSignatories)``
