import React, { useCallback, useState } from "react"
import styled from "styled-components";
// import { useApi } from "../contexts/ApiContext";
import { Button } from "@mui/material";
import NewTxModal from "../components/modals/NewTx";

interface Props {
  className?: string
}

const Landing = ({ className }: Props) => {

  // const { api, isApiReady } = useApi()
  const [isNewTxModalOpen, setIsNewTxModalOpen] = useState(false)

  const onClose = useCallback(() => {
    setIsNewTxModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsNewTxModalOpen(true)
  }, [])


  return (
    <div className={className}>
      <Button onClick={onOpenModal}>New Tx</Button>
      {isNewTxModalOpen && <NewTxModal onClose={onClose} />}
    </div>
  )
}

export default styled(Landing)(({ theme }) => `
  padding: 1rem;
`)