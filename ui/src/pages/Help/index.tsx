import styled from "styled-components"
import { Alert, Box } from "@mui/material"
import { MultiProxy, useMultiProxy } from "../../contexts/MultiProxyContext"
import AccountDisplay from "../../components/AccountDisplay"
import { useMemo } from "react"
import { AccountBadge } from "../../types"
import MultisigCompactDisplay from "../../components/MultisigCompactDisplay"
import 'reactflow/dist/style.css';
import Overview from "./Overview"

interface Props {
  className?: string
}

const getMultisigInfo = (multisig: MultiProxy['multisigs'][0]) => {
  const signatoryLegnth = multisig.signatories?.length
  return (
    <div>
      This account is a multisig comprised of {signatoryLegnth} signatories. Its threshold is {multisig.threshold} out of {signatoryLegnth}. It means that for every multisig proposal, at least {multisig?.threshold} signatories need to approve it before it can be executed.
      {signatoryLegnth === multisig.threshold && (
        <Alert className="errorBox" severity="error">
          The fact that the threshold is equal to to the amount of signatories is dangerous in the sense that if any of the signatory looses access to its account, the funds on the multisig account will be inaccessible.
        </Alert>
      )}
    </div>
  )
}

const Help = ({ className }: Props) => {
  const { selectedMultiProxy } = useMultiProxy()
  const hasPureProxy = useMemo(() => selectedMultiProxy?.proxy, [selectedMultiProxy?.proxy])
  const hasSeveralMultisigs = useMemo(() => selectedMultiProxy?.multisigs && selectedMultiProxy?.multisigs.length > 1, [selectedMultiProxy])

  return (
    <Box className={className}>
      {hasPureProxy && (
        <>
          <Box className="sectionWrapper">
            <h1>Pure</h1>
            <AccountDisplay
              address={selectedMultiProxy?.proxy || ""}
              badge={AccountBadge.PURE}
              withName
            />
            <div>
              <div>
                A pure account, also called pure proxy is a very specific type of account that has no private key.
                It should be the externally facing account for a company or a DAO. It should be the account that holds funds. This is an account that will not change regardless of who controls it.
              </div>
              <div>
                In this specific case it is controlled by {selectedMultiProxy?.multisigs.length} {hasSeveralMultisigs ? "accounts" : "account"}:
                <ul className="accountList">
                  {selectedMultiProxy?.multisigs.map(({ address }) => (
                    <li key={address}><AccountDisplay address={address} badge={AccountBadge.MULTI} /></li>
                  ))}
                </ul>
              </div>
            </div>
          </Box>
          <Box className="sectionWrapper">
            <h1>{hasSeveralMultisigs ? "Multisigs" : "Multisig"}</h1>
            {selectedMultiProxy?.multisigs.map((multisig) => (
              <Box className="multisigWithProxy" key={multisig.address}>
                <MultisigCompactDisplay
                  address={selectedMultiProxy?.multisigs[0].address || ""}
                  expanded={false}
                />
                {getMultisigInfo(multisig)}
              </Box>
            ))}
          </Box>
        </>
      )}
      {!hasPureProxy && (
        <Box>
          <h1>Standalone Multisig</h1>
          <MultisigCompactDisplay
            address={selectedMultiProxy?.multisigs[0].address || ""}
            expanded
          />
          {selectedMultiProxy?.multisigs[0] && getMultisigInfo(selectedMultiProxy.multisigs[0])}
          <Alert className='infoBox' severity="warning">
            While more secure than a normal account, it is not recommended for DAOs or businesses to use such a standalone multisig account as it lacks flexibility. Its address will change if any of the signatory changes, or if the threshold changes.
            It is advised to use a pure proxy account in front of it. This is the default behavior on Multix when you create a new multisig.
          </Alert>
        </Box>
      )}
      <h1>Overview</h1>
      <Overview />
    </Box>
  )
}

export default styled(Help)(({ theme }) => `
  .accountList {
    list-style-type: none;

    li {
      margin-bottom: 1rem;
    }
  }

  .errorBox {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .multisigWithProxy:not(:last-child) {
    margin-bottom: 3rem;
  }

  .sectionWrapper {
    margin-bottom: 4rem;
  }
`)