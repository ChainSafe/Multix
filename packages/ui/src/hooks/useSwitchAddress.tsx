import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMultiProxy } from '../contexts/MultiProxyContext'

export const useSwtichAddress = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    address: '',
    network: ''
  })
  const urlAddress = useMemo(() => {
    return searchParams.get('address') || ''
  }, [searchParams])
  const {
    multiProxyList,
    isLoading: isMultiproxyLoading,
    selectMultiProxy,
    defaultAddress,
    selectedMultiProxyAddress
  } = useMultiProxy()

  console.log('urlAddress && multiProxyList.length > 0', urlAddress, multiProxyList.length > 0)

  const setAddress = useCallback(
    (address: string) => {
      setSearchParams((prev) => {
        prev.set('address', address)
        return prev
      })
    },
    [setSearchParams]
  )

  useEffect(() => {
    if (isMultiproxyLoading || multiProxyList.length === 0) {
      // we're not yet initialized
      return
    }

    // no address in the url, init with the first multiProxy from the list
    if (!urlAddress && !!defaultAddress) {
      console.log('selecting multi', defaultAddress)
      setAddress(defaultAddress)
    }
  }, [defaultAddress, isMultiproxyLoading, multiProxyList.length, setAddress, urlAddress])

  // the url address is driving the UI if there's a mismatch
  // force the url address to match
  useEffect(() => {
    if (!!urlAddress && urlAddress !== selectedMultiProxyAddress) {
      console.log('missmatch use last', selectedMultiProxyAddress, urlAddress)
      selectMultiProxy(urlAddress)
    }
  }, [urlAddress, multiProxyList, selectMultiProxy, defaultAddress, selectedMultiProxyAddress])

  return { currentAddress: urlAddress, setAddress }
}
