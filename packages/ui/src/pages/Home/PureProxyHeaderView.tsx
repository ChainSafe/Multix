import AccountDisplay from '../../components/AccountDisplay'
import { AccountBadge } from '../../types'
import MultisigActionMenu from './MultisigActionMenu'
import { styled } from '@mui/material/styles'
import { useGetBalance } from '../../hooks/useGetBalance'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { ButtonWithIcon } from '../../components/library'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const PureProxyHeaderView = () => {
  const navigate = useNavigate()
  const { selectedMultiProxy, selectedHasProxy, selectedIsWatched } = useMultiProxy()
  const { balanceFormatted: pureProxyBalance } = useGetBalance({
    address: selectedMultiProxy?.proxy || ''
  })

  if (!selectedHasProxy) return null

  return (
    <PureProxyWrapper>
      <OverviewWrapper>
        <ButtonWithIcon
          onClick={() => navigate('/overview')}
          variant="link"
        >
          See overview
          <HiOutlineArrowLongRight size={24} />
        </ButtonWithIcon>
      </OverviewWrapper>
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
          <MultisigActionMenu withSendButton={!selectedIsWatched} />
        </BoxStyled>
      </PureHeaderStyled>
    </PureProxyWrapper>
  )
}

const PureProxyWrapper = styled('div')`
  flex: 1;
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};
`

const OverviewWrapper = styled('div')`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.custom.gray[300]};
  border-top-right-radius: ${({ theme }) => theme.custom.borderRadius};
  border-top-left-radius: ${({ theme }) => theme.custom.borderRadius};
`

const PureHeaderStyled = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 1rem 0.5rem;
  padding: 1rem 1.3rem 1rem 0.625rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-wrap: nowrap;
  }

  & > div:first-of-type {
    margin: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      margin: initial;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    flex: 1;
    margin-top: 1rem;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      text-align: initial;
      justify-content: initial;
      align-self: flex-end;
      flex: 0;
      margin: 0;
    }
  }

  & > div:last-of-type {
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

  .multisigName {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.custom.gray[800]};
  }

  .multisigAddress {
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
  font-size: 1rem;
  color: ${({ theme }) => theme.custom.gray[700]};
  margin-right: 0.25rem;
`

const BalanceAmountStyled = styled('div')`
  font-size: 1rem;
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
