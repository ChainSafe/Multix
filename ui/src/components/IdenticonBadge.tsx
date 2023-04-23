import { Badge } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useMemo } from "react";
import styled from "styled-components";
import { ICON_SIZE, ICON_THEME } from "../constants";
import { AccountBadge } from "../types";
import MultixIdenticon from "./MultixIdenticon";

interface Props {
    className?: string;
    badge?: AccountBadge
    address?: string
}

export const IdenticonBadge = ({ className, badge, address }: Props) => {

  const AccountIcon = () => <MultixIdenticon value={address} theme={ICON_THEME} size={ICON_SIZE} className="identicon" />

  const appliedClass = useMemo(() => badge === AccountBadge.PURE
    ? "blue"
    : "red", [badge])

  if (!badge) {
    return <AccountIcon />
  }

  return <Badge
    className={`${className} ${appliedClass}`}
    color="primary"
    badgeContent={badge}
    anchorOrigin={{ horizontal: "left", vertical: "top" }}
  >
    <AccountIcon />
  </Badge>

}

export default styled(IdenticonBadge)(({ theme }) => `
    /* &.blue > .MuiBadge-badge {
        background-color: blue
    } */

    &.red > .MuiBadge-badge {
        background-color: ${theme.custom.text.errorColor}
    }
`)