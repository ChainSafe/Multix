import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAccountNames } from "../contexts/AccountNamesContext";
import { AccountBadge } from "../types";
import { getDisplayAddress } from "../utils/getDisplayAddress";
import IdenticonBadge from "./IdenticonBadge";
import { useApi } from "../contexts/ApiContext";
import { DeriveAccountInfo, DeriveAccountRegistration } from '@polkadot/api-derive/types';
import IdentityIcon from "./IdentityIcon";

interface Props {
  address: string;
  className?: string
  badge?: AccountBadge
  withName?: boolean
}

const AccountDisplay = ({ className, address, badge, withName = true }: Props) => {
  const { getNamesWithExtension } = useAccountNames()
  const displayName = useMemo(() => getNamesWithExtension(address), [address, getNamesWithExtension])
  const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null);
  const { api, isApiReady } = useApi()
  const [mainDisplay, setMainDisplay] = useState<string>('');
  const [sub, setSub] = useState<string | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    if (!isApiReady) {
      return;
    }

    let unsubscribe: () => void;

    api.derive.accounts.info(address, (info: DeriveAccountInfo) => {
      setIdentity(info.identity);

      if (info.identity.displayParent && info.identity.display) {
        // when an identity is a sub identity `displayParent` is set
        // and `display` get the sub identity
        setMainDisplay(info.identity.displayParent);
        setSub(info.identity.display);
      } else {
        // There should not be a `displayParent` without a `display`
        // but we can't be too sure.
        setMainDisplay(info.identity.displayParent || info.identity.display || info.nickname || '');
      }
    })
      .then(unsub => { unsubscribe = unsub; })
      .catch(e => console.error(e));

    return () => unsubscribe && unsubscribe();
  }, [address, api, isApiReady]);

  return <Box className={className}>
    <IdenticonBadge badge={badge} address={address} />
    <Box className="nameAddressWrapper">
      {withName && (
        <div className="nameWrapper">
          {!!identity && mainDisplay && <IdentityIcon className="identityBadge" identity={identity} />}
          {!!sub && <span className='sub'>/{sub}</span>}
          <span className="name">{displayName || mainDisplay}</span>
        </div>
      )}
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

  .nameWrapper {
    display: flex;
    align-items: center;
  }

  .identityBadge {
    margin-right: 0.3rem;
  }

  .name {
    font-size: large;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`)