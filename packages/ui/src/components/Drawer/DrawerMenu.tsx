import IconButton from '@mui/material/IconButton'
import { HiOutlineChevronRight as ChevronRightIcon } from 'react-icons/hi2'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useAccounts } from '../../contexts/AccountsContext'
import { styled } from '@mui/material/styles'
import NetworkSelection from '../select/NetworkSelection'
import MultiProxySelection from '../select/MultiProxySelection'
import { ROUTES } from '../../pages/routes'
import { isEmptyArray } from '../../utils'
import { useMemo } from 'react'
import { Button, NavLink } from '../library'
import { createSearchParams, useSearchParams } from 'react-router-dom'

interface DrawerMenuProps {
  handleDrawerClose: () => void
}

function DrawerMenu({ handleDrawerClose }: DrawerMenuProps) {
  const { ownAccountList } = useAccounts()
  const isAccountConnected = useMemo(() => !isEmptyArray(ownAccountList), [ownAccountList])
  const { isAllowedToConnectToExtension, allowConnectionToExtension } = useAccounts()
  const [params] = useSearchParams()

  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon size={20} />
        </IconButton>
      </DrawerHeader>
      <List disablePadding={true}>
        {!isAllowedToConnectToExtension && (
          <ListItemStyled disablePadding>
            <ButtonStyled
              variant="primary"
              onClick={allowConnectionToExtension}
            >
              Connect
            </ButtonStyled>
          </ListItemStyled>
        )}
        <ListItemStyled>
          <MultiProxySelection testId="mobile" />
        </ListItemStyled>
        <ListItemStyled>
          <NetworkSelection />
        </ListItemStyled>
        {ROUTES.map(({ path, name, isDisplayWhenNoWallet }) => {
          const paramsString = createSearchParams(params).toString()

          return isAccountConnected || isDisplayWhenNoWallet ? (
            <ListItemStyled
              key={name}
              disablePadding
            >
              <NavLink
                onClick={handleDrawerClose}
                to={`${path}?${paramsString}`}
              >
                <ListItemText primary={name} />
              </NavLink>
            </ListItemStyled>
          ) : null
        })}
      </List>
    </>
  )
}
const ListItemStyled = styled(ListItem)`
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    justify-content: flex-end;
  }

  a {
    width: 100%;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      width: auto;
    }
  }
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
