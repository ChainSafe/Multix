import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMultiProxy } from '../contexts/MultiProxyContext'
import { ApiDescriptors, MultisigStorageInfo } from '../types'
import { useMultisigCallQuery } from './useQueryMultisigCalls'
import { isEmptyArray } from '../utils/arrayUtils'
import { isProxyCall } from '../utils/isProxyCall'
import { useAccountId } from './useAccountId'
import { IApiContext } from '../contexts/ApiContext'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { PolkadotClient, Transaction } from 'polkadot-api'
import { Bin, Binary, compact, HexString, Tuple } from '@polkadot-api/substrate-bindings'
import { hashFromTx } from '../utils/txHash'
import { getEncodedCallFromDecodedTx } from '../utils/getEncodedCallFromDecodedTx'
import { getExtrinsicDecoder } from '@polkadot-api/tx-utils'
import { getPubKeyFromAddress } from '../utils/getPubKeyFromAddress'
import { useHasIdentityFeature } from './useHasIdentityFeature'
import { useAnyApi } from './useAnyApi'

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

export type AggGroupedByDate = { [index: string]: CallDataInfoFromChain[] }

const opaqueMetadata = Tuple(compact, Bin(Infinity)).dec

const getExtDecoderAt = async (
  api: IApiContext<ApiDescriptors>['api'],
  client: PolkadotClient,
  blockHash?: string
) => {
  if (!api) return

  const rawMetadata = await (blockHash && !import.meta.env.DEV
    ? client
        ._request<{
          result: HexString
        }>('archive_unstable_call', [blockHash, 'Metadata_metadata', ''])
        .then((x) => opaqueMetadata(x.result)[1])
    : api.apis.Metadata.metadata())

  const decoder = await getExtrinsicDecoder(rawMetadata.asOpaqueBytes())

  return decoder
}

const getMultisigInfo = async (
  call: Transaction<any, any, any, any>['decodedCall'],
  api: IApiContext<ApiDescriptors>['api']
): Promise<Partial<CallDataInfoFromChain>[]> => {
  if (!api) return []

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
  return result
}

const getCallDataFromChainPromise = (
  pendingTxData: PendingTx[],
  api: IApiContext<ApiDescriptors>['api'],
  client: PolkadotClient
) =>
  pendingTxData.map(async (pendingTx) => {
    const blockNumber = pendingTx.info.when.height
    const blockHashes = await client._request('archive_unstable_hashByHeight', [blockNumber])
    const blockHash = (Array.isArray(blockHashes) ? blockHashes?.[0] : blockHashes) as
      | HexString
      | undefined

    if (!blockHash) {
      console.log('no hash found for height', blockNumber)
      return
    }

    const body: HexString[] = await client._request('archive_unstable_body', [blockHash])

    let date: Date | undefined

    const decoder = await getExtDecoderAt(api, client, blockHash)

    if (!decoder || !api) return

    const txPromises = body.map((extrinsics) => {
      const decodedExtrinsic = decoder(extrinsics)
      const toDecode = decodedExtrinsic.callData
      // console.log('-----------------------------')
      // console.log(decodedExtrinsic)
      return api.txFromCallData(toDecode)
    })

    const allDecodedTxs = await Promise.all(txPromises)

    // allDecodedTxs.forEach((txs) => {
    //   console.log('-------------decoded')
    //   console.log(txs)
    // })

    // get the timestamp which is an unsigned extrinsic set by the validator in each block
    // the information for each of the contained extrinsics
    allDecodedTxs.some(({ decodedCall: { type, value } }) => {
      if (type === 'Timestamp' && value.type === 'set') {
        const moment = value.value.now as string

        // convert to date (unix ms since epoch in Moment - exactly as per the Rust code)
        date = new Date(Number(moment))
        return true
      }

      return false
    })

    const ext = allDecodedTxs[pendingTx.info.when.index]
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

interface PendingTxParams {
  multisigAddresses: string[]
  skipProxyCheck?: boolean
  withPplChain?: boolean
}

export const usePendingTx = ({
  multisigAddresses,
  skipProxyCheck = false,
  withPplChain = false
}: PendingTxParams) => {
  const { hasPplChain } = useHasIdentityFeature()

  const [isLoading, setIsLoading] = useState(true)
  const { api, chainInfo, client } = useAnyApi({ withPplApi: hasPplChain && withPplChain })

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
        const definedTxs = res.filter(Boolean) as CallDataInfoFromChain[]
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
    if (!hasPplChain && withPplChain) {
      setIsLoading(false)
      return
    }

    refresh()
  }, [refresh, hasPplChain, withPplChain])

  const multisigPubKeys = useMemo(
    () => getPubKeyFromAddress(multisigAddresses),
    [multisigAddresses]
  )
  const multisigIds = useAccountId(multisigPubKeys)
  // re-fetch the on-chain if some new event appeared for any of the
  // multisig we are watching
  const { data: multisigsCallsData } = useMultisigCallQuery({ multisigIds })

  useEffect(() => {
    if (!multisigsCallsData) return
    if (!hasPplChain && withPplChain) {
      setIsLoading(false)
      return
    }

    refresh()
  }, [multisigsCallsData, refresh, withPplChain, hasPplChain])

  return { isLoading, txWithCallDataByDate, refresh }
}
