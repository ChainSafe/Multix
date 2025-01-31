import { Box, InputAdornment, SelectChangeEvent } from '@mui/material'
import { styled } from '@mui/material/styles'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { isContextIn, isContextOf, useApi } from '../../contexts/ApiContext'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { inputToBigInt, getGlobalMaxValue } from '../../utils/bnUtils'
import { Select, TextField } from '../library'
import { useAccountBaseFromAccountList } from '../../hooks/useAccountBaseFromAccountList'
import { MultiAddress } from '@polkadot-api/descriptors'
import { Transaction } from 'polkadot-api'
import { useNetwork } from '../../contexts/NetworkContext'
import { assetHubKeys, noHydrationKeys } from '../../types'
import { AH_SUPPORTED_ASSETS } from '../../constants'
import { Asset, useAssets } from '../../contexts/AssetsContext'

interface Props {
  className?: string
  from: string
  onSetExtrinsic: (ext?: Transaction<any, any, any, any>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string | ReactNode>>
}

interface Option extends Omit<Asset, 'name'> {
  id: number
}

const BalancesTransfer = ({ className, onSetExtrinsic, onSetErrorMessage, from }: Props) => {
  const accountBase = useAccountBaseFromAccountList({ withAccountsFromAddressBook: true })
  const [selected, setSelected] = useState<AccountBaseInfo | undefined>()
  const ctx = useApi()
  const { api, chainInfo, apiDescriptor } = ctx
  const isAssetHub = useMemo(() => isContextIn(ctx, assetHubKeys), [ctx])
  const [amountString, setAmountString] = useState('')
  const [amount, setAmount] = useState<bigint | undefined>()
  const [amountError, setAmountError] = useState('')
  const { hasEnoughFreeBalance } = useCheckBalance({
    min: amount,
    address: from
  })
  const maxValue = useMemo(() => getGlobalMaxValue(128), [])
  const toAddress = useMemo(() => selected?.address || '', [selected?.address])
  const { selectedNetwork, selectedNetworkInfo } = useNetwork()
  const { getAssetMetadata } = useAssets()
  const assetList = useMemo(() => {
    if (!chainInfo || !selectedNetworkInfo) return [] as Option[]

    const assetHubList = AH_SUPPORTED_ASSETS.map(({ assetId }) => {
      if (!isAssetHub) return

      const asset = getAssetMetadata(assetId)

      if (!asset) return

      return {
        id: assetId,
        ...asset
      }
    }).filter(Boolean) as Option[]

    const nativeAssetEntry = {
      logo: selectedNetworkInfo.nativeAssetLogo || selectedNetworkInfo.networkLogo,
      symbol: chainInfo.tokenSymbol,
      decimals: chainInfo.tokenDecimals
    } as Option

    return [nativeAssetEntry, ...assetHubList]
  }, [chainInfo, getAssetMetadata, isAssetHub, selectedNetworkInfo])
  const [selectedAsset, setSelectedAsset] = useState<Option | undefined>(assetList[0])

  useEffect(() => {
    if (!selectedAsset && !!assetList) setSelectedAsset(assetList[0])
  }, [assetList, selectedAsset])

  useEffect(() => {
    if (!!amount && !hasEnoughFreeBalance) {
      onSetErrorMessage('"From" address balance too low')
    } else {
      onSetErrorMessage('')
    }
  }, [amount, amountError, hasEnoughFreeBalance, onSetErrorMessage])

  useEffect(() => {
    if (!ctx?.api || !api || !selectedNetwork) {
      onSetExtrinsic(undefined)
      return
    }

    if (!toAddress || !amount || !selectedAsset) {
      onSetExtrinsic(undefined)
      return
    }

    // not re-using isAssetHub here bc TS doesn't type correctly
    // if we're on AH and *not* sending the native asset use Assets.transfer_keep_alive
    if (isContextIn(ctx, assetHubKeys) && selectedAsset.symbol !== chainInfo?.tokenSymbol) {
      const extrinsic = ctx.api.tx.Assets.transfer_keep_alive({
        amount,
        id: selectedAsset.id,
        target: MultiAddress.Id(toAddress)
      })

      !!extrinsic && onSetExtrinsic(extrinsic)

      // we're sending the native asset (on any network including AH) use Balances.transfer
    } else {
      const extrinsic = isContextOf(ctx, 'hydration')
        ? ctx.api.tx.Balances.transfer_keep_alive({
            dest: toAddress,
            value: amount
          })
        : isContextIn(ctx, noHydrationKeys) &&
          ctx.api.tx.Balances.transfer_keep_alive({
            dest: MultiAddress.Id(toAddress),
            value: amount
          })

      !!extrinsic && onSetExtrinsic(extrinsic)
    }
  }, [
    amount,
    api,
    apiDescriptor,
    chainInfo,
    ctx,
    onSetExtrinsic,
    selectedAsset,
    selectedNetwork,
    toAddress
  ])

  const onAddressDestChange = useCallback((account: AccountBaseInfo) => {
    setSelected(account)
  }, [])

  useEffect(() => {
    if (!selectedAsset || !amountString) return

    if (!amountString.match('^[0-9]+([.][0-9]+)?$')) {
      setAmountError('Only numbers and "." are accepted.')
      onSetErrorMessage('Invalid amount')
      setAmount(0n)
      return
    }

    const bigintResult = inputToBigInt(selectedAsset.decimals, amountString)

    if (bigintResult > maxValue) {
      setAmountError('Amount too large')
      onSetErrorMessage('Amount too large')
      return
    }

    setAmount(bigintResult)
  }, [amountString, maxValue, onSetErrorMessage, selectedAsset])

  const onAmountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmountError('')
      onSetErrorMessage('')

      const stringInput = event.target.value.trim()
      setAmountString(stringInput)
    },
    [onSetErrorMessage]
  )

  const onAssetSelection = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const selectedSymbol = event.target.value as string

      const selected = assetList.find(({ symbol }) => selectedSymbol === symbol)

      if (!selected) return

      setSelectedAsset(selected)
    },
    [assetList]
  )

  const TokenSelection = useCallback(() => {
    if (!selectedAsset) return

    return (
      <SelectStyled
        value={selectedAsset.symbol}
        onChange={onAssetSelection}
        menuItems={assetList.map(({ logo, symbol }) => ({ value: symbol, logo }))}
        testId="ah-assets"
      />
    )
  }, [assetList, onAssetSelection, selectedAsset])

  return (
    <Box className={className}>
      <GenericAccountSelection
        className="to"
        onChange={onAddressDestChange}
        value={selected}
        label="to"
        allowAnyAddressInput={true}
        accountList={accountBase}
        testId="send-tokens-field-to"
      />
      <TextFieldStyled
        className={isAssetHub ? 'assetHub' : ''}
        data-cy="send-tokens-field-amount"
        label={`Amount`}
        onChange={onAmountChange}
        value={amountString}
        helperText={amountError}
        error={!!amountError}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {isAssetHub ? <TokenSelection /> : chainInfo?.tokenSymbol || ''}
              </InputAdornment>
            )
          }
        }}
      />
    </Box>
  )
}

const SelectStyled = styled(Select)`
  outline: none !important;
  .MuiSelect-select {
    margin-right: -1rem;
    padding-right: 3rem !important;
  }
`

const TextFieldStyled = styled(TextField)`
  &.assetHub > .MuiOutlinedInput-root {
    padding-right: 0;
  }
`

export default styled(BalancesTransfer)`
  margin-top: 0.5rem;

  .to {
    margin-bottom: 0.5rem;
  }
`
