import { useMultiProxy } from '../contexts/MultiProxyContext'
import { useApi } from '../contexts/ApiContext'
import { useNetwork } from '../contexts/NetworkContext'
import { useAccounts } from '../contexts/AccountsContext'
import { useWatchedAddresses } from '../contexts/WatchedAddressesContext'
import LoadingBox from '../components/LoadingBox'

export const useDisplayLoader = () => {
  const { isLoading: isLoadingMultisigs } = useMultiProxy()
  const { api } = useApi()
  const { selectedNetworkInfo } = useNetwork()
  const { isAccountLoading, isLocalStorageSetupDone } = useAccounts()
  const { isInitialized: isWatchAddressInitialized } = useWatchedAddresses()

  if (!isWatchAddressInitialized || !isLocalStorageSetupDone) {
    return (
      <LoadingBox
        message="Initialization..."
        dataCy="loader-initialization"
      />
    )
  }

  if (!api) {
    return (
      <LoadingBox
        message={`Connecting to the node at ${selectedNetworkInfo?.rpcUrl}`}
        dataCy="loader-rpc-connection"
      />
    )
  }

  if (isAccountLoading) {
    return (
      <LoadingBox
        message="Loading your accounts..."
        dataCy="loader-accounts-connection"
      />
    )
  }

  if (isLoadingMultisigs) {
    return (
      <LoadingBox
        message="Loading your multisigs..."
        dataCy="loader-multisigs"
      />
    )
  }

  return null
}
