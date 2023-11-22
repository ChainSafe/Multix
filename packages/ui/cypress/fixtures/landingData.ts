export const baseUrl = 'http://localhost:3333'
export const defaultNetwork = 'rococo'
const WATCH_ACCOUNT_ANCHOR = 'watched-accounts'
export const landingPageNetwork = (networkName: string) => `${baseUrl}?network=${networkName}`
export const landingPageUrl = landingPageNetwork('rococo')
export const settingsPageUrl = `${baseUrl}/settings?network=${defaultNetwork}`
export const settingsPageWatchAccountUrl = `${settingsPageUrl}#${WATCH_ACCOUNT_ANCHOR}`
export const landingPageAddressUrl = (address: string) => `${landingPageUrl}&address=${address}`
