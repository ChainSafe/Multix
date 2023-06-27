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
    <Badge
      className={`${className} ${appliedClass}`}
      color="primary"
      badgeContent={badge}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <AccountIcon />
    </Badge>
  )
}

export default styled(IdenticonBadge)`
  .MuiBadge-badge {
    box-shadow: ${({ theme }) => theme.custom.boxShadow};
  }

  &.red > .MuiBadge-badge {
    background-color: ${({ theme }) => theme.custom.identity.red};
  }
`
