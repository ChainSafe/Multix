import { Badge } from '@mui/material'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { AccountBadge } from '../types'
import MultixIdenticon from './MultixIdenticon'

interface Props {
  className?: string
  badge?: AccountBadge
  address?: string
}

export const IdenticonBadge = ({ className, badge, address }: Props) => {
  const AccountIcon = () => (
    <MultixIdenticon
      value={address}
      className="identicon"
    />
  )

  const appliedClass = useMemo(() => (badge === AccountBadge.PURE ? 'blue' : 'red'), [badge])

  if (!badge) {
    return <AccountIcon />
  }

  return (
    <BadgeStyled
      className={`${className} ${appliedClass}`}
      badgeType={badge}
      color="primary"
      badgeContent={badge}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <AccountIcon />
    </BadgeStyled>
  )
}

const BadgeStyled = styled(Badge)<{ badgeType: AccountBadge }>`
  .MuiBadge-badge {
    background-color: ${({ theme, badgeType }) =>
      `${
        badgeType === AccountBadge.PURE
          ? theme.custom.proxyBadge.pure
          : theme.custom.proxyBadge.multi
      } !important`};
    transform: scale(1) translate(-28%, 0);
    padding: 0.25rem 0.5rem;
    border-radius: 2rem;
  }
`

export default styled(IdenticonBadge)`
  .MuiBadge-badge {
    box-shadow: ${({ theme }) => theme.custom.boxShadow};
  }

  &.red > .MuiBadge-badge {
    background-color: ${({ theme }) => theme.custom.identity.red};
  }
`
