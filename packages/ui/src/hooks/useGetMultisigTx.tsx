import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { MultiProxy } from '../contexts/MultiProxyContext'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import { useGetSortAddress } from './useGetSortAddress'
import { getAsMultiTx } from '../utils/getAsMultiTx'
import { Weight } from '@polkadot/types/interfaces'
import { MultisigStorageInfo } from '../types'

interface Params {
  selectedMultisig?: MultiProxy['multisigs'][0]
  threshold?: number | null
  senderAddress?: string
  fromAddress?: string
  isProxy?: boolean
  extrinsicToCall?: SubmittableExtrinsic<'promise', ISubmittableResult> | undefined
  weight?: Weight
  when?: MultisigStorageInfo['when']
}

export const useGetMultisigTx = ({
  selectedMultisig,
  threshold,
  senderAddress,
  fromAddress,
  isProxy,
  extrinsicToCall,
  weight,
  when
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

      return getAsMultiTx({ api, threshold, otherSignatories: otherSigners, tx, weight, when })
    } catch (e) {
      console.error('Error in multisigTx')
      console.error(e)
    }
  }, [
    selectedMultisig?.signatories,
    getSortAddress,
    threshold,
    api,
    senderAddress,
    fromAddress,
    extrinsicToCall,
    isProxy,
    weight,
    when
  ])

  return multisigTx
}
