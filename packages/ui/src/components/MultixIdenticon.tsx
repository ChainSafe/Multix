import { useCallback, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { ICON_SIZE, ICON_THEME } from '../constants'
import Identicon from '@polkadot/react-identicon'
import { IconTheme } from '@polkadot/react-identicon/types'
import { styled } from '@mui/material/styles'

const DEFAULT_PLACEMENT = 'top'
const DEFAULT_TITLE = 'Address copied!'
const DEFAULT_AUTO_HIDE_DURATION = 2000

interface Props {
  value?: string
  theme?: IconTheme
  size?: number
  className?: string
}
const MultixIdenticon = ({ value, theme = ICON_THEME, size = ICON_SIZE, className }: Props) => {
  const [open, setOpen] = useState(false)
  const handleTooltipClose = useCallback(() => setOpen(false), [])
  const handleTooltipOpen = useCallback(() => setOpen(true), [])

  return (
    <Tooltip
      onClose={handleTooltipClose}
      open={open}
      title={DEFAULT_TITLE}
      placement={DEFAULT_PLACEMENT}
      leaveDelay={DEFAULT_AUTO_HIDE_DURATION}
    >
      <TooltipIconStyled>
        <Identicon
          onCopy={handleTooltipOpen}
          value={value}
          theme={theme}
          size={size}
          className={className}
        />
      </TooltipIconStyled>
    </Tooltip>
  )
}

const TooltipIconStyled = styled('div')`
  display: inherit;
  line-height: 0;
  padding-left: 1rem;

  svg {
    width: 2.75rem;
    height: 2.75rem;
  }
`

export default MultixIdenticon
