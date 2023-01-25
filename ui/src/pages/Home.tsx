import { useCallback, useMemo, useState } from "react"
import styled from "styled-components";
import { Box, Button, Chip, CircularProgress, Grid, IconButton } from "@mui/material";
import { useMultisig } from "../contexts/MultisigContext";
import Identicon from "@polkadot/react-identicon";
import { ICON_SIZE, ICON_THEME } from "../constants";
import { getDisplayAddress } from "../utils/getDisplayAddress";
import ProposalList from "../components/ProposalList";
import { Link } from "react-router-dom";
import AccountDisplay from "../components/AccountDisplay";
import SendIcon from '@mui/icons-material/Send';
import Send from "../components/modals/Send";
import { usePendingTx } from "../hooks/usePendingTx";
import Expander from "../components/Expander";

interface Props {
  className?: string
}

const Home = ({ className }: Props) => {
  const [isSendModalOpen, setIsSendModalOpen] = useState(false)
  const { isLoading, multisigList, selectedMultisig, selectedHasProxy, error: multisigQueryError } = useMultisig()
  const { refresh } = usePendingTx()
  const displayAddress = useMemo(() => (selectedHasProxy ? selectedMultisig?.proxy?.id : selectedMultisig?.id) || "", [selectedHasProxy, selectedMultisig])

  const onClose = useCallback(() => setIsSendModalOpen(false), [])

  const onSuccess = useCallback(() => {
    onClose()
    refresh()
  }, [onClose, refresh])

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
              <h3>Multisig                 <Chip
                className="threshold"
                label={`${selectedMultisig.threshold}/${selectedMultisig.signers.length}`}
              /></h3>
              <div className="multisigHeader">
                {selectedHasProxy
                  ? <Expander
                    title={<AccountDisplay
                      className="proxy"
                      address={selectedMultisig?.proxy?.id || ""}
                      badge="proxy"
                    />}
                    content={<AccountDisplay
                      className="multisig"
                      address={selectedMultisig?.id || ""}
                      badge="multi"
                    />}

                  />
                  : <AccountDisplay
                    className="multisigSolo"
                    address={selectedMultisig?.id || ""}
                    badge="multi"
                  />}

                <IconButton
                  className="sendButton"
                  aria-label="send"
                  onClick={() => setIsSendModalOpen(true)}
                >
                  <SendIcon />
                </IconButton>
              </div>
            </div>
            <div className="signatoriesWrapper">
              <h3>Signatories</h3>
              <ul className="addressList">
                {selectedMultisig.signers.map(({ signer }) =>
                  <li key={signer.id} >
                    <AccountDisplay address={signer.id} />
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
      {isSendModalOpen && (
        <Send
          onClose={onClose}
          onSuccess={onSuccess}
        />
      )}
    </Grid>
  )
}

export default styled(Home)(({ theme }) => `
  padding: 1rem;

  .loader {
    display: flex;
    justify-content: center;
  }

  .proxy, .multisig {
    margin-bottom: 0;
  }

  .multisig {
    margin: 1rem 0 0 2rem;
  }

  .expanderIcon {
    align-self: flex-end;
  }

  .threshold {
    background-color: ${theme.custom.background.backgroundColorLightGray};
  }

  .addressList {
    list-style-type: none;
  }

  .multisigHeader {
    display: flex;
    align-items: center;
  }

  .identicon {
    margin-right: .5rem;
  }

  .signatoriesWrapper {
    & > h3 {
      margin-bottom: 0;
    }
  }

  .sendButton {
    margin-left: 1rem;
    height: 2.5rem;
  }
  .titleWrapper {
    align-items: center;
  }
`)