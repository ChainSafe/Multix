import { Box } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccountNames } from '../contexts/AccountNamesContext'
import { AccountBadge, IconSizeVariant } from '../types'
import { getDisplayAddress } from '../utils'
import IdenticonBadge from './IdenticonBadge'
import { useApi } from '../contexts/ApiContext'
import { DeriveAccountInfo, DeriveAccountRegistration } from '@polkadot/api-derive/types'
import IdentityIcon from './IdentityIcon'
import Balance from './library/Balance'
import { useGetEncodedAddress } from '../hooks/useGetEncodedAddress'

interface Props {
  address: string
  className?: string
  badge?: AccountBadge
  withName?: boolean
  withBalance?: boolean
  iconSize?: IconSizeVariant
}

const AccountDisplay = ({
  className,
  address,
  badge,
  withName = true,
  withBalance = false,
  iconSize = 'medium'
}: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const localName = useMemo(() => getNamesWithExtension(address), [address, getNamesWithExtension])
  const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null)
  const { api } = useApi()
  const [mainDisplay, setMainDisplay] = useState<string>('')
  const [sub, setSub] = useState<string | null>(null)
  const { encodedAddress } = useGetEncodedAddress(address)

  useEffect(() => {
    if (!api) {
      return
    }

    let unsubscribe: () => void

    api.derive.accounts
      .info(address, (info: DeriveAccountInfo) => {
        setIdentity(info.identity)

        if (info.identity.displayParent && info.identity.display) {
          // when an identity is a sub identity `displayParent` is set
          // and `display` get the sub identity
          setMainDisplay(info.identity.displayParent)
          setSub(info.identity.display)
        } else {
          // There should not be a `displayParent` without a `display`
          // but we can't be too sure.
          setMainDisplay(
            info.identity.displayParent || info.identity.display || info.nickname || ''
          )
        }
      })
      .then((unsub) => {
        unsubscribe = unsub
      })
      .catch((e) => console.error(e))

    return () => unsubscribe && unsubscribe()
  }, [address, api])

  return (
    <div className={className}>
      <IdenticonBadge
        badge={badge}
        address={encodedAddress}
        size={iconSize}
      />
      <BoxStyled>
        {withName && (
          <NameWrapperStyled>
            {!!identity && mainDisplay && (
              // Class name for external styling
              <IdentityIcon
                className="identityBadge"
                identity={identity}
              />
            )}
            {!!sub && <span>{sub}</span>}
            {/*// Class name for external styling*/}
            <NameStyled
              className="multisigName"
              data-cy="label-account-name"
            >
              {localName || mainDisplay}
            </NameStyled>
          </NameWrapperStyled>
        )}
        <AddressStyled
          className="multisigAddress"
          data-cy="label-account-address"
        >
          {getDisplayAddress(encodedAddress)}
        </AddressStyled>
        {withBalance && (
          <Box>
            <Balance address={address} />
          </Box>
        )}
      </BoxStyled>
    </div>
  )
}

const BoxStyled = styled(Box)`
  min-width: 0;
  margin-left: 0.5rem;
  display: grid !important;
  justify-content: start;
  justify-items: start;
`

const NameWrapperStyled = styled('div')`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const AddressStyled = styled('div')(
  ({ theme }) => `
    color: ${theme.custom.text.primary};
    font-size: 1rem;
    font-weight: 400;
`
)

const NameStyled = styled('div')`
  color: ${({ theme }) => theme.custom.text.primary};
  font-size: 1rem;
  font-weight: 500;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default styled(AccountDisplay)`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  .identityBadge {
    margin-right: 0.3rem;
    height: 1.5rem;
    width: 1.5rem;
  }
`
