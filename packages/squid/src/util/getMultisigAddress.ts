import { createKeyMulti, encodeAddress, } from '@polkadot/util-crypto';
import { env } from '../processor';

export const getMultisigAddress = (signatories: (string | Uint8Array)[], threshold: number) => {
  return encodeAddress(createKeyMulti(signatories, threshold), env.prefix)
}