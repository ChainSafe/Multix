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
}

const Summary = ({ className, threshold, signatories }: Props) => {
  const { addressList } = useAccountList()
  const possibleSigners = getIntersection(addressList, signatories)


  return (
    <Box className={className} >
      <h3>You are about to create a MultiX with:</h3>
      <Paper elevation={2} className="paper">
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
            create a Multix (proxy)
          </li>
          <li>
            send funds to the multisig to create the Multix
          </li>
          <li>
            other signatories must approve it before the Multix is ready to us.
          </li>
        </ul>
      </Box>
      <Box>
        <SignerSelection possibleSigners={possibleSigners} />
      </Box>
    </Box>
  )
}

export default styled(Summary)(({ theme }) => `
  .account:last-child {
    margin-bottom: 0;
  }

  .paper {
    padding: 2rem;
    margin-bottom: 1rem
  }

  .threshold {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
`)