import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import WatchedSignatories from '../components/WatchedSignatories'

interface Props {
  className?: string
}

const Settings = ({ className }: Props) => {
  return (
    <Box className={className}>
      <h3>Watch Signatories</h3>
      <WatchedSignatories />
    </Box>
  )
}

export default styled(Settings)`
  .identicon {
    margin-right: 0.5rem;
  }
`
