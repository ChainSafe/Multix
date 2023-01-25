import { Badge, Box } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import styled from "styled-components";
import { ICON_SIZE, ICON_THEME } from "../constants";
import { useAccountNames } from "../hooks/useAccountNames";
import { getDisplayAddress } from "../utils/getDisplayAddress";

interface Props {
  address: string;
  className?: string
  badge?: string
}
const AccountDisplay = ({ className, address, badge = "" }: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const displayName = getNamesWithExtension(address)

  const AccountIcon = () => <Identicon
    value={address}
    size={ICON_SIZE}
    theme={ICON_THEME}
    className="identicon"
  />

  return <Box className={className}>
    {!!badge
      ? <Badge color="secondary" badgeContent={badge} anchorOrigin={{ horizontal: "left", vertical: "top" }} >
        <AccountIcon />
      </Badge>
      : <AccountIcon />}
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