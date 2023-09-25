import { useMemo } from 'react'
import { useApi } from './ApiContext'
import { createKeyMulti } from '@polkadot/util-crypto'
import { useGetEncodedAddress } from '../hooks/useGetEncodedAddress'

export const useGetMultisigAddress = (signatories: string[], threshold?: number | null) => {
  const { chainInfo } = useApi()
  const newMultisigPubKey = useMemo(() => {
    if (!threshold) return
    return createKeyMulti(signatories, threshold)
  }, [signatories, threshold])
  const { encodedAddress } = useGetEncodedAddress(newMultisigPubKey)

  if (chainInfo?.isEthereum && encodedAddress?.startsWith('0x')) {
    return encodedAddress.slice(0, 42)
  }

  return encodedAddress
}
