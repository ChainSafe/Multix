import Expander from './Expander'
import { styled } from '@mui/material/styles'
import { ReactNode, useMemo } from 'react'
import { ApiType, useApi } from '../contexts/ApiContext'
import { getExtrinsicName } from '../utils/getExtrinsicName'
import { isProxyCall } from '../utils/isProxyCall'
import { formatBigIntBalance } from '../utils/formatBnBalance'
import { HiOutlineArrowTopRightOnSquare as LaunchIcon } from 'react-icons/hi2'
import { Link } from './library'
import { usePjsLinks } from '../hooks/usePjsLinks'
import { Alert } from '@mui/material'
import { CallDataInfoFromChain } from '../hooks/usePendingTx'
import { JSONprint } from '../utils/jsonPrint'
import { Transaction } from 'polkadot-api'
import MultisigCompactDisplay from './MultisigCompactDisplay'
import { ChainInfoHuman } from '../contexts/PeopleChainApiContext'

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
  chainInfo?: ChainInfoHuman
}

const isWhiteListedCall = (type: string, value: string) => {
  return [
    'Balances.transfer',
    'Balances.transfer_keep_alive',
    'Balances.transfer_all',
    'Balances.transfer_allow_death',
    'Bounties.award_bounty',
    'ChildBounties.award_child_bounty',
    'ChildBounties.add_child_bounty',
    'ChildBounties.propose_curator',
    'ChildBounties.accept_curator',
    'ChildBounties.claim_child_bounty',
    'Staking.bond',
    'Staking.unbond',
    'Staking.bond_extra',
    'Staking.rebond',
    'Staking.nominate',
    'Proxy.add_proxy',
    'Proxy.remove_proxy',
    'Proxy.kill_pure',
    'ConvictionVoting.delegate',
    'ConvictionVoting.vote',
    'ConvictionVoting.remove_vote',
    'ConvictionVoting.undelegate',
    'ConvictionVoting.unlock',
    // Hydration
    'Tokens.transfer'
  ].includes(`${type}.${value}`)
}

const isBatchedCall = (type: string, value: string) => {
  return ['Utility.batch', 'Utility.batch_all', 'Utility.force_batch'].includes(`${type}.${value}`)
}

const formatBalance = (amount: bigint, label: string, chainInfo: ChainInfoHuman, id: string) => (
  <li key={id}>
    {label}:{' '}
    {formatBigIntBalance(amount, chainInfo?.tokenDecimals, {
      tokenSymbol: chainInfo?.tokenSymbol
    })}
  </li>
)

const eachFieldRendered = (value: Record<string, any>, chainInfo: ChainInfoHuman, id: string) => {
  // for transfer, nomination, staking, bounties
  // We should make sure this is not done for hydration
  const bigIntKey =
    chainInfo.tokenSymbol !== 'HDX' &&
    ['value', 'fee', 'max_additional', 'balance'].find((key) => typeof value[key] === 'bigint')

  if (bigIntKey) {
    return formatBalance(value[bigIntKey], bigIntKey, chainInfo, id)
  }

  // for Staking.nominate
  if (Array.isArray(value.targets) && value.targets.length > 0) {
    return (
      <li key={`${id}-targets`}>
        targets:{' '}
        <ul>
          {value.targets.map((target: any, index) => {
            const address = target.type === 'Id' ? target.value : null

            if (address) {
              return (
                <li key={`${index}-${address}`}>
                  <MultisigCompactDisplay address={address} />
                </li>
              )
            }

            return <li key={`${index}-${address}`}>{JSONprint(target)}</li>
          })}
        </ul>
      </li>
    )
  }

  // for Staking.bond
  if (value.payee?.type === 'Account') {
    return (
      <li key={`payee-${value.payee?.value}`}>
        payee: <MultisigCompactDisplay address={value.payee?.value} />
      </li>
    )
  }

  // old style accounts
  if (value.dest && typeof value.dest === 'string') {
    return (
      <li key={`dest-${value.dest}`}>
        dest: <MultisigCompactDisplay address={value.dest} />
      </li>
    )
  }

  // that's an Account with MultiAddress.Id
  const multiAddressKey = [
    'dest',
    'beneficiary',
    'curator',
    'delegate',
    'spawner',
    'to',
    'target'
  ].find((key) => typeof value[key] === 'object' && value[key].type === 'Id')

  if (multiAddressKey) {
    return (
      <li key={`multiadd-${value[multiAddressKey]?.value}`}>
        {multiAddressKey}: <MultisigCompactDisplay address={value[multiAddressKey]?.value} />
      </li>
    )
  }

  return <li key={`not-pretty-decoded-${id}`}>{JSONprint(value)} </li>
}

