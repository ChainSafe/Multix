import AppBar from "@mui/material/AppBar"
import React from "react"
import { Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import MultisigSelection from "../MultisigProxySelection"
import { useAccounts } from "../../contexts/AccountsContext"

export const Header: React.FC = () => {
  const { accountList } = useAccounts()

  return (
    <AppBar>
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
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                <Button
                  component={Link}
                  to="/"
                  sx={{ my: 2, color: "white", display: "block", "&:hover": { backgroundColor: "white", color: "black" } }}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/create"
                  sx={{ my: 2, color: "white", display: "block", "&:hover": { backgroundColor: "white", color: "black" } }}
                >
                  New Multisig
                </Button>

              </Box>
              <MultisigSelection />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
