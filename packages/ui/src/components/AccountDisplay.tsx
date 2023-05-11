import { Box } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccountNames } from '../contexts/AccountNamesContext'
import { AccountBadge } from '../types'
import { getDisplayAddress } from '../utils'
import IdenticonBadge from './IdenticonBadge'
import { useApi } from '../contexts/ApiContext'
import { DeriveAccountInfo, DeriveAccountRegistration } from '@polkadot/api-derive/types'
import IdentityIcon from './IdentityIcon'
import { useGetBalance } from '../hooks/useGetBalance'

interface Props {
  address: string
  className?: string
  badge?: AccountBadge
  withName?: boolean
  withBalance?: boolean
}

const AccountDisplay = ({
  className,
  address,
  badge,
  withName = true,
  withBalance = false
}: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const { balanceFormatted } = useGetBalance({ address })
  const displayName = useMemo(
    () => getNamesWithExtension(address),
    [address, getNamesWithExtension]
  )
  const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null)
  const { api, isApiReady } = useApi()
  const [mainDisplay, setMainDisplay] = useState<string>('')
  const [sub, setSub] = useState<string | null>(null)

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
    <MultisigInfoStyled>
      <IdenticonBadge
        badge={badge}
        address={address}
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
            <NameStyled>{displayName || mainDisplay}</NameStyled>
          </NameWrapperStyled>
        )}
        <AddressStyled>{getDisplayAddress(address)}</AddressStyled>
        {withBalance && (
          <Box>
            <BalanceStyled>{balanceFormatted}</BalanceStyled>
          </Box>
        )}
      </BoxStyled>
    </MultisigInfoStyled>
  )
}

const MultisigInfoStyled = styled('div')`
  display: flex;
  align-items: center;
`

const NameWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
`

const AddressStyled = styled('div')(
  ({ theme }) => `
    color: ${theme.custom.text.addressColorLightGray};
    font-size: small;
`
)

const BoxStyled = styled(Box)`
  min-width: 0;
`

const NameStyled = styled('span')`
  font-size: large;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BalanceStyled = styled('div')(
  ({ theme }) => `
  margin-top: 4px;  
  display: flex;
  color: ${theme.custom.text.addressColorLightGray};
  font-size: small;
`
)

export default styled(AccountDisplay)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .identityBadge {
    margin-right: 0.3rem;
  }
`
