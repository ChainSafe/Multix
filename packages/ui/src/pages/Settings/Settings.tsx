import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { styled } from '@mui/material/styles'
import WatchedAccounts from './WatchedAccounts'
import { WalletConnectSession } from '../../components/WalletConnect/WalletConnectSession'
import { WalletConnectActiveSessions } from '../../components/WalletConnect/WalletConnectActiveSessions'
import { HiOutlineChevronDown as ExpandMoreIcon, HiOutlineEye } from 'react-icons/hi2'
import { theme } from '../../styles/theme'
import { SyntheticEvent, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Settings = () => {
  const location = useLocation()
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (panel: string) => (event: SyntheticEvent | null, isExpanded: boolean) => {
    console.log('handleChange', panel)
    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    if (location.hash === '#watched-acccounts') {
      handleChange('panel-watched-accounts')(null, true)
    } else if (location.hash === '#wallet-connect') {
      handleChange('panel-wallet-connect')(null, true)
    }
  }, [location.hash])

  return (
    <>
      <SettingsHeaderStyled>Settings</SettingsHeaderStyled>
      <AccordionStyled
        expanded={expanded === 'panel-watched-accounts'}
        onChange={handleChange('panel-watched-accounts')}
      >
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon size={20} />}>
          <HiOutlineEyeStyled color={theme.custom.proxyBadge.pure} />
          <SummaryLabelStyled>Watch an account</SummaryLabelStyled>
        </AccordionSummaryStyled>
        <AccordionDetails>
          <WatchedAccounts />
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled
        expanded={expanded === 'panel-wallet-connect'}
        onChange={handleChange('panel-wallet-connect')}
      >
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon size={20} />}>
          <HiOutlineEyeStyled color={theme.custom.proxyBadge.pure} />
          <SummaryLabelStyled>WalletConnect</SummaryLabelStyled>
        </AccordionSummaryStyled>
        <AccordionDetails>
          <WalletConnectSession />
          <WalletConnectActiveSessions />
        </AccordionDetails>
      </AccordionStyled>
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
    margin: 0;
    background: #fafafa;

    .MuiAccordionSummary-root {
      margin: 0;
      min-height: auto;
    }
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

export default Settings
