import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'
import MuiAppBar from '@mui/material/AppBar'
import MultiProxySelection from '../MultiProxySelection'
import { useAccounts } from '../../contexts/AccountsContext'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { ROUTES } from '../../pages/routes'
import { isEmptyArray } from '../../utils'
import NetworkSelection from '../NetworkSelection'

interface Props {
  className?: string
  handleDrawerOpen: () => void
}

const Header = ({ className, handleDrawerOpen }: Props) => {
  const { ownAccountList } = useAccounts()
  const { multiProxyList } = useMultiProxy()
  const isAccountConnected = useMemo(() => !isEmptyArray(ownAccountList), [ownAccountList])
  const isAtLeastOneMultiProxy = useMemo(() => !isEmptyArray(multiProxyList), [multiProxyList])
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()

  return (
    <MuiAppBar
      position="fixed"
      className={className}
    >
      <Toolbar>
        <TypographyStyled
          variant="h6"
          noWrap
        >
          Multix
        </TypographyStyled>
        <BoxStyled>
          {ROUTES.map(({ path, name, isDisplayWhenNoMultiProxy, isDisplayWhenNoWallet }) =>
            (isAtLeastOneMultiProxy || isDisplayWhenNoMultiProxy) &&
            (isAccountConnected || isDisplayWhenNoWallet) ? (
              <ButtonStyled
                key={name}
                component={Link}
                to={path}
                className="buttonHeader"
              >
                {name}
              </ButtonStyled>
            ) : null
          )}
          <RightButtonsWrapper>
            {!isAllowedToConnectToExtension && (
              <ButtonStyled onClick={allowConnectionToExtension}>Connect</ButtonStyled>
            )}
            <MultiProxySelection />
            <NetworkSelectionStyled />
          </RightButtonsWrapper>
        </BoxStyled>
        <IconButtonStyled
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButtonStyled>
      </Toolbar>
    </MuiAppBar>
  )
}

const RightButtonsWrapper = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ButtonStyled = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.primary.white};
  text-align: center;
  display: block;
  &:hover { 
    background-color: ${theme.palette.primary.white};
    color: ${theme.palette.primary.black}; 
  }
`
) as typeof Button

const BoxStyled = styled(Box)(
  ({ theme }) => `
    display: none;
    
    @media (min-width: ${theme.breakpoints.values.sm}px) {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
`
)

const NetworkSelectionStyled = styled(NetworkSelection)`
  margin-left: 0.5rem;
`

const TypographyStyled = styled(Typography)`
  flex-grow: 1;
`

const IconButtonStyled = styled(IconButton)(
  ({ theme }) => `
    display: block;
    @media (min-width: ${theme.breakpoints.values.sm}px) {
        display: none;
    }
`
)

export default Header
