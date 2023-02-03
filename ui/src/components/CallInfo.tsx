import Expander from "./Expander";
import styled from "styled-components";
import { AggregatedData } from "./Proposals/ProposalList";
import { AnyJson } from "@polkadot/types/types";
import { ReactNode, useMemo } from "react";
import AccountDisplay from "./AccountDisplay";
import { formatBalance } from "@polkadot/util";
import { useApi } from "../contexts/ApiContext";
import { isProxyCall } from "../utils/isProxyCall";

interface Props {
  aggregatedData: AggregatedData
  expanded?: boolean
  children?: ReactNode
  className?: string
  badge?: string
}

const createUlTree = (args: AnyJson, isBalancesTransfer: boolean, decimals: number, unit: string) => {
  if (!args) return

  return <ul className="params">
    {Object.entries(args).map(([key, value]) => {
      const destAddress = value.Id

      // show nice dest
      if (isBalancesTransfer && key === "dest" && typeof destAddress === "string") {
        return <li key={key}>
          {key}: {<AccountDisplay address={destAddress} />}
        </li>
      }

      // show nice value
      if (isBalancesTransfer && key === "value") {
        const balance = formatBalance(value.replace(/,/g, ""), { decimals, withSi: false, withZero: true })
        return <li key={key}>
          {key}: {`${balance} ${unit}`}
        </li>
      }

      return (<li key={key}>
        {key}: {typeof value === "object" ? createUlTree(value, isBalancesTransfer, decimals, unit) : value}
      </li>)
    })}
  </ul>
}

const filterProxyProxy = (agg: AggregatedData): AggregatedData => {
  const { args, name } = agg
  const isProxy = isProxyCall(name);

  if (!isProxy || !(args as { [index: string]: AnyJson; })?.call) {
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
  const isBalancesTransferAlike = useMemo(() =>
    !!name && !!["balances.transfer", "balances.transferKeepAlive"].includes(name)
    , [name])
  const decimals = useMemo(() => Number(chainInfo?.tokenDecimals[0]), [chainInfo])
  const unit = useMemo(() => chainInfo?.tokenSymbol[0] || "", [chainInfo])

  return <div className={className}>
    <h4 className="callName">{name}</h4>
    {args && <Expander
      expanded={expanded}
      title="Params"
      content={createUlTree(args, isBalancesTransferAlike, decimals, unit)}
    />}
    {children}
  </div>
}

export default styled(CallInfo)(({ theme }) => `
  flex: 1;
  overflow: hidden;

  .params {
    word-wrap: break-word;
  }

  .callName {
    margin-top: 0.5rem;
    margin-left: .5rem;
  }
`)