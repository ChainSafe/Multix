import { useContext, useMemo } from "react"
import styled from "styled-components";
import { Box, Button, Chip, CircularProgress, Grid } from "@mui/material";
import { useMultisig } from "../contexts/MultisigContext";
import Identicon from "@polkadot/react-identicon";
import { ICON_SIZE, ICON_THEME } from "../constants";
import { getDisplayAddress } from "../utils/getDisplayAddress";
import ProposalList from "../components/ProposalList";
import { Link } from "react-router-dom";
import { useToasts } from "../contexts/ToastContext";

interface Props {
  className?: string
}

const Home = ({ className }: Props) => {
  const { isLoading, multisigList, selectedMultisig, selectedHasProxy, error: multisigQueryError } = useMultisig()
  const displayAddress = useMemo(() => (selectedHasProxy ? selectedMultisig?.proxy?.id : selectedMultisig?.id) || "", [selectedHasProxy, selectedMultisig])

  return (
    <Grid
      className={className}
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        {isLoading && (
          <Box className="loader">
            <CircularProgress />
          </Box>
        )}
        {!isLoading && !multisigQueryError && multisigList.length === 0 && (
          <div>
            No multisig found for your accounts. <Button component={Link} to="/create" >Create one!</Button>
          </div>
        )}
        {selectedMultisig &&
          <>
            <div className="headerWrapper">
              <h3>Multisig{selectedHasProxy ? " (proxy)" : ""}</h3>
              <div className="multisigHeader">
                <Chip
                  className="threshold"
                  label={`${selectedMultisig.threshold}/${selectedMultisig.signers.length}`}
                />
                <Identicon
                  value={displayAddress}
                  size={ICON_SIZE}
                  theme={ICON_THEME}
                  className="identicon"
                />
                {getDisplayAddress(displayAddress)}
              </div>
            </div>
            <div className="signatoriesWrapper">
              <h3>Signatories</h3>
              <ul className="addressList">
                {selectedMultisig.signers.map(({ signer }) =>
                  <li
                    key={signer.id}
                    className="address"
                  >
                    <Identicon
                      value={signer.id}
                      size={ICON_SIZE}
                      theme={ICON_THEME}
                      className="identicon"
                    />
                    {getDisplayAddress(signer.id)}
                  </li>
                )}
              </ul>
            </div>
          </>
        }
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <div className="actionWrapper">
          <h3>Proposals</h3>
          <ProposalList />
        </div>
      </Grid>
    </Grid>
  )
}

export default styled(Home)(({ theme }) => `
  padding: 1rem;

  .loader {
    display: flex;
    justify-content: center;
  }

  .multisigHeader {
    position: relative
  }
  .threshold {
    position: relative;
    top: -1rem;
    background-color: #ebebeb;
    margin-right: -0.5rem;
  }

  .addressList {
    list-style-type: none;
  }

  .address, .multisigHeader {
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
  }

  .identicon {
    margin-right: .5rem;
  }

  .signatoriesWrapper {
    & > h3 {
      margin-bottom: 0;
    }
  }
`)