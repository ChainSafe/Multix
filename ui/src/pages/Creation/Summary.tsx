import { Box, Chip, Paper } from "@mui/material";
import { useMemo } from "react";
import styled from "styled-components";
import AccountDisplay from "../../components/AccountDisplay";
import SignerSelection from "../../components/SignerSelection";
import { useAccountList } from "../../contexts/AccountsContext";
import { useMultisig } from "../../contexts/MultisigContext";
import { getIntersection } from "../../utils";

interface Props {
  className?: string;
  threshold?: number;
  signatories: string[]
  name?: string
  proxyAddress?: string
  isSwapSummary?: boolean
}

const Summary = ({ className, threshold, signatories, name, proxyAddress, isSwapSummary = false }: Props) => {
  const { addressList } = useAccountList()
  const { selectedMultisigSignatories } = useMultisig()
  const possibleSigners = useMemo(() => {
    return isSwapSummary
      ? getIntersection(addressList, selectedMultisigSignatories)
      : getIntersection(addressList, signatories)
  }, [addressList, isSwapSummary, selectedMultisigSignatories, signatories])

  if (isSwapSummary && !proxyAddress) {
    console.log('ProxyAddress undefined while being a swap summary')
    return null
  }

  return (
    <Box className={className} >
      {
        isSwapSummary && proxyAddress
          ? <>
            <h3>You are about to change the Multisig controlling:</h3>
            <AccountDisplay
              address={proxyAddress}
              badge="proxy"
              className="proxyName"
            />
          </>
          : <h3>You are about to create a Multisig:</h3>
      }
      <Paper elevation={2} className="paper">
        {!!name && (
          <h4 className="nameSummary">
            {name}
          </h4>
        )}
        <h4 className="threshold">
          Threshold: <Chip label={`${threshold}/${signatories.length}`} />
        </h4>
        <h4>Signatories:</h4>
        {signatories.map((signatory) => (
          <AccountDisplay
            key={signatory}
            address={signatory}
            className="account"
          />
        ))}
      </Paper>
      <Box className="explainer">
        In the next step you will send a transaction to:
        <ul>
          {
            isSwapSummary
              ? <>
                <li>Add the new Multisig to the current Proxy</li>
                <li>Remove the old Multisig</li>
              </>
              : <>
                <li>send funds to the new Multisig to create a Proxy</li>
                <li>create a Multisig proxy</li>
              </>
          }

        </ul>
        Other signatories must approve this transaction before it is ready use.
      </Box>
      <Box className="signerSelection">
        <SignerSelection possibleSigners={possibleSigners} />
      </Box>
    </Box>
  )
}

export default styled(Summary)(({ theme }) => `
  .account:last-child {
    margin-bottom: 1rem;
  }

  .account:last-child {
    margin-bottom: 0;
  }

  .paper {
    padding: 2rem;
    margin-bottom: 1rem
  }

  .threshold, .nameSummary {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  .signerSelection {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .proxyName {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
`)