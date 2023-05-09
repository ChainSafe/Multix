import { useCallback, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
} from '@mui/material';
import { useMultiProxy } from '../contexts/MultiProxyContext';
import ProposalList from '../components/Transactions/TransactionList';
import { Link, useSearchParams } from 'react-router-dom';
import AccountDisplay from '../components/AccountDisplay';
import SendIcon from '@mui/icons-material/Send';
import Send from '../components/modals/Send';
import { usePendingTx } from '../hooks/usePendingTx';
import OptionsMenu, { MenuOption } from '../components/OptionsMenu';
import EditIcon from '@mui/icons-material/Edit';
import EditNames from '../components/modals/EditNames';
import LockResetIcon from '@mui/icons-material/LockReset';
import ChangeMultisig from '../components/modals/ChangeMultisig';
import { AccountBadge } from '../types';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SuccessCreation from '../components/SuccessCreation';
import NewMulisigAlert from '../components/NewMulisigAlert';
import { styled } from '@mui/material/styles';
interface Props {
  className?: string;
}

const Home = ({ className }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams({
    creationInProgress: 'false',
  });
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const {
    isLoading,
    multiProxyList,
    selectedMultiProxy,
    selectedHasProxy,
    error: multisigQueryError,
  } = useMultiProxy();
  const { refresh } = usePendingTx();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isChangeMultiModalOpen, setIsChangeMultiModalOpen] = useState(false);
  const onCloseSendModal = useCallback(() => setIsSendModalOpen(false), []);
  const onCloseEditModal = useCallback(() => setIsEditModalOpen(false), []);
  const onCloseChangeMultiModal = useCallback(
    () => setIsChangeMultiModalOpen(false),
    []
  );
  const creationInProgress = useMemo(
    () => searchParams.get('creationInProgress') === 'true',
    [searchParams]
  );
  const [isNewMultisigAlertOpen, setIsNewMultisigAlertOpen] = useState(true);

  const onSuccessSendModal = useCallback(() => {
    onCloseSendModal();
    refresh();
  }, [onCloseSendModal, refresh]);

  const onFinalizedSendModal = useCallback(() => {
    refresh();
  }, [refresh]);

  const onClosenewMultisigAlert = useCallback(() => {
    setIsNewMultisigAlertOpen(false);
    setSearchParams({ creationInProgress: 'false' });
  }, [setSearchParams]);

  const options: MenuOption[] = useMemo(() => {
    const opts = [
      {
        text: 'Edit names',
        icon: <EditIcon />,
        onClick: () => setIsEditModalOpen(true),
      },
    ];

    // allow rotation only for the multisigs with a proxy
    selectedHasProxy &&
      opts.push({
        text: 'Change multisig',
        icon: <LockResetIcon />,
        onClick: () => setIsChangeMultiModalOpen(true),
      });

    return opts;
  }, [selectedHasProxy]);

  if (isLoading) {
    return (
      <Grid className={className} container spacing={2}>
        <Box className="loader">
          <CircularProgress />
          <div>Loading your multisigs...</div>
        </Box>
      </Grid>
    );
  }

  if (multisigQueryError) {
    return (
      <Grid className={className} container spacing={2}>
        <Box className="loader">
          <div className="multisigErrorMessage">
            <ErrorOutlineIcon className="errorIcon" />
            <div>An error occurred.</div>
          </div>
        </Box>
      </Grid>
    );
  }

  if (multiProxyList.length === 0) {
    return (
      <Grid className={className} container spacing={2}>
        <Box className="loader">
          {creationInProgress ? (
            <SuccessCreation />
          ) : (
            <div>
              No multisig found for your accounts.{' '}
              <Button component={Link} to="/create">
                Create one!
              </Button>
            </div>
          )}
        </Box>
      </Grid>
    );
  }

  return (
    <Grid className={className} container spacing={2}>
      {!!creationInProgress &&
        multiProxyList.length > 0 &&
        isNewMultisigAlertOpen && (
          <NewMulisigAlert onClose={onClosenewMultisigAlert} />
        )}
      <Grid item xs={12} md={6}>
        {selectedMultiProxy && (
          <div className="multiProxyWrapper">
            <div className="multiProxyColumn">
              {selectedHasProxy && (
                <div className="pureHeader">
                  <AccountDisplay
                    className="proxy"
                    address={selectedMultiProxy?.proxy || ''}
                    badge={AccountBadge.PURE}
                  />
                </div>
              )}
              <h3>
                {selectedMultiProxy.multisigs.length > 1
                  ? 'Multisigs'
                  : 'Multisig'}
              </h3>
              {selectedMultiProxy.multisigs.map(multisig => {
                return (
                  <Paper className="multisigWrapper" key={multisig.address}>
                    <AccountDisplay
                      className="multisig"
                      address={multisig.address || ''}
                      badge={AccountBadge.MULTI}
                    />
                    <div className="signatoriesWrapper">
                      <h4>
                        Signatories{' '}
                        <Chip
                          className="threshold"
                          label={`${multisig.threshold}/${multisig.signatories?.length}`}
                        />
                      </h4>
                      <ul className="addressList">
                        {multisig?.signatories?.map(signatory => (
                          <li key={signatory}>
                            <AccountDisplay address={signatory} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Paper>
                );
              })}
            </div>
            <div className="buttonColumn">
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
        )}
      </Grid>
      {multiProxyList.length > 0 && (
        <Grid item xs={12} md={6}>
          <div className="actionWrapper">
            <h3>Transactions</h3>
            <ProposalList />
          </div>
        </Grid>
      )}
      {isSendModalOpen && (
        <Send
          onClose={onCloseSendModal}
          onSuccess={onSuccessSendModal}
          onFinalized={onFinalizedSendModal}
        />
      )}
      {isEditModalOpen && <EditNames onClose={onCloseEditModal} />}
      {isChangeMultiModalOpen && (
        <ChangeMultisig onClose={onCloseChangeMultiModal} />
      )}
    </Grid>
  );
};

export default styled(Home)(
  ({ theme }) => `
  padding: 1rem;

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  .proxy, .multisig {
    margin-bottom: 0;
  }

  .multisig {
    margin: 1rem 0 0 2rem;
  }

  .threshold {
    background-color: ${theme.custom.background.backgroundColorLightGray};
  }

  .addressList {
    padding-inline-start: 0;
    margin-block-end: 0;
    list-style-type: none;
    > li {
      margin-bottom: 1rem;
    }
  }

  .multiProxyWrapper {
    display: flex;
    align-items: center;
  }

  .identicon {
    margin-right: .5rem;
  }

  .signatoriesWrapper {
    & > h2 {
      margin-bottom: 0;
    }
    margin-left: 2rem;
  }

  .sendButton {
    margin-left: 1rem;
    height: 2.5rem;
  }
  .titleWrapper {
    align-items: center;
  }

  .multiProxyColumn {
    flex: 1;
    min-width: 0;

    & > h3 {
      margin-top: 0;
    }
  }

  .buttonColumn {
    display: flex;
    align-self: flex-start;
  }

  .pureHeader {
    margin-bottom: 1rem;
  }

  .multisigWrapper {
    padding: .5rem 0;
    margin-bottom: .5rem;
  }

  .multisigErrorMessage {
    text-align: center;
    margin-top: 1rem;
  }
`
);
