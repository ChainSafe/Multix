import { Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../../contexts/AccountsContext";
import { useApi } from "../../contexts/ApiContext";
import { useMultisig } from "../../contexts/MultisigContext";
import SignerSelection from "../SignerSelection";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { useToasts } from "../../contexts/ToastContext";
import { useGetSigningCallback } from "../../hooks/useGetSigningCallback";
import { sortAddresses } from '@polkadot/util-crypto';
import GenericAccountSelection, { AccountBaseInfo } from "../GenericAccountSelection";
import { useAccountNames } from "../../hooks/useAccountNames";

interface Props {
  onClose: () => void
  className?: string
  onSuccess: () => void
}

interface ProxyOrMultisig extends AccountBaseInfo {
  meta: { isProxy: boolean }
}

const Send = ({ onClose, className, onSuccess }: Props) => {
  const { api, isApiReady } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedMultisig, selectedMultisigSignerList } = useMultisig()
  const { selectedAccount, selectedSigner } = useAccountList()
  const [errorMessage, setErrorMessage] = useState("")
  const { addToast } = useToasts()
  const { accoutNames } = useAccountNames()
  const threshold = useMemo(() => selectedMultisig?.threshold, [selectedMultisig])
  const onIsSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])
  const possibleOrigin = useMemo(() =>
    [
      {
        address: selectedMultisig?.proxy?.id,
        name: selectedMultisig?.proxy && accoutNames[selectedMultisig.proxy.id],
        meta: {
          isProxy: true,
          isMulti: false
        },
      },
      {
        address: selectedMultisig?.id,
        name: selectedMultisig && accoutNames[selectedMultisig.id],
        meta: {
          isProxy: false,
          isMulti: true
        }
      }
    ]
      .filter(a => !!a.address) as ProxyOrMultisig[]
    , [accoutNames, selectedMultisig])
  const signCallback = useGetSigningCallback({ onSuccess, onIsSubmitting })
  const [selectedOrigin, setSelectedOrigin] = useState<AccountBaseInfo>(possibleOrigin[0])

  const onSign = useCallback(async () => {
    const otherSigners = sortAddresses(selectedMultisigSignerList.filter((signer) => signer !== selectedAccount?.address))

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

    setIsSubmitting(true)
    let tx: SubmittableExtrinsic<"promise">
    const transfer = api.tx.balances.transfer("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 10000000000)

    // the proxy is selected
    if (selectedOrigin.meta.isProxy) {
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
  }, [selectedMultisigSignerList, threshold, isApiReady, selectedAccount, selectedOrigin, api, selectedSigner, signCallback, addToast])

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
            label="Multisig / Proxy"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <h4>Signing with</h4>
        </Grid>
        <Grid item xs={12} md={10}>
          <SignerSelection
            possibleSigners={selectedMultisigSignerList}
            onChange={() => setErrorMessage("")
            } />
        </Grid>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={11} className="errorMessage">
          {!!errorMessage &&
            errorMessage
          }
        </Grid>
        <Grid item xs={12} className="buttonContainer">
          <Button
            onClick={onSign}
            disabled={isSubmitting}
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