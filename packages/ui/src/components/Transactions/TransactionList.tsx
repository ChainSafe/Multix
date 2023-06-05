import { Box, CircularProgress, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { PendingTx, usePendingTx } from '../../hooks/usePendingTx'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { ApiPromise } from '@polkadot/api'
import { useApi } from '../../contexts/ApiContext'
import { getDifference, getDisplayArgs, getIntersection } from '../../utils'
import { useAccounts } from '../../contexts/AccountsContext'
import { ISanitizedCall, parseGenericCall } from '../../utils'
import { GenericCall } from '@polkadot/types'
import { AnyJson, AnyTuple } from '@polkadot/types/types'
import { Flare as FlareIcon } from '@mui/icons-material'
import Transaction from './Transaction'
import { HexString } from '../../types'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export interface AggregatedData {
  callData?: HexString
  hash?: string
  name?: string
  args?: AnyJson
  info?: PendingTx['info']
  from: string
  timestamp: Date | undefined
}

type AggGroupedByDate = { [index: string]: AggregatedData[] }

interface Props {
  className?: string
}

export const getMultisigInfo = (c: ISanitizedCall): Partial<AggregatedData>[] => {
  const result: Partial<AggregatedData>[] = []

  const getCallResult = (c: ISanitizedCall) => {
    if (typeof c.method !== 'string' && c.method.pallet === 'multisig') {
      if (c.method.method === 'asMulti' && typeof c.args.call?.method !== 'string') {
        result.push({
          name: `${c.args.call?.method?.pallet}.${c.args.call?.method.method}`,
          hash: c.args.call?.hash,
          callData: c.args.callData as AggregatedData['callData']
        })
      } else {
        result.push({
          name: 'Unknown call',
          hash: (c.args?.call_hash as Uint8Array).toString() || undefined,
          callData: undefined
        })
      }
      // this is not a multisig call
      // try to dig deeper
    } else {
      if (c.args.calls) {
        for (const call of c.args.calls) {
          getCallResult(call)
        }
      } else if (c.args.call) {
        getCallResult(c.args.call)
      }
    }
  }

  getCallResult(c)
  return result
}

const getAgregatedDataPromise = (pendingTxData: PendingTx[], api: ApiPromise) =>
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

    // console.log("multisigInfos", multisigInfos)

    const info = multisigInfos.find(({ name, hash, callData }) => {
      if (!!hash && hash === pendingTx.hash) {
        return { name, hash, callData }
      }

      return false
    })

    if (!info) {
      console.log('oops we didnot find the right extrinsic', multisigInfos, pendingTx.hash)
      return
    }

    const { name, hash, callData } = info

    let call: false | GenericCall<AnyTuple> = false
    try {
      call = !!callData && !!hash && ext.registry.createType('Call', callData)
    } catch (error) {
      console.error('Error in TransactionList')
      console.error(error)
    }

    return {
      callData,
      hash: hash || pendingTx.hash,
      name,
      args: getDisplayArgs(call),
      info: pendingTx.info,
      from: pendingTx.from,
      timestamp: date
    } as AggregatedData
  })

const TransactionList = ({ className }: Props) => {
  const [aggregatedData, setAggregatedData] = useState<AggGroupedByDate>({})
  const { selectedMultiProxy, getMultisigByAddress } = useMultiProxy()
  const {
    data: pendingTxData,
    isLoading: isLoadingPendingTxs,
    refresh
  } = usePendingTx(selectedMultiProxy)
  const { api, isApiReady } = useApi()
  const { ownAddressList } = useAccounts()

  useEffect(() => {
    if (!isApiReady || !api) {
      return
    }

    if (!pendingTxData || !pendingTxData.length) {
      setAggregatedData({})
      return
    }

    const agregatedDataPromise = getAgregatedDataPromise(pendingTxData, api)

    Promise.all(agregatedDataPromise)
      .then((res) => {
        const filtered = res.filter((agg) => agg !== undefined) as AggregatedData[]
        const timestampObj: AggGroupedByDate = {}

        // sort by date
        const sorted = filtered.sort((a, b) => {
          if (!a.timestamp || !b.timestamp) return 0

          return a.timestamp.valueOf() - b.timestamp.valueOf()
        })

        // populate the object
        sorted.forEach((data) => {
          const date = dayjs(data.timestamp).format('LL')
          const previousData = timestampObj[date] || []
          timestampObj[date] = [...previousData, data]
        })

        setAggregatedData(timestampObj)
      })
      .catch(console.error)
  }, [api, pendingTxData, isApiReady, selectedMultiProxy])

  return (
    <Box className={className}>
      {isLoadingPendingTxs && (
        <Box className="loader">
          <CircularProgress />
        </Box>
      )}
      {!pendingTxData.length && !isLoadingPendingTxs && (
        <Paper className="noCall">
          <FlareIcon className="noCallIcon" />
          <div className="noCallText">You're all set!</div>
        </Paper>
      )}
      {!!pendingTxData.length &&
        Object.entries(aggregatedData).map(([date, aggregatedData]) => {
          return (
            <Box>
              <DateContainerStyled>{date}</DateContainerStyled>
              {aggregatedData.map((agg, index) => {
                const { callData, info, from } = agg
                const multisig = getMultisigByAddress(from)

                if (!info || !multisig?.threshold) return null

                const multisigSignatories = multisig?.signatories || []
                // if the threshold is met, but the transaction is still not executed
                // it means we need one signtory to submit with asMulti
                // so any signatory should be able to approve (again)
                const neededSigners =
                  info?.approvals.length >= multisig.threshold
                    ? multisigSignatories
                    : getDifference(multisigSignatories, info?.approvals)
                const possibleSigners = getIntersection(neededSigners, ownAddressList)
                const isProposer = !!info?.depositor && ownAddressList.includes(info.depositor)

                // if we have the proposer in the extension it can always reject the proposal
                if (isProposer) {
                  possibleSigners.push(info.depositor)
                }

                return (
                  <Transaction
                    key={`${index}-${callData}`}
                    aggregatedData={agg}
                    isProposer={isProposer}
                    onSuccess={refresh}
                    possibleSigners={possibleSigners}
                    multisigSignatories={multisigSignatories}
                    threshold={multisig.threshold}
                  />
                )
              })}
            </Box>
          )
        })}
    </Box>
  )
}

const DateContainerStyled = styled(Box)`
  margin-bottom: 0.3rem;
`

export default styled(TransactionList)(
  ({ theme }) => `
  .noCallIcon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .noCall {
    background-color: ${theme.custom.background.backgroundColorLightGray};
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 2rem;
  }

  .loader {
    display: flex;
    justify-content: center;
  }
`
)
