import Expander from './Expander'
import { styled } from '@mui/material/styles'
import { AggregatedData } from './Transactions/TransactionList'
import { AnyJson } from '@polkadot/types/types'
import { ReactNode, useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { isProxyCall } from '../utils/isProxyCall'
import { formatBnBalance } from '../utils/formatBnBalance'
import MultisigCompactDisplay from './MultisigCompactDisplay'

interface Props {
  aggregatedData: AggregatedData
  expanded?: boolean
  children?: ReactNode
  className?: string
  badge?: string
}

interface CreateTreeParams {
  args: AnyJson
  decimals: number
  unit: string
  name?: string
}

const createUlTree = ({ name, args, decimals, unit }: CreateTreeParams) => {
  if (!args) return
  if (!name) return

  const isBalancesTransferAlike = !!['balances.transfer', 'balances.transferKeepAlive'].includes(
    name
  )
  const isProxyCreationDeletion = !!['proxy.addProxy', 'proxy.removeProxy'].includes(name)

  return (
    <ul className="params">
      {Object.entries(args).map(([key, value]) => {
        const destAddress = value?.Id

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

        // show nice value
        if (isBalancesTransferAlike && key === 'value') {
          const balance = formatBnBalance(value.replace(/,/g, ''), decimals, {
            withThousandDelimitor: true,
            tokenSymbol: unit,
            numberAfterComma: 4
          })
          return (
            <li key={key}>
              {key}: {balance}
            </li>
          )
        }

        return (
          <li key={key}>
            {key}:{' '}
            {typeof value === 'object'
              ? createUlTree({ name, args: value, decimals, unit })
              : value}
          </li>
        )
      })}
    </ul>
  )
}

const filterProxyProxy = (agg: AggregatedData): AggregatedData => {
  const { args, name } = agg
  const isProxy = isProxyCall(name)

  if (!isProxy || !(args as { [index: string]: AnyJson })?.call) {
    return agg
  }

  const call = (args as any).call

  const newName = `${call?.section}.${call?.method}`
  const newArgs = call?.args
  return {
    ...agg,
    name: newName,
    args: newArgs
  }
}

const CallInfo = ({ aggregatedData, expanded = false, children, className, badge }: Props) => {
  const { args, name } = filterProxyProxy(aggregatedData)
  const { chainInfo } = useApi()
  const decimals = useMemo(() => chainInfo?.tokenDecimals || 0, [chainInfo])
  const unit = useMemo(() => chainInfo?.tokenSymbol || '', [chainInfo])

  return (
    <div className={className}>
      <h4 className="callName">{name}</h4>
      {args && Object.keys(args).length > 0 && (
        <Expander
          expanded={expanded}
          title="Params"
          content={createUlTree({ name, args, decimals, unit })}
        />
      )}
      {children}
    </div>
  )
}

export default styled(CallInfo)(
  ({ theme }) => `
  flex: 1;
  overflow: hidden;

  .params {
    word-wrap: break-word;
  }

  .callName {
    margin-top: 0.5rem;
    margin-left: .5rem;
    margin-bottom: 1rem;
  }
`
)
