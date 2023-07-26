import AccountDisplay from '../../components/AccountDisplay'
import { AccountBadge } from '../../types'
import MultisigActionMenu from './MultisigActionMenu'
import { styled } from '@mui/material/styles'
import { useGetBalance } from '../../hooks/useGetBalance'
import { useMultiProxy } from '../../contexts/MultiProxyContext'

const PureProxyHeaderView = () => {
  const { selectedMultiProxy, selectedHasProxy } = useMultiProxy()
  const { balanceFormatted: pureProxyBalance } = useGetBalance({
    address: selectedMultiProxy?.proxy || ''
  })

  return (
    <PureProxyWrapper>
      {selectedHasProxy && (
        <PureHeaderStyled>
          <AccountDisplayStyled
            iconSize={'large'}
            address={selectedMultiProxy?.proxy || ''}
            badge={AccountBadge.PURE}
          />
          <BalanceStyled>
            <BalanceHeaderStyled>Balance</BalanceHeaderStyled>
            <BalanceAmountStyled>{pureProxyBalance}</BalanceAmountStyled>
          </BalanceStyled>
          <BoxStyled>
            <MultisigActionMenu />
          </BoxStyled>
        </PureHeaderStyled>
      )}
    </PureProxyWrapper>
  )
}

const PureProxyWrapper = styled('div')`
  flex: 1;
  min-width: 0;
`

const PureHeaderStyled = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 1rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  padding: 1rem 1.3rem 1rem 0.625rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-wrap: nowrap;
  }

  & > div:first-child {
    margin: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      margin: initial;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-self: center;
    flex: 1;
    margin-top: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      justify-content: initial;
      align-self: flex-end;
      flex: 0;
      margin: 0;
    }
  }

  & > div:last-child {
    flex: 1;
    justify-content: center;
    align-self: flex-end;
    margin-top: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      justify-content: flex-end;
      margin-top: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin: 0 0 1rem 0;
  }
`

const AccountDisplayStyled = styled(AccountDisplay)`
  min-width: 0;

  .multisig__name {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.custom.gray[800]};
  }

  .multisig__address {
    color: ${({ theme }) => theme.custom.text.secondary};
  }

  & > div:last-child {
    margin: 1.44rem 1.37rem 0.75rem 0.87rem;
  }
`

const BalanceStyled = styled('div')`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.custom.gray[100]};
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  border: 1px solid ${({ theme }) => theme.custom.gray[400]};
  align-self: flex-end;
`

const BalanceHeaderStyled = styled('div')`
  color: ${({ theme }) => theme.custom.gray[700]};
`

const BalanceAmountStyled = styled('div')`
  color: ${({ theme }) => theme.custom.gray[800]};
  white-space: nowrap;
`

const BoxStyled = styled('div')`
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding-left: 1rem;
`

export default PureProxyHeaderView
