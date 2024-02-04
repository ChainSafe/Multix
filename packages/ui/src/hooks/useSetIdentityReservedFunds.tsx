import { useEffect, useMemo, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import BN from 'bn.js'
import { formatBnBalance } from '../utils/formatBnBalance'
import { IdentityFields } from '../components/EasySetup/SetIdentity'
import { getByteCount } from '../utils'

export const useSetIdentityReservedFunds = (identityFields?: IdentityFields) => {
  const { api, chainInfo } = useApi()
  const [reserved, setReserved] = useState(new BN(0))
  const identityfieldNumber = useMemo(() => {
    if (!identityFields) return 0

    return Object.values(identityFields).filter((value) => !!value).length
  }, [identityFields])

  const fieldBytes = useMemo(() => {
    if (!identityFields) return 0

    const allfields = Object.values(identityFields)
      .filter((value) => !!value)
      .join('')

    return getByteCount(allfields)
  }, [identityFields])

  useEffect(() => {
    if (!api || !identityFields) return

    if (!chainInfo?.tokenDecimals) return

    const byteDeposit = api.consts?.identity?.byteDeposit as unknown as BN
    const fieldDeposit = api.consts?.identity?.fieldDeposit as unknown as BN
    const basicDepost = api.consts?.identity?.basicDeposit as unknown as BN

    if (!basicDepost || (!fieldDeposit && !byteDeposit)) return

    const reservedFields = fieldDeposit
      ? fieldDeposit.muln(identityfieldNumber)
      : byteDeposit.muln(fieldBytes)

    const res = reservedFields.add(basicDepost)

    console.log(
      'res',
      formatBnBalance(res, chainInfo.tokenDecimals, {
        tokenSymbol: chainInfo?.tokenSymbol,
        numberAfterComma: 6
      })
    )
    setReserved(res)
  }, [api, chainInfo, fieldBytes, identityFields, identityfieldNumber])

  return { reserved }
}
