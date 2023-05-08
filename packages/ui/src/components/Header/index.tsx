import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { styled } from "@mui/material/styles";
import { useMemo } from "react";
import MuiAppBar from '@mui/material/AppBar';
import MultiProxySelection from "../MultiProxySelection";
import { useAccounts } from "../../contexts/AccountsContext";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ROUTES } from "../../constants";
import { useMultiProxy } from "../../contexts/MultiProxyContext";
// import NetworkSelection from "../NetworkSelection";

interface Props {
  className?: string
  handleDrawerOpen: () => void,
}

const Header = ({ className, handleDrawerOpen }: Props) => {
  const { accountList } = useAccounts();
  const isAccountConnected = useMemo(() => !!accountList?.length, [accountList])
  const { multiProxyList } = useMultiProxy()

  return (
    <MuiAppBar position="fixed" className={className}>
      <Toolbar>
        <TypographyStyled
          variant="h6"
          noWrap
        >
          Multix
        </TypographyStyled>
        {isAccountConnected && (
          <BoxStyled>
            {ROUTES.map(({ url, name, isDisplayWhenNoMultiProxy }) => (
              multiProxyList.length > 0 || isDisplayWhenNoMultiProxy
                ? (
                  <Button
                    component={Link}
                    to={url}
                    className="buttonHeader"
                  >
                    {name}
                  </Button>
                )
                : null
            ))}
            <MultiProxySelection />
            {/* <NetworkSelection className="networkSelection" /> */}
          </BoxStyled>
        )}
        {isAccountConnected && (
          <IconButtonStyled
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButtonStyled>
        )}
      </Toolbar>
    </MuiAppBar>
  )
}

const BoxStyled = styled(Box)(({ theme }) => `
    display: none;
    
    @media (min-width: ${theme.breakpoints.values.sm}px) {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }

    .networkSelection {
      margin-left: 0.5rem;
    }
`)


const TypographyStyled = styled(Typography)`
  flex-grow: 1;
`

const IconButtonStyled = styled(IconButton)(({ theme }) => `
    display: block;
    @media (min-width: ${theme.breakpoints.values.sm}px) {
        display: none;
    }
`)

export default styled(Header)(({ theme }) => `
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
