import { Alert, Box, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material'
import { Button } from '../library'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { ModalCloseButton } from '../library/ModalCloseButton'
import { SignClientTypes } from '@walletconnect/types'
import { useWalletConnect } from '../../contexts/WalletConnectContext'
import { useGetWalletConnectNamespace } from '../../hooks/useWalletConnectNamespace'
import AccountDisplay from '../AccountDisplay'
import { AccountBadge } from '../../types'
import { getSdkError } from '@walletconnect/utils'

interface Props {
  onClose: () => void
  className?: string
  sessionProposal?: SignClientTypes.EventArguments['session_proposal']
}

const WalletConnectSessionProposal = ({ onClose, className, sessionProposal }: Props) => {
  const { selectedMultiProxy } = useMultiProxy()
  const { web3wallet, refresh } = useWalletConnect()
  const { currentNamespace, getAccountsWithNamespace } = useGetWalletConnectNamespace()
  const [errorMessage, setErrorMessage] = useState('')
  const accountsToShare = useMemo(() => {
    const accountsToShare = [
      selectedMultiProxy?.proxy,
      ...(selectedMultiProxy?.multisigs.map(({ address }) => address) || [])
    ].filter((address) => !!address) as string[]
    return getAccountsWithNamespace(accountsToShare)
  }, [getAccountsWithNamespace, selectedMultiProxy?.multisigs, selectedMultiProxy?.proxy])

  useEffect(() => {
    if (!web3wallet || !sessionProposal) return

    const wCRequestedNetwork = sessionProposal?.params.requiredNamespaces?.polkadot?.chains?.[0]

    if (wCRequestedNetwork !== currentNamespace) {
      setErrorMessage(
        `Multix is not connected to the same network as the WalletConnect request. Please switch to the correct network.
        - Requested: ${wCRequestedNetwork}
        - Current: ${currentNamespace}`
      )
    }
  }, [currentNamespace, sessionProposal, web3wallet])

  const onApprove = useCallback(() => {
    if (!web3wallet || !sessionProposal) return

    web3wallet
      .approveSession({
        id: sessionProposal.id,
        namespaces: {
          polkadot: {
            accounts: accountsToShare,
            methods: sessionProposal.params.requiredNamespaces?.polkadot?.methods,
            events: []
          }
        }
      })
      .catch(console.error)
      .finally(() => {
        onClose()
        refresh()
      })
  }, [accountsToShare, onClose, refresh, sessionProposal, web3wallet])

  const onReject = useCallback(() => {
    if (!web3wallet || !sessionProposal) return

    web3wallet
      .rejectSession({
        id: sessionProposal.id,
        reason: getSdkError('USER_REJECTED_METHODS')
      })
      .catch(console.error)
      .finally(() => {
        onClose()
      })
  }, [onClose, sessionProposal, web3wallet])

  return (
    <Dialog
      fullWidth
      maxWidth={'sm'}
      open
      className={className}
    >
      <ModalCloseButton onClose={onReject} />
      <DialogTitle>WalletConnect Connection Request</DialogTitle>
      <DialogContent className="generalContainer">
        <Grid container>
          {!!errorMessage && <AlertStyled severity="error">{errorMessage}</AlertStyled>}
          <Grid
            item
            xs={12}
          >
            <AppInfoStyled>From:</AppInfoStyled> {sessionProposal?.params.proposer.metadata.name}
            <br />
            <AppInfoStyled>Website:</AppInfoStyled> {sessionProposal?.params.proposer.metadata.url}
            <br />
            <AppInfoStyled>Methods:</AppInfoStyled>{' '}
            {sessionProposal?.params.requiredNamespaces?.polkadot?.methods?.map(
              (method, index) =>
                `${method}${
                  index ===
                  (sessionProposal?.params.requiredNamespaces?.polkadot?.methods?.length - 1 || 0)
                    ? ''
                    : ', '
                }`
            )}
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TitleStyled>The following accounts will be shared:</TitleStyled>
            <AccountWrapperStyled>
              {selectedMultiProxy?.proxy && (
                <AccountDisplay
                  address={selectedMultiProxy?.proxy}
                  badge={AccountBadge.PURE}
                  withName
                />
              )}
              {selectedMultiProxy?.multisigs.map(({ address }) => {
                return (
                  <AccountDisplay
                    key={address}
                    address={address}
                    badge={AccountBadge.MULTI}
                    withName
                  />
                )
              })}
            </AccountWrapperStyled>
          </Grid>
          <ButtonContainerStyled
            item
            xs={12}
            className="buttonContainer"
          >
            <Button
              variant="secondary"
              onClick={onReject}
            >
              Reject
            </Button>
            <Button
              variant="primary"
              onClick={onApprove}
              disabled={!!errorMessage}
            >
              Approve
            </Button>
          </ButtonContainerStyled>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

const TitleStyled = styled('h3')`
  font-weight: 500;
`

const AccountWrapperStyled = styled(Box)`
  padding-left: 1rem;
`

const AppInfoStyled = styled('span')`
  font-weight: 500;
`

const ButtonContainerStyled = styled(Grid)`
  text-align: right;
  margin-top: 1rem;

  button:last-child {
    margin-left: 1rem;
  }
`

const AlertStyled = styled(Alert)`
  margin-bottom: 1rem;
`

export default styled(WalletConnectSessionProposal)`
  .accountEdition {
    margin-bottom: 1rem;
    align-items: end;
  }
`
