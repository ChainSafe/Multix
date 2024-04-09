import { Alert, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMultisigsByMultisigOrPureSignatoriesQuery } from '../../types-and-hooks'
import { MultisigAggregated, useMultiProxy } from '../contexts/MultiProxyContext'
import { useAccountId } from '../hooks/useAccountId'
import { CallDataInfoFromChain, usePendingTx } from '../hooks/usePendingTx'
import { getIntersection } from '../utils'
import { useModals } from '../contexts/ModalsContext'
import { Button } from './library'
import { useAccounts } from '../contexts/AccountsContext'
import AccountDisplay from './AccountDisplay/AccountDisplay'

export interface ParentMultisigInfo {
  parentSignatoryAddress: string
  parentMultisigAddress: string
  involvedMultisigProxyAddress?: string
  involvedMultisigAddress: string
  isSignatoryProxy: boolean
  threshold: number
  signatories: string[]
}

interface Props {
  pendingTxCallData: string[]
}

export const DeepTxAlert = ({ pendingTxCallData }: Props) => {
  const { selectedMultiProxy, selectedIsWatched } = useMultiProxy()
  const { onOpenDeepTxModal } = useModals()
  const { ownAddressList } = useAccounts()
  const proxyAndMultisigsIds = useMemo(
    () =>
      [
        selectedMultiProxy?.proxy || '',
        ...(selectedMultiProxy?.multisigs.map(({ address }) => address) || [])
      ].filter((a) => !!a),
    [selectedMultiProxy]
  )
  const idsToQuery = useAccountId(proxyAndMultisigsIds)
  const { data } = useMultisigsByMultisigOrPureSignatoriesQuery({
    accountIds: idsToQuery
  })
  const [parentMultisigs, setParenMultisigs] = useState<Record<string, ParentMultisigInfo>>({})
  const parentMultisigAddresses = useMemo(() => Object.keys(parentMultisigs), [parentMultisigs])

  useEffect(() => {
    if (!data || data?.accountMultisigs.length === 0) {
      setParenMultisigs({})
      return
    }

    // the data is the list of multisig with our current
    // multisig/pure being a signatory
    if (data && data.accountMultisigs.length > 0) {
      // Create a map with the parent multisig
      // that is involved in a Tx with the current pure/multisig as signatory
      const parentInfoMap = data.accountMultisigs.reduce(
        (acc: Record<string, ParentMultisigInfo>, currParentMultisig) => {
          const parentMultisigSignatories = currParentMultisig.multisig.signatories.map(
            ({ signatory }) => signatory.address
          )

          let signatoryOfParent = { address: '', isSignatoryProxy: false }
          let relevantMultisigAddress = ''

          // See if the parent signatories is one of our pure or our current multisig
          if (
            selectedMultiProxy?.proxy &&
            parentMultisigSignatories.includes(selectedMultiProxy?.proxy)
          ) {
            signatoryOfParent = { address: selectedMultiProxy?.proxy, isSignatoryProxy: true }
          } else {
            // it must be one of our multisig then
            const relevantMultisig = getIntersection(
              selectedMultiProxy?.multisigs.map(({ address }) => address),
              parentMultisigSignatories
            )

            if (!relevantMultisig.length) {
              console.error(
                'Unexpected error: No multisig or proxy found as signatory',
                data,
                selectedMultiProxy
              )
            }

            relevantMultisigAddress = relevantMultisig[0]

            signatoryOfParent = {
              // here, we may have several of our current multisigs
              // being a signatory of the parent. We go for the first
              address: relevantMultisig[0],
              isSignatoryProxy: false
            }
          }

          return {
            ...acc,
            [currParentMultisig.multisig.address]: {
              parentSignatoryAddress: signatoryOfParent.address,
              involvedMultisigAddress: relevantMultisigAddress,
              involvedMultisigProxyAddress: selectedMultiProxy?.proxy,
              isSignatoryProxy: signatoryOfParent.isSignatoryProxy,
              threshold: currParentMultisig.multisig.threshold || 0,
              signatories: currParentMultisig.multisig.signatories.map(
                ({ signatory }) => signatory.address
              )
            } as ParentMultisigInfo
          }
        },
        {} as Record<string, ParentMultisigInfo>
      )
      setParenMultisigs(parentInfoMap)
    }
  }, [data, selectedMultiProxy])

  const onClickCreate = useCallback(
    (aggregatedData: CallDataInfoFromChain) => {
      if (!aggregatedData) return

      let possibleSigners: string[] = []
      let currentMultisigInvolved: MultisigAggregated | undefined

      // if the signatory is the pure we select
      // the first multisig as the possible signatory
      if (parentMultisigs[aggregatedData.from].isSignatoryProxy) {
        currentMultisigInvolved = selectedMultiProxy?.multisigs[0]
        possibleSigners = getIntersection(ownAddressList, currentMultisigInvolved?.signatories)
      } else {
        /// otherwise if it's a specific multisig we should find it
        currentMultisigInvolved = selectedMultiProxy?.multisigs.find((add) => {
          return add.address === parentMultisigs[aggregatedData.from].parentSignatoryAddress
        })
        possibleSigners = getIntersection(ownAddressList, currentMultisigInvolved?.signatories)
      }

      if (!possibleSigners.length) {
        console.error(
          'Unexpected error: Could not find the possible signatories',
          aggregatedData.from,
          parentMultisigs,
          selectedMultiProxy
        )
      }

      if (!currentMultisigInvolved) {
        console.error(
          'Unexpected error: Could not find the current multisig involved',
          aggregatedData.from,
          parentMultisigs,
          selectedMultiProxy
        )

        return
      }

      onOpenDeepTxModal({
        possibleSigners,
        proposalData: aggregatedData,
        parentMultisigInfo: parentMultisigs[aggregatedData.from],
        currentMultisigInvolved
      })
    },
    [onOpenDeepTxModal, ownAddressList, parentMultisigs, selectedMultiProxy]
  )

  const { txWithCallDataByDate } = usePendingTx(parentMultisigAddresses, true)

  if (!parentMultisigAddresses.length || Object.values(txWithCallDataByDate).length === 0)
    return null

  return Object.values(txWithCallDataByDate).map((data) => {
    const filteredMap = data.filter((call) => {
      // filter the tx that are potentially already created and are pending
      // when we have the calldata in both (in case it's an as multi)
      if (
        call?.callData &&
        pendingTxCallData.some((pendingCallData) =>
          pendingCallData.includes(call.callData?.slice(2) as string)
        )
      ) {
        console.info('filtering call, currently signing (with asMulti)', call)
        return false
      }

      // filter the tx that are potentially already created and are pending
      // when we have the hash of the parent in the current calldata (in case it's an approveAsMulti)
      if (
        pendingTxCallData.some((pendingCallData) => {
          const isIncluded = pendingCallData.includes(call.hash?.slice(2) as string)
          return isIncluded
        })
      ) {
        console.info('filtering call, currently signing (with approveAsMult)', call)
        return false
      }

      // filter the tx where we've already signed
      if (call.info?.approvals.includes(parentMultisigs[call.from].parentSignatoryAddress)) {
        console.info('filtering call, already signed', call)
        return false
      }

      return true
    })

    return filteredMap.map((data1) => (
      <AlertStyled
        variant="outlined"
        severity="info"
        key={data1.hash}
      >
        <InfoTextStyled
          container
          spacing={0}
          data-cy="banner-nested-multisig-tx"
        >
          <Grid
            item
            xs={12}
            sm={9}
            md={9}
            container
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              display="flex"
              alignItems="center"
              className="gridItem"
            >
              Pending tx <FunctionNameStyled>{data1.name}</FunctionNameStyled>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              display="flex"
              alignItems="center"
              className="gridItem"
            >
              from:
              <AccountDisplay
                address={data1.from}
                iconSize="small"
                canCopy
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            display="flex"
            alignItems="center"
            className="gridItem"
          >
            {!selectedIsWatched && <Button onClick={() => onClickCreate(data1)}>Create</Button>}
          </Grid>
        </InfoTextStyled>
      </AlertStyled>
    ))
  })
}

const FunctionNameStyled = styled('span')`
  padding: 0.5rem;
  margin: 0 0.5rem 0 0.5rem;
  background-color: ${(props) => props.theme.custom.proxyBadge.multi};
  text-overflow: ellipsis;
  overflow: hidden;
`

const InfoTextStyled = styled(Grid)`
  /* flex: 1;
  display: flex;*/
  align-items: center;
  margin: 0;

  button {
    margin-left: auto;
    margin-right: 2px;
  }

  .gridItem {
    padding: 0;
  }
`

const AlertStyled = styled(Alert)`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  .MuiAlert-message {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .MuiAlert-icon {
    align-items: center;
  }
`
