import { createKeyMulti, encodeAddress, } from '@polkadot/util-crypto';
import { config } from '../config';

export const getMultisigAddress = (signatories: (string | Uint8Array)[], threshold: number) => {
    return encodeAddress(createKeyMulti(signatories, threshold), config.prefix)
}