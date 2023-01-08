import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components";
// import { useApi } from "../contexts/ApiContext";
import { Button } from "@mui/material";
import NewTxModal from "../components/modals/NewTx";
import { useMultisigsByAccountsQuery } from "../../types-and-hooks";
import { useAccountList } from "../contexts/AccountsContext";

interface Props {
  className?: string
}

const Landing = ({ className }: Props) => {

  // const { api, isApiReady } = useApi()
  const [isNewTxModalOpen, setIsNewTxModalOpen] = useState(false)
  const { addressList } = useAccountList()
  const { data, isLoading, error } = useMultisigsByAccountsQuery({ accounts: addressList })

  useEffect(() => {
    if (!!error) {
      console.error(error)
    }
  })

  const onClose = useCallback(() => {
    setIsNewTxModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsNewTxModalOpen(true)
  }, [])


  return (
    <div className={className}>
      <>
        {!!error && (
          <div>
            error...
          </div>
        )}
        {isLoading && (
          <div>
            Loading...
          </div>
        )}
        {!isLoading && data?.multisigs.length === 0 && (
          <div>
            No multisig found for your accounts
          </div>
        )}
        {data?.multisigs.map((multisig) =>
          <div key={multisig.id}>
            {multisig.threshold}/{multisig.signers.length} {multisig.proxy?.id}
            <ul>
              {multisig.signers.map(({ signer }) =>
                <li key={signer.id}>{signer.id}</li>
              )}
            </ul>
          </div>
        )}

        <Button onClick={onOpenModal}>New Tx</Button>
        {isNewTxModalOpen && <NewTxModal onClose={onClose} />}
      </>
    </div>
  )
}

export default styled(Landing)(({ theme }) => `
  padding: 1rem;
`)