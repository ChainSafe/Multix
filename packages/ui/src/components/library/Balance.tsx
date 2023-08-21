import { styled } from '@mui/material/styles'
import { useGetBalance } from '../../hooks/useGetBalance'

interface BalanceProps {
  address: string
}

const Balance = ({ address }: BalanceProps) => {
  const { balanceFormatted } = useGetBalance({ address })

  return <BalanceStyled>{balanceFormatted}</BalanceStyled>
}

const BalanceStyled = styled('div')`
  display: flex;
  color: ${({ theme }) => theme.custom.text.addressColorLightGray};
  font-size: small;
  margin-top: 4px;
`

export default Balance
