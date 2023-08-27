import IconButton from '@mui/material/IconButton'
import { HiOutlineChevronRight as ChevronRightIcon } from 'react-icons/hi2'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useAccounts } from '../../contexts/AccountsContext'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { styled } from '@mui/material/styles'
import NetworkSelection from '../select/NetworkSelection'
import MultiProxySelection from '../select/MultiProxySelection'
import { ROUTES } from '../../pages/routes'
import { isEmptyArray } from '../../utils'
import { useMemo } from 'react'
import { Button, RouterLink } from '../library'

interface DrawerMenuProps {
  handleDrawerClose: () => void
}

function DrawerMenu({ handleDrawerClose }: DrawerMenuProps) {
  const { ownAccountList } = useAccounts()
  const { multiProxyList } = useMultiProxy()
  const isAccountConnected = useMemo(() => !isEmptyArray(ownAccountList), [ownAccountList])
  const isAtLeastOneMultiProxy = useMemo(() => !isEmptyArray(multiProxyList), [multiProxyList])
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()

  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon size={20} />
        </IconButton>
      </DrawerHeader>
      <List>
        {!isAllowedToConnectToExtension && (
          <ListItemStyled disablePadding>
            <ButtonStyled
              variant="secondary"
              onClick={allowConnectionToExtension}
            >
              Connect
            </ButtonStyled>
          </ListItemStyled>
        )}
        <ListItemStyled>
          <MultiProxySelection />
        </ListItemStyled>
        <ListItemStyled>
          <NetworkSelection />
        </ListItemStyled>
        {ROUTES.map(({ path, name, isDisplayWhenNoMultiProxy, isDisplayWhenNoWallet }) =>
          (isAtLeastOneMultiProxy || isDisplayWhenNoMultiProxy) &&
          (isAccountConnected || isDisplayWhenNoWallet) ? (
            <ListItemStyled
              key={name}
              disablePadding
            >
              <RouterLink
                onClick={handleDrawerClose}
                to={path}
              >
                <ListItemText primary={name} />
              </RouterLink>
            </ListItemStyled>
          ) : null
        )}
      </List>
    </>
  )
}
const ListItemStyled = styled(ListItem)`
  justify-content: flex-end;
`

const ButtonStyled = styled(Button)`
  margin-right: 1rem;
`

const DrawerHeader = styled('div')`
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: flex-start;
`

export default DrawerMenu
