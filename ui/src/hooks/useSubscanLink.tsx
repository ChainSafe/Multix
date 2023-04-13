import { useNetwork } from "../contexts/NetworkContext"
import { getSubscanExtrinsicLink } from "../utils"

export const useGetSubscanLinks = () => {
  const { selectedNetworkInfo } = useNetwork()

  return {
    getSubscanExtrinsicLink: (txHash: string) => getSubscanExtrinsicLink(selectedNetworkInfo?.explorerNetworkName, txHash)
  }
}