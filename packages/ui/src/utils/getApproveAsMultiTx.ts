import { FixedSizeBinary } from 'polkadot-api'
import { ApiType } from '../contexts/ApiContext'
import { HexString, MultisigStorageInfo } from '../types'

interface Params {
  api: ApiType
  threshold: number
  otherSignatories: string[]
  when?: MultisigStorageInfo['when']
  hash?: HexString
}

export const getApproveAsMultiTx = ({ api, threshold, otherSignatories, hash, when }: Params) => {
  if (!hash) return

  return api.tx.Multisig.approve_as_multi({
    threshold,
    other_signatories: otherSignatories,
    maybe_timepoint: when,
    call_hash: FixedSizeBinary.fromHex(hash),
    max_weight: {
      ref_time: 0n,
      proof_size: 0n
    }
  })
}
