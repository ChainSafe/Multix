import { Box, IconButton, Toolbar } from '@mui/material'
import { Button, RouterLink } from '../library'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'
import MuiAppBar from '@mui/material/AppBar'
import MultiProxySelection from '../select/MultiProxySelection'
import { useAccounts } from '../../contexts/AccountsContext'
import { HiOutlineBars3 as MenuIcon } from 'react-icons/hi2'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { ROUTES } from '../../pages/routes'
import { isEmptyArray } from '../../utils'
import NetworkSelection from '../select/NetworkSelection'
import { multixlogo } from '../../logos/multixLogo'

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
        <LogoWrapperStyled>
          <LogoStyled
            alt={`multix logo`}
            src={multixlogo}
          />
        </LogoWrapperStyled>
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
              <Button onClick={allowConnectionToExtension}>Connect</Button>
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
  margin-bottom: 2rem;
  height: 4.8125rem;
  background: ${({ theme }) => theme.palette.primary.main};
  justify-content: center;
`

const RightButtonsWrapper = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const RouterLinkStyled = styled(RouterLink)`
  color: ${({ theme }) => theme.palette.primary.white};

  &:hover,
  &:focus,
  &:active {
    color: #c7d0e7;
  }
`

const BoxStyled = styled(Box)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`

const LogoWrapperStyled = styled(Box)`
  display: flex;
  flex: 1;
`

const NetworkSelectionStyled = styled(NetworkSelection)`
  margin-left: 0.5rem;
`

const LogoStyled = styled('img')`
  height: 3rem;
`

const IconButtonStyled = styled(IconButton)`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    display: none;
  }
`

export default Header
