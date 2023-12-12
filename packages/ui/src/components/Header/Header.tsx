import { Box, IconButton, Toolbar } from '@mui/material'
import { Button, NavLink } from '../library'
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
import { Link, createSearchParams, useSearchParams } from 'react-router-dom'
import { useSwitchAddress } from '../../hooks/useSwitchAddress'

interface Props {
  handleDrawerOpen: () => void
}

const Header = ({ handleDrawerOpen }: Props) => {
  const { ownAccountList } = useAccounts()
  const isAccountConnected = useMemo(() => !isEmptyArray(ownAccountList), [ownAccountList])
  const [params] = useSearchParams()
  const { isAllowedToConnectToExtension, allowConnectionToExtension, isAccountLoading } =
    useAccounts()
  useWalletConnectEventsManager()
  useSwitchAddress()

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
        <DesktopMenuStyled data-cy="menu-desktop">
          <MenuWrapperStyled>
            {ROUTES.map(({ path, name, isDisplayWhenNoWallet }) => {
              const paramsString = createSearchParams(params).toString()

              return isAccountConnected || isDisplayWhenNoWallet ? (
                <NavLink
                  key={name}
                  to={`${path}?${paramsString}`}
                  data-cy={`button-navigate-${name.toLowerCase().replace(/ /g, '-')}`}
                >
                  {name}
                </NavLink>
              ) : null
            })}
          </MenuWrapperStyled>
          <RightButtonsWrapperStyled>
            {!isAllowedToConnectToExtension && (
              <ConnectButtonStyled
                data-cy="button-menu-connect"
                onClick={allowConnectionToExtension}
                disabled={isAccountLoading}
                variant="primary"
              >
                Connect
              </ConnectButtonStyled>
            )}
            <MultiProxySelection testId="desktop" />
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
  flex: 1;
`

const MenuWrapperStyled = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`

const DesktopMenuStyled = styled(Box)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    flex-grow: 0;
    display: flex;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    flex-grow: 1;
  }
`

const LogoWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex: 0;
    margin-right: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    margin-right: 1rem;
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
