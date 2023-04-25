import { Tooltip } from '@mui/material';
import { DeriveAccountRegistration } from '@polkadot/api-derive/types';
import styled from 'styled-components';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { useMemo } from 'react';

interface Props {
  className?: string
  identity: DeriveAccountRegistration
}

const StyledPopup = styled.div`
list-style: none;
padding: .5rem;

li:not(:last-child) {
	margin-bottom: 0.3rem;
}
.desc {
	margin-right: 0.3rem;
}
.judgments {
	display: inline list-item;
}
`;

const IdentityIcon = ({ className, identity }: Props) => {
  const judgements = useMemo(() => identity.judgements.filter(([, judgement]): boolean => !judgement.isFeePaid), [identity])
  const isGood = useMemo(() => judgements.some(([, judgement]): boolean => judgement.isKnownGood || judgement.isReasonable), [judgements])
  const isBad = useMemo(() => judgements.some(([, judgement]): boolean => judgement.isErroneous || judgement.isLowQuality), [judgements])
  const displayJudgements = useMemo(() => JSON.stringify(judgements.map(([, jud]) => jud.toString())).replace(/"|\[|\]/g, ""), [judgements])

  const tooltipContent = <StyledPopup>
    {identity?.legal && <li><span className='desc'>legal:</span>{identity.legal}</li>}
    {identity?.email && <li><span className='desc'>email:</span>{identity.email}</li>}
    {identity?.judgements?.length > 0 && <li><span className='desc'>judgements:</span><span className='judgments'>{displayJudgements}</span></li>}
    {identity?.pgp && <li><span className='desc'>pgp:</span>{identity.pgp}</li>}
    {identity?.riot && <li><span className='desc'>riot:</span>{identity.riot}</li>}
    {identity?.twitter && <li><span className='desc'>twitter:</span>{identity.twitter}</li>}
    {identity?.web && <li><span className='desc'>web:</span>{identity.web}</li>}
  </StyledPopup>;

  return (
    <Tooltip className={className} title={tooltipContent}>
      {isGood
        ? <CheckCircleOutlineRoundedIcon className="green" sx={{ color: "green" }} />
        : <RemoveCircleOutlineRoundedIcon className={isBad ? 'brown' : 'grey'} sx={{ color: isBad ? 'brown' : 'grey' }} />
      }
    </Tooltip>
  )
};

export default styled(IdentityIcon)`
	display: inline;
	
  svg.green {
		color: green !important;
	}

	svg.grey {
		color: gray !important;
	}
`;