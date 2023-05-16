import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import WatchedSignatories from '../components/WatchedSignatories'

interface Props {
  className?: string
}

const Settings = ({ className }: Props) => {
  return (
    <Box className={className}>
      <h4>Watch Signatories</h4>
      <WatchedSignatories />
    </Box>
  )
}

export default styled(Settings)``
