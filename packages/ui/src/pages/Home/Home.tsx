import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button, Link } from '../../components/library'
import { MdErrorOutline as ErrorOutlineIcon } from 'react-icons/md'
import SuccessCreation from '../../components/SuccessCreation'
import NewMulisigAlert from '../../components/NewMulisigAlert'
import { styled } from '@mui/material/styles'
import { Center } from '../../components/layout/Center'
import { useAccounts } from '../../contexts/AccountsContext'
import { useWatchedAddresses } from '../../contexts/WatchedAddressesContext'
import { useApi } from '../../contexts/ApiContext'
import { useNetwork } from '../../contexts/NetworkContext'
import HeaderView from './HeaderView'
import MultisigView from './MultisigView'
import TransactionList from '../../components/Transactions/TransactionList'
import { ConnectOrWatch } from '../../components/ConnectOrWatch'
import { HiOutlineArrowTopRightOnSquare as LaunchIcon } from 'react-icons/hi2'
import { WATCH_ACCOUNT_ANCHOR } from '../Settings/Settings'
// import CurrentReferendumBanner from '../../components/CurrentReferendumBanner'

interface HomeProps {
  className?: string
}

const Home = ({ className }: HomeProps) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams({
    creationInProgress: 'false'
  })
  const {
    isLoading: isLoadingMultisigs,
    multiProxyList,
    error: multisigQueryError
  } = useMultiProxy()
  const { selectedNetworkInfo } = useNetwork()
  const { api } = useApi()
  const [showNewMultisigAlert, setShowNewMultisigAlert] = useState(false)
  const {
    isAllowedToConnectToExtension,
    isExtensionError,
    isAccountLoading,
    allowConnectionToExtension,
    accountGotRequested
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
          <Button
            onClick={() => navigate(`/settings${WATCH_ACCOUNT_ANCHOR}`)}
            data-cy="button-watch-address"
          >
            Watch an address
          </Button>
        </ConnectButtonWrapperStyled>
      </CenterStyled>
    )
  }

  if (isExtensionError && watchedAddresses.length === 0 && !isAccountLoading)
    return (
      <CenterStyled>
        <h3 data-cy="text-no-account-found">
          No account found. Please connect at least one in a wallet extension. More info at{' '}
          <Linkstyled
            href="https://wiki.polkadot.network/docs/wallets-and-extensions"
            target="_blank"
            rel="noreferrer"
          >
            wiki.polkadot.network
            <LaunchIcon
              className="launchIcon"
              size={20}
            />
          </Linkstyled>
        </h3>
      </CenterStyled>
    )

  if (!api) {
    return (
      <LoaderBoxStyled data-cy="loader-rpc-connection">
        <CircularProgress />
        {`Connecting to the node at ${selectedNetworkInfo?.rpcUrl}`}
      </LoaderBoxStyled>
    )
  }

  if (isAccountLoading || !accountGotRequested) {
    return (
      <LoaderBoxStyled data-cy="loader-accounts-connection">
        <CircularProgress />
        Loading accounts...
      </LoaderBoxStyled>
    )
  }

  if (isLoadingMultisigs) {
    return (
      <MessageWrapper>
        <CircularProgress />
        <div>Loading your multisigs...</div>
      </MessageWrapper>
    )
  }

  if (multisigQueryError) {
    return (
      <MessageWrapper>
        <ErrorMessageStyled>
          <ErrorOutlineIcon size={64} />
          <div>An error occurred.</div>
        </ErrorMessageStyled>
      </MessageWrapper>
    )
  }

  if (multiProxyList.length === 0) {
    return (
      <MessageWrapper>
        {showNewMultisigAlert ? <SuccessCreation /> : <ConnectOrWatch />}
      </MessageWrapper>
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
      {/* <CurrentReferendumBanner /> */}
      <Grid
        item
        alignItems="center"
        xs={12}
      >
        <HeaderView />
      </Grid>
      <Grid
        item
        alignItems="center"
        xs={12}
        md={5}
        lg={4}
      >
        <MultisigView />
      </Grid>
      {multiProxyList.length > 0 && (
        <Grid
          item
          xs={12}
          md={7}
          lg={8}
        >
          <TransactionsWrapperStyled>
            <h3>Transactions</h3>
            <TransactionList />
          </TransactionsWrapperStyled>
        </Grid>
      )}
    </Grid>
  )
}

const MessageWrapper = (props: PropsWithChildren) => {
  return (
    <Grid
      container
      spacing={2}
    >
      <LoaderBoxStyled>{props.children}</LoaderBoxStyled>
    </Grid>
  )
}

const LoaderBoxStyled = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`

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

const Linkstyled = styled(Link)`
  display: inline-flex;
  padding-left: 0.2rem;
  align-items: center;

  .launchIcon {
    margin-left: 0.5rem;
  }
`

export default Home
