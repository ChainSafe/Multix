import { EventItem } from "@subsquid/substrate-processor/lib/interfaces/dataSelection"
import { encodeAddress } from '@polkadot/util-crypto';
import { config } from '../config'
import { getProxyTypeFromRaw } from "./getProxyTypeFromRaw";
import { getProxyAccountId } from "./getProxyAccountId";
import { dataEvent } from "../processor"

export const getProxyInfoFromArgs = (item: EventItem<"Proxy.ProxyAdded" | "Proxy.ProxyRemoved", typeof dataEvent['data']>) => {
    const { delegator, delegatee, proxyType, delay } = item.event.args
    const _delegator = encodeAddress(delegator, config.prefix)
    const _delegatee = encodeAddress(delegatee, config.prefix)
    const _type = getProxyTypeFromRaw(proxyType)
    const _delay = Number(delay) || 0
    const _id = getProxyAccountId(_delegatee, _delegator, _type, _delay)

    return ({
        id: _id,
        delegator: _delegator,
        delegatee: _delegatee,
        type: _type,
        delay: _delay
    })
}