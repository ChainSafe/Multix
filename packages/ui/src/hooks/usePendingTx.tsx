import { useCallback, useEffect, useState } from 'react'
import { useMultiProxy } from '../contexts/MultiProxyContext'
import { MultisigStorageInfo } from '../types'
import { useMultisigCallQuery } from './useQueryMultisigCalls'
import { isEmptyArray } from '../utils/arrayUtils'
import { isProxyCall } from '../utils/isProxyCall'
import { useAccountId } from './useAccountId'
import { ApiType, useApi } from '../contexts/ApiContext'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { PolkadotClient, Transaction } from 'polkadot-api'
import { getDynamicBuilder, getLookupFn } from '@polkadot-api/metadata-builders'
import {
  AccountId,
  Bin,
  Binary,
  compact,
  createDecoder,
  enhanceDecoder,
  HexString,
  metadata as metadataCodec,
  Struct,
  Tuple,
  u8,
  Variant,
  type Decoder,
  type StringRecord,
  type V14
} from '@polkadot-api/substrate-bindings'
import { Hex } from '@polkadot-api/substrate-bindings'
import { hashFromTx } from '../utils/txHash'
import { getEncodedCallFromDecodedTx } from '../utils/getEncodedCallFromDecodedTx'
dayjs.extend(localizedFormat)

export interface PendingTx {
  from: string
  hash: string
  info: MultisigStorageInfo
}

export interface CallDataInfoFromChain {
  callData?: HexString
  decodedCall?: Transaction<any, any, any, any>['decodedCall']
  hash?: string
  name?: string
  info?: PendingTx['info']
  from: string
  timestamp?: Date
  multiProxyAddress?: string
}

type AggGroupedByDate = { [index: string]: CallDataInfoFromChain[] }

const opaqueMetadata = Tuple(compact, Bin(Infinity)).dec

const getExtDecoderAt = async (api: ApiType, client: PolkadotClient, blockHash?: string) => {
  const rawMetadata = await (blockHash
    ? client
        ._request<{
          result: HexString
        }>('archive_unstable_call', [blockHash, 'Metadata_metadata', ''])
        .then((x) => opaqueMetadata(x.result)[1])
    : api.apis.Metadata.metadata())

  const metadata = metadataCodec.dec(rawMetadata.asBytes()).metadata.value as V14
  const dynBuilder = getDynamicBuilder(getLookupFn(metadata))

  const versionDec = enhanceDecoder(u8[1], (value) => ({
    version: value & ~(1 << 7),
    signed: !!(value & (1 << 7))
  }))

  const address = Variant({
    Id: AccountId(),
    Raw: Hex(),
    Address32: Hex(32),
    Address20: Hex(20)
  }).dec
  const signature = Variant({
    Ed25519: Hex(64),
    Sr25519: Hex(64),
    Ecdsa: Hex(65)
  }).dec

  const extra = Struct.dec(
    Object.fromEntries(
      metadata.extrinsic.signedExtensions.map(
        (x) => [x.identifier, dynBuilder.buildDefinition(x.type)[1]] as [string, Decoder<any>]
      )
    ) as StringRecord<Decoder<any>>
  )

  const allBytesDec = Hex(Infinity).dec
  const signedBody = Struct.dec({
    address,
    signature,
    extra,
    callData: allBytesDec
  })

  return createDecoder((data) => {
    const len = compact.dec(data)
    const { signed, version } = versionDec(data)
    const body = signed ? signedBody : allBytesDec

    return { len, signed, version, body: body(data) }
  })
}

// export const getMultisigInfo = (call: ISanitizedCall): Partial<CallDataInfoFromChain>[] => {
//   const result: Partial<CallDataInfoFromChain>[] = []

//   const getCallResult = ({ args, method }: ISanitizedCall) => {
//     if (typeof method !== 'string' && method.pallet === 'multisig') {
//       if (method.method === 'asMulti' && typeof args.call?.method !== 'string') {
//         result.push({
//           name: `${args.call?.method?.pallet}.${args.call?.method.method}`,
//           hash: args.call?.hash,
//           callData: args.callData as CallDataInfoFromChain['callData']
//         })
//       } else {
//         result.push({
//           name: 'Unknown call',
//           hash: (args?.call_hash as Uint8Array).toString() || undefined,
//           callData: undefined
//         })
//       }
//       // this is not a multisig call
//       // try to dig deeper
//     } else {
//       if (args.calls) {
//         for (const call of args.calls) {
//           getCallResult(call)
//         }
//       } else if (args.call) {
//         getCallResult(args.call)
//       }
//     }
//   }

//   getCallResult(call)
//   return result
// }

// export const getMultisigInfo = (
//   call: Transaction<any, any, any, any>['decodedCall']
// ): Partial<CallDataInfoFromChain>[] => {
//   const result: Partial<CallDataInfoFromChain>[] = []

