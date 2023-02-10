import React from "react"
import { Center } from "../../components/layout/Center"
import { Box, Button, CircularProgress } from "@mui/material"
import { useAccounts } from "../../contexts/AccountsContext"
import { useApi } from "../../contexts/ApiContext"

interface Props {
  className?: string
  children: React.ReactNode
}
export const UserSpace = ({ children, className }: Props) => {
  const { isApiReady } = useApi()
  const { isAllowedToConnectToExtension, isExtensionError, isAccountLoading, selectedAccount, allowConnectionToExtension } = useAccounts()

  if (!isAllowedToConnectToExtension) {
    return <Center>
      <h1>Multix is an interface to easily manage complex multisigs.</h1>
      <p>Connect an extension to interact with the Multix.</p>
      <Button onClick={allowConnectionToExtension}>Connect</Button>
    </Center>
  }

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
        {isAccountLoading
          ? "Loading accounts"
          : `Connecting to the node at ${import.meta.env.VITE_WS_PROVIDER}`
        }
      </Box>
    )
  }

  if (selectedAccount) return <>{children}</>

  if (isExtensionError)
    return (
      <Center>
        <h1>No account found. Please create at least one in an extension such as <a
          href="https://polkadot.js.org/extension/"
          target={"_blank"}
          rel="noreferrer"
        >
          Polkadot.js extension
        </a>
        </h1>
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
  )
}
