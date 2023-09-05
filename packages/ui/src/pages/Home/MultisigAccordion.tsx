import { Accordion as AccordionMui, AccordionDetails, AccordionSummary, Paper } from '@mui/material'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { styled } from '@mui/material/styles'
import React from 'react'
import AccountDisplay from '../../components/AccountDisplay'
import { MultisigAggregated } from '../../contexts/MultiProxyContext'

interface AccordionProps {
  multisig: MultisigAggregated
}

const MultisigAccordion = ({ multisig }: AccordionProps) => {
  return (
    <AccordionMuiStyled>
      <AccordionSummary
        expandIcon={
          <HiOutlineChevronDown
            color="black"
            size="1rem"
          />
        }
      >
        <SignatoriesHeadingStyled>
          Signatories ({multisig?.signatories?.length})
        </SignatoriesHeadingStyled>
      </AccordionSummary>
      <AccordionDetails>
        <MultisigPaperStyled key={multisig.address}>
          <AddressListStyled>
            {multisig?.signatories?.map((signatory) => (
              <li key={signatory}>
                <AccountDisplay address={signatory} />
              </li>
            ))}
          </AddressListStyled>
        </MultisigPaperStyled>
      </AccordionDetails>
    </AccordionMuiStyled>
  )
}

const AccordionMuiStyled = styled(AccordionMui)`
  &.MuiPaper-root {
    &.Mui-expanded {
      background: ${({ theme }) => theme.custom.gray[200]};
      border-radius: ${({ theme }) => theme.custom.borderRadius};
      border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
      padding: 0 0.75rem;
      margin: 0;

      .MuiAccordionSummary-root,
      .MuiCollapse-root,
      .MuiPaper-root {
        background: ${({ theme }) => theme.custom.gray[200]};
      }

      .MuiAccordionSummary-content {
        padding: 0;
      }

      .MuiAccordionSummary-root {
        border: none;
      }

      .MuiAccordionDetails-root {
        border: none;
      }

      .MuiButtonBase-root {
        padding-right: 0;
      }
    }
  }

  .MuiAccordionSummary-root {
    border-radius: ${({ theme }) => theme.custom.borderRadius};
    border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  }

  .MuiButtonBase-root {
    min-height: auto !important;
    padding: 0.75rem 0.75rem 0.75rem 0;
    margin: 0;
    border-radius: ${({ theme }) => theme.custom.borderRadius};
  }

  .MuiAccordionDetails-root {
    padding: 0;
    border: none;
  }

  .MuiAccordionSummary-content {
    margin: 0;
    padding: 0 0.75rem;
  }

  .MuiPaper-root {
    margin: 0;
    padding: 0;
    border: none;
  }

  .Mui-expanded {
    min-height: auto !important;
    margin: 0 !important;
  }

  ul {
    padding: 0.75rem 0 0 0;
    margin: 0;
  }
`

const SignatoriesHeadingStyled = styled('h4')`
  color: ${({ theme }) => theme.custom.gray[700]};
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`

const MultisigPaperStyled = styled(Paper)`
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};
`

const AddressListStyled = styled('ul')`
  padding-inline-start: 0;
  margin-block-end: 0;
  list-style-type: none;

  > li {
    margin-bottom: 1rem;
  }
`

export default MultisigAccordion