//   //         result.push({
//   //           name: 'Unknown call',
//   //           hash: (args?.call_hash as Uint8Array).toString() || undefined,
//   //           callData: undefined
//   //         })

//   const getCallResults = (call: Transaction<any, any, any, any>['decodedCall']) => {
//     if (call.type === 'Multisig') {
//       if (call.value.type === 'as_Multi') {

//                 result.push({
//                   name: `${call.value.value.call.type}.${call.value.value.call.value.type}`,
//                   hash: args.call?.hash,
//                   callData: args.callData as CallDataInfoFromChain['callData']
//                 })
//       } else {
//         result.push({
//           name: 'Unknown call',
//           hash: undefined,
//           callData: undefined
//         })
//       }
//     } else {
//     }
//   }
//   getCallResults(call)
//   return result
// }

const getMultisigInfo = async (
  call: Transaction<any, any, any, any>['decodedCall'],
  api: ApiType
): Promise<Partial<CallDataInfoFromChain>[]> => {
  const compatibilityToken = await api.compatibilityToken

  const result: any[] = []

  // console.log('----for call', JSONprint(call));

  const getCallResults = (call: Transaction<any, any, any, any>['decodedCall']) => {
    if (call.type === 'Multisig') {
      if (call.value.type === 'as_multi') {
        const callDatawithout0x = getEncodedCallFromDecodedTx(
          api,
          call.value.value.call,
          compatibilityToken
        )
        const callData = `0x${callDatawithout0x}`
        const hash = hashFromTx(callData)
        // console.log('----- callData', callData);
        // console.log('----- hash', hash);
        result.push({
          name: `${call.value.value.call.type}.${call.value.value.call.value.type}`,
          hash,
          callData
        })
      } else if (call.value.type === 'approve_as_multi') {
        result.push({
          name: 'Unknown call',
          // the call_hash is of type FixedSizeBinary<32> which is
          // an instance of instance Binary and can be converted to a hex
          hash: call.value.value.call_hash.asHex(),
          callData: undefined
        })
      }
    } else {
      if (call.value.value.call) {
        getCallResults(call.value.value.call)
      }

      if (call.value.value.calls) {
        call.value.value.calls.forEach((c: any) => getCallResults(c))
      }
    }
  }

  getCallResults(call)
  // console.log('result', JSONprint(result))
  return result
}

const getCallDataFromChainPromise = (
  pendingTxData: PendingTx[],
  api: ApiType,
  client: PolkadotClient
) =>
  pendingTxData.map(async (pendingTx) => {
    const blockNumber = pendingTx.info.when.height
    const blockHash = (
      await client._request('archive_unstable_hashByHeight', [blockNumber])
    )?.[0] as HexString | undefined

    if (!blockHash) {
      console.log('no hash found for height', blockNumber)
      return
    }

    const body: HexString[] = await client._request('archive_unstable_body', [blockHash])

    let date: Date | undefined

    const decoder = await getExtDecoderAt(api, client, blockHash)

    const txPromises = body.map((extrinsics) => {
      const decodedExtrinsic = decoder(extrinsics)
      const toDecode = decodedExtrinsic.signed
        ? (decodedExtrinsic.body as any).callData
        : decodedExtrinsic.body
      // console.log('-----------------------------')
      // console.log(decodedExtrinsic)
      return api.txFromCallData(Binary.fromHex(toDecode))
    })

    const allDecodedTxs = await Promise.all(txPromises)

    // allDecodedTxs.forEach((txs) => {
    //   console.log('-------------decoded')
    //   console.log(txs)
    // })

    // get the timestamp which is an unsigned extrinsic set by the validator in each block
    // the information for each of the contained extrinsics
    allDecodedTxs.some(({ decodedCall: { type, value } }) => {
      // check for timestamp.set
      if (type === 'Timestamp' && value.type === 'Set') {
        // extract the Option<Moment> as Moment
        const moment = value.value.now as string

        // convert to date (unix ms since epoch in Moment - exactly as per the Rust code)
        date = new Date(Number(moment))
        return true
      }

      return false
    })

    const ext = allDecodedTxs[pendingTx.info.when.index]

    // const decoded = parseGenericCall(ext.method as GenericCall, ext.registry)
    // console.log('pendingTxData', pendingTxData)
    // console.log('decoded', decoded)
    const multisigTxs = (await getMultisigInfo(ext.decodedCall, api)) || []

    const multisigTxInfo = multisigTxs.find((info) => {
      if (!!info.hash && info.hash === pendingTx.hash) {
        return info
      }

      return false
    })

    if (!multisigTxInfo) {
      console.log('oops we did not find the right extrinsic', multisigTxs, pendingTx.hash)
      return
    }

    const { name, hash, callData } = multisigTxInfo

    // let call: false | GenericCall<AnyTuple> = false
    // try {
    //   call = !!callData && !!hash && ext.registry.createType('Call', callData)
    // } catch (error) {
    //   console.error('Error in getCallDataFromChainPromise', error)
    // }

    return {
      callData,
      hash: hash || pendingTx.hash,
      name,
      decodedCall:
        (callData && (await api.txFromCallData(Binary.fromHex(callData))).decodedCall) || {},
      info: pendingTx.info,
      from: pendingTx.from,
      timestamp: date
    } as CallDataInfoFromChain
  })

