import AppBar from "@mui/material/AppBar"
import { Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import MultiProxySelection from "../MultiProxySelection"
import { useAccounts } from "../../contexts/AccountsContext"
import styled from "styled-components";
import NetworkSelection from "../NetworkSelection"

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  const { accountList } = useAccounts()

  return (
    <AppBar className={className}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Multix
          </Typography>
          {!!accountList?.length && (
            <>
              <Box className="buttonContainer">
                <Button
                  component={Link}
                  to="/"
                  className="buttonHeader"
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/create"
                  className="buttonHeader"
                >
                  New Multisig
                </Button>
              </Box>
              <MultiProxySelection />
            </>
          )}
          {/* <NetworkSelection /> */}
        </Toolbar>
      </Container>
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
