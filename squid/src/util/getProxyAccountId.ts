import { ProxyType } from '../model'

export const getProxyAccountId = (
  delegatee?: string,
  delegator?: string,
  type?: ProxyType,
  delay = 0,
  chainId?: string
) => {
  if(!delegatee || !delegator || !type || !chainId){
    throw new Error(`getProxyAccountId error - one of these is undefined: delegatee ${delegatee}, delegator ${delegator}, type: ${type}, chainId:${chainId}`)
}

  return `${chainId}-${delegatee}-${delegator}-${type}-${delay}`
}
