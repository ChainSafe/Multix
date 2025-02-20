import { networkList } from '../constants'
import { getWalletConnectId } from './getWalletConnectId'

export const getAllNetworkWalletConnectIds = (): string[] => {
  return (
    Object.values(networkList)
      .map((network) => network.genesisHash)
      .filter(Boolean) as string[]
  ).map((genesisHash) => `polkadot:${getWalletConnectId(genesisHash)}`)
}
