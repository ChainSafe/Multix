import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import WatchedAccounts from './WatchedAccounts'
import { WalletConnectSession } from '../../components/WalletConnect/WalletConnectSession'
import { WalletConnectActiveSessions } from '../../components/WalletConnect/WalletConnectActiveSessions'
import { HiOutlineChevronDown as ExpandMoreIcon, HiOutlineEye } from 'react-icons/hi2'
import { theme } from '../../styles/theme'

interface Props {
  className?: string
}

const Settings = ({ className }: Props) => {
  return (
    <>
      <SettingsHeaderStyled>Settings</SettingsHeaderStyled>
      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon size={20} />}>
          <HiOutlineEyeStyled color={theme.custom.proxyBadge.pure} />
          <SummaryLabelStyled>Watch an account</SummaryLabelStyled>
        </AccordionSummaryStyled>
        <AccordionDetails>
          <WatchedAccounts />
        </AccordionDetails>
      </AccordionStyled>
      <BoxStyled className={className}>
        <h3>WalletConnect</h3>
        <WalletConnectSession />
        <WalletConnectActiveSessions />
      </BoxStyled>
    </>
  )
}

const SettingsHeaderStyled = styled('h1')`
  color: ${({ theme }) => theme.custom.gray[900]};
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1.5rem 0 2rem 0;
`

const AccordionStyled = styled(Accordion)`
  max-width: 42.5625rem;
  box-shadow: none;
  border-bottom: 1px solid #e5e5e5;

  &.Mui-expanded {
    background: #fafafa;
  }
`

const AccordionSummaryStyled = styled(AccordionSummary)`
  padding: 1.5rem 1rem;

  .MuiAccordionSummary-content {
    margin: 0;
    display: flex;
    align-items: center;
  }
`

const HiOutlineEyeStyled = styled(HiOutlineEye)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 1.9375rem;
  padding: 0.35rem;
  border-radius: 0.25rem;
  margin: 0 0.75rem 0 0;
  background: ${({ theme }) => theme.custom.gray[400]};
`

const SummaryLabelStyled = styled('div')`
  color: ${({ theme }) => theme.custom.gray[900]};
  font-size: 1.25rem;
  font-weight: 500;
`

const BoxStyled = styled(Box)`
  margin-bottom: 2rem;
`

export default Settings