interface PreparedCallParams {
  decodedCall: CreateTreeParams['decodedCall']
  chainInfo: ChainInfoHuman
  isBatch?: boolean
  isFirstCall?: boolean
}
const preparedCall = ({
  decodedCall,
  chainInfo,
  isBatch = false,
  isFirstCall = false
}: PreparedCallParams) => {
  if (!decodedCall) return

  if (isBatchedCall(decodedCall.type, decodedCall.value.type)) {
    const lowerLevelCalls = decodedCall.value.value.calls as Array<Record<string, any>>

    return lowerLevelCalls.map((call, index) => {
      return (
        <BatchCallStyled key={`${call.type}-${index}`}>
          {preparedCall({
            decodedCall: call as CreateTreeParams['decodedCall'],
            chainInfo,
            isBatch: true
          })}
        </BatchCallStyled>
      )
    })
  }

  if (isWhiteListedCall(decodedCall.type, decodedCall.value.type)) {
    const lowerLevelCall = decodedCall.value.value
    if (typeof lowerLevelCall === 'object') {
      return (
        <>
          {isBatch && (
            <ExtrinsicNameStyled>
              {getExtrinsicName(decodedCall.type, decodedCall.value.type)}
            </ExtrinsicNameStyled>
          )}
          <ul>
            {Object.entries(lowerLevelCall).map(([key, value], index) =>
              eachFieldRendered({ [key]: value }, chainInfo, `${decodedCall.type}-${index}`)
            )}
          </ul>
        </>
      )
    } else {
      return <PreStyled>{JSONprint(decodedCall)}</PreStyled>
    }
  }

  if (isFirstCall) {
    return <PreStyled>{JSONprint(decodedCall.value.value)}</PreStyled>
  }

  return <PreStyled>{JSONprint(decodedCall)}</PreStyled>
}

const createUlTree = ({ name, decodedCall, chainInfo }: CreateTreeParams) => {
  if (!decodedCall) return
  if (!name) return
  if (!chainInfo) return

  return preparedCall({ decodedCall, chainInfo, isFirstCall: true })
}

const filterProxyProxy = (agg: Props['aggregatedData']): Props['aggregatedData'] => {
  const { decodedCall, name } = agg
  const isProxy = isProxyCall(name)

  if (!isProxy || !decodedCall?.value.value.call) {
    return agg
  }

  const call = decodedCall.value.value.call

  const newName = getExtrinsicName(call.type, call.value.type)
  return {
    ...agg,
    name: newName,
    decodedCall: call
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
  const hasArgs = useMemo(() => decodedCall && decodedCall?.value?.value, [decodedCall])

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
          content={createUlTree({ name, decodedCall, decimals, unit, api, chainInfo })}
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
  margin-top: 0;
  overflow: auto;
`

const BatchCallStyled = styled('div')`
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  border: 1px solid ${({ theme }) => theme.custom.gray[400]};
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 1rem;
  padding-top: 0;
`

const ExtrinsicNameStyled = styled('span')`
  font-weight: 500;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  margin-left: -1rem;
  border-top-left-radius: 0.75rem;
  padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  display: inline-block;
`

export default styled(CallInfo)`
  flex: 1;
  overflow: hidden;

  .params {
    word-wrap: break-word;
  }
`
