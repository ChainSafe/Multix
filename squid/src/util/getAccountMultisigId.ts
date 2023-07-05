export const getAccountMultisigId = (multiSigAddress: string, accountAddress: string, chainId: string) => {
  return `${chainId}-${multiSigAddress}-${accountAddress}`
}
