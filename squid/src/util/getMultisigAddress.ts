import { createKeyMulti } from '@polkadot/util-crypto'
import { encodeId } from './accountEncoding'

export const getMultisigAddress = (signatories: (string | Uint8Array)[], threshold: number) => {
  return encodeId(createKeyMulti(signatories, threshold))
}
