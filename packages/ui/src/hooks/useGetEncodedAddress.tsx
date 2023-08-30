import { useApi } from '../contexts/ApiContext'
import { useCallback } from 'react'
import { encodesubstrateAddress } from '../utils/encodeSubstrateAddress'

export const useGetEncodedAddress = () => {
  const { chainInfo } = useApi()

  const getEncodedAddress = useCallback(
    (address: string | Uint8Array | undefined) => {
      if (!chainInfo || !address) {
        return
      }

      return encodesubstrateAddress(address, chainInfo.ss58Format)
    },
    [chainInfo]
  )

  return getEncodedAddress
}
