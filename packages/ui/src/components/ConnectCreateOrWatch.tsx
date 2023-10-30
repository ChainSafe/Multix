import { styled } from '@mui/material'
import { useAccounts } from '../contexts/AccountsContext'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from './library'
import { WATCH_ACCOUNT_ANCHOR } from '../pages/Settings/Settings'
import { useWatchedAddresses } from '../contexts/WatchedAddressesContext'

export const ConnectOrWatch = () => {
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()
  const { watchedAddresses } = useWatchedAddresses()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  return (
    <WrapperStyled>
      {isAllowedToConnectToExtension || watchedAddresses.length !== 0 ? (
        <div data-cy="label-no-multisig-found">
          No multisig found for your accounts or watched accounts.
        </div>
      ) : (
        <>
          <h1 data-cy="header-multix-introduction">
            Multix is an interface to easily manage complex multisigs.
          </h1>
          <div data-cy="label-interaction-prompt">
            Connect a wallet to interact with Multix or watch an account.
          </div>
        </>
      )}
      <ButtonWrapperStyled>
        {isAllowedToConnectToExtension ? (
          <Button
            variant="primary"
            onClick={() => {
              navigate({
                pathname: '/create',
                search: createSearchParams({
                  ...searchParams,
                  creationInProgress: 'true'
                }).toString()
              })
            }}
            data-cy="button-create-one"
          >
            Create one
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={allowConnectionToExtension}
            data-cy="button-connect-wallet"
          >
            Connect Wallet
          </Button>
        )}
        or
        <Button
          onClick={() => {
            navigate({
              pathname: `/settings${WATCH_ACCOUNT_ANCHOR}`,
              search: createSearchParams({
                ...searchParams,
                creationInProgress: 'true'
              }).toString()
            })
          }}
          data-cy="button-watch-account"
        >
          Watch account
        </Button>
      </ButtonWrapperStyled>
    </WrapperStyled>
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

const ButtonWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  button {
    margin: 0 0.5rem;
  }
`
