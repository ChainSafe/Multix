import { Tooltip } from '@mui/material'
import { DeriveAccountRegistration } from '@polkadot/api-derive/types'
import {
  HiOutlineCheckCircle as CheckCircleRoundedIcon,
  HiOutlineMinusCircle as RemoveCircleOutlineRoundedIcon
} from 'react-icons/hi2'

import { useMemo } from 'react'
import { styled } from '@mui/material/styles'

interface Props {
  className?: string
  identity: DeriveAccountRegistration
}

const IdentityIcon = ({ className, identity }: Props) => {
  const judgements = useMemo(
    () => identity.judgements.filter(([, judgement]): boolean => !judgement.isFeePaid),
    [identity]
  )
  const isGood = useMemo(
    () =>
      judgements.some(([, judgement]): boolean => judgement.isKnownGood || judgement.isReasonable),
    [judgements]
  )
  const isBad = useMemo(
    () =>
      judgements.some(([, judgement]): boolean => judgement.isErroneous || judgement.isLowQuality),
    [judgements]
  )
  const displayJudgements = useMemo(
    () => JSON.stringify(judgements.map(([, jud]) => jud.toString())).replace(/"|\[|\]/g, ''),
    [judgements]
  )

  const tooltipContent = (
    <StyledPopup>
      {identity?.display && (
        <li>
          <span className="desc">display:</span>
          {identity.display}
        </li>
      )}
      {identity?.legal && (
        <li>
          <span className="desc">legal:</span>
          {identity.legal}
        </li>
      )}
      {identity?.email && (
        <li>
          <span className="desc">email:</span>
          {identity.email}
        </li>
      )}
      {identity?.judgements?.length > 0 && (
        <li>
          <span className="desc">judgements:</span>
          <span className="judgments">{displayJudgements}</span>
        </li>
      )}
      {identity?.pgp && (
        <li>
          <span className="desc">pgp:</span>
          {identity.pgp}
        </li>
      )}
      {identity?.riot && (
        <li>
          <span className="desc">riot:</span>
          {identity.riot}
        </li>
      )}
      {identity?.twitter && (
        <li>
          <span className="desc">twitter:</span>
          {identity.twitter}
        </li>
      )}
      {identity?.web && (
        <li>
          <span className="desc">web:</span>
          {identity.web}
        </li>
      )}
    </StyledPopup>
  )

  return (
    <Tooltip
      className={className}
      title={tooltipContent}
      data-cy="icon-identity"
    >
      <span>
        {isGood ? (
          <CheckCircleRoundedIcon className="green" />
        ) : (
          <RemoveCircleOutlineRoundedIcon className={isBad ? 'red' : 'grey'} />
        )}
      </span>
    </Tooltip>
  )
}

const StyledPopup = styled('div')`
  list-style: none;
  padding: 0.5rem;

  li:not(:last-child) {
    margin-bottom: 0.3rem;
  }
  .desc {
    margin-right: 0.3rem;
  }
  .judgments {
    display: inline list-item;
  }
`

export default styled(IdentityIcon)`
  display: inline;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .green {
    color: ${({ theme }) => theme.custom.identity.green};
  }

  .grey {
    color: ${({ theme }) => theme.custom.identity.grey};
  }

  .red {
    color: ${({ theme }) => theme.custom.identity.red};
  }
`
