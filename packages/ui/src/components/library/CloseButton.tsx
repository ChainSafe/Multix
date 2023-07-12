import { IconButton, styled } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

interface Props {
  onClose: () => void
}

export const CloseButton = ({ onClose }: Props) => (
  <IconButtonStyled
    size="small"
    aria-label="close"
    color="inherit"
    onClick={onClose}
  >
    <CloseIcon fontSize="small" />
  </IconButtonStyled>
)

export const IconButtonStyled = styled(IconButton)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`
