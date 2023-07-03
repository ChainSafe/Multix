export const getMultisigCallId = (
  address: string,
  blockNumber: number,
  extrinsicIndex: number,
  position: number
) => {
  return `${address}-${blockNumber}-${extrinsicIndex}-${position}`
}
