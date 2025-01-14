import { Box, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { inputToBigInt, getGlobalMaxValue } from '../../utils/bnUtils'
import { TextField } from '../library'
import { getOptionLabel } from '../../utils/getOptionLabel'
import { useAccountBaseFromAccountList } from '../../hooks/useAccountBaseFromAccountList'
import { MultiAddress } from '@polkadot-api/descriptors'
import { Transaction } from 'polkadot-api'
import { useNetwork } from '../../contexts/NetworkContext'

interface Props {
  className?: string
  from: string
  onSetExtrinsic: (ext?: Transaction<any, any, any, any>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string | ReactNode>>
}

const BalancesTransfer = ({ className, onSetExtrinsic, onSetErrorMessage, from }: Props) => {
  const accountBase = useAccountBaseFromAccountList({ withAccountsFromAddressBook: true })
  const [selected, setSelected] = useState<AccountBaseInfo | undefined>()
  const { api, chainInfo, apiDescriptor } = useApi()
  const [amountString, setAmountString] = useState('')
  const [amount, setAmount] = useState<bigint | undefined>()
  const [amountError, setAmountError] = useState('')
  const { hasEnoughFreeBalance } = useCheckBalance({
    min: amount,
    address: from
  })
  const maxValue = useMemo(() => getGlobalMaxValue(128), [])
  const toAddress = useMemo(() => selected?.address || '', [selected?.address])
  const { selectedNetwork } = useNetwork()

  useEffect(() => {
    if (!!amount && !hasEnoughFreeBalance) {
      onSetErrorMessage('"From" address balance too low')
    } else {
      onSetErrorMessage('')
    }
  }, [amount, amountError, hasEnoughFreeBalance, onSetErrorMessage])

  useEffect(() => {
    if (!api || !selectedNetwork) {
      onSetExtrinsic(undefined)
      return
    }

    if (!toAddress || !amount) {
      onSetExtrinsic(undefined)
      return
    }

    const extrinsic =
      apiDescriptor === 'hydration'
        ? api.tx.Balances.transfer_keep_alive({
            dest: toAddress,
            value: amount
          })
        : api.tx.Balances.transfer_keep_alive({
            dest: MultiAddress.Id(toAddress),
            value: amount
          })

    onSetExtrinsic(extrinsic)
  }, [amount, api, apiDescriptor, chainInfo, onSetExtrinsic, selectedNetwork, toAddress])

  const onAddressDestChange = useCallback((account: AccountBaseInfo) => {
    setSelected(account)
  }, [])

  const onAmountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmountError('')
      onSetErrorMessage('')

      const decimals = chainInfo?.tokenDecimals

      if (!decimals) {
        onSetErrorMessage('Invalid network decimals')
        setAmount(0n)
        return
      }

      const stringInput = event.target.value.trim()
      setAmountString(stringInput)

      if (!stringInput.match('^[0-9]+([.][0-9]+)?$')) {
        setAmountError('Only numbers and "." are accepted.')
        onSetErrorMessage('Invalid amount')
        setAmount(0n)
        return
      }

      const bigintResult = inputToBigInt(decimals, stringInput)

      if (bigintResult > maxValue) {
        setAmountError('Amount too large')
        onSetErrorMessage('Amount too large')
        return
      }

      setAmount(bigintResult)
    },
    [chainInfo, maxValue, onSetErrorMessage]
  )

  const onInputChange = useCallback(
    (
      _: React.SyntheticEvent<Element, Event>,
      val: NonNullable<
        string | AccountBaseInfo | (string | AccountBaseInfo | undefined)[] | undefined
      >
    ) => {
      const value = getOptionLabel(val as string)

      if (!value) {
        setSelected(undefined)
      }
    },
    []
  )

  return (
    <Box className={className}>
      <GenericAccountSelection
        className="to"
        onChange={onAddressDestChange}
        value={selected}
        label="to"
        allowAnyAddressInput={true}
        onInputChange={onInputChange}
        accountList={accountBase}
        testId="send-tokens-field-to"
      />
      <TextField
        data-cy="send-tokens-field-amount"
        label={`Amount`}
        onChange={onAmountChange}
        value={amountString}
        helperText={amountError}
        error={!!amountError}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">{chainInfo?.tokenSymbol || ''}</InputAdornment>
            )
          }
        }}
      />
    </Box>
  )
}

export default styled(BalancesTransfer)`
  margin-top: 0.5rem;

  .to {
    margin-bottom: 0.5rem;
  }
`
