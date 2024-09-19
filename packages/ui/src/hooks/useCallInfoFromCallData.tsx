import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { SubmittingCall } from '../types'
import { PAYMENT_INFO_ACCOUNT } from '../constants'
import { Binary, HexString } from 'polkadot-api'
import { hashFromTx } from '../utils/txHash'

export const useCallInfoFromCallData = (callData?: HexString) => {
  const { api, compatibilityToken } = useApi()
  const [callInfo, setCallInfo] = useState<SubmittingCall | undefined>(undefined)
  const [isGettingCallInfo, setIsGettingCallInfo] = useState(false)

  useEffect(() => {
    if (!callData) {
      setCallInfo(undefined)
      return
    }

    if (!api || !compatibilityToken) {
      setCallInfo(undefined)
      return
    }

    setIsGettingCallInfo(true)

    const tx = api.txFromCallData(Binary.fromHex(callData), compatibilityToken)

    // TODO this is WRONG weight should be get
    // using a new api method that's not ready yet
    tx.getEstimatedFees(PAYMENT_INFO_ACCOUNT, { at: 'best' })
      .then((weight) => {
        setCallInfo({
          decodedCall: tx?.decodedCall,
          call: tx,
          hash: hashFromTx(callData),
          weight: { proof_size: weight, ref_time: weight },
          method: tx?.decodedCall.type,
          section: tx?.decodedCall.value.type
        })
      })
      .catch((e) => {
        console.error(e)
        setIsGettingCallInfo(false)
        setCallInfo(undefined)
      })
  }, [api, callData, compatibilityToken])

  return { callInfo, isGettingCallInfo }
}
