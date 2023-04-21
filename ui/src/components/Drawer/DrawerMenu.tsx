import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import {useAccounts} from "../../contexts/AccountsContext";

const routes = [
  {url: '/', name: 'Home'},
  {url: '/create', name: 'New Multisig'},
  {url: '/about', name: 'About'},
]

interface DrawerMenuProps {
    handleDrawerClose: () => void
}

function DrawerMenu({handleDrawerClose}: DrawerMenuProps) {
  const {accountList} = useAccounts()
  const theme = useTheme();

  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
        </IconButton>
      </DrawerHeader>
      <Divider/>
      <List>
        {!!accountList?.length && (
          routes.map(({url, name}) => (
            <ListItem key={name} disablePadding>
              <ListItemButton onClick={handleDrawerClose} component={Link} to={url}>
                <ListItemText primary={name}/>
              </ListItemButton>
            </ListItem>
          )))}
      </List>
    </>
  )
}

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 8px',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default DrawerMenu;