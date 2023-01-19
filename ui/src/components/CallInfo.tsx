import Expander from "./Expander";
import styled from "styled-components";
import { AggregatedData } from "./ProposalList";

interface Props {
    aggregatedData: AggregatedData
    expanded?: boolean
}

const CallInfo = ({ aggregatedData: { args, name }, expanded = false }: Props) => {
    return <div className="callInfo">
        <h4 className="callName">{name}</h4>
        {args && <Expander
            expanded={expanded}
            title="Params"
            content={
                <ul className="paramWrapper">
                    {Object.entries(args).map(([key, value]) =>
                        <li key={key}>
                            {key}: {value}
                        </li>
                    )}
                </ul>
            }
        />}
    </div>
}

export default styled(CallInfo)(({ theme }) => `

  .callName {
    margin-top: 0.5rem;
    margin-left: .5rem;
  }
`)