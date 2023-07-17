import { Badge } from '@mui/material'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { AccountBadge } from '../types'
import MultixIdenticon from './MultixIdenticon'
import { ICON_SIZE_MEDIUM, ICON_SIZE_SMALL } from '../constants'

interface Props {
  className?: string
  badge?: AccountBadge
  address?: string
  sideBadge?: boolean
  small?: boolean
}

export const IdenticonBadge = ({
  className,
  badge,
  address,
  sideBadge = false,
  small = false
}: Props) => {
  const AccountIcon = () => (
    <MultixIdenticon
      value={address}
      className="identicon"
      size={small ? ICON_SIZE_SMALL : ICON_SIZE_MEDIUM}
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
      sideBadge={sideBadge}
    >
      <AccountIcon />
    </BadgeStyled>
  )
}

const BadgeStyled = styled(Badge)<{ badgeType: AccountBadge; sideBadge: boolean }>`
  padding-left: 1rem;

  ${({ sideBadge }) =>
    sideBadge &&
    `
      padding-left: 0;
      align-items: center;
      `}

  .MuiBadge-badge {
    max-width: 2.625rem;
    padding: 0.25rem 0.5rem;
    max-height: 1.3125rem;
    font-size: 0.625rem;
    font-weight: 500;
    border-radius: ${({ theme }) => theme.custom.borderRadius};
    border: 1px solid ${({ theme }) => theme.custom.gray[400]};
    transform: scale(1) translate(-20%, 0);

    ${({ theme, badgeType }) =>
      badgeType === AccountBadge.PURE &&
      `
        color: ${theme.custom.gray[100]};
        background-color: ${theme.custom.proxyBadge.pure} !important;
      `};

    ${({ theme, badgeType }) =>
      badgeType === AccountBadge.MULTI &&
      `
        color: ${theme.custom.text.black};
        background-color: ${theme.custom.proxyBadge.multi} !important;
      `};

    ${({ sideBadge }) =>
      sideBadge &&
      `
        position: relative;
        transform: unset;
      `}
  }
`

export default IdenticonBadge
