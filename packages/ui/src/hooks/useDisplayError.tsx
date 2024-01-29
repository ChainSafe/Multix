import {
  HiOutlineArrowTopRightOnSquare as LaunchIcon,
  HiOutlineExclamationCircle as ErrorOutlineIcon
} from 'react-icons/hi2'

import { styled } from '@mui/material/styles'
import { useAccounts } from '../contexts/AccountsContext'
import { Button, Link } from '../components/library'
import { Center } from '../components/layout/Center'
import { useWatchedAddresses } from '../contexts/WatchedAddressesContext'
import { useMultiProxy } from '../contexts/MultiProxyContext'
import { useSearchParams } from 'react-router-dom'
import { useNetwork } from '../contexts/NetworkContext'

export const useDisplayError = () => {
  const { isExtensionError, isAccountLoading, ownAccountList, isAllowedToConnectToExtension } =
    useAccounts()
  const { watchedAddresses } = useWatchedAddresses()
  const { error: multisigQueryError, refetch, canFindMultiProxyFromUrl } = useMultiProxy()
  const [, setSearchParams] = useSearchParams()
  const { selectedNetwork } = useNetwork()

  if (
    watchedAddresses.length === 0 &&
    !isAccountLoading &&
    (isExtensionError || (isAllowedToConnectToExtension && ownAccountList.length === 0))
  ) {
    return (
      <CenterStyled>
        <div data-cy="label-no-account-found">
          No account found. Please connect at least one in a wallet extension. More info at{' '}
          <Linkstyled
            href="https://wiki.polkadot.network/docs/wallets-and-extensions"
            target="_blank"
            rel="noreferrer"
            data-cy="link-polkadot-wiki"
          >
            wiki.polkadot.network
            <LaunchIcon
              className="launchIcon"
              size={20}
            />
          </Linkstyled>
          <br />
          You did connect an extension? Find possible solutions in our wiki{' '}
          <Linkstyled
            href="https://github.com/ChainSafe/Multix/wiki/Why-can't-Multix-find-my-account%3F"
            target="_blank"
            rel="noreferrer"
            data-cy="link-multix-wiki"
          >
            Multix wiki
            <LaunchIcon
              className="launchIcon"
              size={20}
            />
          </Linkstyled>
        </div>
      </CenterStyled>
    )
  }

  if (multisigQueryError) {
    return (
      <CenterStyled>
        <ErrorMessageStyled>
          <ErrorOutlineIcon size={64} />
          <div>Connection timed out.</div>
          <Button onClick={refetch}>Reconnect</Button>
        </ErrorMessageStyled>
      </CenterStyled>
    )
  }

  if (!canFindMultiProxyFromUrl) {
    return (
      <CenterStyled>
        <ErrorMessageStyled>
          <ErrorOutlineIcon size={64} />
          <div data-cy="label-linked-address-not-found">
            The linked address can't be found in your accounts or watched accounts on{' '}
            <NetworkNameStyled>{selectedNetwork}</NetworkNameStyled>.
          </div>
          <Button
            data-cy="button-reset-linked-address"
            onClick={() =>
              setSearchParams((prev) => {
                prev.delete('address')
                return prev
              })
            }
          >
            Back to Home
          </Button>
        </ErrorMessageStyled>
      </CenterStyled>
    )
  }

  return null
}

const Linkstyled = styled(Link)`
  display: inline-flex;
  padding-left: 0.2rem;
  align-items: center;

  .launchIcon {
    margin-left: 0.5rem;
  }
`

const CenterStyled = styled(Center)`
  text-align: center;
`

const ErrorMessageStyled = styled('div')`
  text-align: center;
  margin-top: 1rem;

  button {
    margin-top: 1rem;
  }
`

const NetworkNameStyled = styled('span')`
  text-transform: capitalize;
`
