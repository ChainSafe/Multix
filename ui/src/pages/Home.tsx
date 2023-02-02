import { useCallback, useState } from "react"
import styled from "styled-components";
import { Box, Button, Chip, CircularProgress, Grid, IconButton } from "@mui/material";
import { useMultisig } from "../contexts/MultisigContext";
import ProposalList from "../components/ProposalList";
import { Link } from "react-router-dom";
import AccountDisplay from "../components/AccountDisplay";
import SendIcon from '@mui/icons-material/Send';
import Send from "../components/modals/Send";
import { usePendingTx } from "../hooks/usePendingTx";
import Expander from "../components/Expander";
import OptionsMenu, { MenuOption } from "../components/OptionsMenu";
import EditIcon from "@mui/icons-material/Edit"
import EditNames from "../components/modals/EditNames";

interface Props {
  className?: string
}

const Home = ({ className }: Props) => {
  const [isSendModalOpen, setIsSendModalOpen] = useState(false)
  const { isLoading, multisigList, selectedMultisig, selectedHasProxy, error: multisigQueryError } = useMultisig()
  const { refresh } = usePendingTx()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const onCloseSendModal = useCallback(() => setIsSendModalOpen(false), [])
  const onCloseEditModal = useCallback(() => setIsEditModalOpen(false), [])

  const onSuccessSendModal = useCallback(() => {
    onCloseSendModal()
    refresh()
  }, [onCloseSendModal, refresh])

  const onFinalizedSendModal = useCallback(() => {
    refresh()
  }, [refresh])

  const options: MenuOption[] = [
    {
      text: "Edit names",
      icon: <EditIcon />,
      onClick: () => setIsEditModalOpen(true)
    }
  ]

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
            <div>
              Loading your multisigs...
            </div>
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
              <h3>Multisig <Chip
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
                <OptionsMenu options={options} />
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
          onClose={onCloseSendModal}
          onSuccess={onSuccessSendModal}
          onFinalized={onFinalizedSendModal}
        />
      )}
      {isEditModalOpen && (
        <EditNames
          onClose={onCloseEditModal}
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
    align-items: center;
    flex-direction: column;
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
    > li {
      margin-bottom: 1rem;
    }
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