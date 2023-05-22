import styled from '@emotion/styled'
import { Alert } from '@mui/material'

interface Props {
  className?: string
}
const NoCallInfo = ({ className }: Props) => (
  <Alert
    className={className}
    severity="info"
    variant="outlined"
  >
    No callData found on-chain. Use Multix to initiate multisig transactions and avoid this
    annoyance.
  </Alert>
)

export default styled(NoCallInfo)`
  margin-right: 0.5rem;
  border: 0;
`
