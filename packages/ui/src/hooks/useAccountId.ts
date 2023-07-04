import { useNetwork } from '../contexts/NetworkContext'

const getId = (address: string, chainId: string) => `${chainId}-${address}`

export function useAccountId(address: string[]): string[]
export function useAccountId(address: string): string
export function useAccountId(address: string | string[]) {
  const { selectedNetworkInfo } = useNetwork()

  if (Array.isArray(address)) {
    return address.map((a) => getId(a, selectedNetworkInfo?.chainId || ''))
  }

  return getId(address, selectedNetworkInfo?.chainId || '')
}
