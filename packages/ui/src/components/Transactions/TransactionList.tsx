import { Box, CircularProgress, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { usePendingTx } from '../../hooks/usePendingTx'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { getDifference, getIntersection } from '../../utils'
import { useAccounts } from '../../contexts/AccountsContext'
import { MdOutlineFlare as FlareIcon } from 'react-icons/md'
import Transaction from './Transaction'

interface Props {
  className?: string
}

const TransactionList = ({ className }: Props) => {
  const { getMultisigByAddress } = useMultiProxy()
  const { txWithCallDataByDate, isLoading: isLoadingPendingTxs, refresh } = usePendingTx()
  const { ownAddressList } = useAccounts()

  return (
    <Box className={className}>
      {isLoadingPendingTxs && (
        <Box className="loader">
          <CircularProgress />
        </Box>
      )}
      {Object.entries(txWithCallDataByDate).length === 0 && !isLoadingPendingTxs && (
        <Paper className="noCall">
          <FlareIcon
            size={24}
            className="noCallIcon"
          />
          <div className="noCallText">You're all set!</div>
        </Paper>
      )}
      {Object.entries(txWithCallDataByDate).length !== 0 &&
        Object.entries(txWithCallDataByDate).map(([date, aggregatedData]) => {
          return (
            <TransactionWrapper key={date}>
              <DateContainerStyled>{date}</DateContainerStyled>
              {aggregatedData.map((agg, index) => {
                const { callData, info, from } = agg
                const multisig = getMultisigByAddress(from)

                // if the "from"  is not a multisig from the
                // currently selected multiProxy or we have no info
                if (!info || !multisig?.threshold) {
                  return null
                }

                const multisigSignatories = multisig?.signatories || []
                // if the threshold is met, but the transaction is still not executed
                // it means we need one signtory to submit with asMulti
                // so any signatory should be able to approve (again)
                const neededSigners =
                  info?.approvals.length >= multisig.threshold
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
                    threshold={multisig.threshold}
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

const DateContainerStyled = styled(Box)`
  margin-bottom: 0.3rem;
`

export default styled(TransactionList)(
  ({ theme }) => `
  .noCallIcon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .noCall {
    background-color: ${theme.custom.background.primary};
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 2rem;
  }

  .loader {
    display: flex;
    justify-content: center;
  }
`
)
