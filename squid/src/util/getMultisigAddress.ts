import { createKeyMulti } from '@polkadot/util-crypto'
import { encodeId } from './accountEncoding'
import { env } from '../main'

export const getMultisigAddress = (signatories: (string | Uint8Array)[], threshold: number) => {
  const key = createKeyMulti(signatories, threshold)
  const res = encodeId(key)

  // truncate the address at 42 chars for Ethereum addresses
  if(env.isEthereum && res.startsWith('0x')){
    return res.slice(0,42)
  }

  return res
}
