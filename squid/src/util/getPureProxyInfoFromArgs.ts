import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { encodeAddress } from '@polkadot/util-crypto'
import { getProxyAccountId } from './getProxyAccountId'
import { dataEvent, env } from '../main'
import { getProxyTypeFromRaw } from './getProxyTypeFromRaw'

export const getPureProxyInfoFromArgs = (
  item: EventItem<'Proxy.PureCreated' | 'Proxy.AnonymousCreated', (typeof dataEvent)['data']>,
  chainId: string
) => {
  const { pure, who, proxyType, anonymous } = item.event.args
  // pure proxy have no creation delay, they have a disambiguationIndex
  const delay = 0
  const _type = getProxyTypeFromRaw(proxyType.__kind)
  const _who = encodeAddress(who, env.prefix)
  // older versions of substrate use `anonymous` instead of `pure`
  const _pure = anonymous ? encodeAddress(anonymous, env.prefix) : encodeAddress(pure, env.prefix)
  const id = getProxyAccountId(_who, _pure, _type, delay, chainId)

  return {
    id,
    who: _who,
    pure: _pure,
    delay,
    type: _type
  }
}
