import { Badge } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import styled from "styled-components";
import { ICON_SIZE, ICON_THEME } from "../constants";
import { AccountLabel } from "../types";

interface Props {
    className?: string;
    badge?: AccountLabel
    address?: string
}

export const AccountBadge = ({ className, badge, address }: Props) => {

    const AccountIcon = () => <Identicon
        value={address}
        size={ICON_SIZE}
        theme={ICON_THEME}
        className="identicon"
    />

    if (!badge) {
        return <AccountIcon />
    }

    const appliedClass = badge === "proxy"
        ? "blue"
        : "red"
    return <Badge
        className={`${className} ${appliedClass}`}
        color="primary"
        badgeContent={badge}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
        <AccountIcon />
    </Badge>

}

export default styled(AccountBadge)(({ theme }) => `
    /* &.blue > .MuiBadge-badge {
        background-color: blue
    } */

    &.red > .MuiBadge-badge {
        background-color: ${theme.custom.text.errorColor}
    }
`)