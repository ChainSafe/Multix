import { Box } from "@mui/material";
import styled from "styled-components";
import { useAccountNames } from "../hooks/useAccountNames";
import { AccountLabel } from "../types";
import { getDisplayAddress } from "../utils/getDisplayAddress";
import AccountBadge from "./AccountBadge";

interface Props {
  address: string;
  className?: string
  badge?: AccountLabel
}

const AccountDisplay = ({ className, address, badge }: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const displayName = getNamesWithExtension(address)

  return <Box className={className}>
    <AccountBadge badge={badge} address={address} />
    <Box className="nameAddressWrapper">
      <div className="name">{displayName}</div>
      <div className="address">{getDisplayAddress(address)}</div>
    </Box>
  </Box>
}


export default styled(AccountDisplay)(({ theme }) => `
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

  .identicon {
    margin-right: .5rem;
  }

  .address {
    color: ${theme.custom.text.addressColorLightGray};
    font-size: small;
  }

  .name {
    font-size: large;
  }
`)