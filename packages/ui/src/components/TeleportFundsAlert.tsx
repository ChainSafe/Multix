import { Grid2, styled, Alert, CircularProgress } from '@mui/material'
import { Button } from './library'
import { Builder } from '@paraspell/sdk'
import { isContextIn, useApi } from '../contexts/ApiContext'
import { useCallback, useMemo, useState } from 'react'
import { useAccounts } from '../contexts/AccountsContext'
import { useSigningCallback } from '../hooks/useSigningCallback'
import { relayKeys } from '../types'
import { formatBigIntBalance } from '../utils/formatBnBalance'

interface Props {
  className?: string
  receivingAddress: string
  sendingAmount: bigint
}

export const TeleportFundsAlert = ({ className = '', receivingAddress, sendingAmount }: Props) => {
  const ctx = useApi()
  const { selectedAccount } = useAccounts()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const amountString = useMemo(
    () =>
      formatBigIntBalance(sendingAmount, ctx.chainInfo?.tokenDecimals, {
        tokenSymbol: ctx.chainInfo?.tokenSymbol
      }),
    [ctx, sendingAmount]
  )

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

  const onTransfer = useCallback(async () => {
    if (!ctx?.api || !selectedAccount) return

    setIsSubmitting(true)

    // even though it could be Kusama, Polkadot, Westend, the asset hubs.. this is working
    // waiting for https://github.com/paraspell/xcm-tools/issues/738
    const xcmCall = await Builder(ctx.client)
      .from(fromRelay ? 'Polkadot' : 'AssetHubPolkadot')
      .to('PeoplePolkadot')
      .currency({ symbol: 'DOT', amount: sendingAmount.toString() })
      .address(receivingAddress)
      .build()

    const nonce = await ctx.api.apis.AccountNonceApi.account_nonce(selectedAccount.address, {
      at: 'best'
    })

    xcmCall.signSubmitAndWatch(selectedAccount.polkadotSigner, { nonce }).subscribe(signCallback)
  }, [ctx, fromRelay, receivingAddress, selectedAccount, sendingAmount, signCallback])

  return (
    <Grid2 size={{ xs: 12 }}>
      <AlertStyled
        className={className}
        severity="error"
        data-cy="alert-error-pepople-chain-identity"
        variant="outlined"
      >
        Identity is managed on the People Chain. You need funds there to sign the transaction.
        <ButtonWrapper>
          <Button
            disabled={isSubmitting}
            onClick={onTransfer}
            variant="secondary"
          >
            {isSubmitting ? (
              <CircularProgress size={24} />
            ) : (
              `Teleport ${amountString} to People Chain`
            )}
          </Button>
        </ButtonWrapper>
      </AlertStyled>
    </Grid2>
  )
}

const AlertStyled = styled(Alert)`
  margin-bottom: 0.5rem;
`

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
