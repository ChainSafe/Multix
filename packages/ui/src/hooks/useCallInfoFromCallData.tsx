import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { HexString, SubmittingCall } from '../types'
import { GenericCall } from '@polkadot/types'
import { PAYMENT_INFO_ACCOUNT } from '../constants'

export const useCallInfoFromCallData = (callData?: HexString) => {
  const { api } = useApi()
  const [callInfo, setCallInfo] = useState<SubmittingCall | undefined>(undefined)
  const [isGettingCallInfo, setIsGettingCallInfo] = useState(false)

  useEffect(() => {
    if (!callData) {
      setCallInfo(undefined)
      return
    }

    if (!api) {
      setCallInfo(undefined)
      return
    }

    let call: GenericCall
    try {
      call = api.createType('Call', callData)
    } catch (error) {
      console.error(error)
      setCallInfo({})
      return
    }

    setIsGettingCallInfo(true)
    api
      .tx(call)
      .paymentInfo(PAYMENT_INFO_ACCOUNT)
      .then(({ weight }) => {
        setCallInfo({
          call,
          weight,
          method: call.method,
          section: call.section
        })
      })
      .catch(console.error)
      .finally(() => setIsGettingCallInfo(false))
  }, [api, callData])

  return { callInfo, isGettingCallInfo }
}
