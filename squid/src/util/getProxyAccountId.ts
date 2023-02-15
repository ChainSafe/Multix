import { ProxyType } from "../model"

export const getProxyAccountId = (delegatee: string, delegator: string, type: ProxyType, delay: number | null) => {
    return `${delegatee}-${delegator}-${type}-${delay}`
}