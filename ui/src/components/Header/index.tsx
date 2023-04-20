import {Toolbar, Typography} from "@mui/material"
import styled from "styled-components"
import {styled as styledMaterial} from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import MultiProxySelection from "../MultiProxySelection";
// import NetworkSelection from "../NetworkSelection"

interface Props {
  drawerWidth: number,
  className?: string
  handleDrawerOpen: () => void,
  open: boolean
}
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number

}

const AppBar = styledMaterial(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const Header = ({ className, handleDrawerOpen, open, drawerWidth }: Props) => {
  return (
    <AppBar drawerWidth={drawerWidth} position="fixed"  open={open} className={className}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1 }}
        >
            Multix
        </Typography>
        <MultiProxySelection />
        {/*<NetworkSelection />*/}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{...(open && {display: 'none'})}}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default styled(Header)(({ theme }) => `
  .buttonContainer {
    flex-grow: 1;
    display: flex;
  }

  .buttonHeader {
    color: ${theme.palette.primary.white};
    text-align: center;
    display: block;
    &:hover { 
      background-color: ${theme.palette.primary.white};
      color: ${theme.palette.primary.black}; 
    }
  }
`)
