import { styled } from '@mui/material/styles'
import { useGetBalance } from '../../hooks/useGetBalance'
import { useNetwork } from '../../contexts/NetworkContext'

interface BalanceProps {
  address: string
  withIcon?: boolean
}

const Balance = ({ address, withIcon = false }: BalanceProps) => {
  const { balanceFormatted } = useGetBalance({ address })
  const { selectedNetworkInfo } = useNetwork()

  return (
    <BalanceStyled>
      {withIcon && (
        <ImgStyled
          src={selectedNetworkInfo?.nativeAssetLogo || selectedNetworkInfo?.networkLogo}
          alt="balance"
        />
      )}
      {balanceFormatted}
    </BalanceStyled>
  )
}

const BalanceStyled = styled('div')`
  display: flex;
  color: ${({ theme }) => theme.custom.gray[700]};
  font-size: 1rem;
`

const ImgStyled = styled('img')`
  margin-right: 0.5rem;
  width: 1.5rem;
`
export default Balance
