import { Alert, Box, Chip, Paper } from "@mui/material";
import { useMemo } from "react";
import { styled }  from "@mui/material/styles";
import AccountDisplay from "../../components/AccountDisplay";
import SignerSelection from "../../components/SignerSelection";
import { MultiProxy } from "../../contexts/MultiProxyContext";
import { useAccounts } from "../../contexts/AccountsContext";
import { getIntersection } from "../../utils";
import { AccountBadge } from "../../types";
import BalanceWarning from "../../components/Warning";
import BN from "bn.js"
import { formatBnBalance } from "../../utils/formatBnBalance";
import { useApi } from "../../contexts/ApiContext";

interface Props {
  className?: string;
  threshold?: number;
  signatories: string[]
  name?: string
  proxyAddress?: string
  isSwapSummary?: boolean
  balanceMin?: BN
  isBalanceError?: boolean
  selectedMultisig?: MultiProxy["multisigs"][0] // this is only relevant for swaps
}

const Summary = ({ className, threshold, signatories, name, proxyAddress, isSwapSummary = false, balanceMin, isBalanceError, selectedMultisig }: Props) => {
  const { addressList } = useAccounts()
  const { chainInfo } = useApi()

  const possibleSigners = useMemo(() => {
    return isSwapSummary
      // for a swap we can only select the account that are part of both the old and the new multisig
      ? getIntersection(addressList, getIntersection(selectedMultisig?.signatories, signatories))
      : getIntersection(addressList, signatories)
  }, [addressList, isSwapSummary, selectedMultisig, signatories])

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
              badge={AccountBadge.PURE}
              className="proxyName"
            />
          </>
          : <h3>You are about to create a Multisig:</h3>
      }
      <Paper elevation={2} className="paper">
        {!!name && (
          <h4 className="nameSummary">
            Name: <span className="name">{name}</span>
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
        <Alert severity="info">
          {
            isSwapSummary
              ? <>
                In the next step you will sign 2 transactions to:
                <ul>
                  <li>add the new Multisig to the current Pure proxy</li>
                  <li>remove the old Multisig</li>
                </ul>
                Other signatories will need to approve these transactions.
              </>
              : <>
                In the next step you will send 1 batch transaction to:
                <ul>
                  <li>send funds to the new Multisig (required to create a Pure proxy)</li>
                  <li>create the Pure proxy</li>
                </ul>
                Other signatories will need to approve this transaction.
              </>
          }
        </Alert>
      </Box>
      <Box className="signerSelection">
        <SignerSelection possibleSigners={possibleSigners} />
      </Box>
      {isBalanceError && balanceMin &&
        <BalanceWarning text={
          `The selected signer requires at least ${formatBnBalance(balanceMin, chainInfo?.tokenDecimals, { tokenSymbol: chainInfo?.tokenSymbol })}`
        } />
      }
    </Box>
  )
}

export default styled(Summary)(({ theme }) => `
  width: 100%;
  
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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }


  .signerSelection {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  .proxyName {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .name {
    font-weight: normal;
  }
`)