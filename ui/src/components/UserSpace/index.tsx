import React from "react"
import { Center } from "../../components/layout/Center"
import { Box, CircularProgress } from "@mui/material"
// import { AccountSelect } from "../AccountSelect"
import { useAccountList } from "../../contexts/AccountsContext"
import { useApi } from "../../contexts/ApiContext"

interface Props {
  className?: string
  children: React.ReactNode
}
export const UserSpace = ({ children, className }: Props) => {
  const { isApiReady } = useApi()
  const { extensionNotFound, isAccountListEmpty, isAccountLoading, selectedAccount } = useAccountList()
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  if (!isApiReady || isAccountLoading) {
    return (
      <Box
        className={className}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "&:first-of-type": {
            marginBottom: "1rem"
          }
        }}
      >
        <CircularProgress />
        Connecting to the node at {import.meta.env.VITE_WS_PROVIDER}
      </Box>
    )
  }

  console.log('selectedAccount', selectedAccount)

  if (selectedAccount) return <>{children}</>

  if (extensionNotFound)
    return (
      <Center>
        <h1>Please install an extension such as <a
          href="https://polkadot.js.org/extension/"
          target={"_blank"}
          rel="noreferrer"
        >
          Polkadot.js extension
        </a>
        </h1>
      </Center>
    )

  if (isAccountListEmpty)
    return (
      <Center>
        <h1>Please create at least an account in the extension</h1>
      </Center>
    )

  // if (state === PluginState.INITIALIZATION) return null;

  // if (state === PluginState.UNAUTHORIZED)
  //   return (
  //     <Center>
  //       <h1>Please Authorise page</h1>
  //     </Center>
  //   );

  // if (state === PluginState.NONE)
  //   return (
  //     <Center>
  //       <h1>There is no plugin :sad:</h1>
  //     </Center>
  //   );

  // if (state === PluginState.INJECTED)
  //   return (
  //     <Center>
  //       <h1>Please Allow Access</h1>
  //     </Center>
  //   );

  // if (!accounts.length)
  //   return (
  //     <Center>
  //       <h1>Please Add Account</h1>
  //     </Center>
  //   );

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&:first-of-type": {
        marginBottom: "1rem"
      }
    }}
    >
      <CircularProgress />
      Loading accounts...
    </Box>
    // <Center>
    //   <Button
    //     variant="outlined"
    //     endIcon={<KeyboardArrowDownIcon />}
    //     onClick={handleOpenUserMenu}>
    //   Select an account
    //   </Button>
    //   <AccountSelect
    //     anchorEl={anchorElUser}
    //     onClose={handleCloseUserMenu} />
    // </Center>
  )
}
