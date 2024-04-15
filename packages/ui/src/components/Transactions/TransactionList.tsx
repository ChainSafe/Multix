import { Box, CircularProgress, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { usePendingTx } from '../../hooks/usePendingTx'
import { MultisigAggregated, useMultiProxy } from '../../contexts/MultiProxyContext'
import { getDifference, getIntersection } from '../../utils'
import { useAccounts } from '../../contexts/AccountsContext'
import { MdOutlineFlare as FlareIcon } from 'react-icons/md'
import Transaction from './Transaction'
import { useMemo } from 'react'
import { DeepTxAlert } from '../DeepTxAlert'

interface Props {
  className?: string
}

const TransactionList = ({ className }: Props) => {
  const { getMultisigByAddress, selectedMultiProxy } = useMultiProxy()
  const multisigAddresses = useMemo(
    () => selectedMultiProxy?.multisigs.map(({ address }) => address) || [],
    [selectedMultiProxy?.multisigs]
  )
  const {
    txWithCallDataByDate,
    isLoading: isLoadingPendingTxs,
    refresh
  } = usePendingTx(multisigAddresses)
  const { ownAddressList } = useAccounts()
  const pendingTxCallData = useMemo(() => {
    return Object.values(txWithCallDataByDate)
      .reduce((acc, curr) => {
        return [...acc, ...curr]
      }, [])
      .map(({ callData }) => callData)
      .filter((a) => !!a) as string[]
  }, [txWithCallDataByDate])

  return (
    <Box className={className}>
      <DeepTxAlert pendingTxCallData={pendingTxCallData} />
      <h3>Transactions</h3>
      {isLoadingPendingTxs && (
        <LoaderStyled>
          <CircularProgress />
        </LoaderStyled>
      )}
      {Object.entries(txWithCallDataByDate).length === 0 && !isLoadingPendingTxs && (
        <NoCallWrapperStyled>
          <FlareIconStyled size={24} />
          <div>You&apos;re all set!</div>
        </NoCallWrapperStyled>
      )}
      {Object.entries(txWithCallDataByDate).length !== 0 &&
        Object.entries(txWithCallDataByDate).map(([date, aggregatedData]) => {
          return (
            <TransactionWrapper key={date}>
              <DateContainerStyled>{date}</DateContainerStyled>
              {aggregatedData.map((agg, index) => {
                const { callData, info, from } = agg
                const { threshold, signatories } =
                  getMultisigByAddress(from) ||
                  ({ threshold: undefined, signatories: undefined } as MultisigAggregated)

                // if the "from"  is not a multisig from the
                // currently selected multiProxy or we have no info
                if (!info || !threshold) {
                  return null
                }

                const multisigSignatories = signatories || []
                // if the threshold is met, but the transaction is still not executed
                // it means we need one signtory to submit with asMulti
                // so any signatory should be able to approve (again)
                const neededSigners =
                  info?.approvals.length >= threshold
                    ? multisigSignatories
                    : getDifference(multisigSignatories, info?.approvals)
                const possibleSigners = getIntersection(neededSigners, ownAddressList)
                const isProposer = !!info?.depositor && ownAddressList.includes(info.depositor)

                // if we have the proposer in the extension it can always reject the transaction
                if (isProposer) {
                  possibleSigners.push(info.depositor)
                }

                return (
                  <Transaction
                    key={`${index}-${callData}`}
                    aggregatedData={agg}
                    isProposer={isProposer}
                    onSuccess={refresh}
                    possibleSigners={possibleSigners}
                    multisigSignatories={multisigSignatories}
                    threshold={threshold}
                  />
                )
              })}
            </TransactionWrapper>
          )
        })}
    </Box>
  )
}

const TransactionWrapper = styled(Box)`
  .MuiPaper-root {
    padding: 0.5rem;
  }
`

const FlareIconStyled = styled(FlareIcon)`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const DateContainerStyled = styled(Box)`
  margin-bottom: 0.3rem;
`

const NoCallWrapperStyled = styled(Paper)`
  background-color: ${({ theme }) => theme.custom.background.primary};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 2rem;
`

const LoaderStyled = styled(Box)`
  display: flex;
  justify-content: center;
`
export default TransactionList
