import { Paper, Button } from "@mui/material"
import { styled }  from "@mui/material/styles"
import CallInfo from "../CallInfo"
import GestureIcon from '@mui/icons-material/Gesture';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { AggregatedData } from "./TransactionList";
import { useCallback, useMemo, useState } from "react";
import ProposalSigningModal from "../modals/ProposalSigning";
import { Badge } from "@mui/material";
import { isProxyCall } from "../../utils";
import { AccountBadge } from "../../types";


interface Props {
  className?: string
  aggregatedData: AggregatedData
  isProposer: boolean
  possibleSigners: string[]
  onSuccess: () => void
}

const Transaction = ({ className, aggregatedData, isProposer, possibleSigners, onSuccess }: Props) => {
  const [isSigningModalOpen, setIsSigningModalOpen] = useState(false)
  const isProxy = useMemo(() => isProxyCall(aggregatedData.name), [aggregatedData])
  // FIXME this is duplicated
  const appliedClass = useMemo(() => isProxy
    ? "blue"
    : "red", [isProxy])

  const onClose = useCallback(() => {
    setIsSigningModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsSigningModalOpen(true)
  }, [])

  return (
    <Paper className={className}>
      <Badge
        className={`badge ${appliedClass}`}
        color="primary"
        badgeContent={isProxy ? AccountBadge.PURE : AccountBadge.MULTI}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
      >
        {!aggregatedData.callData
          ? <QuestionMarkIcon className="callIcon unknownCall" />
          : <GestureIcon className="callIcon" />
        }
      </Badge>

      <CallInfo
        aggregatedData={aggregatedData}
        children={
          (isProposer || possibleSigners.length > 0) && (
            <div className="buttonWrapper">
              <Button onClick={onOpenModal}>Review</Button>
            </div>
          )
        }
      />
      {isSigningModalOpen && (
        <ProposalSigningModal
          possibleSigners={possibleSigners}
          onClose={onClose}
          proposalData={aggregatedData}
          onSuccess={onSuccess}
        />
      )}
    </Paper>
  )
}

export default styled(Transaction)(({ theme }) => `
    display: flex;
    flex-direction: row;
    margin-left: .5rem;
    margin-bottom: 1rem;

  .buttonWrapper {
    flex: 1;
    align-self: flex-end;
    text-align: end;
    margin-right: .5rem;
    margin-bottom: .5rem;
  }

  .callIcon {
    font-size: 7rem;
    background-color: ${theme.custom.background.backgroundColorLightGray};
    margin: .5rem;
    padding: 1rem;
    height: auto;

    &.unknownCall {
      height: 5rem;
    }
  }

    // FIXME this is duplicated
  .badge > .MuiBadge-badge {
    left: 29px;
    top: 19px;
    border-radius: 0 50px 50px 50px;
  }
  
  .badge.red > .MuiBadge-badge {
    background-color: ${theme.custom.text.errorColor};
  }
`)