import { Box, Chip } from "@mui/material";
import styled from "styled-components";
import { AccountBadge } from "../types";
import AccountDisplay from "./AccountDisplay";
import Expander from "./Expander";
import { MultisigByIdDocument, MultisigByIdQuery, MultisigByIdQueryVariables } from "../../types-and-hooks";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../fetcher";
import { useNetwork } from "../contexts/NetworkContext";

interface Props {
  address: string;
  className?: string
  expanded?: boolean
}

const MultisigCompactDisplay = ({ className, address, expanded = false }: Props) => {
  const [signatories, setSignatories] = useState<string[]>([])
  const { selectedNetworkInfo } = useNetwork()
  // we can't use the useMultisigById that got generated in types-and-hooks because we need a dynamic url
  // to fetch for the right network
  const { data, error, isFetching } = useQuery<MultisigByIdQuery, unknown, MultisigByIdQuery>(
    ['MultisigById', { account: address }],
    fetchData<MultisigByIdQuery, MultisigByIdQueryVariables>(MultisigByIdDocument, { account: address }, undefined, selectedNetworkInfo?.httpGraphqlUrl)
  );
  const [badge, setBadge] = useState<AccountBadge | undefined>()
  const [threshold, setThreshold] = useState<number | null | undefined>(null)

  useEffect(() => {
    !!error && console.error(error)
  }, [error])

  useEffect(() => {
    if (!!error || isFetching) {
      return
    }

    if (!!data?.accounts[0]) {
      // this is a query by id, so it should return just 1 account
      setSignatories(data.accounts[0].signatories.map(({ signatory }) => signatory.id))
      setThreshold(data.accounts[0].threshold)
      setBadge(AccountBadge.MULTI)
    }
  }, [data, error, isFetching])

  return <Box className={className}>
    <AccountDisplay address={address} badge={badge} />
    {signatories.length > 0 && (
      <Expander
        expanded={expanded}
        title={(
          <div>Signatories <Chip
            className="threshold"
            label={`${threshold}/${signatories.length}`}
          /></div>
        )}
        content={<ul className="signatoryList">
          {signatories.map((sig) =>
            <li key={sig} >
              <AccountDisplay
                address={sig}
                withName={true}
              />
            </li>
          )}
        </ul>}
      />
    )}
  </Box>
}


export default styled(MultisigCompactDisplay)(({ theme }) => `
    .signatoryList {
        list-style-type: none;
    }
`)