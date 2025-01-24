import { styled } from '@mui/material/styles'
import { useGetAssetBalance } from '../../hooks/useGetAssetBalance'

interface BalanceProps {
  address: string
  assetId: number
  logo: string
}

const AssetBalance = ({ address, assetId, logo }: BalanceProps) => {
  const { balanceFormatted } = useGetAssetBalance({ address, assetId })

  if (!balanceFormatted) return null

  return (
    <BalanceStyled>
      <ImgStyled
        src={logo}
        alt="balance"
      />
      {balanceFormatted}
    </BalanceStyled>
  )
}

const BalanceStyled = styled('div')`
  display: flex;
  color: ${({ theme }) => theme.custom.gray[700]};
  font-size: 1rem;
  margin-top: 0.5rem;
`

const ImgStyled = styled('img')`
  margin-right: 0.5rem;
  width: 1.5rem;
`
export default AssetBalance
