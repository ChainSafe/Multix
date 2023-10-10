import { styled } from '@mui/material'
import { useAccounts } from '../contexts/AccountsContext'
import { useNavigate } from 'react-router-dom'
import { Button } from './library'
import { WATCH_ACCOUNT_ANCHOR } from '../pages/Settings/Settings'

export const ConnectOrWatch = () => {
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()
  const navigate = useNavigate()

  return (
    <ConnectButtonWrapperStyled>
      <div>No multisig found for your accounts or watched accounts.</div>
      <ButtonWrapperStyled>
        {isAllowedToConnectToExtension ? (
          <Button onClick={() => navigate('/create')}>Create one</Button>
        ) : (
          <Button onClick={allowConnectionToExtension}>Connect Wallet</Button>
        )}
        or
        <Button onClick={() => navigate(`/settings${WATCH_ACCOUNT_ANCHOR}`)}>Watch one</Button>
      </ButtonWrapperStyled>
    </ConnectButtonWrapperStyled>
  )
}

const ConnectButtonWrapperStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
