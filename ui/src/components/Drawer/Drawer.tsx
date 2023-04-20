import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import {useAccounts} from "../../contexts/AccountsContext";
import {useMediaQuery} from "@mui/material";

const routes = [
  {url: '/', name: 'Home'},
  {url: '/create', name: 'New Multisig'},
  {url: '/about', name: 'About'},
]

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

interface DrawerComponentProps {
    open: boolean,
    drawerWidth: number,
    handleDrawerClose: () => void
}

function DrawerComponent({open, handleDrawerClose, drawerWidth}: DrawerComponentProps) {
  const { accountList } = useAccounts()
  const theme = useTheme();
  const matchesSmallDevices = useMediaQuery(theme.breakpoints.up('sm'));

  function renderMenu() {
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
                <ListItemButton onClick={matchesSmallDevices ? handleDrawerClose : () => {}} component={Link} to={url}>
                  <ListItemText primary={name}/>
                </ListItemButton>
              </ListItem>
            )))}
        </List>
      </>
    )
  }

  return (
    <>
      <Drawer 
        sx={{
          display: {xs: 'none',  md: 'block',  },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        {renderMenu()}
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'block', md: 'none' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true
        }}
      >
        {renderMenu()}
      </Drawer>
    </>
  );
}

export default DrawerComponent;


