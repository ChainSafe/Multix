import { useCallback, useMemo, useState } from 'react'
import { Box, Button, Chip, CircularProgress, Grid, IconButton, Paper } from '@mui/material'
import { useMultiProxy } from '../contexts/MultiProxyContext'
import ProposalList from '../components/Transactions/TransactionList'
import { Link, useSearchParams } from 'react-router-dom'
import AccountDisplay from '../components/AccountDisplay'
import SendIcon from '@mui/icons-material/Send'
import Send from '../components/modals/Send'
import { usePendingTx } from '../hooks/usePendingTx'
import OptionsMenu, { MenuOption } from '../components/OptionsMenu'
import EditIcon from '@mui/icons-material/Edit'
import EditNames from '../components/modals/EditNames'
import LockResetIcon from '@mui/icons-material/LockReset'
import ChangeMultisig from '../components/modals/ChangeMultisig'
import { AccountBadge } from '../types'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import SuccessCreation from '../components/SuccessCreation'
import NewMulisigAlert from '../components/NewMulisigAlert'
import { styled } from '@mui/material/styles'
import { renderMultisigHeading } from './multisigHelpers'
import { Center } from '../components/layout/Center'
import { useAccounts } from '../contexts/AccountsContext'
import { useWatchedAddresses } from '../contexts/WatchedAddressesContext'
import { useApi } from '../contexts/ApiContext'
import { useNetwork } from '../contexts/NetworkContext'

interface Props {
  className?: string
}

