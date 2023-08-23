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
import PureProxyHeaderView from './PureProxyHeaderView'
import MultisigView from './MultisigView'
import TransactionList from '../../components/Transactions/TransactionList'
import CurrentReferendumBanner from '../../components/CurrentReferendumBanner'
import { dataRococo } from './data-rococo'
import { dataKusama } from './data-kusama'

interface HomeProps {
  className?: string
}

const gotsimilarCallData = (data: typeof dataRococo) => {
  const hashOccurence = new Map<string, number>()

  data.data.multisigCalls.forEach(({ callHash }) => {
    if (hashOccurence.has(callHash)) {
      const prev = hashOccurence.get(callHash)
      prev && hashOccurence.set(callHash, prev + 1)
    } else {
      hashOccurence.set(callHash, 1)
    }
  })

  const res = Array.from(hashOccurence).filter(([hash, occurence]) => occurence > 1)
  console.log('res', res)
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
  const { api } = useApi()
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
    gotsimilarCallData(dataKusama)
  }, [])
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

  if (!api || isAccountLoading) {
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
      <CurrentReferendumBanner />
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

export default Home
