import { useCallback, useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button, Link } from '../../components/library'
import { MdErrorOutline as ErrorOutlineIcon } from 'react-icons/md'
import Send from '../../components/modals/Send'
import { usePendingTx } from '../../hooks/usePendingTx'
import EditNames from '../../components/modals/EditNames'
import ChangeMultisig from '../../components/modals/ChangeMultisig'
import SuccessCreation from '../../components/SuccessCreation'
import NewMulisigAlert from '../../components/NewMulisigAlert'
import { styled } from '@mui/material/styles'
import { Center } from '../../components/layout/Center'
import { useAccounts } from '../../contexts/AccountsContext'
import { useWatchedAddresses } from '../../contexts/WatchedAddressesContext'
import { useApi } from '../../contexts/ApiContext'
import { useNetwork } from '../../contexts/NetworkContext'
import PureProxyHeaderView from './PureProxyHeaderView'
import LoaderWrapper from './LoaderWrapper'
import { useHomeModals } from '../../contexts/HomeModalsContext'
import MultisigView from './MultisigView'
import TransactionList from '../../components/Transactions/TransactionList'

interface HomeProps {
  className?: string
}

const Home = ({ className }: HomeProps) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams({
    creationInProgress: 'false'
  })
  const {
    isLoading,
    multiProxyList,
    selectedMultiProxy,
    error: multisigQueryError
  } = useMultiProxy()
  const { selectedNetworkInfo } = useNetwork()
  const { isApiReady } = useApi()
  const { refresh } = usePendingTx()

  // Modals
  const {
    isChangeMultiModalOpen,
    isEditModalOpen,
    isSendModalOpen,
    setIsEditModalOpen,
    setIsChangeMultiModalOpen,
    setIsSendModalOpen
  } = useHomeModals()

  const onCloseSendModal = useCallback(() => setIsSendModalOpen(false), [])
  const onCloseEditModal = useCallback(() => setIsEditModalOpen(false), [])
  const onCloseChangeMultiModal = useCallback(() => setIsChangeMultiModalOpen(false), [])
  const onSuccessSendModal = useCallback(() => {
    onCloseSendModal()
    refresh()
  }, [onCloseSendModal, refresh])
  const onFinalizedSendModal = useCallback(() => {
    refresh()
  }, [refresh])

  const [showNewMultisigAlert, setShowNewMultisigAlert] = useState(false)
  const {
    isAllowedToConnectToExtension,
    isExtensionError,
    isAccountLoading,
    allowConnectionToExtension
  } = useAccounts()
  const { watchedAddresses } = useWatchedAddresses()

  const onClosenewMultisigAlert = useCallback(() => {
    setShowNewMultisigAlert(false)
    setSearchParams({ creationInProgress: 'false' })
  }, [setSearchParams])

  useEffect(() => {
    if (searchParams.get('creationInProgress') === 'true') {
      setShowNewMultisigAlert(true)
      setTimeout(() => {
        onClosenewMultisigAlert()
      }, 20000)
    }
  }, [onClosenewMultisigAlert, searchParams])

  if (!isAllowedToConnectToExtension && watchedAddresses.length === 0) {
    return (
      <CenterStyled>
        <h1>Multix is an interface to easily manage complex multisigs.</h1>
        <p>Connect an extension to interact with Multix or watch an address.</p>
        <ConnectButtonWrapperStyled>
          <Button onClick={allowConnectionToExtension}>Connect Wallet</Button>
          or
          <Button onClick={() => navigate('/settings')}>Watch an address</Button>
        </ConnectButtonWrapperStyled>
      </CenterStyled>
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

  if (isExtensionError && !watchedAddresses)
    return (
      <CenterStyled>
        <h3>
          No account found. Please connect at least one in a wallet extension. More info at{' '}
          <Link
            href="https://wiki.polkadot.network/docs/wallets"
            target="_blank"
            rel="noreferrer"
          >
            wiki.polkadot.network
          </Link>
        </h3>
      </CenterStyled>
    )

  if (isLoading) {
    return (
      <LoaderWrapper>
        <CircularProgress />
        <div>Loading your multisigs...</div>
      </LoaderWrapper>
    )
  }

  if (multisigQueryError) {
    return (
      <LoaderWrapper>
        <ErrorMessageStyled>
          <ErrorOutlineIcon size={64} />
          <div>An error occurred.</div>
        </ErrorMessageStyled>
      </LoaderWrapper>
    )
  }

  if (multiProxyList.length === 0) {
    return (
      <LoaderWrapper>
        {showNewMultisigAlert ? (
          <SuccessCreation />
        ) : (
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
        )}
      </LoaderWrapper>
    )
  }

  return (
    <Grid
      className={className}
      container
    >
      {showNewMultisigAlert && multiProxyList.length > 0 && showNewMultisigAlert && (
        <NewMulisigAlert onClose={onClosenewMultisigAlert} />
      )}
      <Grid
        item
        alignItems="center"
        xs={12}
      >
        {selectedMultiProxy && <PureProxyHeaderView />}
      </Grid>
      <Grid
        item
        alignItems="center"
        xs={12}
        md={6}
      >
        <MultisigView />
      </Grid>
      {multiProxyList.length > 0 && (
        <Grid
          item
          xs={12}
          md={6}
        >
          <TransactionsWrapperStyled>
            <h3>Transactions</h3>
            <TransactionList />
          </TransactionsWrapperStyled>
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

const TransactionsWrapperStyled = styled('div')`
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-left: 1.5rem;
  }
`

const ConnectButtonWrapperStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    margin: 0 1rem;
  }
`

const CenterStyled = styled(Center)`
  text-align: center;
`

const ErrorMessageStyled = styled('div')`
  text-align: center;
  margin-top: 1rem;
`

export default Home
