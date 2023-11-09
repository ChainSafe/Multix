import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMultiProxy } from '../contexts/MultiProxyContext'

export const useSwitchAddress = () => {
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
    selectedMultiProxyAddress,
    setCanFindMultiProxyFromUrl
  } = useMultiProxy()

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
    if (isMultiproxyLoading) {
      // we're not yet initialized
      return
    }

    if (!urlAddress && !!defaultAddress) {
      // no address in the url, init with the first multiProxy from the list
      setAddress(defaultAddress)
      return
    }
  }, [
    defaultAddress,
    isMultiproxyLoading,
    multiProxyList,
    setAddress,
    setCanFindMultiProxyFromUrl,
    urlAddress
  ])

  // the url address is driving the UI if there's a mismatch
  // force the url address to match
  useEffect(() => {
    if (isMultiproxyLoading) {
      // we're not yet initialized
      return
    }

    if (!urlAddress || urlAddress === selectedMultiProxyAddress) {
      setCanFindMultiProxyFromUrl(true)
    }

    if (!!urlAddress && urlAddress !== selectedMultiProxyAddress) {
      const isSuccess = selectMultiProxy(urlAddress)
      setCanFindMultiProxyFromUrl(isSuccess)
    }
  }, [
    urlAddress,
    multiProxyList,
    selectMultiProxy,
    defaultAddress,
    selectedMultiProxyAddress,
    isMultiproxyLoading,
    setCanFindMultiProxyFromUrl
  ])
}
