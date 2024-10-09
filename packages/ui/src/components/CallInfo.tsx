import Expander from './Expander'
import { styled } from '@mui/material/styles'
import { ReactNode, useMemo } from 'react'
import { ApiType, useApi } from '../contexts/ApiContext'
import { getExtrinsicName } from '../utils/getExtrinsicName'
import { isProxyCall } from '../utils/isProxyCall'
// import { formatBigIntBalance } from '../utils/formatBnBalance'
// import MultisigCompactDisplay from './MultisigCompactDisplay'
import { HiOutlineArrowTopRightOnSquare as LaunchIcon } from 'react-icons/hi2'
import { Link } from './library'
import { usePjsLinks } from '../hooks/usePjsLinks'
import { Alert } from '@mui/material'
// import { isTypeBalanceWithBalanceCall, isTypeAccount } from '../utils'
import { CallDataInfoFromChain } from '../hooks/usePendingTx'
import { JSONprint } from '../utils/jsonPrint'
import { Transaction } from 'polkadot-api'

interface Props {
  aggregatedData: Omit<CallDataInfoFromChain, 'from' | 'timestamp'>
  expanded?: boolean
  children?: ReactNode
  className?: string
  withLink?: boolean
  withProxyFiltered?: boolean
}

interface CreateTreeParams {
  decodedCall?: Transaction<any, any, any, any>['decodedCall']
  decimals: number
  unit: string
  name?: string
  api: ApiType
}

// const handleCallDisplay = ({
//   call,
//   decimals,
//   unit,
//   api,
//   key
// }: {
//   call: Transaction<any, any, any, any>['decodedCall']
//   decimals: number
//   unit: string
//   key: string
//   api: ApiPromise
// }) => {
//   const name = `${call.type}.${call.value.type}`
//   return (
//     <>
//       <li key={key}>{name}</li>
//       {createUlTree({
//         name: name,
//         args: call.value.value,
//         decimals,
//         unit,
//         api
//       })}
//     </>
//   )
// }

// const handleBatchDisplay = ({
//   value,
//   decimals,
//   unit,
//   api,
//   key
// }: {
//   value: any[]
//   decimals: number
//   unit: string
//   key: string
//   api: ApiPromise
// }) =>
//   value.map((call: any, index: number) =>
//     handleCallDisplay({ call, decimals, unit, api, key: `${key}-${index}` })
//   )

// const handleBalanceDisplay = ({
//   value,
//   decimals,
//   unit,
//   key
// }: {
//   value: any
//   decimals: number
//   unit: string
//   key: string
// }) => {
//   const balance = formatBigIntBalance(value.replace(/,/g, ''), decimals, {
//     withThousandDelimiter: true,
//     tokenSymbol: unit,
//     numberAfterComma: 4
//   })

//   return (
//     <li key={key}>
//       {key}: {balance}
//     </li>
//   )
// }

// const handleValueDisplay = ({ value, typeName }: { value: any; typeName: string | undefined }) =>
//   typeName === 'bool' ? (value ? 'true' : 'false') : value

// const getTypeName = (index: number, name: string, api: ApiPromise) => {
//   const [pallet, method] = name.split('.')
//   const metaArgs = !!pallet && !!method && api.tx[pallet][method]?.meta?.args

//   return (
//     (!!metaArgs && metaArgs[index] && (metaArgs[index].toHuman().typeName as string)) || undefined
//   )
// }

