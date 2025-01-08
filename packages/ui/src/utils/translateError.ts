export const translateError = ({ error }: any) => {
  //   {"error":{"type":"Invalid","value":{"type":"Payment"}},"name":"InvalidTxError"}
  if (error && error.type === 'Invalid' && error.value.type === 'Payment') {
    return 'Not enough funds to pay for the transaction'
  }

  return error.toString()
}
