import { MultisigStorageInfo } from '../types'
import { Binary, HexString, Transaction } from 'polkadot-api'
import { ApiType } from '../contexts/ApiContext'

interface Params {
  api: ApiType
  threshold: number
  otherSignatories: string[]
  tx?: Transaction<any, any, any, any>
  callData?: HexString
  weight?: { ref_time: bigint; proof_size: bigint }
  when?: MultisigStorageInfo['when']
}

// TODO check if  we can do this with papi
// const LEGACY_ASMULTI_PARAM_LENGTH = 6

export const getAsMultiTx = async ({
  api,
  threshold,
  otherSignatories,
  callData,
  tx,
  weight,
  when
}: Params): Promise<Transaction<any, any, any, any> | undefined> => {
  // we can pass either the tx, or the callData
  if (!callData && !tx) return

  let txToSend: Transaction<any, any, any, any> | undefined = tx

  if (!txToSend && callData) {
    txToSend = await api.txFromCallData(Binary.fromHex(callData))
  }

  if (!txToSend) return

  return api.tx.Multisig.as_multi({
    threshold,
    other_signatories: otherSignatories,
    maybe_timepoint: when,
    max_weight: weight || { proof_size: 0n, ref_time: 0n },
    call: txToSend.decodedCall
  })
  // return api.tx.multisig.asMulti.meta.args.length === LEGACY_ASMULTI_PARAM_LENGTH
  //   ? api.tx.multisig.asMulti(
  //       threshold,
  //       otherSignatories,
  //       when || null,
  //       tx,
  //       false,
  //       // @ts-ignore
  //       weight || 0
  //     )
  //   : api.tx.multisig.asMulti(
  //       threshold,
  //       otherSignatories,
  //       when || null,
  //       tx,
  //       weight || {
  //         refTime: 0,
  //         proofSize: 0
  //       }
  //     )
}
