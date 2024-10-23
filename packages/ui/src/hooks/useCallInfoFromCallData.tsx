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
      setIsGettingCallInfo(false)
      return
    }

    if (!api || !compatibilityToken) {
      setCallInfo(undefined)
      setIsGettingCallInfo(false)
      return
    }

    setIsGettingCallInfo(true)

    const tx = api.txFromCallData(Binary.fromHex(callData), compatibilityToken)

    tx.getPaymentInfo(PAYMENT_INFO_ACCOUNT, { at: 'best' })
      .then(({ weight }) => {
        setCallInfo({
          decodedCall: tx?.decodedCall,
          call: tx,
          hash: hashFromTx(callData),
          weight: { proof_size: weight.proof_size, ref_time: weight.ref_time },
          method: tx?.decodedCall.type,
          section: tx?.decodedCall.value.type
        })
        setIsGettingCallInfo(false)
      })
      .catch((e) => {
        console.error(e)
        setIsGettingCallInfo(false)
        setCallInfo(undefined)
      })
  }, [api, callData, compatibilityToken])

  return { callInfo, isGettingCallInfo }
}
