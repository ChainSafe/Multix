import { Alert, Dialog, DialogContent, DialogTitle, Grid, SelectChangeEvent } from '@mui/material'
import { Button, Select } from '../library'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useAccounts } from '../../contexts/AccountsContext'
import { useApi } from '../../contexts/ApiContext'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import SignerSelection from '../select/SignerSelection'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import { useToasts } from '../../contexts/ToastContext'
import { useSigningCallback } from '../../hooks/useSigningCallback'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import ManualExtrinsic from '../EasySetup/ManualExtrinsic'
import BalancesTransfer from '../EasySetup/BalancesTransfer'
import { useMultisigProposalNeededFunds } from '../../hooks/useMultisigProposalNeededFunds'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import FromCallData from '../EasySetup/FromCallData'
import { ModalCloseButton } from '../library/ModalCloseButton'
import { formatBnBalance } from '../../utils/formatBnBalance'
import { useGetMultisigTx } from '../../hooks/useGetMultisigTx'
import SetIdentity from '../EasySetup/SetIdentity'
import { getErrorMessageReservedFunds } from '../../utils/getErrorMessageReservedFunds'
import { useHasIdentityPallet } from '../../hooks/useHasIdentityPallet'

export enum EasyTransferTitle {
  SendTokens = 'Send tokens',
  FromCallData = 'From call data',
  ManualExtrinsic = 'Manual extrinsic',
  SetIdentity = 'Set identity'
}

export const DEFAULT_EASY_SETUP_SELECTION: EasyTransferTitle = EasyTransferTitle.SendTokens

interface Props {
  preselected: EasyTransferTitle
  onClose: () => void
  className?: string
  onSuccess?: () => void
  onFinalized?: () => void
}

