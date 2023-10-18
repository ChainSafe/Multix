import { styled } from '@mui/material'
import { useAccounts } from '../contexts/AccountsContext'
import { useNavigate } from 'react-router-dom'
import { Button } from './library'
import { WATCH_ACCOUNT_ANCHOR } from '../pages/Settings/Settings'

export const ConnectOrWatch = () => {
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()
  const navigate = useNavigate()

  return (
    <WrapperStyled>
      {isAllowedToConnectToExtension ? (
        <div>No multisig found for your accounts or watched accounts.</div>
      ) : (
        <>
          <h1>Multix is an interface to easily manage complex multisigs.</h1>
          <div>Connect a wallet to interact with Multix or watch an address.</div>
        </>
      )}
      <ButtonWrapperStyled>
        {isAllowedToConnectToExtension ? (
          <Button
            variant="primary"
            onClick={() => navigate('/create')}
          >
            Create one
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={allowConnectionToExtension}
          >
            Connect Wallet
          </Button>
        )}
        or
        <Button
          data-cy="button-watch-account"
          onClick={() => navigate(`/settings${WATCH_ACCOUNT_ANCHOR}`)}
        >
          Watch account
        </Button>
      </ButtonWrapperStyled>
    </WrapperStyled>
  )
}

const WrapperStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`

const ButtonWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  button {
    margin: 0 0.5rem;
  }
`
