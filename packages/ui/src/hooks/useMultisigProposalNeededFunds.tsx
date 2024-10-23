import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { Transaction } from 'polkadot-api'

interface Props {
  threshold?: number | null
  signatories?: string[]
  call?: Transaction<any, any, any, any>
}

export const useMultisigProposalNeededFunds = ({ threshold, signatories, call }: Props) => {
  const { api, chainInfo, compatibilityToken } = useApi()
  const [min, setMin] = useState(0n)
  const [reserved, setReserved] = useState(0n)

  useEffect(() => {
    if (!api || !signatories || signatories.length < 2 || !compatibilityToken) return

    if (!chainInfo?.tokenDecimals) return

    if (!threshold) return

    if (!call) return

    const multisigDepositBase = api.constants.Multisig.DepositBase(compatibilityToken)
    const multisigDepositFactor = api.constants.Multisig.DepositFactor(compatibilityToken)

    if (!multisigDepositFactor || !multisigDepositBase) return

    call
      .getEstimatedFees('5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs')
      .then((info) => {
        const reservedTemp = multisigDepositFactor * BigInt(threshold) + multisigDepositBase
        setMin(reservedTemp + info)
        setReserved(reservedTemp)
      })
      .catch(console.error)
  }, [api, call, chainInfo, compatibilityToken, signatories, threshold])

  return { multisigProposalNeededFunds: min, reserved }
}
