import { Box, Checkbox, FormControlLabel, Tooltip, styled } from '@mui/material'
import { HiOutlineInformationCircle } from 'react-icons/hi2'

interface Props {
  setWithProxy: (withProxy: boolean) => void
  withProxy: boolean
  className?: string
}
const WithProxySelection = ({ setWithProxy, withProxy, className }: Props) => {
  return (
    <Box className={className}>
      <TitleBoxStyled>
        Pure proxy <InfoBox />
      </TitleBoxStyled>
      <FormControlLabel
        label="Use a pure proxy (recommended)"
        control={
          <Checkbox
            checked={withProxy}
            onChange={() => setWithProxy(!withProxy)}
            // @ts-ignore
            inputProps={{ 'data-cy': 'checkbox-use-pure-proxy' }}
          />
        }
      />
    </Box>
  )
}

const InfoBox = ({ className = '' }: { className?: string }) => (
  <Tooltip
    className={className}
    title={
      <span>
        Using a proxy makes the multisig more flexible. You can then change the signatories without
        changing the proxy address. More info{' '}
        <a
          href="https://youtu.be/cQymHtreDUA?t=147"
          target="_blank"
          rel="noreferrer"
        >
          in this video
        </a>
        .
      </span>
    }
  >
    <span>
      <HiOutlineInformationCircle />
    </span>
  </Tooltip>
)

const TitleBoxStyled = styled(Box)`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.custom.text.primary};
`

export default styled(WithProxySelection)`
  margin-top: 1rem;
`
