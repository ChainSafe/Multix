import { Box, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  name?: string;
  setName: React.Dispatch<React.SetStateAction<string>>
}

const NameSelection = ({ className, name, setName }: Props) => {
  const [error, setError] = useState("")

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setError("")
    const value = event.target.value

    setName(value)

    if (!value) {
      setError("Please give the Multisig a name")
      return
    }
  }, [setName])

  return (
    <Box className={className} >
      <TextField
        fullWidth
        error={!!error}
        helperText={error}
        label="Name"
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment position="end">/{signatoriesNumber}</InputAdornment>
        //   ),
        // }}
        value={name}
        onChange={handleChange}
      />
    </Box>
  )
}

export default styled(NameSelection)(({ theme }) => `
//
`)