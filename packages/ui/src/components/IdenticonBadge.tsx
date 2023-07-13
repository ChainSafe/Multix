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
  padding-left: 1rem;

  .MuiBadge-badge {
    max-width: 2.625rem;
    padding: 0.25rem 0.5rem;
    max-height: 1.3125rem;
    font-size: 0.625rem;
    font-weight: 500;
    border-radius: 0.9375rem;
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
`

export default IdenticonBadge
