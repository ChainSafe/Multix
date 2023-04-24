import {Toolbar, Typography} from "@mui/material"
import styled from "styled-components"
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import MuiAppBar from '@mui/material/AppBar';
import MultiProxySelection from "../MultiProxySelection";
// import NetworkSelection from "../NetworkSelection"

interface Props {
    className?: string
    handleDrawerOpen: () => void,
}

const Header = ({className, handleDrawerOpen}: Props) => {
  return (
    <MuiAppBar position="fixed" className={className}>
      <Toolbar>
        <TypographyStyled
          variant="h6"
          noWrap
        >
                    Multix
        </TypographyStyled>
        <MultiProxySelection/>
        {/*<NetworkSelection />*/}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  )
}

const TypographyStyled = styled(Typography)`
  flex-grow: 1;
`
export default styled(Header)(({theme}) => `
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
