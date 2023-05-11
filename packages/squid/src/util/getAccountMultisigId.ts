export const getAccountMultisigId = (multiSigAddress: string, accountAddress: string) => {
  return `${multiSigAddress}-${accountAddress}`
}
