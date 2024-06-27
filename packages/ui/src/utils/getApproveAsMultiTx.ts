import { ApiPromise } from '@polkadot/api'
import { HexString, MultisigStorageInfo } from '../types'

interface Params {
  api: ApiPromise
  threshold: number
  otherSignatories: string[]
  when?: MultisigStorageInfo['when']
  hash?: HexString
}

export const getApproveAsMultiTx = ({ api, threshold, otherSignatories, hash, when }: Params) => {
  if (!hash) return

  return api.tx.multisig.approveAsMulti(threshold, otherSignatories, when || null, hash, {
    refTime: 0,
    proofSize: 0
  })
}
