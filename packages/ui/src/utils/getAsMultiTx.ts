import { ApiPromise } from '@polkadot/api'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import { Weight } from '@polkadot/types/interfaces'
import { HexString, MultisigStorageInfo } from '../types'

interface Params {
  api: ApiPromise
  threshold: number
  otherSignatories: string[]
  tx?: SubmittableExtrinsic<'promise', ISubmittableResult> | HexString
  weight?: Weight
  when?: MultisigStorageInfo['when']
}

const LEGACY_ASMULTI_PARAM_LENGTH = 6

export const getAsMultiTx = ({ api, threshold, otherSignatories, tx, weight, when }: Params) => {
  if (!tx) return

  return api.tx.multisig.asMulti.meta.args.length === LEGACY_ASMULTI_PARAM_LENGTH
    ? api.tx.multisig.asMulti(
        threshold,
        otherSignatories,
        when || null,
        tx,
        false,
        // @ts-ignore
        weight || 0
      )
    : api.tx.multisig.asMulti(
        threshold,
        otherSignatories,
        when || null,
        tx,
        weight || {
          refTime: 0,
          proofSize: 0
        }
      )
}
