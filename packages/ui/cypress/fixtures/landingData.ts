export const baseUrl = 'http://localhost:3333'
export const networkParams = 'network=rococo'
export const landingPageUrl = `${baseUrl}?${networkParams}`
export const settingsPageUrl = `${baseUrl}/settings?${networkParams}`
const WATCH_ACCOUNT_ANCHOR = 'watched-accounts'
export const settingsPageWatchAccountUrl = `${settingsPageUrl}#${WATCH_ACCOUNT_ANCHOR}`
export const landingPageAddressUrl = (address: string) =>
  `${baseUrl}?${networkParams}&address=${address}`
