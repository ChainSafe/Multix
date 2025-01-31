import { useMemo } from 'react'
import { isContextIn, isContextOf, useApi } from '../contexts/ApiContext'
import { MultiProxy } from '../contexts/MultiProxyContext'
import { useGetSortAddress } from './useGetSortAddress'
import { getAsMultiTx } from '../utils/getAsMultiTx'
import {
  MultisigStorageInfo,
  noHydrationKeys_1,
  noHydrationKeys_2,
  noHydrationKeys_3,
  Weight
} from '../types'
import { getApproveAsMultiTx } from '../utils/getApproveAsMultiTx'
import { HexString, Transaction } from 'polkadot-api'
import { MultiAddress } from '@polkadot-api/descriptors'
import { useNetwork } from '../contexts/NetworkContext'

interface Params {
  selectedMultisig?: MultiProxy['multisigs'][0]
  threshold?: number | null
  senderAddress?: string
  fromAddress?: string
  isProxy?: boolean
  extrinsicToCall?: Transaction<any, any, any, any> | undefined
  weight?: Weight
  when?: MultisigStorageInfo['when']
  forceAsMulti?: boolean
  approveAsMultiHash?: HexString
  approvalLength?: number
}

export const useGetMultisigTx = ({
  selectedMultisig,
  threshold,
  senderAddress,
  fromAddress,
  isProxy,
  extrinsicToCall,
  weight,
  when,
  approvalLength = 0,
  forceAsMulti = true,
  approveAsMultiHash
}: Params) => {
  const ctx = useApi()
  const { api, compatibilityToken } = ctx
  const { getSortAddress } = useGetSortAddress()
  const { selectedNetwork } = useNetwork()

  const multisigTx = useMemo(() => {
    if (!selectedMultisig?.signatories) {
      console.error('selected multisig is undefined')
      return
    }

    const otherSignatories = getSortAddress(
      selectedMultisig.signatories.filter((signer) => signer !== senderAddress)
    )

    if (!threshold) {
      return
    }

    if (!ctx?.api || !selectedNetwork) {
      return
    }

    if (!senderAddress || !fromAddress) {
      return
    }

    if (forceAsMulti && !extrinsicToCall) {
      // console.warn(
      //   'The extrinsic call is required when multisig.asMulti is called',
      //   extrinsicToCall
      // )
      return
    }

    // if forceAsMulti then there is no need to pass
    // to this function the approvalLength and hash
    // they are however required if not
    if (!forceAsMulti && (!approvalLength || !approveAsMultiHash)) {
      console.error(
        'No approvalLength and approveAsMultiHash passed',
        approvalLength,
        approveAsMultiHash
      )
      return
    }

    let tx: Transaction<any, any, any, any> | false | undefined

    try {
      // the proxy is selected
      if (isProxy && !!extrinsicToCall) {
        tx = isContextOf(ctx, 'hydration')
          ? ctx.api.tx.Proxy.proxy({
              real: fromAddress,
              force_proxy_type: undefined,
              call: extrinsicToCall.decodedCall
            })
          : isContextIn(ctx, noHydrationKeys_1)
            ? ctx.api.tx.Proxy.proxy({
                real: MultiAddress.Id(fromAddress),
                force_proxy_type: undefined,
                call: extrinsicToCall.decodedCall
              })
            : isContextIn(ctx, noHydrationKeys_2)
              ? ctx.api.tx.Proxy.proxy({
                  real: MultiAddress.Id(fromAddress),
                  force_proxy_type: undefined,
                  call: extrinsicToCall.decodedCall
                })
              : isContextIn(ctx, noHydrationKeys_3) &&
                ctx.api.tx.Proxy.proxy({
                  real: MultiAddress.Id(fromAddress),
                  force_proxy_type: undefined,
                  call: extrinsicToCall.decodedCall
                })
        // a multisig is selected
      } else {
        tx = extrinsicToCall
      }

      if (!tx) return

      return forceAsMulti || approvalLength >= threshold - 1
        ? getAsMultiTx({ api, threshold, otherSignatories, tx, weight, when, compatibilityToken })
        : getApproveAsMultiTx({
            api,
            threshold,
            otherSignatories,
            hash: approveAsMultiHash,
            when
          })
    } catch (e) {
      console.error('Error in multisigTx')
      console.error(e)
    }
  }, [
    selectedMultisig,
    getSortAddress,
    threshold,
    ctx,
    selectedNetwork,
    senderAddress,
    fromAddress,
    forceAsMulti,
    extrinsicToCall,
    approvalLength,
    approveAsMultiHash,
    isProxy,
    api,
    weight,
    when,
    compatibilityToken
  ])

  return multisigTx
}
