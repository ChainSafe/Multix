import { Box, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import GenericAccountSelection, { AccountBaseInfo } from '../select/GenericAccountSelection'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import BN from 'bn.js'
import { getGlobalMaxValue, inputToBn } from '../../utils'
import { TextFieldStyled } from '../library'
import { getOptionLabel } from '../../utils/getOptionLabel'

interface Props {
  className?: string
  from: string
  onSetExtrinsic: (ext: SubmittableExtrinsic<'promise', ISubmittableResult>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const BalancesTransfer = ({ className, onSetExtrinsic, onSetErrorMessage, from }: Props) => {
  const [selected, setSelected] = useState<AccountBaseInfo | undefined>()
  const [toAddress, setToAddress] = useState('')
  const { api, isApiReady, chainInfo } = useApi()
  const [amountString, setAmountString] = useState('')
  const [amount, setAmount] = useState<BN | undefined>()
  const [amountError, setAmountError] = useState('')
  const { hasEnoughFreeBalance } = useCheckBalance({
    min: amount,
    address: from
  })
  const maxValue = useMemo(() => getGlobalMaxValue(128), [])

  useEffect(() => {
    if (!!amount && !hasEnoughFreeBalance) {
      onSetErrorMessage('"From" address balance too low')
    } else {
      onSetErrorMessage('')
    }
  }, [amount, amountError, hasEnoughFreeBalance, onSetErrorMessage])

  useEffect(() => {
    if (!isApiReady || !api) {
      return
    }

    if (!toAddress) {
      return
    }

    if (!amount) {
      return
    }

    onSetExtrinsic(api.tx.balances.transferKeepAlive(toAddress, amount.toString()))
  }, [amount, api, chainInfo, isApiReady, onSetExtrinsic, toAddress])

  const onAddressDestChange = useCallback((account: AccountBaseInfo) => {
    setToAddress(account.address)
    setSelected(account)
  }, [])

  const onAmountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmountError('')
      onSetErrorMessage('')

      const decimals = chainInfo?.tokenDecimals

      if (!decimals) {
        onSetErrorMessage('Invalid network decimals')
        setAmount(new BN(0))
        return
      }

      const stringInput = event.target.value.trim()
      setAmountString(stringInput)

      if (!stringInput.match('^[0-9]+([.][0-9]+)?$')) {
        setAmountError('Only numbers and "." are accepted.')
        onSetErrorMessage('Invalid amount')
        setAmount(new BN(0))
        return
      }

      const bnResult = inputToBn(decimals, stringInput)

      if (bnResult.gte(maxValue)) {
        setAmountError('Amount too large')
        onSetErrorMessage('Amount too large')
        return
      }

      setAmount(bnResult)
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

      if (!value) setSelected(undefined)
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
      />
      <TextFieldStyled
        label={`Amount`}
        onChange={onAmountChange}
        value={amountString}
        helperText={amountError}
        error={!!amountError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{chainInfo?.tokenSymbol || ''}</InputAdornment>
          )
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
