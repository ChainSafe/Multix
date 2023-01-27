import { Box } from "@mui/material";
import { useMemo } from "react";
import styled from "styled-components";
import { useAccountNames } from "../contexts/AccountNamesContext";
import { AccountLabel } from "../types";
import { getDisplayAddress } from "../utils/getDisplayAddress";
import IdenticonBadge from "./IdenticonBadge";

interface Props {
  address: string;
  className?: string
  badge?: AccountLabel
  withName?: boolean
}

const AccountDisplay = ({ className, address, badge, withName = true }: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const displayName = useMemo(() => getNamesWithExtension(address), [address, getNamesWithExtension])

  return <Box className={className}>
    <IdenticonBadge badge={badge} address={address} />
    <Box className="nameAddressWrapper">
      {withName && <div className="name">{displayName}</div>}
      <div className="address">{getDisplayAddress(address)}</div>
    </Box>
  </Box>
}


export default styled(AccountDisplay)(({ theme }) => `
  display: flex;
  align-items: center;
  min-width: 0;

  .nameAddressWrapper {
    min-width: 0
  }

  .identicon {
    margin-right: .5rem;
  }

  .address {
    color: ${theme.custom.text.addressColorLightGray};
    font-size: small;
  }

  .name {
    font-size: large;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`)