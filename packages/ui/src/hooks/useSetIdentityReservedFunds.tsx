// import { useEffect, useMemo, useState } from 'react'
// import { useApi } from '../contexts/ApiContext'
// // import { formatBigIntBalance } from '../utils/formatBnBalance'
// import { IdentityFields } from '../components/EasySetup/SetIdentity'
// import { getByteCount } from '../utils'
// import { TypedApi } from 'polkadot-api'
// import { dotPpl } from '@polkadot-api/descriptors'

// export const useSetIdentityReservedFunds = (identityFields?: IdentityFields) => {
//   const { api, chainInfo, compatibilityToken } = useApi()
//   const [reserved, setReserved] = useState(0n)
//   const identityfieldNumber = useMemo(() => {
//     if (!identityFields) return 0

//     return Object.values(identityFields).filter((value) => !!value).length
//   }, [identityFields])

//   const fieldBytes = useMemo(() => {
//     if (!identityFields) return 0

//     const allfields = Object.values(identityFields)
//       .filter((value) => !!value)
//       .join('')

//     return getByteCount(allfields)
//   }, [identityFields])

//   useEffect(() => {
//     if (!api || !identityFields || !compatibilityToken) return

//     if (!chainInfo?.tokenDecimals) return

//     const byteDeposit = (
//       api as unknown as TypedApi<typeof dotPpl>
//     ).constants?.Identity?.ByteDeposit(compatibilityToken)

//     const basicDeposit = (
//       api as unknown as TypedApi<typeof dotPpl>
//     ).constants?.Identity.BasicDeposit(compatibilityToken)

//     if (!basicDeposit || !byteDeposit) return

//     const reservedFields = byteDeposit * BigInt(fieldBytes)

//     const res = reservedFields + basicDeposit

//     // console.log(
//     //   'res',
//     //   formatBnBalance(res, chainInfo.tokenDecimals, {
//     //     tokenSymbol: chainInfo?.tokenSymbol,
//     //     numberAfterComma: 6
//     //   })
//     // )
//     setReserved(res)
//   }, [api, chainInfo, compatibilityToken, fieldBytes, identityFields, identityfieldNumber])

//   return { reserved }
// }
