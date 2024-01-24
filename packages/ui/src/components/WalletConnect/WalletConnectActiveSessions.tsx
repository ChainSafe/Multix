import { Box, CircularProgress, styled } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { useWalletConnect } from '../../contexts/WalletConnectContext'
import Expander from '../Expander'
import { Button } from '../library'
import { getSdkError } from '@walletconnect/utils'

export const WalletConnectActiveSessions = () => {
  const { web3wallet, refresh } = useWalletConnect()
  const [isLoading, setIsLoading] = useState(false)

  const activeSessions = useMemo(
    () => Object.values(web3wallet?.getActiveSessions() || {}),
    [web3wallet]
  )

  const onDeleteSession = useCallback(
    async (topic: string) => {
      if (!web3wallet) return

      setIsLoading(true)
      await web3wallet.disconnectSession({ topic, reason: getSdkError('USER_DISCONNECTED') })
      await refresh()
      setIsLoading(false)
    },
    [web3wallet, refresh]
  )

  if (!activeSessions || activeSessions.length === 0) {
    return null
  }

  return (
    <WrapperBox>
      Active sessions:
      {activeSessions.map((session) => {
        const { name, url } = session.peer.metadata
        const expiryDate = new Date(session.expiry * 1000)

        const content = (
          <ContentBoxStyled>
            <div className="info">
              <ul>
                <li>Namespace: {session.requiredNamespaces?.polkadot?.chains?.join(', ')}</li>
                <li>Methods: {session.requiredNamespaces?.polkadot?.methods?.join(', ')}</li>
                <li>Events: {session.requiredNamespaces?.polkadot?.events?.join(', ')}</li>
                <li>Expiring: {expiryDate.toDateString()}</li>
              </ul>
            </div>
            <div className="buttonWrapper">
              <Button
                variant="primary"
                onClick={() => onDeleteSession(session.topic)}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Delete session'}
              </Button>
            </div>
          </ContentBoxStyled>
        )

        return (
          <ExpanderStyled
            key={session.topic}
            expanded={false}
            title={
              <TitleBoxStyled>
                <div className="name">{name}</div>
                <div className="url">{url}</div>
              </TitleBoxStyled>
            }
            content={content}
          />
        )
      })}
    </WrapperBox>
  )
}

const ContentBoxStyled = styled(Box)`
  margin-left: 1rem;
  display: flex;

  .info {
    display: flex;
    flex: 1;
  }

  .buttonWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;

    .MuiCircularProgress-root {
      color: ${({ theme }) => theme.palette.primary.white};
    }
  }
`

const TitleBoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  min-width: 0;

  .name,
  .url {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .name {
    font-weight: 500;
  }

  .url {
    color: ${({ theme }) => theme.custom.text.secondary};
  }
`
const WrapperBox = styled(Box)`
  margin-top: 1rem;
`

const ExpanderStyled = styled(Expander)`
  margin-top: 0.5rem;
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  border: 1px solid ${({ theme }) => theme.custom.gray[400]};
  padding: 0.5rem;
`
