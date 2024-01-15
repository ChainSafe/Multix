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
  parentSignatoryAddress: string
  isSignatoryProxy: boolean
  threshold: number
  signatories: string[]
}

export const DeepTxAlert = () => {
  // const [isDisplayed, setIsDisplayed] = useState(true)
  const { selectedMultiProxy } = useMultiProxy()
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
              isSignatoryProxy: signatoryOfParent.isSignatoryProxy,
              threshold: currParentMultisig.multisig.threshold || 0,
              signatories: currParentMultisig.multisig.signatories
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

      let possibleSigners: string[] = []

      // if the signatory is the pure we select
      // the first multisig as the possible signatory
      if (parentMultisigs[aggregatedData.from].isSignatoryProxy) {
        possibleSigners = getIntersection(
          ownAddressList,
          selectedMultiProxy?.multisigs[0].signatories
        )
      } else {
        /// otherwise if it's a specific multisig we should find it
        const relevantMultisig = selectedMultiProxy?.multisigs.find((add) => {
          return add.address === parentMultisigs[aggregatedData.from].parentSignatoryAddress
        })
        possibleSigners = getIntersection(ownAddressList, relevantMultisig?.signatories)
      }

      if (!possibleSigners.length) {
        console.error(
          'Unexpected error: Could not find the possible signatories',
          aggregatedData.from,
          parentMultisigs,
          selectedMultiProxy
        )
      }

      onOpenDeepTxModal({
        possibleSigners,
        proposalData: aggregatedData
      })
    },
    [onOpenDeepTxModal, ownAddressList, parentMultisigs, selectedMultiProxy]
  )

  const { txWithCallDataByDate } = usePendingTx(parentMultisigAddresses)

  if (!parentMultisigAddresses.length || Object.values(txWithCallDataByDate).length === 0)
    return null

  return Object.values(txWithCallDataByDate).map((data) => {
    return data.map((data1) => (
      <AlertStyled
        variant="outlined"
        severity="info"
        key={data1.hash}
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
