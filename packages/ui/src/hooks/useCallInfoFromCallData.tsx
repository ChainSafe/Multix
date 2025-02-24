import { useEffect, useMemo, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { SubmittingCall } from '../types'
import { PAYMENT_INFO_ACCOUNT } from '../constants'
import { Binary, HexString } from 'polkadot-api'
import { hashFromTx } from '../utils/txHash'
import { usePplApi } from '../contexts/PeopleChainApiContext'

export const useCallInfoFromCallData = (isPplTx: boolean, callData?: HexString) => {
  const { api: normalApi, compatibilityToken: normalCompatibilityToken } = useApi()
  const { pplApi, pplCompatibilityToken } = usePplApi()
  const api = useMemo(() => (isPplTx ? pplApi : normalApi), [isPplTx, normalApi, pplApi])
  const compatibilityToken = useMemo(
    () => (isPplTx ? pplCompatibilityToken : normalCompatibilityToken),
    [isPplTx, normalCompatibilityToken, pplCompatibilityToken]
  )
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

    try {
      const tx = api.txFromCallData(Binary.fromHex(callData), compatibilityToken)

      tx.getPaymentInfo(PAYMENT_INFO_ACCOUNT, { at: 'best' })
        .then(({ weight }) => {
          setCallInfo({
            decodedCall: tx?.decodedCall,
            call: tx,
            hash: hashFromTx(callData),
            weight,
            section: tx?.decodedCall.type,
            method: tx?.decodedCall.value.type
          })
          setIsGettingCallInfo(false)
        })
        .catch((e) => {
          console.error(e)
          setIsGettingCallInfo(false)
          setCallInfo(undefined)
        })
    } catch (e) {
      console.error(e)
      setIsGettingCallInfo(false)
      setCallInfo(undefined)
    }
  }, [api, callData, compatibilityToken])

  return { callInfo, isGettingCallInfo }
}
