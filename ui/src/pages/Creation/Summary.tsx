import { Box, Chip, Paper } from "@mui/material";
import styled from "styled-components";
import { Signatory } from ".";
import AccountSelection from "../../components/AccountSelection";

interface Props {
  className?: string;
  threshold?: number;
  signatories: Signatory[]
}

const Summary = ({ className, threshold, signatories }: Props) => {



  return (
    <Box className={className} >
      <h4>You are about to create a MultiX with these signers:</h4>
      <Paper elevation={2} className="paper">
        {signatories.map((signatory, index) => (
          <AccountSelection
            className="account"
            disabled
            value={signatory.address}
            inputLabel={`Account ${index + 1}`}
          />
        ))}
        <Box className="threshold">
          Threshold <Chip label={`${threshold}/${signatories.length}`} />
        </Box>
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
    </Box>
  )
}

export default styled(Summary)(({ theme }) => `
  .account {
    margin-bottom: 1rem;
  }

  .paper {
    padding: 2rem;
    margin-bottom: 1rem
  }

  .threshold {
    margin-top: 1rem;
  }
`)