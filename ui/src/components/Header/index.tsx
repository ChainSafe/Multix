import AppBar from "@mui/material/AppBar"
import React from "react"
import { Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import MultisigSelection from "../MultisigSelection"

export const Header: React.FC = () => {

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
                Create New
              </Button>

            </Box>
            <MultisigSelection />
          </>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
