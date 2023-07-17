import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { encodeAddress } from '@polkadot/util-crypto'
import { getProxyTypeFromRaw } from './getProxyTypeFromRaw'
import { getProxyAccountId } from './getProxyAccountId'
import { Ctx, dataEvent, env } from '../main'
import { ProxyProxyAddedEvent } from '../types/events'
import { ProxyType } from '../types/v504'

interface Params {
  item: EventItem<'Proxy.ProxyAdded' | 'Proxy.ProxyRemoved', (typeof dataEvent)['data']>
  chainId: string
  ctx: Ctx
  isAdded: boolean
}
export const getProxyInfoFromArgs = ({ item, chainId, ctx, isAdded }: Params) => {
  let delegator: Uint8Array
  let delegatee: Uint8Array
  let proxyType: ProxyType
  let delay: number

  const event = isAdded && new ProxyProxyAddedEvent(ctx, item.event)
  if (event && event.isV504) {
    ;[delegator, delegatee, proxyType, delay] = event.asV504
  } else {
    ;({ delegator, delegatee, proxyType, delay } = item.event.args)
  }

  const _delegator = encodeAddress(delegator, env.prefix)
  const _delegatee = encodeAddress(delegatee, env.prefix)
  const _type = getProxyTypeFromRaw(proxyType.__kind)
  const _delay = Number(delay) || 0
  const _id = getProxyAccountId(_delegatee, _delegator, _type, _delay, chainId)

  return {
    id: _id,
    delegator: _delegator,
    delegatee: _delegatee,
    type: _type,
    delay: _delay
  }
}
