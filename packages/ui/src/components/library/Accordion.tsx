import {
  Accordion as AccordionMui,
  AccordionDetails,
  AccordionSummary,
  styled
} from '@mui/material'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import React from 'react'
import { theme } from '../../styles/theme'

interface AccordionProps {
  header: React.JSX.Element
  content: React.JSX.Element
}

const Accordion = ({ header, content }: AccordionProps) => {
  return (
    <AccordionMuiStyled>
      <AccordionSummary
        expandIcon={
          <HiOutlineChevronDown
            color={theme.custom.text.black}
            size={'1.5rem'}
          />
        }
      >
        {header}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </AccordionMuiStyled>
  )
}

const AccordionMuiStyled = styled(AccordionMui)`
  .MuiButtonBase-root {
    padding: 0.5rem 0.75rem 0.5rem 1.25rem;
    border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
    border-radius: ${({ theme }) => theme.custom.borderRadius};
    margin-top: 0.75rem;
  }

  .MuiAccordionDetails-root {
    padding: 0;
    border: none;
  }

  .MuiAccordionSummary-content {
    margin: 0;
  }

  .MuiPaper-root {
    margin: 0;
    padding: 0.75rem 0 0 0;
    border: none;
  }

  .Mui-expanded {
    max-height: none;
  }
`

export default Accordion
