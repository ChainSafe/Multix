import AppBar from "@mui/material/AppBar"
import React, { useEffect } from "react"
import { Box, Button, Container, Toolbar, Tooltip, Typography } from "@mui/material"
import { AccountSelect } from "../AccountSelect"
import { Identicon } from "@polkadot/react-identicon"
// import { Link } from "react-router-dom"
import { useAccountList } from "../../contexts/AccountsContext"
import { useApi } from "../../contexts/ApiContext"

export const Header: React.FC = () => {
  const { selectedAddress, getAccountByAddress } = useAccountList()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const { api, isApiReady } = useApi()
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  useEffect(() => {
    if (!isApiReady) return

    let unsubscribe: () => void

    // use the api
    api.derive.chain.bestNumber((number) => {
      console.log(number.toNumber())
    })
      .then(unsub => { unsubscribe = unsub })
      .catch(console.error)

    return () => unsubscribe && unsubscribe()
  })

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

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
            Multisig-UI
          </Typography>
          {selectedAddress && (
            <>
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                {/*
                  <Button
                  component={Link}
                  to="/"
                  sx={{ my: 2, color: "white", display: "block", "&:hover": { backgroundColor: "white", color: "black" } }}>
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/"
                  sx={{ my: 2, color: "white", display: "block", "&:hover": { backgroundColor: "white", color: "black" } }}
                >
                  Swap
                </Button>
                */}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Select Account">
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{
                      background: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black"
                      }
                    }}
                    startIcon={<Identicon
                      value={selectedAddress}
                      theme="substrate"
                      size={32}
                    />}
                  >
                    {getAccountByAddress(selectedAddress)?.meta.name}
                  </Button>
                </Tooltip>
                <AccountSelect
                  anchorEl={anchorElUser}
                  onClose={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      maxHeight: "100%",
                      overflow: "auto",
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                      },
                      "&:before": {
                        content: "\"\"",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 16,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0
                      }
                    }
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                />
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
