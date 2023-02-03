import { Box, Chip, Paper } from "@mui/material";
import styled from "styled-components";
import AccountDisplay from "../../components/AccountDisplay";
import SignerSelection from "../../components/SignerSelection";
import { useAccountList } from "../../contexts/AccountsContext";
import { getIntersection } from "../../utils";

interface Props {
  className?: string;
  threshold?: number;
  signatories: string[]
  name: string
}

const Summary = ({ className, threshold, signatories, name }: Props) => {
  const { addressList } = useAccountList()
  const possibleSigners = getIntersection(addressList, signatories)


  return (
    <Box className={className} >
      <h3>You are about to create a Multisig:</h3>
      <Paper elevation={2} className="paper">
        <h4 className="nameSummary">
          {name}
        </h4>
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
          <li>
            send funds to the Multisig to create a Proxy
          </li>
          <li>
            create a Multisig proxy
          </li>
        </ul>
        Other signatories must approve the proxy creation before the it is ready use.
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
`)