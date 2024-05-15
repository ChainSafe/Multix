import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '../library'
import { WATCH_ACCOUNT_ANCHOR } from '../../pages/Settings/Settings'
import { useAccounts } from '../../contexts/AccountsContext'
import { styled } from '@mui/material'

export const ConnectButtons = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()

  return (
    <ButtonWrapperStyled>
      {isAllowedToConnectToExtension ? (
        <Button
          variant="primary"
          onClick={() => {
            navigate({
              pathname: '/create',
              search: createSearchParams(searchParams).toString()
            })
          }}
          data-cy="button-create-one"
        >
          Create one
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={allowConnectionToExtension}
          data-cy="button-connect-wallet"
        >
          Connect Wallet
        </Button>
      )}
      or
      <Button
        onClick={() => {
          navigate({
            pathname: '/settings',
            search: createSearchParams(searchParams).toString(),
            hash: WATCH_ACCOUNT_ANCHOR
          })
        }}
        data-cy="button-watch-account"
      >
        Watch account
      </Button>
    </ButtonWrapperStyled>
  )
}

const ButtonWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  button {
    margin: 0 0.5rem;
  }
`
