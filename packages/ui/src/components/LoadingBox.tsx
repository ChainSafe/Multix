import { styled } from '@mui/material/styles'
import { Box, CircularProgress } from '@mui/material'

interface Props {
  message: string
  dataCy?: string
}

const LoadingBox = ({ message, dataCy }: Props) => (
  <MessageBox data-cy={dataCy}>
    <CircularProgress />
    <div>{message}</div>
  </MessageBox>
)

export const MessageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`

export default LoadingBox
