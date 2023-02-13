import { Autocomplete, Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { ReactNode, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../../contexts/AccountsContext";
import { useApi } from "../../contexts/ApiContext";
import { useMultisig } from "../../contexts/MultisigContext";
import SignerSelection from "../SignerSelection";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { useToasts } from "../../contexts/ToastContext";
import { useGetSigningCallback } from "../../hooks/useGetSigningCallback";
import { sortAddresses } from '@polkadot/util-crypto';
import GenericAccountSelection, { AccountBaseInfo } from "../GenericAccountSelection";
import BalancesTransfer from "../EasySetup/BalancesTransfer";

interface Props {
  onClose: () => void
  className?: string
  onSuccess: () => void
  onFinalized: () => void
}

interface ProxyOrMultisig extends AccountBaseInfo {
  meta: { isProxy: boolean }
}

export interface EasySetupOption {
  title: string;
  component: ReactNode
}

const getEasySetupOptionLabel = (option: EasySetupOption) => option.title

const Send = ({ onClose, className, onSuccess, onFinalized }: Props) => {
  const { api, isApiReady } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedMultiProxy, selectedMultiProxySignatories } = useMultisig()
  const { selectedAccount, selectedSigner } = useAccountList()
  const [errorMessage, setErrorMessage] = useState("")
  const { addToast } = useToasts()
  // FIXME this will not work well with several multisigs
  const threshold = useMemo(() => selectedMultiProxy?.multisigs[0].threshold, [selectedMultiProxy])
  const [extrinsicToCall, setExtrinsicToCall] = useState<SubmittableExtrinsic<"promise", ISubmittableResult> | undefined>()

  const onSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])
  const possibleOrigin = useMemo(() =>
    [
      {
        address: selectedMultiProxy?.proxy,
        meta: {
          isProxy: true,
          isMulti: false
        },
      },
      {
        // FIXME this will not work well with several multisigs
        address: selectedMultiProxy?.multisigs[0].threshold,
        meta: {
          isProxy: false,
          isMulti: true
        }
      }
    ]
      .filter(a => !!a.address) as ProxyOrMultisig[]
    , [selectedMultiProxy])

  const easySetupOptions: EasySetupOption[] = useMemo(() => [
    {
      title: "Send tokens",
      component: <BalancesTransfer
        onSetExtrinsic={setExtrinsicToCall}
      />
    }
  ], [])

  const [selectedEasyOption, setSelectedEasyOption] = useState(easySetupOptions[0])

  const signCallback = useGetSigningCallback({ onSuccess, onSubmitting, onFinalized })
  const [selectedOrigin, setSelectedOrigin] = useState<AccountBaseInfo>(possibleOrigin[0])

  const onSign = useCallback(async () => {
    const otherSigners = sortAddresses(selectedMultiProxySignatories.filter((signer) => signer !== selectedAccount?.address))

    if (!threshold) {
      const error = 'Threshold is undefined'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!isApiReady) {
      const error = 'Api is not ready'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!selectedAccount || !selectedOrigin) {
      const error = 'No selected address or multisig/proxy'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!extrinsicToCall) {
      const error = 'No extrinsic to call'
      console.error(error)
      setErrorMessage(error)
      return
    }

    setIsSubmitting(true)
    let tx: SubmittableExtrinsic<"promise">
    const transfer = extrinsicToCall

    // the proxy is selected
    if (selectedOrigin.meta?.isProxy) {
      tx = api.tx.proxy.proxy(selectedOrigin.address, null, transfer)
      // the multisig is selected
    } else {
      tx = transfer
    }

    const multisigTx = api.tx.multisig.asMulti(threshold, otherSigners, null, tx, 0)

    multisigTx.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallback
    ).catch((error: Error) => {
      setIsSubmitting(false)
      addToast({ title: error.message, type: "error" })
    });
  }, [selectedMultiProxySignatories, threshold, isApiReady, selectedAccount, selectedOrigin, extrinsicToCall, api, selectedSigner, signCallback, addToast])

  const onChangeEasySetupOtion = useCallback((_: any, value: EasySetupOption | null) => {
    value && setSelectedEasyOption(value)
  }, [])

  if (!possibleOrigin) {
    return null
  }

  return <Dialog
    fullWidth
    maxWidth={"md"}
    open
    onClose={onClose}
    className={className}
  >
    <DialogTitle>Send tx</DialogTitle>
    <DialogContent className="generalContainer">
      <Grid container>
        <Grid item xs={12} md={2} >
          <h4>From</h4>
        </Grid>
        <Grid item xs={12} md={10}>
          <GenericAccountSelection
            accountList={possibleOrigin}
            onChange={setSelectedOrigin}
            value={selectedOrigin}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <h4>Signing with</h4>
        </Grid>
        <Grid item xs={12} md={10}>
          <SignerSelection
            possibleSigners={selectedMultiProxySignatories}
            onChange={() => setErrorMessage("")
            } />
        </Grid>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={11} className="errorMessage">
          {!!errorMessage &&
            errorMessage
          }
        </Grid>
        <Grid item xs={12} md={2} >
          <h4>Transaction</h4>
        </Grid>
        <Grid item xs={12} md={10} >
          <Autocomplete
            disablePortal
            className="easySetupOption"
            disableClearable
            options={easySetupOptions}
            getOptionLabel={getEasySetupOptionLabel}
            renderInput={(params) => <TextField {...params} label="Transaction" />}
            onChange={onChangeEasySetupOtion}
            value={selectedEasyOption}
          />
        </Grid>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={10} className="errorMessage">
          {selectedEasyOption.component}
        </Grid>
        <Grid item xs={12} className="buttonContainer">
          <Button
            onClick={onSign}
            disabled={isSubmitting || !extrinsicToCall}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
}

export default styled(Send)(({ theme }) => `
  .generalContainer {
    ${theme.breakpoints.up("md")} {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    padding-top: 0.3rem;
  }

  .buttonContainer {
    text-align: right;
    margin-top: 1rem;
  }

  .errorMessage {
    margin-top: 0.5rem;
    color: ${theme.custom.text.errorColor};
  }
`)