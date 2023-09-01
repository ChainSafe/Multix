import { Alert, Box, Chip, Paper } from '@mui/material'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import AccountDisplay from '../../components/AccountDisplay'
import SignerSelection from '../../components/select/SignerSelection'
import { MultiProxy } from '../../contexts/MultiProxyContext'
import { useAccounts } from '../../contexts/AccountsContext'
import { getIntersection } from '../../utils'
import { AccountBadge } from '../../types'
import BN from 'bn.js'
import { formatBnBalance } from '../../utils/formatBnBalance'
import { useApi } from '../../contexts/ApiContext'

interface Props {
  className?: string
  threshold?: number | null
  signatories: string[]
  name?: string
  proxyAddress?: string
  isCreationSummary?: boolean
  balanceMin?: BN
  isBalanceError?: boolean
  selectedMultisig?: MultiProxy['multisigs'][0] // this is only relevant for swaps
  withProxy?: boolean
}

const Summary = ({
  className,
  threshold,
  signatories,
  name,
  proxyAddress,
  isCreationSummary = true,
  balanceMin,
  isBalanceError,
  selectedMultisig,
  withProxy = true
}: Props) => {
  const { ownAddressList } = useAccounts()
  const { chainInfo } = useApi()

  const possibleSigners = useMemo(() => {
    return isCreationSummary
      ? // for a swap we can only select the account that are part of both the old and the new multisig
        getIntersection(ownAddressList, signatories)
      : getIntersection(ownAddressList, getIntersection(selectedMultisig?.signatories, signatories))
  }, [ownAddressList, isCreationSummary, selectedMultisig, signatories])

  if (!isCreationSummary && !proxyAddress) {
    console.log('ProxyAddress undefined while being a swap summary')
    return null
  }

  return (
    <Box className={className}>
      {isCreationSummary ? (
        <h3>You are about to create a Multisig:</h3>
      ) : (
        <>
          <h3>You are about to change the Multisig controlling:</h3>
          <AccoutDisplayProxyStyled
            address={proxyAddress || ''}
            badge={AccountBadge.PURE}
          />
        </>
      )}
      <Paper
        elevation={2}
        className="paper"
      >
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
          {isCreationSummary ? (
            withProxy ? (
              <>
                In the next step you will send 1 batch transaction to:
                <ul>
                  <li>send funds to the new Multisig (required to create a Pure proxy)</li>
                  <li>create the Pure proxy</li>
                </ul>
                Other signatories will need to approve this transaction.
              </>
            ) : (
              <>In the next step you will sign a remark transaction for the multisig creation</>
            )
          ) : (
            <>
              In the next step you will sign 2 transactions to:
              <ul>
                <li>add the new Multisig to the current Pure proxy</li>
                <li>remove the old Multisig</li>
              </ul>
              Other signatories will need to approve these transactions.
            </>
          )}
        </Alert>
      </Box>
      <Box className="signerSelection">
        <SignerSelection
          label="Signing with"
          possibleSigners={possibleSigners}
        />
      </Box>
      {isBalanceError && balanceMin && (
        <Alert severity="warning">
          The selected signer requires at least{' '}
          {formatBnBalance(balanceMin, chainInfo?.tokenDecimals, {
            tokenSymbol: chainInfo?.tokenSymbol
          })}
        </Alert>
      )}
    </Box>
  )
}

const AccoutDisplayProxyStyled = styled(AccountDisplay)`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`
export default styled(Summary)`
  width: 100%;

  .account:last-child {
    margin-bottom: 1rem;
  }

  .account:last-child {
    margin-bottom: 0;
  }

  .paper {
    padding: 2rem;
    margin-bottom: 1rem;
  }

  .threshold,
  .nameSummary {
    margin-bottom: 1.5rem;
    margin-top: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }

  .signerSelection {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  .name {
    font-weight: normal;
  }
`
