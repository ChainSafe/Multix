import { Badge, Box, Button, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import CallInfo from '../CallInfo'
import GestureIcon from '@mui/icons-material/Gesture'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { AggregatedData } from './TransactionList'
import { useCallback, useMemo, useState } from 'react'
import ProposalSigningModal from '../modals/ProposalSigning'
import { isProxyCall } from '../../utils'
import { AccountBadge } from '../../types'
import TransactionProgress from './TransactionProgress'

interface Props {
  className?: string
  aggregatedData: AggregatedData
  isProposer: boolean
  possibleSigners: string[]
  onSuccess: () => void
  threshold: number
}

const Transaction = ({
  className,
  aggregatedData,
  isProposer,
  possibleSigners,
  onSuccess,
  threshold
}: Props) => {
  const [isSigningModalOpen, setIsSigningModalOpen] = useState(false)
  const isProxy = useMemo(() => isProxyCall(aggregatedData.name), [aggregatedData])
  // FIXME this is duplicated
  const appliedClass = useMemo(() => (isProxy ? 'blue' : 'red'), [isProxy])

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
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        {!aggregatedData.callData ? (
          <QuestionMarkIcon className="callIcon unknownCall" />
        ) : (
          <GestureIcon className="callIcon" />
        )}
      </Badge>
      <TransactionCallInfoBoxStyled>
        <CallInfo
          withLink
          aggregatedData={aggregatedData}
          children={
            (isProposer || possibleSigners.length > 0) && (
              <TransactionFooterStyled>
                <ButtonStyled onClick={onOpenModal}>Review</ButtonStyled>
              </TransactionFooterStyled>
            )
          }
        />
        <TransactionProgress
          possibleSigners={possibleSigners}
          approvals={aggregatedData.info?.approvals || []}
          value={aggregatedData.info?.approvals.length || 0}
          threshold={threshold}
        />
      </TransactionCallInfoBoxStyled>
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

const ButtonStyled = styled(Button)`
  margin-left: auto;
`

const TransactionFooterStyled = styled('div')`
  align-self: flex-end;
  text-align: end;
  margin-right: 0.5rem;
  margin-top: 1rem;
  display: flex;
`

const TransactionCallInfoBoxStyled = styled(Box)`
  flex: 1 1 0;
  overflow: hidden;
  width: 100%;
`

export default styled(Transaction)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 0.5rem;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: row;
    margin-left: 0.5rem;
  }

  .buttonWrapper {
    flex: 1;
    align-self: flex-end;
    text-align: end;
    margin-right: 0.5rem;
  }

  .callIcon {
    font-size: 7rem;
    background-color: ${theme.custom.background.backgroundColorLightGray};
    margin: 0.5rem;
    padding: 1rem;
    height: auto;
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
`
)
