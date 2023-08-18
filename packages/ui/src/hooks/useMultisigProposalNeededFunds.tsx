import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import BN from 'bn.js'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'

interface Props {
  threshold?: number | null
  signatories?: string[]
  call?: SubmittableExtrinsic<'promise', ISubmittableResult>
}

export const useMultisigProposalNeededFunds = ({ threshold, signatories, call }: Props) => {
  const { api, chainInfo } = useApi()
  const [min, setMin] = useState(new BN(0))
  const [reserved, setReserved] = useState(new BN(0))

  useEffect(() => {
    if (!api || !signatories || signatories.length < 2) return

    if (!chainInfo?.tokenDecimals) return

    if (!threshold) return

    if (!call) return

    if (!api.consts.multisig.depositFactor || !api.consts.multisig.depositBase) return

    try {
      const genericCall = api.createType('Call', call)

      // get the fees for this call
      api
        .tx(genericCall)
        .paymentInfo('5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs')
        .then((info) => {
          // add the funds reserved for a multisig call
          const reservedTemp = (api.consts.multisig.depositFactor as unknown as BN)
            .muln(threshold)
            .add(api.consts.multisig.depositBase as unknown as BN)

          // console.log('reservedTemp', formatBnBalance(reservedTemp, chainInfo.tokenDecimals, { tokenSymbol: chainInfo?.tokenSymbol, numberAfterComma: 3 }))
          setMin(reservedTemp.add(info.partialFee))
          setReserved(reservedTemp)
        })
        .catch(console.error)
    } catch (e) {
      console.error('Error in useMultisigProposalNeededFunds')
      console.error(e)
    }
  }, [api, call, chainInfo, signatories, threshold])

  return { multisigProposalNeededFunds: min, reserved }
}
