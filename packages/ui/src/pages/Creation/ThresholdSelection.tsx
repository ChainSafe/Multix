import { Box, InputAdornment, TextField } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'

interface Props {
  className?: string
  threshold?: number
  setThreshold: (threshold?: number) => void
  signatoriesNumber: number
}

const ThresholdSelection = ({ className, threshold, setThreshold, signatoriesNumber }: Props) => {
  const [error, setError] = useState('')

  const validateThreshold = useCallback(
    (value: number) => {
      if (signatoriesNumber <= 1) {
        setError(`You need at least 2 signatories`)
        setThreshold(undefined)

        return false
      }

      if (Number.isNaN(value) || value > signatoriesNumber || value < 2) {
        setError(`Threshold must be between 2 and ${signatoriesNumber}`)
        setThreshold(undefined)

        return false
      }

      return true
    },
    [setThreshold, signatoriesNumber]
  )

  useEffect(() => {
    if (threshold && signatoriesNumber) {
      validateThreshold(threshold)
    }
  }, [signatoriesNumber, threshold, validateThreshold])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setError('')
      const value = Number(event.target.value)

      const isValid = validateThreshold(value)

      isValid && setThreshold(value)
    },
    [setThreshold, validateThreshold]
  )

  return (
    <Box className={className}>
      <TextField
        fullWidth
        error={!!error}
        helperText={error}
        label="Threshold"
        InputProps={{
          endAdornment: <InputAdornment position="end">/{signatoriesNumber}</InputAdornment>
        }}
        value={threshold || ''}
        onChange={handleChange}
      />
    </Box>
  )
}

export default styled(ThresholdSelection)`
  margin-bottom: 1rem;
`
