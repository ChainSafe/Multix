import { Badge } from '@mui/material'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { AccountBadge, IconSizeVariant } from '../types'
import MultixIdenticon from './MultixIdenticon'
import { ICON_SIZE_LARGE, ICON_SIZE_MEDIUM, ICON_SIZE_SMALL } from '../constants'

interface Props {
  className?: string
  badge?: AccountBadge
  address?: string
  sideBadge?: boolean
  size?: IconSizeVariant
}

export const IdenticonBadge = ({
  className,
  badge,
  address,
  sideBadge = false,
  size = 'medium'
}: Props) => {
  const AccountIcon = () => (
    <MultixIdenticon
      value={address}
      className="identicon"
      size={
        size === 'small' ? ICON_SIZE_SMALL : size === 'medium' ? ICON_SIZE_MEDIUM : ICON_SIZE_LARGE
      }
    />
  )

  const appliedClass = useMemo(() => (badge === AccountBadge.PURE ? 'blue' : 'red'), [badge])

  if (!badge) {
    return <AccountIcon />
  }

  return (
    <BadgeStyled
      className={`${className} ${appliedClass}`}
      slotProps={{ badgeType: badge, sideBadge }}
      size={size}
      color="primary"
      badgeContent={badge}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <AccountIcon />
    </BadgeStyled>
  )
}

const BadgeStyled = styled(Badge)<{
  size: IconSizeVariant
  slotProps: {
    badgeType: AccountBadge
    sideBadge: boolean
  }
}>`
  padding-left: 1rem;

  ${({ slotProps: { sideBadge } }) =>
    sideBadge &&
    `
      padding-left: 0;
      align-items: center;
    `}

  .MuiBadge-badge {
    max-width: 3.285rem;
    max-height: 1.69rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    height: 1.3125rem;
    border-radius: ${({ theme }) => theme.custom.borderRadius};
    border: 1px solid ${({ theme }) => theme.custom.gray[400]};
    transform: scale(1) translate(-20%, 0);

    ${({ theme, slotProps: { badgeType } }) =>
      badgeType === AccountBadge.PURE &&
      `
        color: ${theme.custom.gray[100]};
        background-color: ${theme.custom.proxyBadge.pure} !important;
      `};

    ${({ theme, slotProps: { badgeType } }) =>
      badgeType === AccountBadge.MULTI &&
      `
        color: ${theme.custom.text.black};
        background-color: ${theme.custom.proxyBadge.multi} !important;
      `};

    ${({ slotProps: { sideBadge } }) =>
      sideBadge &&
      `
        position: relative;
        transform: unset;
      `}

    ${({ size }) =>
      size === 'large' &&
      `
          font-size: 0.96431rem;
          padding: 0.16069rem 0.64288rem;
          height: 1.7rem;
          transform: scale(1) translate(0,15%);
      `}
  }
`

export default IdenticonBadge
