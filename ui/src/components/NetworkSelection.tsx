import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import styled from "styled-components"
import { useNetwork } from "../contexts/NetworkContext"
import { useCallback } from "react"
import { networkList } from "../constants"

interface Props {
  className?: string
}

const NetworkSelection = ({ className }: Props) => {
  const { selectedNetwork, selectNetwork } = useNetwork()

  const handleNetworkSelection = useCallback((event: SelectChangeEvent<string>) => {
    selectNetwork(event.target.value)
  }, [selectNetwork])

  if (!selectedNetwork) {
    return null
  }

  return (
    <Select
      className={className}
      value={selectedNetwork}
      onChange={handleNetworkSelection}
    >
      {Object.entries(networkList).map(([networkName, info]) =>
        <MenuItem key={networkName} value={networkName} sx={{ "img": { maxHeight: "2rem", mr: ".5rem", borderRadius: "50%" } }}>
          <img
            className="networkLogo"
            alt={`network-logo-${networkName}`}
            src={info.logo}
          />
          <div className="networkName">{networkName}</div>
        </MenuItem>
      )}
    </Select>
  )
}

export default styled(NetworkSelection)(({ theme }) => `
    min-width: 10rem;
    background-color: ${theme.palette.primary.white};

    .MuiSelect-select {
        display: flex;
    }

    .networkName {
        display: flex;
        align-items: center;
    }

    .networkLogo {
        max-height: 2rem;
        margin-right: .5rem;
        border-radius: 50%;
    }
`)