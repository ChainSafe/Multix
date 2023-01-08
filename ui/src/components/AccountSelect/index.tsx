import React from "react"
import { CardHeader, IconButton, Menu, MenuItem } from "@mui/material"
import { Identicon } from "@polkadot/react-identicon"
import { MenuProps } from "@mui/material/Menu/Menu"
import { useAccountList } from "../../contexts/AccountsContext"

interface Props extends Omit<MenuProps, "open" | "onClose" | "anchorEl"> {
  anchorEl: null | HTMLElement
  onClose: () => void
}

export const AccountSelect: React.FC<Props> = ({ anchorEl, onClose, ...props }) => {

  const { accountList, selectAccount } = useAccountList()

  if (!accountList) {
    return null
  }

  const handleSelect = (address: string) => () => {
    selectAccount(address)
    onClose()
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      {...props}
    >
      {accountList.map((account) => (
        <MenuItem
          key={account.address}
          onClick={handleSelect(account.address)}>
          <CardHeader
            avatar={
              <IconButton sx={{ p: 0 }}>
                <Identicon
                  value={account.address}
                  theme="substrate"
                  size={40}
                />
              </IconButton>
            }
            title={account.meta.name}
            subheader={account.address}
          />
        </MenuItem>
      ))}
    </Menu>
  )
}
