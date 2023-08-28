import IconButton from '@mui/material/IconButton'
import { HiOutlineChevronRight as ChevronRightIcon } from 'react-icons/hi2'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useAccounts } from '../../contexts/AccountsContext'
import { styled } from '@mui/material/styles'
import NetworkSelection from '../select/NetworkSelection'
import MultiProxySelection from '../select/MultiProxySelection'
import { ROUTES } from '../../pages/routes'
import { isEmptyArray } from '../../utils'
import { useMemo } from 'react'
import { RouterLink } from '../library'

interface DrawerMenuProps {
  handleDrawerClose: () => void
}

function DrawerMenu({ handleDrawerClose }: DrawerMenuProps) {
  const { ownAccountList } = useAccounts()
  const isAccountConnected = useMemo(() => !isEmptyArray(ownAccountList), [ownAccountList])
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()

  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon size={20} />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {!isAllowedToConnectToExtension && (
          <ListItem disablePadding>
            <ListItemButton onClick={allowConnectionToExtension}>Connect</ListItemButton>
          </ListItem>
        )}
        <ListItem>
          <MultiProxySelection />
        </ListItem>
        <ListItem>
          <NetworkSelection />
        </ListItem>
        {ROUTES.map(({ path, name, isDisplayWhenNoWallet }) =>
          isAccountConnected || isDisplayWhenNoWallet ? (
            <ListItem
              key={name}
              disablePadding
            >
              <RouterLink
                onClick={handleDrawerClose}
                to={path}
              >
                <ListItemText primary={name} />
              </RouterLink>
            </ListItem>
          ) : null
        )}
      </List>
    </>
  )
}

const DrawerHeader = styled('div')`
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: flex-start;
`

export default DrawerMenu
