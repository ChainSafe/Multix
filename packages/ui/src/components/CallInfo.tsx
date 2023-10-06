import Expander from './Expander'
import { styled } from '@mui/material/styles'
import { AggregatedData } from './Transactions/TransactionList'
import { AnyJson } from '@polkadot/types/types'
import { ReactNode, useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { getExtrinsicName, isProxyCall } from '../utils'
import { formatBnBalance } from '../utils/formatBnBalance'
import MultisigCompactDisplay from './MultisigCompactDisplay'
import { HiOutlineArrowTopRightOnSquare as LaunchIcon } from 'react-icons/hi2'
import { Link } from './library'
import { usePjsLinks } from '../hooks/usePjsLinks'
import { Alert } from '@mui/material'
import { ApiPromise } from '@polkadot/api'
import { isTypeBalance } from '../utils/isTypeBalance'

interface Props {
  aggregatedData: Omit<AggregatedData, 'from' | 'timestamp'>
  expanded?: boolean
  children?: ReactNode
  className?: string
  withLink?: boolean
  withProxyFiltered?: boolean
}

interface CreateTreeParams {
  args: AnyJson
  decimals: number
  unit: string
  name?: string
  api: ApiPromise
  typeName?: string
}

const handleBatchDisplay = ({
  value,
  decimals,
  unit,
  api,
  key
}: {
  value: any[]
  decimals: number
  unit: string
  key: string
  api: ApiPromise
}) =>
  value.map((call: any, index: number) => {
    const name = `${call.section}.${call.method}`
    return (
      <>
        <li key={`${key}-${index}`}>{name}</li>
        {createUlTree({
          name: `${call.section}.${call.method}`,
          args: call.args,
          decimals,
          unit,
          api
        })}
      </>
    )
  })

const handleBalanceDisplay = ({
  value,
  decimals,
  unit,
  key
}: {
  value: any
  decimals: number
  unit: string
  key: string
}) => {
  const balance = formatBnBalance(value.replace(/,/g, ''), decimals, {
    withThousandDelimiter: true,
    tokenSymbol: unit,
    numberAfterComma: 4
  })

  return (
    <li key={key}>
      {key}: {balance}
    </li>
  )
}

const getTypeName = (index: number, name: string, value: any, api: ApiPromise) => {
  const [palletFromName, methodFromName] = name.split('.')
  const pallet = value.section || palletFromName
  const method = value.method || methodFromName
  const metaArgs = !!pallet && !!method && api.tx[pallet][method].meta.args

  return (
    (!!metaArgs && metaArgs[index] && (metaArgs[index].toHuman().typeName as string)) || undefined
  )
}

const createUlTree = ({ name, args, decimals, unit, api, typeName }: CreateTreeParams) => {
  if (!args) return
  if (!name) return

  const isBalancesTransferAlike = ['balances.transfer', 'balances.transferKeepAlive'].includes(name)
  const isProxyCreationDeletion = ['proxy.addProxy', 'proxy.removeProxy'].includes(name)

  return (
    <ul className="params">
      {Object.entries(args).map(([key, value], index) => {
        const _typeName = typeName || getTypeName(index, name, value, api)

        if (_typeName === 'Vec<RuntimeCall>') {
          return handleBatchDisplay({ value, decimals, unit, api, key: `${key}-batch` })
        }

        // generically show nice value for Balance type
        if (!!_typeName && isTypeBalance(_typeName)) {
          return handleBalanceDisplay({ value, decimals, unit, key })
        }

        const destAddress = value?.Id || value
        // show nice dest
        if (
          ((isBalancesTransferAlike && key === 'dest') ||
            (isProxyCreationDeletion && key === 'delegate')) &&
          typeof destAddress === 'string'
        ) {
          return (
            <li key={key}>
              {key}: {<MultisigCompactDisplay address={destAddress} />}
            </li>
          )
        }

        return (
          <li key={key}>
            {key}:{' '}
            {typeof value === 'object'
              ? createUlTree({
                  name,
                  args: value,
                  decimals,
                  unit,
                  api,
                  typeName: _typeName
                })
              : value}
          </li>
        )
      })}
    </ul>
  )
}

const filterProxyProxy = (agg: Props['aggregatedData']): Props['aggregatedData'] => {
  const { args, name } = agg
  const isProxy = isProxyCall(name)

  if (!isProxy || !(args as { [index: string]: AnyJson })?.call) {
    return agg
  }

  const call = (args as any).call

  const newName = getExtrinsicName(call?.section, call?.method)
  const newArgs = call?.args
  return {
    ...agg,
    name: newName,
    args: newArgs
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
  const { args, name } = withProxyFiltered ? filterProxyProxy(aggregatedData) : aggregatedData
  const { chainInfo, api } = useApi()
  const decimals = useMemo(() => chainInfo?.tokenDecimals || 0, [chainInfo])
  const unit = useMemo(() => chainInfo?.tokenSymbol || '', [chainInfo])
  const { getDecodeUrl } = usePjsLinks()
  const link = useMemo(
    () => aggregatedData.callData && getDecodeUrl(aggregatedData.callData),
    [aggregatedData, getDecodeUrl]
  )

  return (
    <div className={className}>
      <CallNameStyled className="callName">
        {name}
        {!!aggregatedData.callData && withLink && (
          <Linkstyled
            href={link}
            target="_blank"
          >
            <LaunchIcon size={20} />
          </Linkstyled>
        )}
      </CallNameStyled>
      {!aggregatedData.callData && (
        <AlertStyled
          className={className}
          severity="info"
          variant="outlined"
        >
          No Call data found on-chain. Use Multix to initiate multisig transactions and avoid this
          annoyance.
        </AlertStyled>
      )}
      {args && !!api && Object.keys(args).length > 0 && (
        <Expander
          expanded={expanded}
          title="Params"
          content={createUlTree({ name, args, decimals, unit, api })}
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

const Linkstyled = styled(Link)`
  display: flex;
  padding-left: 0.5rem;
`

export default styled(CallInfo)`
  flex: 1;
  overflow: hidden;

  .params {
    word-wrap: break-word;
  }
`
