import { Badge, Box, Paper } from '@mui/material'
import { Button } from '../library'
import { styled } from '@mui/material/styles'
import CallInfo from '../CallInfo'
import { MdOutlineGesture as GestureIcon } from 'react-icons/md'
import { HiOutlineQuestionMarkCircle as QuestionMarkIcon } from 'react-icons/hi2'
import { AggregatedData } from './TransactionList'
import { useCallback, useMemo } from 'react'
import { isProxyCall } from '../../utils'
import { AccountBadge } from '../../types'
import TransactionProgress from './TransactionProgress'
import { useModals } from '../../contexts/ModalsContext'

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
  const { onOpenSigningModal } = useModals()
  const isProxy = useMemo(() => isProxyCall(aggregatedData.name), [aggregatedData])
  // FIXME this is duplicated
  const appliedClass = useMemo(() => (isProxy ? 'blue' : 'red'), [isProxy])

  const onOpenModal = useCallback(() => {
    onOpenSigningModal({
      onSuccess,
      possibleSigners,
      proposalData: aggregatedData
    })
  }, [aggregatedData, onOpenSigningModal, onSuccess, possibleSigners])

  return (
    <Paper className={className}>
      <Badge
        className={`badge ${appliedClass}`}
        color="primary"
        badgeContent={isProxy ? AccountBadge.PURE : AccountBadge.MULTI}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        {!aggregatedData.callData ? (
          <QuestionMarkIcon
            size={112}
            className="callIcon"
          />
        ) : (
          <GestureIcon
            size={112}
            className="callIcon"
          />
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

const TransactionCallInfoBoxStyled = styled(Box)`
  flex: 1 1 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    overflow: hidden;
  }
`

export default styled(Transaction)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
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
    background-color: ${({ theme }) => theme.custom.background.primary};
    margin: 0.5rem;
    padding: 1rem;
    height: auto;
  }

  // FIXME this is duplicated
  .badge > .MuiBadge-badge {
    max-height: 1.3125rem;
    left: 29px;
    top: 19px;
    border-radius: ${({ theme }) => theme.custom.borderRadius};
    padding: 0.25rem 0.5rem;
    max-width: 2.625rem;
    font-size: 0.625rem;
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.custom.gray[400]};
  }

  .badge.red > .MuiBadge-badge {
    background-color: ${({ theme }) => theme.custom.proxyBadge.multi};
    color: ${({ theme }) => theme.custom.text.black};
  }
`
