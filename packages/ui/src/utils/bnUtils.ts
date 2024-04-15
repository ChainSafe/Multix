// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN, BN_ONE, BN_TEN, BN_TWO, BN_ZERO } from '@polkadot/util'

const DEFAULT_BITLENGTH = 32 as BitLength

export type BitLength = 8 | 16 | 32 | 64 | 128 | 256

export function getGlobalMaxValue(bitLength?: number): BN {
  return BN_TWO.pow(new BN(bitLength || DEFAULT_BITLENGTH)).isub(BN_ONE)
}

export function isValidNumber(
  bn: BN,
  bitLength: BitLength,
  isSigned: boolean,
  isZeroable: boolean,
  maxValue?: BN | null
): boolean {
  if (
    // cannot be negative
    (!isSigned && bn.lt(BN_ZERO)) ||
    // cannot be > than allowed max
    bn.gt(getGlobalMaxValue(bitLength)) ||
    // check if 0 and it should be a value
    (!isZeroable && bn.isZero()) ||
    // check that the bitlengths fit
    bn.bitLength() > (bitLength || DEFAULT_BITLENGTH) ||
    // cannot be > max (if specified)
    (maxValue && maxValue.gtn(0) && bn.gt(maxValue))
  ) {
    return false
  }

  return true
}

export function inputToBn(chainDecimals: number, input: string, isSigned = false): BN {
  const isDecimalValue = input.match(/^(\d+)\.(\d+)$/)
  let result

  if (isDecimalValue) {
    const div = new BN(input.replace(/\.\d*$/, ''))
    const modString = input.replace(/^\d+\./, '').substring(0, chainDecimals)
    const mod = new BN(modString)

    result = div
      .mul(BN_TEN.pow(new BN(chainDecimals)))
      .add(mod.mul(BN_TEN.pow(new BN(chainDecimals - modString.length))))
  } else {
    result = new BN(input.replace(/[^\d]/g, ''))
      .mul(BN_TEN.pow(new BN(chainDecimals)))
      .muln(isSigned && input.startsWith('-') ? -1 : 1)
  }

  return result
}
