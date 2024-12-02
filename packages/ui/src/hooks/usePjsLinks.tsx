import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

export const usePjsLinks = () => {
  const { selectedNetworkInfo } = useNetwork()
  const urlBase = useMemo(() => {
    if (!selectedNetworkInfo?.rpcUrls) return ''

    const encodedRpc = encodeURIComponent(selectedNetworkInfo?.rpcUrls[0])
    return `https://polkadot.js.org/apps/?rpc=${encodedRpc}#`
  }, [selectedNetworkInfo])

  return {
    getDecodeUrl: (hex: string) => `${urlBase}/extrinsics/decode/${hex}`,
    extrinsicUrl: `${urlBase}/extrinsics`
  }
}
