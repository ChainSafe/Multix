import { ProxyType } from "../model"

export const getProxyAccountId = (delegatee: string, delegator: string, type: ProxyType, delay = 0) => {
    return `${delegatee}-${delegator}-${type}-${delay}`
}