import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { MultiProxy } from '../contexts/MultiProxyContext'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import { useGetSortAddress } from './useGetSortAddress'

interface Params {
  selectedMultisig?: MultiProxy['multisigs'][0]
  threshold?: number | null
  senderAddress?: string
  fromAddress?: string
  isProxy?: boolean
  extrinsicToCall?: SubmittableExtrinsic<'promise', ISubmittableResult> | undefined
}

export const useGetMultisigTx = ({
  selectedMultisig,
  threshold,
  senderAddress,
  fromAddress,
  isProxy,
  extrinsicToCall
}: Params) => {
  const { api } = useApi()
  const { getSortAddress } = useGetSortAddress()

  const multisigTx = useMemo(() => {
    if (!selectedMultisig?.signatories) {
      console.error('selected multisig is undefined')
      return
    }

    const otherSigners = getSortAddress(
      selectedMultisig.signatories.filter((signer) => signer !== senderAddress)
    )

    if (!threshold) {
      return
    }

    if (!api) {
      return
    }

    if (!senderAddress || !fromAddress) {
      return
    }

    if (!extrinsicToCall) {
      return
    }

    let tx: SubmittableExtrinsic<'promise'>

    try {
      // the proxy is selected
      if (isProxy) {
        tx = api.tx.proxy.proxy(fromAddress, null, extrinsicToCall)
        // a multisig is selected
      } else {
        tx = extrinsicToCall
      }

      return api.tx.multisig.asMulti(threshold, otherSigners, null, tx, {
        refTime: 0,
        proofSize: 0
      })
    } catch (e) {
      console.error('Error in multisigTx')
      console.error(e)
    }
  }, [
    selectedMultisig,
    getSortAddress,
    threshold,
    api,
    senderAddress,
    fromAddress,
    extrinsicToCall,
    isProxy
  ])

  return multisigTx
}
