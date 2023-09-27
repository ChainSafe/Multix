import { Box, IconButton, Toolbar } from '@mui/material'
import { Button, RouterLink } from '../library'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'
import MuiAppBar from '@mui/material/AppBar'
import MultiProxySelection from '../select/MultiProxySelection'
import { useAccounts } from '../../contexts/AccountsContext'
import { HiOutlineBars3 as MenuIcon } from 'react-icons/hi2'
import { ROUTES } from '../../pages/routes'
import { isEmptyArray } from '../../utils'
import NetworkSelection from '../select/NetworkSelection'
import multixLogo from '../../logos/multix-logo.svg'
import useWalletConnectEventsManager from '../../hooks/useWalletConnectEventsManager'
import { Link } from 'react-router-dom'

interface Props {
  handleDrawerOpen: () => void
}

const Header = ({ handleDrawerOpen }: Props) => {
  const { ownAccountList } = useAccounts()
  const isAccountConnected = useMemo(() => !isEmptyArray(ownAccountList), [ownAccountList])
  const { isAllowedToConnectToExtension, allowConnectionToExtension, isAccountLoading } =
    useAccounts()
  useWalletConnectEventsManager()

  return (
    <MuiAppBarStyled position="sticky">
      <Toolbar>
        <LogoWrapperStyled>
          <HomeLinkStyled to="/">
            <LogoStyled
              src={multixLogo}
              alt={`Multix logo`}
            />
          </HomeLinkStyled>
        </LogoWrapperStyled>
        <DesktopMenuStyled>
          <MenuWrapperStyled>
            {ROUTES.map(({ path, name, isDisplayWhenNoWallet }) =>
              isAccountConnected || isDisplayWhenNoWallet ? (
                <RouterLinkStyled
                  key={name}
                  to={path}
                >
                  {name}
                </RouterLinkStyled>
              ) : null
            )}
          </MenuWrapperStyled>
          <RightButtonsWrapperStyled>
            {!isAllowedToConnectToExtension && (
              <ConnectButtonStyled
                data-cy="button-menu-connect"
                onClick={allowConnectionToExtension}
                disabled={isAccountLoading}
              >
                Connect
              </ConnectButtonStyled>
            )}
            <MultiProxySelection />
            <NetworkSelectionStyled />
          </RightButtonsWrapperStyled>
        </DesktopMenuStyled>
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
  margin-bottom: 2rem;
  height: 4.8125rem;
  background: ${({ theme }) => theme.custom.header.background};
  justify-content: center;
  box-shadow: none;
  border-bottom: 1px solid ${({ theme }) => theme.custom.text.borderColor};
`

const HomeLinkStyled = styled(Link)`
  display: flex;
`

const ConnectButtonStyled = styled(Button)`
  margin-right: 1rem;
`

const RightButtonsWrapperStyled = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const RouterLinkStyled = styled(RouterLink)`
  display: inline-block;
  color: ${({ theme }) => theme.custom.gray[900]};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background: ${({ theme }) => theme.custom.gray[300]};
    border-radius: ${({ theme }) => theme.custom.borderRadius};
    color: ${({ theme }) => theme.custom.gray[900]};
  }
`

const MenuWrapperStyled = styled(Box)`
  width: 100%;
`

const DesktopMenuStyled = styled(Box)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`

const LogoWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-right: 1rem;
    flex: 0;
  }
`

const NetworkSelectionStyled = styled(NetworkSelection)`
  margin-left: 0.5rem;
`

const LogoStyled = styled('img')`
  height: 3rem;
`

const IconButtonStyled = styled(IconButton)`
  display: block;
  color: black;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`

export default Header
