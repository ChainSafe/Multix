import { Box } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { TextFieldStyled } from '../../components/library'

interface Props {
  className?: string
  name?: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const NameSelection = ({ className, name, setName }: Props) => {
  const [error, setError] = useState('')

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setError('')
      const value = event.target.value

      setName(value)

      if (!value) {
        setError('Please give the Multisig a name')
        return
      }
    },
    [setName]
  )

  return (
    <Box className={className}>
      <TextFieldStyled
        fullWidth
        error={!!error}
        helperText={error}
        label="Multisig name"
        value={name}
        onChange={handleChange}
      />
    </Box>
  )
}

export default NameSelection
