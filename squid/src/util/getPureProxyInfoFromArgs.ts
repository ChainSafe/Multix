import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { encodeAddress } from '@polkadot/util-crypto'
import { getProxyAccountId } from './getProxyAccountId'
import { Ctx, dataEvent, env } from '../main'
import { getProxyTypeFromRaw } from './getProxyTypeFromRaw'
import { ProxyType as ProxyTypeV2005 } from '../types/v2005'
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
  let proxyType: ProxyTypeV2005
  let disambiguationIndex: number = 0

  const args = item.event.args
  if (isAnonymous && Array.isArray(args)) {
    ;[pure, who, proxyType, disambiguationIndex] = args
  } else if (isAnonymous && !!args?.anonymous) {
    ;({ anonymous: pure, who, proxyType, disambiguationIndex } = args)
  } else if (!isAnonymous && !!args?.pure) {
    ;({ pure, who, proxyType, disambiguationIndex } = args)
  } else {
    ctx.log.error(`The pure proxy could not be determined ${JsonLog(item)}`)
    return
  }

  const _who = (who && encodeAddress(who, env.prefix)) || ''
  const _pure = (pure && encodeAddress(pure, env.prefix)) || ''
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
