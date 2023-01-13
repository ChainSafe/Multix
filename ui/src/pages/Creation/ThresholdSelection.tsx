import { Box, InputAdornment, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  threshold?: number;
  setThreshold: (threshold?: number) => void
  signatoriesNumber: number
}

const ThresholdSelection = ({ className, threshold, setThreshold, signatoriesNumber }: Props) => {
  const [error, setError] = useState("")

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setError("")
    const value = Number(event.target.value)

    if (Number.isNaN(value) || value > signatoriesNumber || value < 1) {
      setError(`Threshold must be between 1 and ${signatoriesNumber}`)
      setThreshold(undefined)

      return
    }

    setThreshold(value)
  }, [setThreshold, signatoriesNumber])

  return (
    <Box className={className} >
      <TextField
        error={!!error}
        helperText={error}
        label="Threshold"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">/{signatoriesNumber}</InputAdornment>
          ),
        }}
        value={threshold || ""}
        onChange={handleChange}
      />
    </Box>
  )
}

export default styled(ThresholdSelection)(({ theme }) => `
//
`)