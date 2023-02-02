import { Paper, Button } from "@mui/material"
import styled from "styled-components"
import CallInfo from "../CallInfo"
import GestureIcon from '@mui/icons-material/Gesture';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { AggregatedData } from "./ProposalList";
import { useCallback, useState } from "react";
import ProposalSigningModal from "../modals/ProposalSigning";

interface Props {
    className?: string
    aggregatedData: AggregatedData
    isProposer: boolean
    possibleSigners: string[]
    onSuccess: () => void
}

const Proposal = ({ className, aggregatedData, isProposer, possibleSigners, onSuccess }: Props) => {
    const [isSigningModalOpen, setIsSigningModalOpen] = useState(false)

    const onClose = useCallback(() => {
        setIsSigningModalOpen(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsSigningModalOpen(true)
    }, [])
    //callWrapper

    return (
        <Paper
            className={className}
        // key={`${index}-${callData}`}
        >
            {!aggregatedData.callData
                ? <QuestionMarkIcon className="callIcon unknownCall" />
                : <GestureIcon className="callIcon" />
            }

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

export default styled(Proposal)(({ theme }) => `
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
`)