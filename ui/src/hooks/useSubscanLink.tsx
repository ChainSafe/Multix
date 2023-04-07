import { useNetwork } from "../contexts/NetworkContext"
import { getSubscanExtrinsicLink } from "../utils"

export const useGetSubscanLinks = () => {
    const { selectedNetwork } = useNetwork()

    return {
        getSubscanExtrinsicLink: (txHash: string) => getSubscanExtrinsicLink(selectedNetwork, txHash)
    }
}