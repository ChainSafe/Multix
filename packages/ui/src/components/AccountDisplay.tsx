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
import { useGetBalance } from '../hooks/useGetBalance'
import { encodeAddress } from '@polkadot/util-crypto'

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
  const { balanceFormatted } = useGetBalance({ address })
  const localName = useMemo(() => getNamesWithExtension(address), [address, getNamesWithExtension])
  const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null)
  const { api, isApiReady, chainInfo } = useApi()
  const [mainDisplay, setMainDisplay] = useState<string>('')
  const [sub, setSub] = useState<string | null>(null)
  const [encodedAddress, setEncodedAddress] = useState('')

  useEffect(() => {
    if (!chainInfo) {
      return
    }

    try {
      setEncodedAddress(encodeAddress(address, chainInfo.ss58Format))
    } catch (e) {
      console.error(`Error encoding the address ${address}, skipping`, e)
    }
  }, [address, chainInfo, encodedAddress])

  useEffect(() => {
    if (!api) {
      return
    }

    if (!isApiReady) {
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
  }, [address, api, isApiReady])

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
              <IdentityIcon
                className="identityBadge"
                identity={identity}
              />
            )}
            {!!sub && <span>{sub}</span>}
            <NameStyled className="multisigName">{localName || mainDisplay}</NameStyled>
          </NameWrapperStyled>
        )}
        <AddressStyled className="multisigAddress">
          {getDisplayAddress(encodedAddress)}
        </AddressStyled>
        {withBalance && (
          <Box>
            <BalanceStyled>{balanceFormatted}</BalanceStyled>
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

const BalanceStyled = styled('div')`
  display: flex;
  color: ${({ theme }) => theme.custom.text.addressColorLightGray};
  font-size: small;
  margin-top: 4px;
`

export default styled(AccountDisplay)`
  display: flex;
  align-items: center;

  .identityBadge {
    margin-right: 0.3rem;
    height: 1.5rem;
    width: 1.5rem;
  }
`
