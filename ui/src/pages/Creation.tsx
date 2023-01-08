import React, { useState } from "react"
import styled from "styled-components";
// import { useApi } from "../contexts/ApiContext";
// import { Button } from "@mui/material";
import SignatorySelection from "../components/SignatorySelection";

interface Props {
  className?: string
}

const MultisigCreation = ({ className }: Props) => {
  const [signatories, setSignatories] = useState<string[]>([])
  // const { api, isApiReady } = useApi()

  return (
    <div className={className}>
      <>
        <section>
          <h1>Signatories</h1>
          <div className="signatoriesSelection">
            <SignatorySelection
              setSignatories={setSignatories}
              signatories={signatories}
            />
          </div>
        </section>



        {/* <Button onClick={onOpenModal}>New Tx</Button> */}
      </>
    </div>
  )
}

export default styled(MultisigCreation)(({ theme }) => `
  padding: 1rem;
`)