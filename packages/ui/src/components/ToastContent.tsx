import { Box, CircularProgress } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { styled } from '@mui/material/styles'
import { useCallback } from 'react'
import { Toast } from '../contexts/ToastContext'

export type ToastType = 'success' | 'error' | 'loading'

export interface ToastContentProps {
  className?: string
  toast: Toast
}

const ToastContent = ({ className, toast }: ToastContentProps) => {
  const { type, title, link } = toast

  const onOpenLink = useCallback(() => {
    window.open(link, '_blank')
  }, [link])

  return (
    <div className={className}>
      <div className="iconContainer">
        {type === 'success' ? (
          <CheckCircleOutlineIcon className="toastIcon" />
        ) : type === 'loading' ? (
          <CircularProgress className="toastIcon" />
        ) : (
          <ErrorOutlineIcon className="toastIcon errorIcon" />
        )}
      </div>
      <Box
        component="p"
        className="titleContainer"
      >
        {title}
      </Box>
      {!!link && (
        <Box
          className="linkIcon"
          onClick={onOpenLink}
        >
          <LaunchIcon fontSize="small" />
        </Box>
      )}
    </div>
  )
}

export default styled(ToastContent)(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;

    .linkIcon {
        display: flex;
        cursor: pointer;
        padding-left: 1rem; 
    }

    .iconContainer {
        margin-right: 1rem;
    }

    .toastIcon {
        font-size: 2.5rem;
    }

    .errorIcon {
        color: ${theme.custom.text.errorColor}
    }

`
)