const Send = ({ onClose, className, onSuccess, onFinalized, preselected }: Props) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const { api, chainInfo } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedMultiProxy, getMultisigAsAccountBaseInfo, getMultisigByAddress } = useMultiProxy()
  const { selectedAccount, selectedSigner } = useAccounts()
  const [easyOptionErrorMessage, setEasyOptionErrorMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState<ReactNode | string>('')
  const { addToast } = useToasts()
  const possibleOrigin = useMemo(() => {
    const proxyBaseInfo = {
      address: selectedMultiProxy?.proxy,
      meta: {
        isProxy: true,
        isMulti: false
      }
    } as AccountBaseInfo

    return [proxyBaseInfo, ...getMultisigAsAccountBaseInfo()].filter(
      (a) => !!a.address
    ) as AccountBaseInfo[]
  }, [getMultisigAsAccountBaseInfo, selectedMultiProxy])
  const hasIdentityPallet = useHasIdentityPallet()
  const [selectedOrigin, setSelectedOrigin] = useState<AccountBaseInfo>(possibleOrigin[0])
  const isProxySelected = useMemo(() => selectedOrigin.meta?.isProxy, [selectedOrigin])
  const [selectedMultisig, setSelectedMultisig] = useState(selectedMultiProxy?.multisigs[0])
  const multisigList = useMemo(() => getMultisigAsAccountBaseInfo(), [getMultisigAsAccountBaseInfo])
  const threshold = useMemo(() => {
    return selectedOrigin.meta?.isMulti
      ? getMultisigByAddress(selectedOrigin.address)?.threshold
      : selectedMultisig?.threshold
  }, [getMultisigByAddress, selectedMultisig, selectedOrigin])
  const [extrinsicToCall, setExtrinsicToCall] = useState<
    SubmittableExtrinsic<'promise', ISubmittableResult> | undefined
  >()
  const [selectedEasyOption, setSelectedEasyOption] = useState<EasyTransferTitle>(
    preselected || DEFAULT_EASY_SETUP_SELECTION
  )

  // this is a creation so we can force the asMulti
  const multisigTx = useGetMultisigTx({
    selectedMultisig,
    extrinsicToCall,
    senderAddress: selectedAccount?.address,
    isProxy: isProxySelected,
    fromAddress: selectedOrigin.address,
    threshold,
    forceAsMulti: true
  })

  const { multisigProposalNeededFunds, reserved } = useMultisigProposalNeededFunds({
    threshold,
    signatories: selectedMultisig?.signatories,
    call: multisigTx
  })
  const { hasEnoughFreeBalance: hasSignerEnoughFunds } = useCheckBalance({
    min: multisigProposalNeededFunds,
    address: selectedAccount?.address
  })

  useEffect(() => {
    if (!multisigProposalNeededFunds.isZero() && !hasSignerEnoughFunds) {
      const requiredBalanceString = formatBnBalance(
        multisigProposalNeededFunds,
        chainInfo?.tokenDecimals,
        { tokenSymbol: chainInfo?.tokenSymbol }
      )

      const reservedString = formatBnBalance(reserved, chainInfo?.tokenDecimals, {
        tokenSymbol: chainInfo?.tokenSymbol
      })
      const errorWithReservedFunds = getErrorMessageReservedFunds(
        '"Signing with" account',
        requiredBalanceString,
        reservedString
      )
      setErrorMessage(errorWithReservedFunds)
    }
  }, [chainInfo, reserved, hasSignerEnoughFunds, multisigProposalNeededFunds])

  const onSubmitting = useCallback(() => {
    setIsSubmitting(false)
    onClose()
  }, [onClose])

  const handleSelectOrigin = useCallback(
    (account: AccountBaseInfo) => {
      setSelectedOrigin(account)
      account.meta?.isMulti
        ? setSelectedMultisig(getMultisigByAddress(account.address))
        : // if the proxy is selected as origin, select the first multisig as a "from"
          setSelectedMultisig(selectedMultiProxy?.multisigs[0])
    },
    [getMultisigByAddress, selectedMultiProxy]
  )

  const easySetupOptions: Partial<Record<EasyTransferTitle, ReactNode>> = useMemo(() => {
    const res = {
      [EasyTransferTitle.SendTokens]: (
        <BalancesTransfer
          from={selectedOrigin.address}
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={setEasyOptionErrorMessage}
        />
      ),
      [EasyTransferTitle.ManualExtrinsic]: (
        <ManualExtrinsic
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={setEasyOptionErrorMessage}
          onSelectFromCallData={() => setSelectedEasyOption(EasyTransferTitle.FromCallData)}
          hasErrorMessage={!!easyOptionErrorMessage}
        />
      ),
      [EasyTransferTitle.FromCallData]: (
        <FromCallData
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={setEasyOptionErrorMessage}
          isProxySelected={!!isProxySelected}
        />
      )
    } as Partial<Record<EasyTransferTitle, ReactNode>>

    if (hasIdentityPallet) {
      res[EasyTransferTitle.SetIdentity] = (
        <SetIdentity
          from={selectedOrigin.address}
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={setEasyOptionErrorMessage}
        />
      )
    }

    return res
  }, [selectedOrigin, easyOptionErrorMessage, isProxySelected, hasIdentityPallet])

  const signCallback = useSigningCallback({
    onSuccess,
    onSubmitting,
    onFinalized
  })

  const handleMultisigSelection = useCallback(
    (account: AccountBaseInfo) => {
      const selected = getMultisigByAddress(account.address)
      setSelectedMultisig(selected)
    },
    [getMultisigByAddress]
  )

  const onSign = useCallback(async () => {
    if (!threshold) {
      const error = 'Threshold is undefined'
      console.error(error)
      setErrorMessage(error)
      return
    }

    if (!api) {
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

    multisigTx
      .signAndSend(selectedAccount.address, { signer: selectedSigner }, signCallback)
      .catch((error: Error) => {
        setIsSubmitting(false)
        addToast({
          title: error.message,
          type: 'error',
          link: getSubscanExtrinsicLink(multisigTx.hash.toHex())
        })
      })
  }, [
    threshold,
    api,
    selectedAccount,
    selectedOrigin,
    extrinsicToCall,
    multisigTx,
    selectedSigner,
    signCallback,
    addToast,
    getSubscanExtrinsicLink
  ])

  const onChangeEasySetupOption: (event: SelectChangeEvent<unknown>) => void = useCallback(
    ({ target: { value } }) => {
      const acceptabledValues = Object.values(EasyTransferTitle)
      if (typeof value !== 'string' && !acceptabledValues.includes(value as EasyTransferTitle)) {
        console.error(
          'Unexpected selection, expect one of',
          JSON.stringify(acceptabledValues),
          'but received',
          value
        )
        return
      }

      setErrorMessage('')
      setEasyOptionErrorMessage('')
      setSelectedEasyOption(value as EasyTransferTitle)
    },
    []
  )

  if (!possibleOrigin) {
    return null
  }

  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open
      className={className}
    >
      <ModalCloseButton onClose={onClose} />
      <DialogTitle data-cy="title-send-tx">Send tx</DialogTitle>
      <DialogContent
        data-cy="modal-send-tx"
        className="generalContainer"
      >
        <Grid
          alignItems="center"
          container
        >
          <Grid
            item
            xs={12}
            md={2}
          >
            <h4>From</h4>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
          >
            <GenericAccountSelection
              accountList={possibleOrigin}
              onChange={handleSelectOrigin}
              value={selectedOrigin}
              withBadge
            />
          </Grid>
          {isProxySelected && multisigList.length > 1 && (
            <>
              <Grid
                item
                xs={12}
                md={2}
              >
                <h4>Using</h4>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
              >
                <GenericAccountSelection
                  className="multiSelection"
                  accountList={multisigList}
                  onChange={handleMultisigSelection}
                  value={
                    multisigList.find(({ address }) => address === selectedMultisig?.address) ||
                    multisigList[0]
                  }
                  label=""
                  withBadge
                />
              </Grid>
            </>
          )}
          <Grid
            item
            xs={12}
            md={2}
          >
            <h4>Signing with</h4>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
          >
            <SignerSelection
              possibleSigners={selectedMultisig?.signatories || []}
              onChange={() => setErrorMessage('')}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <h4>Transaction</h4>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
          >
            <Select
              value={selectedEasyOption}
              onChange={onChangeEasySetupOption}
              fullWidth
              menuItems={Object.keys(easySetupOptions).map((key) => ({
                value: key
              }))}
              testId="easy-setup"
            />
          </Grid>
          <Grid
            item
            xs={0}
            md={2}
          />
          <Grid
            item
            xs={12}
            md={10}
          >
            {easySetupOptions[selectedEasyOption]}
          </Grid>
          {(!!easyOptionErrorMessage || !!errorMessage) && (
            <>
              <Grid
                item
                xs={0}
                md={2}
              />
              <Grid
                item
                xs={12}
                md={10}
                className="errorMessage"
              >
                <Alert
                  data-cy="error-send-tx"
                  severity="error"
                >
                  {easyOptionErrorMessage || errorMessage}
                </Alert>
              </Grid>
            </>
          )}
          <Grid
            item
            xs={12}
            className="buttonContainer"
          >
            <Button
              data-cy="button-send"
              variant="primary"
              onClick={onSign}
              disabled={
                !!easyOptionErrorMessage || !!errorMessage || isSubmitting || !extrinsicToCall
              }
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default styled(Send)(
  ({ theme }) => `
  .generalContainer {
    ${theme.breakpoints.up('md')} {
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
    margin-top: 1rem;
    color: ${theme.custom.error};
  }
`
)