const sortByLatest = (a: CallDataInfoFromChain, b: CallDataInfoFromChain) => {
  if (!a.timestamp || !b.timestamp) return 0

  return b.timestamp.valueOf() - a.timestamp.valueOf()
}

export const usePendingTx = (multisigAddresses: string[], skipProxyCheck = false) => {
  const [isLoading, setIsLoading] = useState(true)
  const { api, chainInfo, client } = useApi()
  const [txWithCallDataByDate, setTxWithCallDataByDate] = useState<AggGroupedByDate>({})
  const { selectedMultiProxy } = useMultiProxy()

  // refresh the pending TX for the set of multisig addresses
  const refresh = useCallback(async () => {
    setTxWithCallDataByDate({})

    if (!api || !client) return

    if (isEmptyArray(multisigAddresses)) return

    if (!api?.query?.Multisig?.Multisigs) return

    setIsLoading(true)

    const pendingMultisigTxs: PendingTx[] = []

    const callsPromises = multisigAddresses.map((address) =>
      api.query.Multisig.Multisigs.getEntries(address, { at: 'best' })
    )

    await Promise.all(callsPromises)
      .then((res1) => {
        res1.forEach((res, index) => {
          res.forEach(({ keyArgs, value }) => {
            // this is supposed to be the multisig address that we asked the storage for
            const multisigFromChain = keyArgs[0]
            const hash = keyArgs[1].asHex()
            const info = value as MultisigStorageInfo
            if (chainInfo?.isEthereum) {
              info.approvals = info.approvals.map((approval) => approval.toLowerCase())
            }

            // Fix for ghost proposals for https://github.com/polkadot-js/apps/issues/9103
            // These 2 should be the same
            if (multisigFromChain.toLowerCase() !== multisigAddresses[index].toLowerCase()) {
              console.error(
                'The multisig we requested the calls for and the one found in the block do not correspond. Requested:',
                multisigAddresses[index],
                'received: ',
                multisigFromChain
              )
              return
            }

            pendingMultisigTxs.push({
              hash,
              info,
              from: multisigAddresses[index]
            })
          })
        })
      })
      .catch(console.error)

    if (pendingMultisigTxs.length === 0) {
      setTxWithCallDataByDate({})
      setIsLoading(false)
      return
    }

    const callDataInfoFromChainPromises = getCallDataFromChainPromise(
      pendingMultisigTxs,
      api,
      client
    )

    await Promise.all(callDataInfoFromChainPromises)
      .then((res) => {
        const definedTxs = res.filter((agg) => agg !== undefined) as CallDataInfoFromChain[]
        const timestampObj: AggGroupedByDate = {}

        // remove the proxy transaction that aren't for the selected proxy
        const relevantTxs = definedTxs.filter((agg) => {
          if (
            !isProxyCall(agg.name) ||
            !agg?.decodedCall ||
            !agg.decodedCall.value.value.real.value ||
            skipProxyCheck
          ) {
            return true
          }

          const isForCurrentProxy =
            agg.decodedCall.value.value.real.value === selectedMultiProxy?.proxy

          if (!isForCurrentProxy) {
            console.warn('call filtered, current proxy:', selectedMultiProxy?.proxy, 'call:', agg)
          }

          return isForCurrentProxy
        })

        // sort by date, the newest first
        const sorted = relevantTxs.sort(sortByLatest)

        // populate the object and sort by data
        sorted.forEach((data) => {
          const date = dayjs(data.timestamp).format('LL')
          const previousData = timestampObj[date] || []
          timestampObj[date] = [...previousData, data]
        })

        setTxWithCallDataByDate(timestampObj)
      })
      .finally(() => {
        setIsLoading(false)
      })
      .catch(console.error)
  }, [
    api,
    chainInfo?.isEthereum,
    client,
    multisigAddresses,
    selectedMultiProxy?.proxy,
    skipProxyCheck
  ])

  useEffect(() => {
    refresh()
  }, [refresh])

  const multisigIds = useAccountId(multisigAddresses)
  // re-fetch the on-chain if some new event appeared for any of the
  // multisig we are watching
  const { data: multisigsCallsData } = useMultisigCallQuery({ multisigIds })

  useEffect(() => {
    if (!multisigsCallsData) return
    refresh()
  }, [multisigsCallsData, refresh])

  return { isLoading, txWithCallDataByDate, refresh }
}
