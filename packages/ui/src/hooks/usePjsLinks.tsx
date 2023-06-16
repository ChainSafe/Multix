import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

export const usePjsLinks = () => {
  const { selectedNetworkInfo } = useNetwork()
  const urlBase = useMemo(() => {
    if (!selectedNetworkInfo?.rpcUrl) return ''

    const encodedRpc = encodeURIComponent(selectedNetworkInfo?.rpcUrl)
    return `https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=${encodedRpc}#`
  }, [selectedNetworkInfo])

  return {
    getDecodeUrl: (hex: string) => `${urlBase}/extrinsics/decode/${hex}`,
    extrinsicUrl: `${urlBase}/extrinsics`
  }
}
