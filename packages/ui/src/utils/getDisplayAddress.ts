export const getDisplayAddress = (address: string) =>
  `${address.slice(0, 6)}..${address.slice(-6)}`
