import {Box, Button, IconButton, Toolbar, Typography} from "@mui/material"
import styled from "styled-components"
import * as React from "react";
import MuiAppBar from '@mui/material/AppBar';
import MultiProxySelection from "../MultiProxySelection";
import {useAccounts} from "../../contexts/AccountsContext";
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {ROUTES} from "../../constants";
// import NetworkSelection from "../NetworkSelection"

interface Props {
    className?: string
    handleDrawerOpen: () => void,
}

const Header = ({className, handleDrawerOpen}: Props) => {
  const {accountList} = useAccounts()

  return (
    <MuiAppBar position="fixed" className={className}>
      <Toolbar>
        <TypographyStyled
          variant="h6"
          noWrap
        >
            Multix
        </TypographyStyled>
        {!!accountList?.length && (
          <BoxStyled>
            {ROUTES.map(({url, name}) => (
              <Button
                component={Link}
                to={url}
                className="buttonHeader"
              >
                {name}
              </Button>
            ))}
          </BoxStyled>
        )}
        <MultiProxySelection/>
        {/*/!*<NetworkSelection />*!/*/}
        <IconButtonStyled
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
        >
          <MenuIcon/>
        </IconButtonStyled>
      </Toolbar>
    </MuiAppBar>
  )
}

const BoxStyled = styled(Box)(({theme}) => `
    display: none;
    
    @media (min-width: ${theme.breakpoints.values.sm}px) {
        flex-grow: 1;
        display: flex;
    }
`)


const TypographyStyled = styled(Typography)`
  flex-grow: 1;
`

const IconButtonStyled = styled(IconButton)(({theme}) => `
    display: block;
    @media (min-width: ${theme.breakpoints.values.sm}px) {
        display: none;
    }
`)

export default styled(Header)(({theme}) => `
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
