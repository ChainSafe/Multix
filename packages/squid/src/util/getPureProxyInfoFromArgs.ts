import { EventItem } from "@subsquid/substrate-processor/lib/interfaces/dataSelection"
import { encodeAddress } from '@polkadot/util-crypto';
import { getProxyAccountId } from "./getProxyAccountId";
import { dataEvent, env } from "../processor"
import { getProxyTypeFromRaw } from "./getProxyTypeFromRaw";

export const getPureProxyInfoFromArgs = (item: EventItem<"Proxy.PureCreated", typeof dataEvent['data']>) => {

  const { pure, who, proxyType } = item.event.args
  // pure proxy creation delay, they have a disambiguationIndex
  const delay = 0
  // pure proxy creation always have the any type
  const _type = getProxyTypeFromRaw(proxyType.__kind)
  const _who = encodeAddress(who, env.prefix)
  const _pure = encodeAddress(pure, env.prefix)
  const id = getProxyAccountId(_who, _pure, _type, delay)

  return ({
    id,
    who: _who,
    pure: _pure,
    delay: delay,
    type: _type
  })
}
