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
    <MultisigWrapperStyled>
      <MultiProxyColumnStyled>
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
      </MultiProxyColumnStyled>
    </MultisigWrapperStyled>
  )
}

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

const MultisigWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`

const MultiProxyColumnStyled = styled('div')`
  flex: 1;
  min-width: 0;

  & > h3 {
    margin-top: 0;
  }
`

const PureHeaderStyled = styled('div')`
  display: flex;
  margin: 0 0 1rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  padding: 1rem 1.3rem 1rem 0.625rem;

  & > div:last-child {
    flex: 1;
    justify-content: flex-end;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin: 0 0 1rem 0;
  }
`

const BoxStyled = styled('div')`
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding-left: 1rem;
`

export default PureProxyHeaderView
