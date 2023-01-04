import { TextField } from "@mui/material"
import React, { ChangeEvent, useCallback, useState } from "react"
import { Center } from "../components/layout/Center"
// import { useApi } from "../contexts/ApiContext"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import styled from "styled-components";

interface Props {
  className?: string
}

const Swap = ({ className }: Props) => {
  const [token1, setToken1] = useState("")
  // const [error, setError] = useState("")
  const error = ""

  const onChangeToken1 = useCallback((cid: ChangeEvent<HTMLInputElement>) => {
    setToken1(cid.currentTarget.value.trim())
  }, [])


  return (
    <div className={className}>
      <Center>
        <h1>Swap some tokens</h1>
        <div className="swapContainer">
          <TextField
            fullWidth
            required
            id="token"
            label="token"
            placeholder="ETH"
            onChange={onChangeToken1}
            value={token1}
          />
          {!!error && (
            <div className="errorMessage">
              {error}
            </div>
          )}
          <>
            <CheckCircleIcon fontSize="large" /> All good
          </>
        </div>
      </Center>
    </div>
  )
}

export default styled(Swap)(({ theme }) => `
  .errorMessage {
    color: firebrick;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .swapContainer {
    display: flex;
    flex-direction: column;
    
    & .MuiTextField-root { 
      margin-bottom: 2rem; 
    }
  }
`)