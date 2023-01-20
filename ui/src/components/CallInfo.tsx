import Expander from "./Expander";
import styled from "styled-components";
import { AggregatedData } from "./ProposalList";
import { AnyJson } from "@polkadot/types/types";
import { ReactNode } from "react";

interface Props {
  aggregatedData: AggregatedData
  expanded?: boolean
  children?: ReactNode
  className?: string
}

const createUlTree = (args: AnyJson) => {
  if (!args) return

  return <ul className="params">
    {Object.entries(args).map(([key, value]) => {
      return (<li key={key}>
        {key}: {typeof value === "object" ? createUlTree(value) : value}
      </li>)
    })}
  </ul>
}

const CallInfo = ({ aggregatedData: { args, name }, expanded = false, children, className }: Props) => {
  return <div className={className}>
    <h4 className="callName">{name}</h4>
    {args && <Expander
      expanded={expanded}
      title="Params"
      content={createUlTree(args)}
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