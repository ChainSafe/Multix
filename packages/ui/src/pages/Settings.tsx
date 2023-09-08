import { Box } from '@mui/material'
import WatchedAccounts from '../components/WatchedAccounts'
import { WalletConnectSession } from '../components/WalletConnect/WalletConnectSession'
import styled from '@emotion/styled'
import { WalletConnectActiveSessions } from '../components/WalletConnect/WalletConnectActiveSessions'

interface Props {
  className?: string
}

const Settings = ({ className }: Props) => {
  return (
    <BoxStyled className={className}>
      <h3>Watched Accounts</h3>
      <WatchedAccounts />
      <h3>WalletConnect</h3>
      <WalletConnectSession />
      <WalletConnectActiveSessions />
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)`
  margin-bottom: 2rem;
`

export default Settings
