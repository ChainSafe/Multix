export const getMultisigCallId = (
  address: string,
  blockNumber: number,
  extrinsicIndex: number,
  position: number,
  chainId: string
) => {
  return `${chainId}-${address}-${blockNumber}-${extrinsicIndex}-${position}`
}
