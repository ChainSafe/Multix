import { Stack, Snackbar as MuiSnackbar, styled } from '@mui/material'
import { useToasts } from '../contexts/ToastContext'
import ToastBar from './ToastBar'

interface Props {
  className?: string
}

const Snackbar = ({ className }: Props) => {
  const { toasts } = useToasts()

  return (
    <MuiSnackbar
      className={className}
      open={toasts.length >= 1}
    >
      <Stack
        flexDirection="column"
        gap={1}
      >
        {toasts.map((toast) => (
          <ToastBar
            toast={toast}
            key={toast.id}
          />
        ))}
      </Stack>
    </MuiSnackbar>
  )
}

export default styled(Snackbar)`
  .MuiSnackbar-root {
    position: relative;
    bottom: 0;
    left: 0;
  }
`
