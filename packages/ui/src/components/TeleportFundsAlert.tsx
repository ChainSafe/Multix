import { Grid2, styled, Alert, CircularProgress } from '@mui/material'
import { ButtonWithIcon } from './library'
import { Builder, TPapiTransaction } from '@paraspell/sdk'
import { isContextIn, useApi } from '../contexts/ApiContext'
import { useCallback, useMemo, useState } from 'react'
import { useAccounts } from '../contexts/AccountsContext'
import { useSigningCallback } from '../hooks/useSigningCallback'
import { relayKeys } from '../types'
import { formatBigIntBalance } from '../utils/formatBnBalance'
import { useCheckTransferableBalance } from '../hooks/useCheckTransferableBalance'
import { usePplApi } from '../contexts/PeopleChainApiContext'

interface Props {
  className?: string
  receivingAddress: string
  receivingName?: string
  sendingAmount: bigint
  batchWithSignerIfNeeded?: boolean
}

export const TeleportFundsAlert = ({
  className = '',
  receivingAddress,
  sendingAmount,
  receivingName = 'Your account',
  batchWithSignerIfNeeded = false
}: Props) => {
  const ctx = useApi()
  const pplCtx = usePplApi()
  const { selectedAccount } = useAccounts()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const amountString = useMemo(
    () =>
      formatBigIntBalance(sendingAmount, ctx.chainInfo?.tokenDecimals, {
        tokenSymbol: ctx.chainInfo?.tokenSymbol
      }),
    [ctx, sendingAmount]
  )

  const amountToSendToSigner = useMemo(() => {
    if (!pplCtx.pplApi || !pplCtx.pplCompatibilityToken) return 0n
    // This is what we transfer to the ppl chain in case the sender doesn't have enough
    // to be safe, we send 10x the existential deposit to pay for fees
    return 10n * pplCtx.pplApi.constants.Balances.ExistentialDeposit(pplCtx.pplCompatibilityToken)
  }, [pplCtx])

  const { hasEnoughFreeBalance: hasSignerEnoughPplFunds } = useCheckTransferableBalance({
    min: amountToSendToSigner,
    address: selectedAccount?.address,
    withPplApi: true
  })

  const fromRelay = useMemo(() => isContextIn(ctx, relayKeys), [ctx])
  const signCallback = useSigningCallback({
    onError: () => {
      setIsSubmitting(false)
    },
    onFinalized: () => {
      setIsSubmitting(false)
    },
    withSubscanLink: false
  })

  const BatchTransferInfo = useMemo(
    () => (
      <ul>
        <li>
          Send {amountString} {receivingName}
        </li>
        <li>
          Send{' '}
          {formatBigIntBalance(amountToSendToSigner, pplCtx.pplChainInfo?.tokenDecimals, {
            tokenSymbol: pplCtx.pplChainInfo?.tokenSymbol
          })}{' '}
          to the signer
        </li>
      </ul>
    ),
    [
      amountString,
      amountToSendToSigner,
      pplCtx.pplChainInfo?.tokenDecimals,
      pplCtx.pplChainInfo?.tokenSymbol,
      receivingName
    ]
  )

  const onTransfer = useCallback(async () => {
    if (!ctx?.api || !selectedAccount) return

    setIsSubmitting(true)

    // even though it could be Kusama, Polkadot, Westend, the asset hubs.. this is working
    // waiting for https://github.com/paraspell/xcm-tools/issues/738
    const xcmCall1 = await Builder(ctx.client)
      .from(fromRelay ? 'Polkadot' : 'AssetHubPolkadot')
      .to('PeoplePolkadot')
      .currency({ symbol: 'DOT', amount: sendingAmount.toString() })
      .address(receivingAddress)
      .build()

    let xcmCall2: TPapiTransaction | undefined

    if (batchWithSignerIfNeeded && !hasSignerEnoughPplFunds) {
      xcmCall2 = await Builder(ctx.client)
        .from(fromRelay ? 'Polkadot' : 'AssetHubPolkadot')
        .to('PeoplePolkadot')
        .currency({ symbol: 'DOT', amount: amountToSendToSigner.toString() })
        .address(selectedAccount.address)
        .build()
    }

    const tx = xcmCall2
      ? ctx.api.tx.Utility.batch_all({ calls: [xcmCall1.decodedCall, xcmCall2.decodedCall] })
      : xcmCall1

    const nonce = await ctx.api.apis.AccountNonceApi.account_nonce(selectedAccount.address, {
      at: 'best'
    })

    tx.signSubmitAndWatch(selectedAccount.polkadotSigner, { nonce }).subscribe(signCallback)
  }, [
    amountToSendToSigner,
    batchWithSignerIfNeeded,
    ctx.api,
    ctx.client,
    fromRelay,
    hasSignerEnoughPplFunds,
    receivingAddress,
    selectedAccount,
    sendingAmount,
    signCallback
  ])

  return (
    <Grid2 size={{ xs: 12 }}>
      <AlertStyled
        className={className}
        severity="error"
        data-cy="alert-error-pepople-chain-identity"
        variant="outlined"
      >
        Identity is managed on the People Chain. {receivingName} needs funds there to sign the
        transaction.
        {batchWithSignerIfNeeded && !hasSignerEnoughPplFunds && BatchTransferInfo}
        <ButtonWrapper>
          <ButtonWithIcon
            disabled={isSubmitting}
            onClick={onTransfer}
            variant="secondary"
          >
            {isSubmitting ? (
              <>
                <LoaderStyled size={20} /> Signing...
              </>
            ) : (
              `${batchWithSignerIfNeeded && !hasSignerEnoughPplFunds ? 'Batch' : `Transfer ${amountString}`} to People Chain`
            )}
          </ButtonWithIcon>
        </ButtonWrapper>
      </AlertStyled>
    </Grid2>
  )
}

const AlertStyled = styled(Alert)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const LoaderStyled = styled(CircularProgress)`
  margin-right: 0.5rem;

  & > svg {
    margin: 0;
  }
`
