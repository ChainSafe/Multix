import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { TypedApi } from 'polkadot-api'
import { dot } from '@polkadot-api/descriptors'

export const usePureProxyCreationNeededFunds = () => {
  const { api, chainInfo } = useApi()
  const [min, setMin] = useState(0n)
  const [reserved, setReserved] = useState(0n)
  const [depositFactor, setDepositFactor] = useState<bigint | undefined>(undefined)
  const [depositBase, setDepositBase] = useState<bigint | undefined>(undefined)
  const [existentialDeposit, setExistentialDeposit] = useState<bigint | undefined>(undefined)

  useEffect(() => {
    if (!api) return

    if (!(api as TypedApi<typeof dot>).constants?.Proxy?.ProxyDepositFactor) return
    ;(api as TypedApi<typeof dot>).constants.Proxy.ProxyDepositFactor()
      .then(setDepositFactor)
      .catch(console.error)
  }, [api])

  useEffect(() => {
    if (!api) return

    if (!(api as TypedApi<typeof dot>).constants?.Proxy?.ProxyDepositBase) return
    ;(api as TypedApi<typeof dot>).constants.Proxy.ProxyDepositBase()
      .then(setDepositBase)
      .catch(console.error)
  }, [api])

  useEffect(() => {
    if (!api) return

    if (!(api as TypedApi<typeof dot>).constants?.Balances.ExistentialDeposit) return
    ;(api as TypedApi<typeof dot>).constants.Balances.ExistentialDeposit()
      .then(setExistentialDeposit)
      .catch(console.error)
  }, [api])

  useEffect(() => {
    if (!api || !existentialDeposit || !depositBase || !depositFactor) return

    // if (!chainInfo?.tokenDecimals) return

    // we only create one proxy here
    const reserved = depositFactor * 1n + depositBase

    // the signer should survive and have at least the existential deposit
    // play safe and add the existential deposit twice which should suffice
    const survive = existentialDeposit * 2n

    setReserved(reserved)
    setMin(reserved + survive)
    // console.log('reserved Pure Creation', formatBnBalance(reserved.add(survive), chainInfo.tokenDecimals, { tokenSymbol: chainInfo?.tokenSymbol, numberAfterComma: 3 }))
  }, [api, chainInfo, depositBase, depositFactor, existentialDeposit])

  return { pureProxyCreationNeededFunds: min, reserved }
}
