import { Button, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAccounts } from "../../contexts/AccountsContext";
import { useApi } from "../../contexts/ApiContext";
import { useMultiProxy } from "../../contexts/MultiProxyContext";
import SignerSelection from "../SignerSelection";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { useToasts } from "../../contexts/ToastContext";
import { useSigningCallback } from "../../hooks/useSigningCallback";
import { sortAddresses } from '@polkadot/util-crypto';
import GenericAccountSelection, { AccountBaseInfo } from "../GenericAccountSelection";
import BalancesTransfer from "../EasySetup/BalancesTransfer";
import Warning from "../Warning";
import { useMultisigProposalNeededFunds } from "../../hooks/useMultisigProposalNeededFunds";
import { useCheckBalance } from "../../hooks/useCheckBalance";

interface Props {
  onClose: () => void
  className?: string
  onSuccess?: () => void
  onFinalized?: () => void
}

const Send = ({ onClose, className, onSuccess, onFinalized }: Props) => {
  const { api, isApiReady } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedMultiProxy, getMultisigAsAccountBaseInfo, getMultisigByAddress } = useMultiProxy()
  const { selectedAccount, selectedSigner } = useAccounts()
  const [errorMessage, setErrorMessage] = useState("")
  const { addToast } = useToasts()
  const possibleOrigin = useMemo(() => {
    const proxyBaseInfo = {
      address: selectedMultiProxy?.proxy,
      meta: {
        isProxy: true,
        isMulti: false
      },
    } as AccountBaseInfo

    return [proxyBaseInfo, ...getMultisigAsAccountBaseInfo()].filter(a => !!a.address) as AccountBaseInfo[]
  }, [getMultisigAsAccountBaseInfo, selectedMultiProxy])
  const [selectedOrigin, setSelectedOrigin] = useState<AccountBaseInfo>(possibleOrigin[0])
  const [selectedMultisig, setSelectedMultisig] = useState(selectedMultiProxy?.multisigs[0])
  const multisigList = useMemo(() => getMultisigAsAccountBaseInfo()
    , [getMultisigAsAccountBaseInfo])

  const threshold = useMemo(() => selectedOrigin.meta?.isMulti
    ? getMultisigByAddress(selectedOrigin.address)?.threshold
    : selectedMultisig?.threshold
    , [getMultisigByAddress, selectedMultisig, selectedOrigin])
  const [extrinsicToCall, setExtrinsicToCall] = useState<SubmittableExtrinsic<"promise", ISubmittableResult> | undefined>()
  const multisigTx = useMemo(() => {
    if (!selectedMultisig?.signatories) {
      console.error('selected multisig is undefined')
      return
    }

    const otherSigners = sortAddresses(selectedMultisig.signatories.filter((signer) => signer !== selectedAccount?.address))

    if (!threshold) {
      return
    }

    if (!isApiReady) {
      return
    }

    if (!selectedAccount || !selectedOrigin) {
      return
    }

    if (!extrinsicToCall) {
      return
    }

    let tx: SubmittableExtrinsic<"promise">

    // the proxy is selected
    if (selectedOrigin.meta?.isProxy) {
      tx = api.tx.proxy.proxy(selectedOrigin.address, null, extrinsicToCall)
      // a multisig is selected
    } else {
      tx = extrinsicToCall
    }

    return api.tx.multisig.asMulti(threshold, otherSigners, null, tx, 0)
  }, [api, extrinsicToCall, isApiReady, selectedAccount, selectedMultisig, selectedOrigin, threshold])

  const { multisigProposalNeededFunds } = useMultisigProposalNeededFunds({ threshold, signatories: selectedMultisig?.signatories, call: multisigTx })
  const { isLoading: isSignerBalancCheckLoading, isValid: hasSignerEnoughFunds } = useCheckBalance({ min: multisigProposalNeededFunds, address: selectedAccount?.address })

  useEffect(() => {
    if (isSignerBalancCheckLoading) {
      return
    }

    setErrorMessage("")

    if (!hasSignerEnoughFunds) {
      setErrorMessage("The selected signatory doens't have enough funds to submit this transaction")
    }

  }, [hasSignerEnoughFunds, isSignerBalancCheckLoading])

  const onSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])

  const handleSelectOrigin = useCallback((account: AccountBaseInfo) => {
    setSelectedOrigin(account)
    account.meta?.isMulti
      ? setSelectedMultisig(getMultisigByAddress(account.address))
      // if the proxy is selected as origin, select the first multisig as a "from"
      : setSelectedMultisig(selectedMultiProxy?.multisigs[0])
  }, [getMultisigByAddress, selectedMultiProxy])

  const easySetupOptions: { [index: string]: ReactNode } = useMemo(() => ({
    "Send tokens": <BalancesTransfer
      from={selectedOrigin.address}
      onSetExtrinsic={setExtrinsicToCall}
      onSetErrorMessage={setErrorMessage}
    />
  })
    , [selectedOrigin])

  const [selectedEasyOption, setSelectedEasyOption] = useState(Object.keys(easySetupOptions)[0])
  const signCallback = useSigningCallback({ onSuccess, onSubmitting, onFinalized })

  const handleMultisigSelection = useCallback((account: AccountBaseInfo) => {
    const selected = getMultisigByAddress(account.address)
    setSelectedMultisig(selected)
  }, [getMultisigByAddress])

  const onSign = useCallback(async () => {
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

    if (!multisigTx) {
      return
    }

    setIsSubmitting(true)

    multisigTx.signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallback
    ).catch((error: Error) => {
      setIsSubmitting(false)
      addToast({ title: error.message, type: "error" })
    });
  }, [threshold, isApiReady, selectedAccount, selectedOrigin, extrinsicToCall, multisigTx, selectedSigner, signCallback, addToast])

  const onChangeEasySetupOption = useCallback((event: SelectChangeEvent<string>) => {
    setSelectedEasyOption(event.target.value)
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
            onChange={handleSelectOrigin}
            value={selectedOrigin}
          />
        </Grid>
        {selectedOrigin.meta?.isProxy && multisigList.length > 1 && (
          <>
            <Grid item xs={12} md={2} >
              <h4>Using</h4>
            </Grid>
            <Grid item xs={12} md={10}>
              <GenericAccountSelection
                className="multiSelection"
                accountList={multisigList}
                onChange={handleMultisigSelection}
                value={multisigList.find(({ address }) => address === selectedMultisig?.address) || multisigList[0]}
                label=""
              />
            </Grid>
          </>
        )}
        <Grid item xs={12} md={2}>
          <h4>Signing with</h4>
        </Grid>
        <Grid item xs={12} md={10}>
          {<SignerSelection
            possibleSigners={selectedMultisig?.signatories || []}
            onChange={() => setErrorMessage("")
            } />
          }
        </Grid>
        <Grid item xs={12} md={2} >
          <h4>Transaction</h4>
        </Grid>
        <Grid item xs={12} md={10} >
          <Select
            className="easySetupOption"
            value={selectedEasyOption}
            onChange={onChangeEasySetupOption}
            fullWidth
          >
            {Object.keys(easySetupOptions).map((key) =>
              <MenuItem key={key} value={key}>{key}</MenuItem>
            )}
          </Select>
        </Grid>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={10} className="errorMessage">
          {easySetupOptions[selectedEasyOption]}
        </Grid>
        {!!errorMessage && (
          <>
            <Grid item xs={0} md={2} />
            <Grid item xs={12} md={10} className="errorMessage">
              <Warning text={errorMessage} />
            </Grid>
          </>
        )}
        <Grid item xs={12} className="buttonContainer">
          <Button
            onClick={onSign}
            disabled={!!errorMessage || isSubmitting || !extrinsicToCall}
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

  .easySetupOption {
    margin-top: 0.5rem
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