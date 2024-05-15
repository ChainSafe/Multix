import { styled } from '@mui/material'
import { useAccounts } from '../contexts/AccountsContext'
import { useWatchedAddresses } from '../contexts/WatchedAddressesContext'
import { useNetwork } from '../contexts/NetworkContext'
import { ConnectButtons } from './LandingComponents/ConnectButtons'
import { Landing } from './LandingComponents/Landing'

export const ConnectOrWatch = () => {
  const { isAllowedToConnectToExtension } = useAccounts()
  const { watchedAddresses } = useWatchedAddresses()

  const { selectedNetwork } = useNetwork()

  return (
    <>
      {isAllowedToConnectToExtension || watchedAddresses.length !== 0 ? (
        <WrapperStyled>
          <div data-cy="label-no-multisig-found">
            No multisig found for your accounts or watched accounts on{' '}
            <NetworkNameStyled>{selectedNetwork}</NetworkNameStyled>.
            <ConnectButtons />
          </div>
        </WrapperStyled>
      ) : (
        <Landing />
      )}
    </>
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

const NetworkNameStyled = styled('span')`
  text-transform: capitalize;
`
