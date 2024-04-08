import { useCallback, useEffect, useState } from 'react'
import { useMultiProxy } from '../contexts/MultiProxyContext'
import { HexString, MultisigStorageInfo } from '../types'
import { useMultisigCallQuery } from './useQueryMultisigCalls'
import { isEmptyArray } from '../utils'
import { useAccountId } from './useAccountId'
import { ApiPromise } from '@polkadot/api'
import { useApi } from '../contexts/ApiContext'
import { ISanitizedCall, getDisplayArgs, isProxyCall, parseGenericCall } from '../utils'
import { GenericCall } from '@polkadot/types'
import { AnyJson, AnyTuple } from '@polkadot/types/types'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export interface PendingTx {
  from: string
  hash: string
  info: MultisigStorageInfo
}

export interface CallDataInfoFromChain {
  callData?: HexString
  hash?: string
  name?: string
  args?: AnyJson
  info?: PendingTx['info']
  from: string
  timestamp?: Date
  multiProxyAddress?: string
}

type AggGroupedByDate = { [index: string]: CallDataInfoFromChain[] }

export const getMultisigInfo = (call: ISanitizedCall): Partial<CallDataInfoFromChain>[] => {
  const result: Partial<CallDataInfoFromChain>[] = []

  const getCallResult = ({ args, method }: ISanitizedCall) => {
    if (typeof method !== 'string' && method.pallet === 'multisig') {
      if (method.method === 'asMulti' && typeof args.call?.method !== 'string') {
        result.push({
          name: `${args.call?.method?.pallet}.${args.call?.method.method}`,
          hash: args.call?.hash,
          callData: args.callData as CallDataInfoFromChain['callData']
        })
      } else {
        result.push({
          name: 'Unknown call',
          hash: (args?.call_hash as Uint8Array).toString() || undefined,
          callData: undefined
        })
      }
      // this is not a multisig call
      // try to dig deeper
    } else {
      if (args.calls) {
        for (const call of args.calls) {
          getCallResult(call)
        }
      } else if (args.call) {
        getCallResult(args.call)
      }
    }
  }

  getCallResult(call)
  return result
}

const getCallDataFromChainPromise = (pendingTxData: PendingTx[], api: ApiPromise) =>
  pendingTxData.map(async (pendingTx) => {
    const blockHash = await api.rpc.chain.getBlockHash(pendingTx.info.when.height)
    const signedBlock = await api.rpc.chain.getBlock(blockHash)

    let date: Date | undefined

    // get the timestamp which is an unsigned extrinsic set by the validator in each block
    // the information for each of the contained extrinsics
    signedBlock.block.extrinsics.some(({ method: { args, method, section } }) => {
      // check for timestamp.set
      if (section === 'timestamp' && method === 'set') {
        // extract the Option<Moment> as Moment
        const moment = args.toString()

        // convert to date (unix ms since epoch in Moment - exactly as per the Rust code)
        date = new Date(Number(moment))
        return true
      }

      return false
    })

    const ext = signedBlock.block.extrinsics[pendingTx.info.when.index]

    const decoded = parseGenericCall(ext.method as GenericCall, ext.registry)
    // console.log('pendingTxData', pendingTxData)
    // console.log('decoded', decoded)
    const multisigInfos = getMultisigInfo(decoded) || {}

    const info = multisigInfos.find(({ name, hash, callData }) => {
      if (!!hash && hash === pendingTx.hash) {
        return { name, hash, callData }
      }

      return false
    })

    if (!info) {
      console.log('oops we did not find the right extrinsic', multisigInfos, pendingTx.hash)
      return
    }

    const { name, hash, callData } = info

    let call: false | GenericCall<AnyTuple> = false
    try {
      call = !!callData && !!hash && ext.registry.createType('Call', callData)
    } catch (error) {
      console.error('Error in getCallDataFromChainPromise', error)
    }

    return {
      callData,
      hash: hash || pendingTx.hash,
      name,
      args: getDisplayArgs(call),
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
  const { api, chainInfo } = useApi()
  const [txWithCallDataByDate, setTxWithCallDataByDate] = useState<AggGroupedByDate>({})
  const { selectedMultiProxy } = useMultiProxy()

  // refresh the pending TX for the set of multisig addresses
  const refresh = useCallback(async () => {
    setTxWithCallDataByDate({})

    if (!api) return

    if (isEmptyArray(multisigAddresses)) return

    if (!api?.query?.multisig?.multisigs) return

    setIsLoading(true)

    const pendingMultisigTxs: PendingTx[] = []

    const callsPromises = multisigAddresses.map((address) =>
      api.query.multisig.multisigs.entries(address)
    )

    await Promise.all(callsPromises)
      .then((res1) => {
        res1.forEach((res, index) => {
          res.forEach((storage) => {
            // this is supposed to be the multisig address that we asked the storage for
            const multisigFromChain = (storage[0].toHuman() as Array<string>)[0]
            const hash = (storage[0].toHuman() as Array<string>)[1]
            const info = storage[1].toJSON() as unknown as MultisigStorageInfo
            if (chainInfo?.isEthereum) {
              info.approvals = info.approvals.map((approval) => approval.toLowerCase())
            }

            // Fix for ghost proposals for https://github.com/polkadot-js/apps/issues/9103
            // These 2 should be the same
            if (multisigFromChain.toLowerCase() !== multisigAddresses[index].toLowerCase()) {
              console.error(
                'The onchain call and the one found in the block donot correspond',
                multisigFromChain,
                multisigAddresses[index]
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

    const callDataInfoFromChainPromises = getCallDataFromChainPromise(pendingMultisigTxs, api)

    await Promise.all(callDataInfoFromChainPromises)
      .then((res) => {
        const definedTxs = res.filter((agg) => agg !== undefined) as CallDataInfoFromChain[]
        const timestampObj: AggGroupedByDate = {}

        // remove the proxy transaction that aren't for the selected proxy
        const relevantTxs = definedTxs.filter((agg) => {
          if (
            !isProxyCall(agg.name) ||
            !agg?.args ||
            !(agg.args as any).real.Id ||
            skipProxyCheck
          ) {
            return true
          }

          const isForCurrentProxy = (agg.args as any).real.Id === selectedMultiProxy?.proxy

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
  }, [api, chainInfo?.isEthereum, multisigAddresses, selectedMultiProxy?.proxy, skipProxyCheck])

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