const Home = ({ className }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams({
    creationInProgress: 'false'
  })
  const [isSendModalOpen, setIsSendModalOpen] = useState(false)
  const {
    isLoading,
    multiProxyList,
    selectedMultiProxy,
    selectedHasProxy,
    error: multisigQueryError,
    selectedIsWatched
  } = useMultiProxy()
  const { selectedNetworkInfo } = useNetwork()
  const { isApiReady } = useApi()
  const { refresh } = usePendingTx()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isChangeMultiModalOpen, setIsChangeMultiModalOpen] = useState(false)
  const onCloseSendModal = useCallback(() => setIsSendModalOpen(false), [])
  const onCloseEditModal = useCallback(() => setIsEditModalOpen(false), [])
  const onCloseChangeMultiModal = useCallback(() => setIsChangeMultiModalOpen(false), [])
  const creationInProgress = useMemo(
    () => searchParams.get('creationInProgress') === 'true',
    [searchParams]
  )
  const [isNewMultisigAlertOpen, setIsNewMultisigAlertOpen] = useState(true)
  const {
    isAllowedToConnectToExtension,
    isExtensionError,
    isAccountLoading,
    allowConnectionToExtension
  } = useAccounts()
  const { watchedAddresses } = useWatchedAddresses()

  const onSuccessSendModal = useCallback(() => {
    onCloseSendModal()
    refresh()
  }, [onCloseSendModal, refresh])

  const onFinalizedSendModal = useCallback(() => {
    refresh()
  }, [refresh])

  const onClosenewMultisigAlert = useCallback(() => {
    setIsNewMultisigAlertOpen(false)
    setSearchParams({ creationInProgress: 'false' })
  }, [setSearchParams])

  const options: MenuOption[] = useMemo(() => {
    const opts = [
      {
        text: 'Edit names',
        icon: <EditIcon />,
        onClick: () => setIsEditModalOpen(true)
      }
    ]

    // allow rotation only for the multisigs with a proxy
    selectedHasProxy &&
      !selectedIsWatched &&
      opts.push({
        text: 'Change multisig',
        icon: <LockResetIcon />,
        onClick: () => setIsChangeMultiModalOpen(true)
      })

    return opts
  }, [selectedHasProxy, selectedIsWatched])

  if (!isAllowedToConnectToExtension && watchedAddresses.length === 0) {
    return (
      <Center>
        <h1>Multix is an interface to easily manage complex multisigs.</h1>
        <p>Connect an extension to interact with Multix or watch an address.</p>
        <Button onClick={allowConnectionToExtension}>Connect Wallet</Button> or
        <Button
          component={Link}
          to="/settings"
        >
          Watch an address
        </Button>
      </Center>
    )
  }

  if (!isApiReady || isAccountLoading) {
    return (
      <Box
        className={className}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '&:first-of-type': {
            marginBottom: '1rem'
          }
        }}
      >
        <CircularProgress />
        {isAccountLoading
          ? 'Loading accounts...'
          : `Connecting to the node at ${selectedNetworkInfo?.rpcUrl}`}
      </Box>
    )
  }

  if (isExtensionError)
    return (
      <Center>
        <h1>
          No account found. Please connect at least one in a wallet extension. More info at{' '}
          <a
            href="https://wiki.polkadot.network/docs/wallets"
            target={'_blank'}
            rel="noreferrer"
          >
            wiki.polkadot.network
          </a>
        </h1>
      </Center>
    )

  if (isLoading) {
    return (
      <Grid
        className={className}
        container
        spacing={2}
      >
        <Box className="loader">
          <CircularProgress />
          <div>Loading your multisigs...</div>
        </Box>
      </Grid>
    )
  }

  if (multisigQueryError) {
    return (
      <Grid
        className={className}
        container
        spacing={2}
      >
        <Box className="loader">
          <div className="multisigErrorMessage">
            <ErrorOutlineIcon className="errorIcon" />
            <div>An error occurred.</div>
          </div>
        </Box>
      </Grid>
    )
  }

  if (multiProxyList.length === 0) {
    return (
      <Grid
        className={className}
        container
        spacing={2}
      >
        <Box className="loader">
          {creationInProgress ? (
            <SuccessCreation />
          ) : (
            <div>
              No multisig found for your accounts.{' '}
              {isAllowedToConnectToExtension ? (
                <>
                  <Button
                    component={Link}
                    to="/create"
                  >
                    Create one
                  </Button>
                </>
              ) : (
                <Button onClick={allowConnectionToExtension}>Connect Wallet</Button>
              )}
              or
              <Button
                component={Link}
                to="/settings"
              >
                Watch one
              </Button>
            </div>
          )}
        </Box>
      </Grid>
    )
  }

  return (
    <Grid
      className={className}
      container
      spacing={2}
    >
      {creationInProgress && multiProxyList.length > 0 && isNewMultisigAlertOpen && (
        <NewMulisigAlert onClose={onClosenewMultisigAlert} />
      )}
      <Grid
        item
        xs={12}
        md={6}
      >
        {selectedMultiProxy && (
          <div className="multiProxyWrapper">
            <div className="multiProxyColumn">
              {selectedHasProxy && (
                <div className="pureHeader">
                  <AccountDisplay
                    className="proxy"
                    address={selectedMultiProxy?.proxy || ''}
                    badge={AccountBadge.PURE}
                    withBalance
                  />
                </div>
              )}
              <h3>{renderMultisigHeading(!!selectedMultiProxy.multisigs.length)}</h3>
              {selectedMultiProxy.multisigs.map((multisig) => {
                return (
                  <Paper
                    className="multisigWrapper"
                    key={multisig.address}
                  >
                    <AccountDisplayWrapperStyled>
                      <AccountDisplay
                        address={multisig.address || ''}
                        badge={AccountBadge.MULTI}
                        withBalance
                      />
                    </AccountDisplayWrapperStyled>
                    <div className="signatoriesWrapper">
                      <h4>
                        Signatories{' '}
                        <Chip
                          className="threshold"
                          label={`${multisig.threshold}/${multisig.signatories?.length}`}
                        />
                      </h4>
                      <ul className="addressList">
                        {multisig?.signatories?.map((signatory) => (
                          <li key={signatory}>
                            <AccountDisplay address={signatory} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Paper>
                )
              })}
            </div>
            <div className="buttonColumn">
              {!selectedIsWatched && (
                <IconButton
                  className="sendButton"
                  aria-label="send"
                  onClick={() => setIsSendModalOpen(true)}
                >
                  <SendIcon />
                </IconButton>
              )}
              <OptionsMenu options={options} />
            </div>
          </div>
        )}
      </Grid>
      {multiProxyList.length > 0 && (
        <Grid
          item
          xs={12}
          md={6}
        >
          <div className="actionWrapper">
            <h3>Transactions</h3>
            <ProposalList />
          </div>
        </Grid>
      )}
      {isSendModalOpen && (
        <Send
          onClose={onCloseSendModal}
          onSuccess={onSuccessSendModal}
          onFinalized={onFinalizedSendModal}
        />
      )}
      {isEditModalOpen && <EditNames onClose={onCloseEditModal} />}
      {isChangeMultiModalOpen && <ChangeMultisig onClose={onCloseChangeMultiModal} />}
    </Grid>
  )
}

const AccountDisplayWrapperStyled = styled('div')`
  margin: 1rem 0 0 2rem;
`

export default styled(Home)(
  ({ theme }) => `
  padding: 1rem;

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  .proxy, .multisig {
    margin-bottom: 0;
  }

  .threshold {
    background-color: ${theme.custom.background.backgroundColorLightGray};
  }

  .addressList {
    padding-inline-start: 0;
    margin-block-end: 0;
    list-style-type: none;
    > li {
      margin-bottom: 1rem;
    }
  }

  .multiProxyWrapper {
    display: flex;
    align-items: center;
  }

  .identicon {
    margin-right: .5rem;
  }

  .signatoriesWrapper {
    & > h2 {
      margin-bottom: 0;
    }
    margin-left: 2rem;
  }

  .sendButton {
    margin-left: 1rem;
    height: 2.5rem;
  }
  .titleWrapper {
    align-items: center;
  }

  .multiProxyColumn {
    flex: 1;
    min-width: 0;

    & > h3 {
      margin-top: 0;
    }
  }

  .buttonColumn {
    display: flex;
    align-self: flex-start;
  }

  .pureHeader {
    margin-bottom: 1rem;
  }

  .multisigWrapper {
    padding: .5rem 0;
    margin-bottom: .5rem;
  }

  .multisigErrorMessage {
    text-align: center;
    margin-top: 1rem;
  }
`
)
