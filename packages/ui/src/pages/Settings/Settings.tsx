import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { css, styled } from '@mui/material/styles'
import WatchedAccounts from './WatchedAccounts'
import { WalletConnectSession } from '../../components/WalletConnect/WalletConnectSession'
import { WalletConnectActiveSessions } from '../../components/WalletConnect/WalletConnectActiveSessions'
import { HiOutlineChevronDown as ExpandMoreIcon, HiOutlineEye } from 'react-icons/hi2'
import { theme } from '../../styles/theme'
import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as WalletConnectSVG } from '../../logos/walletConnectSVG.svg'

const ACCORDION_WATCHED_ACCOUNTS = 'panel-watched-accounts'
const ACCORDION_WALLET_CONNECT = 'panel-wallet-connect'
export const WATCH_ACCOUNT_ANCHOR = '#watched-accounts'

type AccordionNames = typeof ACCORDION_WATCHED_ACCOUNTS | typeof ACCORDION_WALLET_CONNECT

const Settings = () => {
  const { hash } = useLocation()
  const [expanded, setExpanded] = useState<AccordionNames | undefined>(undefined)

  const onToggle = useCallback((panel: AccordionNames, forceOpen = false) => {
    setExpanded((prev) => {
      return prev === panel && !forceOpen ? undefined : panel
    })
  }, [])

  useEffect(() => {
    if (hash === WATCH_ACCOUNT_ANCHOR) {
      onToggle(ACCORDION_WATCHED_ACCOUNTS, true)
    }
  }, [hash, onToggle])

  return (
    <>
      <SettingsHeaderStyled>Settings</SettingsHeaderStyled>
      <AccordionStyled
        expanded={expanded === ACCORDION_WATCHED_ACCOUNTS}
        onChange={() => onToggle(ACCORDION_WATCHED_ACCOUNTS)}
      >
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon size={20} />}>
          <HiOutlineEyeStyled color={theme.custom.proxyBadge.pure} />
          <SummaryLabelStyled>Watched accounts</SummaryLabelStyled>
        </AccordionSummaryStyled>
        <AccordionDetails>
          <WatchedAccounts />
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled
        expanded={expanded === ACCORDION_WALLET_CONNECT}
        onChange={() => onToggle(ACCORDION_WALLET_CONNECT)}
      >
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon size={20} />}>
          <WalletConnectSVGStyled />
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
  border-bottom: 1px solid ${({ theme }) => theme.custom.neutral[200]};

  &.Mui-expanded {
    margin: 0;
    background: ${({ theme }) => theme.custom.neutral[50]};

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

  .MuiAccordionSummary-content.Mui-expanded {
    margin-top: 0;
  }
`

const commonCssImgs = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 1.9375rem;
  padding: 0.35rem;
  border-radius: 0.25rem;
  margin: 0 0.75rem 0 0;
  background: ${theme.custom.gray[400]};
`

const WalletConnectSVGStyled = styled(WalletConnectSVG)(commonCssImgs)

const HiOutlineEyeStyled = styled(HiOutlineEye)(commonCssImgs)

const SummaryLabelStyled = styled('div')`
  color: ${({ theme }) => theme.custom.gray[900]};
  font-size: 1.25rem;
  font-weight: 500;
`

export default Settings