const createUlTree = ({ name, decodedCall }: CreateTreeParams) => {
  if (!decodedCall) return
  if (!name) return

  return <PreStyled>{JSONprint(decodedCall.value.value)}</PreStyled>
  // return (
  //   <ul className="params">
  //     {Object.entries(decodedCall).map(([type, value], index) => {
  //       // const _typeName = typeName || getTypeName(index, name, api)

  //       // if (_typeName === 'Vec<RuntimeCall>') {
  //       //   return handleBatchDisplay({ value, decimals, unit, api, key: `${key}-batch` })
  //       // }

  //       // if (_typeName === 'RuntimeCall') {
  //       //   return handleCallDisplay({ call: value, decimals, unit, api, key: `${key}-call` })
  //       // }

  //       // // generically show nice value for Balance type
  //       // if (isTypeBalanceWithBalanceCall(_typeName, name)) {
  //       //   return handleBalanceDisplay({ value, decimals, unit, key })
  //       // }

  //       // const destAddress = value?.Id || value
  //       // if (isTypeAccount(_typeName) && typeof destAddress === 'string') {
  //       //   return (
  //       //     <li key={key}>
  //       //       {key}: {<MultisigCompactDisplay address={destAddress} />}
  //       //     </li>
  //       //   )
  //       // }

  //       return (
  //         <li key={`${type}-root-${index}`}>
  //           {`${value}.${value.type}`}
  //           {/*{createUlTree({
  //             name,
  //             args: value,
  //             decimals,
  //             unit,
  //             api
  //           })} */}
  //           <pre>{JSONprint(value)}</pre>
  //         </li>
  //       )
  //     })}
  //   </ul>
  // )
}

const filterProxyProxy = (agg: Props['aggregatedData']): Props['aggregatedData'] => {
  const { decodedCall, name } = agg
  const isProxy = isProxyCall(name)

  if (!isProxy || !decodedCall?.value.value.call) {
    return agg
  }

  const call = decodedCall.value.value.call

  const newName = getExtrinsicName(call.type, call.value.type)
  const newArgs = call?.value
  return {
    ...agg,
    name: newName,
    decodedCall: newArgs
  }
}

const CallInfo = ({
  aggregatedData,
  expanded = false,
  children,
  className,
  withLink = false,
  withProxyFiltered = true
}: Props) => {
  const { decodedCall, name } = withProxyFiltered
    ? filterProxyProxy(aggregatedData)
    : aggregatedData
  const { chainInfo, api } = useApi()
  const decimals = useMemo(() => chainInfo?.tokenDecimals || 0, [chainInfo])
  const unit = useMemo(() => chainInfo?.tokenSymbol || '', [chainInfo])
  const { getDecodeUrl } = usePjsLinks()
  const link = useMemo(
    () => aggregatedData.callData && getDecodeUrl(aggregatedData.callData),
    [aggregatedData, getDecodeUrl]
  )
  const hasArgs = useMemo(() => decodedCall && Object.keys(decodedCall).length > 0, [decodedCall])

  return (
    <div
      className={className}
      data-cy="container-call-info"
    >
      <CallNameStyled
        className="callName"
        data-cy="label-call-name"
      >
        {name}
        {!!aggregatedData.callData && withLink && (
          <LinkStyled
            href={link}
            target="_blank"
          >
            <LaunchIcon size={20} />
          </LinkStyled>
        )}
      </CallNameStyled>
      {!aggregatedData.callData && (
        <AlertStyled
          className={className}
          severity="info"
          variant="outlined"
          data-cy="alert-no-call-data"
        >
          No Call data found on-chain. Use Multix to initiate multisig transactions and avoid this
          annoyance.
        </AlertStyled>
      )}
      {!!api && hasArgs && (
        <Expander
          expanded={expanded}
          title="Params"
          content={createUlTree({ name, decodedCall, decimals, unit, api })}
        />
      )}
      {children}
    </div>
  )
}

const AlertStyled = styled(Alert)`
  margin-right: 0.5rem;
  border: 0;
`

const CallNameStyled = styled('h4')`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`

const LinkStyled = styled(Link)`
  display: flex;
  padding-left: 0.5rem;
`

const PreStyled = styled('pre')`
  overflow: auto;
`

export default styled(CallInfo)`
  flex: 1;
  overflow: hidden;

  .params {
    word-wrap: break-word;
  }
`
