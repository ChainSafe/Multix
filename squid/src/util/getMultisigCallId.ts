export const getMultisigCallId = (
  address: string,
  blockNumber: number,
  extrinsicIndex: number,
  callId: string,
  chainId: string
) => {
  return `${chainId}-${address}-${blockNumber}-${extrinsicIndex}-${callId}`
}
