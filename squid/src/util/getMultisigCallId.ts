export const getMultisigCallId = (address: string, blockNumber: number, extrinsicIndex: number) => {
    return `${address}-${blockNumber}-${extrinsicIndex}`
}