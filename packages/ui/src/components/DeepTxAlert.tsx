import { Alert, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { HiOutlineXMark as CloseIcon } from 'react-icons/hi2'
import { useMultisigsByMultisigOrPureSignatoriesQuery } from '../../types-and-hooks'
import { useMultiProxy } from '../contexts/MultiProxyContext'
import { useAccountId } from '../hooks/useAccountId'
import { usePendingTx } from '../hooks/usePendingTx'
import { getDisplayAddress } from '../utils'

export const DeepTxAlert = () => {
  const [isDisplayed, setIsDisplayed] = useState(true)
  const { selectedMultiProxy } = useMultiProxy()
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
  const [parentMultisigs, setParenMultisigs] = useState<string[]>([])
  console.log('parentMultisigs', parentMultisigs)
  const onClose = useCallback(() => {
    setIsDisplayed(false)
  }, [])

  useEffect(() => {
    if (!data || data?.accountMultisigs.length === 0) {
      setParenMultisigs([])
      return
    }

    if (data && data.accountMultisigs.length > 0) {
      const addresses = data.accountMultisigs.map(({ multisig }) => {
        // this is the multisig we're a signatory of (with a multi or a pure)
        return multisig.address
      })
      setParenMultisigs(addresses)
    }
  }, [data])

  const { txWithCallDataByDate } = usePendingTx(parentMultisigs)

  console.log('txWithCallDataByDate', txWithCallDataByDate)

  if (!isDisplayed || !parentMultisigs.length || Object.values(txWithCallDataByDate).length === 0)
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
        </div>
        <IconButton
          className="closeButton"
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon size={20} />
        </IconButton>
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
