import { IconButton, styled } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

interface Props {
  onClose: () => void
  className: string
}

const CloseButton = ({ onClose, className }: Props) => (
  <IconButton
    size="small"
    aria-label="close"
    color="inherit"
    onClick={onClose}
    className={className}
  >
    <CloseIcon fontSize="small" />
  </IconButton>
)

export const ModalCloseButton = styled(CloseButton)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`
