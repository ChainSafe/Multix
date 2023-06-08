import Expander from './Expander'
import { styled } from '@mui/material/styles'
import { AggregatedData } from './Transactions/TransactionList'
import { AnyJson } from '@polkadot/types/types'
import { ReactNode, useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { getExtrinsicName, isProxyCall } from '../utils'
import { formatBnBalance } from '../utils/formatBnBalance'
import MultisigCompactDisplay from './MultisigCompactDisplay'
import { Launch as LaunchIcon } from '@mui/icons-material'
import { useNetwork } from '../contexts/NetworkContext'
import NoCallInfo from './NoCallInfo'
import { Link } from './library'

interface Props {
  aggregatedData: AggregatedData
  expanded?: boolean
  children?: ReactNode
  className?: string
  withLink?: boolean
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

  const isBalancesTransferAlike = ['balances.transfer', 'balances.transferKeepAlive'].includes(name)
  const isProxyCreationDeletion = ['proxy.addProxy', 'proxy.removeProxy'].includes(name)

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
  withLink = false
}: Props) => {
  const { args, name } = filterProxyProxy(aggregatedData)
  const { chainInfo } = useApi()
  const decimals = useMemo(() => chainInfo?.tokenDecimals || 0, [chainInfo])
  const unit = useMemo(() => chainInfo?.tokenSymbol || '', [chainInfo])
  const { selectedNetworkInfo } = useNetwork()
  const link = useMemo(() => {
    const encodedRpc = encodeURIComponent(selectedNetworkInfo?.rpcUrl || '')
    return `https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=${encodedRpc}#/extrinsics/decode/${aggregatedData.callData}`
  }, [aggregatedData, selectedNetworkInfo])

  return (
    <div className={className}>
      <CallNameStyled className="callName">
        {name}
        {!!aggregatedData.callData && withLink && (
          <Linkstyled
            href={link}
            target="_blank"
          >
            <LaunchIcon
              className="icon"
              fontSize="small"
            />
          </Linkstyled>
        )}
      </CallNameStyled>
      {!aggregatedData.callData && <NoCallInfo />}
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

const CallNameStyled = styled('h4')`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
`

const Linkstyled = styled(Link)(
  ({ theme }) => `
  text-decoration: none;
  display: flex;
  color: ${theme.custom.text.addressColorLightGray};
  align-items: center;

  .icon {
    margin-left: .5rem;
  }
`
)

export default styled(CallInfo)`
  flex: 1;
  overflow: hidden;

  .params {
    word-wrap: break-word;
  }
`
