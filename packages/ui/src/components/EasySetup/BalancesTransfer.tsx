import { styled } from '@mui/material/styles'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { isContextIn, useApi } from '../../contexts/ApiContext'
import { Transaction } from 'polkadot-api'
import TransferAsset, { Option } from '../TransferAsset'
import { Button } from '../library'
import { Grid2 } from '@mui/material'
import { HiOutlinePlusCircle } from 'react-icons/hi2'
// import { inputToBigInt } from '../../utils/bnUtils'
import { useNetwork } from '../../contexts/NetworkContext'
import { useAssets } from '../../contexts/AssetsContext'
import { assetHubKeys } from '../../types'
import { AH_SUPPORTED_ASSETS } from '../../constants'

interface Props {
  className?: string
  from: string
  onSetExtrinsic: (ext?: Transaction<any, any, any, any>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string | ReactNode>>
}

export interface FieldInfo {
  extrinsic?: Transaction<any, any, any, any> | undefined
  index: number
  assetId?: number
  amount?: bigint
}

export const BalancesTransfer = ({ className, onSetExtrinsic, onSetErrorMessage }: Props) => {
  // const { selectedNetwork, selectedNetworkInfo } = useNetwork()
  const [lastIndex, setLastIndex] = useState(0)
  const ctx = useApi()
  const [lastAssetId, setLastAssetId] = useState<number | undefined>()
  const { api, chainInfo } = ctx
  const { selectedNetworkInfo } = useNetwork()
  const isAssetHub = useMemo(() => isContextIn(ctx, assetHubKeys), [ctx])
  const { getAssetMetadata } = useAssets()
  const [fieldInfoMap, setFieldInfoMap] = useState<
    Map<number, Omit<FieldInfo, 'index'> | undefined>
  >(new Map([[0, undefined]]))
  // const [amountString, setAmountString] = useState('')
  // const [amount, setAmount] = useState<bigint | undefined>()
  // const [amountError, setAmountError] = useState('')
  // const { hasEnoughFreeBalance } = useCheckBalance({
  //   min: amount,
  //   address: from
  // })
  // const maxValue = useMemo(() => getGlobalMaxValue(128), [])
  // const toAddress = useMemo(() => selected?.address || '', [selected?.address])

  // useEffect(() => {
  //   if (!!amount && !hasEnoughFreeBalance) {
  //     onSetErrorMessage('"From" address balance too low')
  //   } else {
  //     onSetErrorMessage('')
  //   }
  // }, [amount, amountError, hasEnoughFreeBalance, onSetErrorMessage])

  const assetList = useMemo(() => {
    if (!chainInfo || !selectedNetworkInfo) return [] as Option[]

    const assetHubList = AH_SUPPORTED_ASSETS.map(({ assetId }) => {
      if (!isAssetHub) return

      const asset = getAssetMetadata(assetId)

      if (!asset) return

      return {
        id: assetId,
        ...asset
      }
    }).filter(Boolean) as Option[]

    const nativeAssetEntry = {
      logo: selectedNetworkInfo.nativeAssetLogo || selectedNetworkInfo.networkLogo,
      symbol: chainInfo.tokenSymbol,
      decimals: chainInfo.tokenDecimals
    } as Option

    return [nativeAssetEntry, ...assetHubList]
  }, [chainInfo, getAssetMetadata, isAssetHub, selectedNetworkInfo])

  useEffect(() => {
    if (!api) return

    const extrinsicsArray = Array.from(fieldInfoMap.values())
      .map((fieldInfo) => fieldInfo?.extrinsic)
      .filter(Boolean) as Transaction<any, any, any, any>[]

    if (extrinsicsArray.length === 0) {
      onSetExtrinsic(undefined)
      return
    }

    if (extrinsicsArray.length === 1) {
      onSetExtrinsic(extrinsicsArray[0])
    } else {
      onSetExtrinsic(
        api.tx.Utility.batch_all({
          calls: extrinsicsArray.map((extrinsic) => extrinsic.decodedCall)
        })
      )
    }
  }, [api, fieldInfoMap, onSetExtrinsic])

  const onAddExtrinsic = useCallback(({ extrinsic: ext, index, amount, assetId }: FieldInfo) => {
    setFieldInfoMap((prevExtrinsics) => {
      const newMap = new Map(prevExtrinsics)
      newMap.set(index, { extrinsic: ext, amount, assetId })
      return newMap
    })
  }, [])

  const onAddAField = useCallback(() => {
    setFieldInfoMap((prevExtrinsics) => {
      const newMap = new Map(prevExtrinsics)
      const newIndex = lastIndex + 1
      newMap.set(newIndex, undefined)
      setLastIndex(newIndex)
      return newMap
    })
  }, [lastIndex])

  const onRemoveItem = useCallback((index: number) => {
    setFieldInfoMap((prevFieldInfo) => {
      const newMap = new Map(prevFieldInfo)
      newMap.delete(index)
      return newMap
    })
  }, [])

  return (
    <>
      {Array.from(fieldInfoMap.keys()).map((index) => (
        <TransferAsset
          key={index}
          index={index}
          className={className}
          onSetErrorMessage={onSetErrorMessage}
          onSetExtrinsic={onAddExtrinsic}
          onRemoveItem={onRemoveItem}
          defaultAssetId={lastAssetId}
          setLastAssetId={setLastAssetId}
          withDeleteButton={fieldInfoMap.size > 1}
          assetList={assetList}
        />
      ))}
      <ButtonGridStyled>
        <AddButtonStyled
          onClick={onAddAField}
          variant="tertiary"
          data-cy="add-recipient-button"
        >
          <HiOutlinePlusCircle size={24} /> Add recipient
        </AddButtonStyled>
      </ButtonGridStyled>
    </>
  )
}

export default styled(BalancesTransfer)``

const AddButtonStyled = styled(Button)`
  & > svg {
    margin-right: 0.5rem;
  }
`
const ButtonGridStyled = styled(Grid2)`
  margin-top: 1rem;
`
