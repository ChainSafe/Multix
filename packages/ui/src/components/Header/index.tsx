import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Button } from '../library'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'
import MuiAppBar from '@mui/material/AppBar'
import MultiProxySelection from '../MultiProxySelection'
import { useAccounts } from '../../contexts/AccountsContext'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { ROUTES } from '../../pages/routes'
import { isEmptyArray } from '../../utils'
import NetworkSelection from '../NetworkSelection'
import { RouterLink } from '../library'

interface Props {
  handleDrawerOpen: () => void
}

const Header = ({ handleDrawerOpen }: Props) => {
  const { ownAccountList } = useAccounts()
  const { multiProxyList } = useMultiProxy()
  const isAccountConnected = useMemo(() => !isEmptyArray(ownAccountList), [ownAccountList])
  const isAtLeastOneMultiProxy = useMemo(() => !isEmptyArray(multiProxyList), [multiProxyList])
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()

  return (
    <MuiAppBarStyled position="sticky">
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
              <RouterLinkStyled
                key={name}
                to={path}
              >
                {name}
              </RouterLinkStyled>
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
    </MuiAppBarStyled>
  )
}

const MuiAppBarStyled = styled(MuiAppBar)`
  margin-bottom: 1rem;
  background: #3e67f8;
`

const RightButtonsWrapper = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const RouterLinkStyled = styled(RouterLink)`
  color: ${({ theme }) => theme.palette.primary.white};

  &:hover, &:focus, &:active {
    color: #D1E8FE;
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
