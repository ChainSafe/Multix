import { styled } from '@mui/material'
import { useAccounts } from '../contexts/AccountsContext'
import { useNavigate } from 'react-router-dom'
import { Button } from './library'

export const ConnectOrWatch = () => {
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()
  const navigate = useNavigate()

  return (
    <ConnectButtonWrapperStyled>
      No multisig found for your accounts or watched accounts.{' '}
      {isAllowedToConnectToExtension ? (
        <Button onClick={() => navigate('/create')}>Create one</Button>
      ) : (
        <Button onClick={allowConnectionToExtension}>Connect Wallet</Button>
      )}
      or
      <Button onClick={() => navigate('/settings')}>Watch one</Button>
    </ConnectButtonWrapperStyled>
  )
}

const ConnectButtonWrapperStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    margin: 0 1rem;
  }
`
