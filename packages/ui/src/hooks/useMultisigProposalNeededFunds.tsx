import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { Transaction } from 'polkadot-api'

interface Props {
  threshold?: number | null
  signatories?: string[]
  call?: Transaction<any, any, any, any>
}

export const useMultisigProposalNeededFunds = ({ threshold, signatories, call }: Props) => {
  const { api, chainInfo } = useApi()
  const [min, setMin] = useState(0n)
  const [reserved, setReserved] = useState(0n)
  const [multisigDepositFactor, setMultisigDepositFactor] = useState<bigint | undefined>(undefined)
  const [multisigDepositBase, setMultisigDepositBase] = useState<bigint | undefined>(undefined)

  useEffect(() => {
    if (!api) return

    api.constants.Multisig.DepositBase().then(setMultisigDepositBase).catch(console.error)
  }, [api])

  useEffect(() => {
    if (!api) return

    api.constants.Multisig.DepositFactor().then(setMultisigDepositFactor).catch(console.error)
  }, [api])

  useEffect(() => {
    if (!api || !signatories || signatories.length < 2) return

    if (!chainInfo?.tokenDecimals) return

    if (!threshold) return

    if (!call) return

    if (!multisigDepositFactor || !multisigDepositBase) return

    call
      .getEstimatedFees('5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs')
      .then((info) => {
        const reservedTemp = multisigDepositFactor * BigInt(threshold) + multisigDepositBase
        setMin(reservedTemp + info)
        setReserved(reservedTemp)
      })
      .catch(console.error)
  }, [api, call, chainInfo, multisigDepositBase, multisigDepositFactor, signatories, threshold])

  return { multisigProposalNeededFunds: min, reserved }
}
