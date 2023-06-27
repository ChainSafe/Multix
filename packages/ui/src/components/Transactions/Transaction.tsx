import { Badge, Box, Paper } from '@mui/material'
import { Button } from '../library'
import { styled } from '@mui/material/styles'
import CallInfo from '../CallInfo'
import { Gesture as GestureIcon, QuestionMark as QuestionMarkIcon } from '@mui/icons-material'
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
  multisigSignatories: string[]
  onSuccess: () => void
  threshold: number
}

const Transaction = ({
  className,
  aggregatedData,
  isProposer,
  possibleSigners,
  multisigSignatories,
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
          multisigSignatories={multisigSignatories}
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
  margin: 1rem 0.5rem 0.5rem 0;
  display: flex;
`

const TransactionCallInfoBoxStyled = styled(Box)(
  ({ theme }) => `
  flex: 1 1 0;
  width: 100%;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    overflow: hidden;
  }
`
)

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
    background-color: ${theme.custom.background.primary};
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
    box-shadow: ${theme.custom.boxShadow};
    background-color: ${theme.custom.identity.red};
  }
`
)
