import { ProxyType } from '../model'

export const getProxyAccountId = (
  delegatee: string,
  delegator: string,
  type: ProxyType,
  delay = 0,
  chainId: string
) => {
  return `${chainId}-${delegatee}-${delegator}-${type}-${delay}`
}
