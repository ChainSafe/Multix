import { SelectChangeEvent } from '@mui/material'
import { useNetwork } from '../../contexts/NetworkContext'
import { useCallback, useMemo } from 'react'
import { networkList } from '../../constants'
import { Select } from '../library'

const NetworkSelection = () => {
  const { selectedNetwork, selectNetwork } = useNetwork()
  // if no ws endpoint is set (in the env) for local nodes, we filter it out
  const networksToShow = useMemo(() => {
    return networkList.local.wsGraphqlUrl
      ? Object.entries(networkList)
      : Object.entries(networkList).filter(([name]) => name !== 'local')
  }, [])

  const handleNetworkSelection = useCallback(
    (event: SelectChangeEvent<string>) => {
      selectNetwork(event.target.value)
    },
    [selectNetwork]
  )

  if (!selectedNetwork) {
    return null
  }

  return (
    <Select
      sx={{
        maxWidth: '9.875rem',
        marginLeft: '1rem'
      }}
      inputSize="large"
      value={selectedNetwork}
      onChange={handleNetworkSelection}
      menuItems={networksToShow.map(([name, { logo }]) => ({
        value: name,
        logo
      }))}
    />
  )
}

export default NetworkSelection
