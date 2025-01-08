export const translateError = (error: any) => {
  //   {"error":{"type":"Invalid","value":{"type":"Payment"}},"name":"InvalidTxError"}
  if (error.error && error.error.type === 'Invalid' && error.error.value.type === 'Payment') {
    return 'Not enough funds to pay for the tx'
  }

  return error.toString()
}

export const translateErrorInfo = (errorInfo: string) => {
  if (errorInfo === 'NoTimepoint') {
    return 'The same multisig transaction is already pending'
  }

  return errorInfo
}
