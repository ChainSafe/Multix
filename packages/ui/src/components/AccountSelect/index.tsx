import React from 'react'
import { CardHeader, IconButton, Menu, MenuItem } from '@mui/material'
import { MenuProps } from '@mui/material/Menu/Menu'
import { useAccounts } from '../../contexts/AccountsContext'
import MultixIdenticon from '../MultixIdenticon'

interface Props extends Omit<MenuProps, 'open' | 'onClose' | 'anchorEl'> {
  anchorEl: null | HTMLElement
  onClose: () => void
}

export const AccountSelect: React.FC<Props> = ({ anchorEl, onClose, ...props }) => {
  const { accountList, selectAccount } = useAccounts()

  if (!accountList) {
    return null
  }

  const handleSelect = (account: (typeof accountList)[0]) => () => {
    selectAccount(account)
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
          onClick={handleSelect(account)}
        >
          <CardHeader
            avatar={
              <IconButton sx={{ p: 0 }}>
                <MultixIdenticon
                  value={account.address}
                  theme="substrate"
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
