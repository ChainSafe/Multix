import { CompatibilityToken, Transaction } from 'polkadot-api'
import { ApiType } from '../contexts/ApiContext'

export const getEncodedCallFromDecodedTx = (
  api: ApiType,
  decodedTx: Transaction<any, any, any, any>['decodedCall'],
  compatibilityToken: CompatibilityToken
) => {
  const batch = api.tx.Utility.batch({
    calls: [decodedTx]
  }).getEncodedData(compatibilityToken)

  // we slice the 3 bytes from utility batch
  return batch.asHex().replace('0x', '').slice(6)
}
