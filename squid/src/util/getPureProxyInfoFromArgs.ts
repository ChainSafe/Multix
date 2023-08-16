import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { encodeAddress } from '@polkadot/util-crypto'
import { getProxyAccountId } from './getProxyAccountId'
import { Ctx, dataEvent, env } from '../main'
import { getProxyTypeFromRaw } from './getProxyTypeFromRaw'
import { ProxyAnonymousCreatedEvent, ProxyPureCreatedEvent } from '../types/events'
import { ProxyType as ProxyTypeV1 } from '../types/v1'
import { ProxyType as ProxyTypeV700 } from '../types/v700'
import { JsonLog } from './JsonLog'

interface Params {
  item: EventItem<'Proxy.PureCreated' | 'Proxy.AnonymousCreated', (typeof dataEvent)['data']>
  chainId: string
  isAnonymous: boolean
  ctx: Ctx
}

export const getPureProxyInfoFromArgs = ({ item, chainId, isAnonymous, ctx }: Params) => {
  let pure: Uint8Array | undefined
  let who: Uint8Array | undefined
  let proxyType: ProxyTypeV1 | ProxyTypeV700
  let disambiguationIndex: number = 0

  const eventAnonymous = isAnonymous && new ProxyAnonymousCreatedEvent(ctx, item.event)
  const eventPure = !isAnonymous && new ProxyPureCreatedEvent(ctx, item.event)
  if (eventAnonymous && eventAnonymous.isV504) {
    ;[pure, who, proxyType, disambiguationIndex] = eventAnonymous.asV504
  } else if (eventAnonymous && eventAnonymous.isV700) {
    ;({ anonymous: pure, who, proxyType, disambiguationIndex } = eventAnonymous.asV700)
  } else if (eventPure && eventPure.isV9320) {
    ;({ pure, who, proxyType, disambiguationIndex } = eventPure.asV9320)
  } else {
    ctx.log.error(`The pure proxy could not be determined ${JsonLog(item)}`)
    return
  }

  const _who = encodeAddress(who, env.prefix)
  const _pure = encodeAddress(pure, env.prefix)
  const _type = getProxyTypeFromRaw(proxyType.__kind)
  const id = getProxyAccountId(_who, _pure, _type, disambiguationIndex, chainId)

  return {
    id,
    who: _who,
    pure: _pure,
    delay: disambiguationIndex,
    type: _type
  }
}
