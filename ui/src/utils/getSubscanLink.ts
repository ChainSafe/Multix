import { SupportedNetworks } from "../constants";

export const getSubscanExtrinsicLink = (network: SupportedNetworks | undefined, txHash: string) => {
    if (!network || !txHash) return

    return `https://${network}.subscan.io/extrinsic/${txHash}`
}