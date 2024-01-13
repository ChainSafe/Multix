import { Alert } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useCallback, useEffect, useMemo, useState } from 'react'
// import { HiOutlineXMark as CloseIcon } from 'react-icons/hi2'
import { useMultisigsByMultisigOrPureSignatoriesQuery } from '../../types-and-hooks'
import { useMultiProxy } from '../contexts/MultiProxyContext'
import { useAccountId } from '../hooks/useAccountId'
import { CallDataInfoFromChain, usePendingTx } from '../hooks/usePendingTx'
import { getDisplayAddress, getIntersection } from '../utils'
import { useModals } from '../contexts/ModalsContext'
import { Button } from './library'
import { useAccounts } from '../contexts/AccountsContext'

interface ParentMultisigInfo {
  relevantMultisig: string
  threshold: number
  signatories: string[]
}

export const DeepTxAlert = () => {
  // const [isDisplayed, setIsDisplayed] = useState(true)
  const { selectedMultiProxy } = useMultiProxy()
  const { onOpenSigningModal } = useModals()
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
  console.log('parentMultisigs', parentMultisigs)
  // const onClose = useCallback(() => {
  //   setIsDisplayed(false)
  // }, [])

  useEffect(() => {
    if (!data || data?.accountMultisigs.length === 0) {
      setParenMultisigs({})
      return
    }

    if (data && data.accountMultisigs.length > 0) {
      const parentInfoMap = data.accountMultisigs.reduce(
        (acc: Record<string, ParentMultisigInfo>, curr) => {
          const signatories = curr.multisig.signatories.map(({ signatory }) => signatory.address)
          const relevantMultisig = getIntersection(
            selectedMultiProxy?.multisigs.map(({ address }) => address),
            signatories
          )
          // what multisig/pure is the signatory
          const relevant =
            selectedMultiProxy?.proxy && signatories.includes(selectedMultiProxy.proxy)
              ? selectedMultiProxy.proxy
              : // We support only 1 multisig part of another one
                (relevantMultisig.length === 1 && relevantMultisig[0]) || 'none'

          return {
            ...acc,
            [curr.multisig.address]: {
              relevantMultisig: relevant,
              threshold: curr.multisig.threshold || 0,
              signatories: curr.multisig.signatories
            } as unknown as ParentMultisigInfo
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

      // const neededSigners =
      //   (aggregatedData.info?.approvals || []).length >= multisig.threshold
      //     ? multisigSignatories
      //     : getDifference(multisigSignatories, info?.approvals)
      const relevantMultisig = selectedMultiProxy?.multisigs.find((add) => {
        return add.address === parentMultisigs[aggregatedData.from].relevantMultisig
      })
      const possibleSigners = getIntersection(ownAddressList, relevantMultisig?.signatories)

      onOpenSigningModal({
        possibleSigners,
        proposalData: aggregatedData
      })
    },
    [onOpenSigningModal, ownAddressList, parentMultisigs, selectedMultiProxy]
  )

  console.log('parentMultisigs', parentMultisigs)
  const { txWithCallDataByDate } = usePendingTx(parentMultisigAddresses)

  console.log('txWithCallDataByDate', txWithCallDataByDate)

  if (
    // !isDisplayed ||
    !parentMultisigAddresses.length ||
    Object.values(txWithCallDataByDate).length === 0
  )
    return null

  return Object.values(txWithCallDataByDate).map((data) => {
    return data.map((data1) => (
      <AlertStyled
        variant="outlined"
        severity="info"
      >
        <div
          className="infoText"
          data-cy="banner-multisig-creation-info"
        >
          Pending tx {`${data1.name} from: ${getDisplayAddress(data1.from)}`}
          <Button onClick={() => onClickCreate(data1)}>Create</Button>
        </div>
        {/* <IconButton
          className="closeButton"
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon size={20} />
        </IconButton> */}
      </AlertStyled>
    ))
  })
}

const AlertStyled = styled(Alert)`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  .infoText {
    flex: 1;
  }

  .MuiAlert-message {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .MuiAlert-icon {
    align-items: center;
  }
`
