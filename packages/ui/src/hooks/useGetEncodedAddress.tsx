import { useApi } from '../contexts/ApiContext'
import { useEffect, useState } from 'react'
import { encodesubstrateAddress } from '../utils/encodeSubstrateAddress'
import { isU8a, u8aToHex } from '@polkadot/util'

export const useGetEncodedAddress = (address: string | Uint8Array | undefined) => {
  const { chainInfo } = useApi()
  const [encodedAddress, setEncodedAddress] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!chainInfo || !address) {
      return
    }

    if (chainInfo?.isEthereum) {
      const res = isU8a(address) ? u8aToHex(address as Uint8Array).toString() : (address as string)
      setEncodedAddress(res.slice(0, 42))
    } else {
      setEncodedAddress(encodesubstrateAddress(address, chainInfo.ss58Format))
    }
  }, [chainInfo, address])

  return { encodedAddress }
}
