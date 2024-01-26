import { ProxyType } from '../../types-and-hooks'

export const ProxyEnumToTextMap: Record<ProxyType, string> = {
  [ProxyType.NonTransfer]: 'Non Transfer',
  [ProxyType.IdentityJudgement]: 'Identity Judgement',
  [ProxyType.CancelProxy]: 'Cancel Proxy',
  [ProxyType.SudoBalances]: 'Sudo Balances',
  [ProxyType.NominationPools]: 'Nomination Pools',
  [ProxyType.Any]: 'Any',
  [ProxyType.Auction]: 'Auction',
  [ProxyType.Governance]: 'Governance',
  [ProxyType.Society]: 'Society',
  [ProxyType.Staking]: 'Staking',
  [ProxyType.Unknown]: 'Unknown'
}

export function renderProxyTypeToText(proxy: ProxyType) {
  return ProxyEnumToTextMap[proxy]
}
