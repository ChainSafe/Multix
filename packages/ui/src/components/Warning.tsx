import { Alert } from '@mui/material'

interface Props {
  className?: string
  text: string
}

const Warning = ({ className, text }: Props) => {
  return (
    <Alert
      className={className}
      severity="warning"
    >
      {text}
    </Alert>
  )
}

export default Warning
