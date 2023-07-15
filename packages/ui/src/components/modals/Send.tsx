import { Dialog, DialogContent, DialogTitle, Grid, SelectChangeEvent } from '@mui/material'
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
import { sortAddresses } from '@polkadot/util-crypto'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import ManualExtrinsic from '../EasySetup/ManualExtrinsic'
import BalancesTransfer from '../EasySetup/BalancesTransfer'
import Warning from '../Warning'
import { useMultisigProposalNeededFunds } from '../../hooks/useMultisigProposalNeededFunds'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import FromCallData from '../EasySetup/FromCallData'
import { ModalCloseButton } from '../library/ModalCloseButton'

const SEND_TOKEN_MENU = 'Send tokens'
const FROM_CALL_DATA_MENU = 'From call data'
const MANUEL_EXTRINSIC_MENU = 'Manual extrinsic'

interface Props {
  onClose: () => void
  className?: string
  onSuccess?: () => void
  onFinalized?: () => void
}

const Send = ({ onClose, className, onSuccess, onFinalized }: Props) => {
  const { getSubscanExtrinsicLink } = useGetSubscanLinks()
  const { api, isApiReady } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedMultiProxy, getMultisigAsAccountBaseInfo, getMultisigByAddress } = useMultiProxy()
  const { selectedAccount, selectedSigner } = useAccounts()
  const [easyOptionErrorMessage, setEasyOptionErrorMessageorMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
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
  const [selectedEasyOption, setSelectedEasyOption] = useState(SEND_TOKEN_MENU)
  const multisigTx = useMemo(() => {
    if (!selectedMultisig?.signatories) {
      console.error('selected multisig is undefined')
      return
    }

    const otherSigners = sortAddresses(
      selectedMultisig.signatories.filter((signer) => signer !== selectedAccount?.address)
    )

    if (!threshold) {
      return
    }

    if (!isApiReady || !api) {
      return
    }

    if (!selectedAccount || !selectedOrigin) {
      return
    }

    if (!extrinsicToCall) {
      return
    }

    let tx: SubmittableExtrinsic<'promise'>

    try {
      // the proxy is selected
      if (isProxySelected) {
        tx = api.tx.proxy.proxy(selectedOrigin.address, null, extrinsicToCall)
        // a multisig is selected
      } else {
        tx = extrinsicToCall
      }

      return api.tx.multisig.asMulti(threshold, otherSigners, null, tx, {
        refTime: 0,
        proofSize: 0
      })
    } catch (e) {
      console.error('Error in multisigTx')
      console.error(e)
    }
  }, [
    api,
    extrinsicToCall,
    isApiReady,
    isProxySelected,
    selectedAccount,
    selectedMultisig,
    selectedOrigin,
    threshold
  ])

  const { multisigProposalNeededFunds } = useMultisigProposalNeededFunds({
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
      setErrorMessage(
        `The "Signing with" account doens't have enough funds to submit this transaction`
      )
    }
  }, [hasSignerEnoughFunds, multisigProposalNeededFunds])

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

  const easySetupOptions: { [index: string]: ReactNode } = useMemo(() => {
    return {
      [SEND_TOKEN_MENU]: (
        <BalancesTransfer
          from={selectedOrigin.address}
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={setEasyOptionErrorMessageorMessage}
        />
      ),
      [MANUEL_EXTRINSIC_MENU]: (
        <ManualExtrinsic
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={setEasyOptionErrorMessageorMessage}
          onSelectFromCallData={() => setSelectedEasyOption(FROM_CALL_DATA_MENU)}
        />
      ),
      [FROM_CALL_DATA_MENU]: (
        <FromCallData
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={setEasyOptionErrorMessageorMessage}
          isProxySelected={!!isProxySelected}
        />
      )
    }
  }, [selectedOrigin, isProxySelected])

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

    if (!isApiReady || !api) {
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
    isApiReady,
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

  const onChangeEasySetupOption = useCallback((event: SelectChangeEvent<string>) => {
    setSelectedEasyOption(event.target.value)
  }, [])

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
      <DialogTitle>Send tx</DialogTitle>
      <DialogContent className="generalContainer">
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
                <Warning text={easyOptionErrorMessage || errorMessage} />
              </Grid>
            </>
          )}
          <Grid
            item
            xs={12}
            className="buttonContainer"
          >
            <Button
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
    margin-top: 0.5rem;
    color: ${theme.custom.error};
  }
`
)
