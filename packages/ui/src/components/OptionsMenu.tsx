import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ListItemIcon, ListItemText, Theme } from '@mui/material'
import { MouseEvent, ReactNode, useCallback, useState } from 'react'
import { styled } from '@mui/material/styles'
import { HiEllipsisVertical as MoreVertIcon } from 'react-icons/hi2'
import { ButtonWithIcon } from './library'
import useMediaQuery from '@mui/material/useMediaQuery'

export interface MenuOption {
  text: string
  icon: ReactNode
  onClick: () => void
}

const ITEM_HEIGHT = 48

interface Props {
  className?: string
  options: MenuOption[]
  menuButtonBorder?: CSSStyleDeclaration['border']
}

const OptionsMenu = ({ className, options, menuButtonBorder }: Props) => {
  const matchesMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleMenuClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleClick = useCallback(
    (clickFunction: MenuOption['onClick']) => {
      handleClose()
      clickFunction()
    },
    [handleClose]
  )

  return (
    <div className={className}>
      <ButtonWithIconStyled
        border={menuButtonBorder}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        {matchesMediumScreen ? <MoreVertIcon /> : 'Settings'}
      </ButtonWithIconStyled>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch'
            }
          }
        }}
      >
        {options.map((option) => (
          <MenuItem
            className="menuEntry"
            key={option.text}
            onClick={() => handleClick(option.onClick)}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText>{option.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

const ButtonWithIconStyled = styled(ButtonWithIcon)`
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 2.25rem;
  }

  svg {
    margin: 0;
  }
`

export default styled(OptionsMenu)`
  margin-left: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    margin-left: 1rem;
  }
`
