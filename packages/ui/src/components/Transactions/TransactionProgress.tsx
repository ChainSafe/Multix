import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'
import AccountDisplay from '../AccountDisplay'
import CheckIcon from '@mui/icons-material/Check'

interface TransactionProgressProps {
  value: number
  threshold: number
  possibleSigners: string[]
  approvals: string[]
}

const ListItemToSign = ({ approvals, signer }: { approvals: string[]; signer: string }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {approvals.includes(signer) ? <CheckIconStyled /> : <HourglassBottomIcon />}
        </ListItemIcon>
        <AccountDisplay address={signer} />
      </ListItemButton>
    </ListItem>
  )
}

const TransactionProgress = ({
  value,
  threshold,
  possibleSigners,
  approvals
}: LinearProgressProps & TransactionProgressProps) => {
  const progressBarFillPercent = (value / threshold) * 100

  return (
    <AccordionStyled>
      <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
        <BoxWrapperStyled>
          <LinearProgressBoxStyled>
            <LinearProgress
              variant="determinate"
              value={progressBarFillPercent}
            />
          </LinearProgressBoxStyled>
          <TypographyBoxStyled>
            <Typography
              variant="body2"
              color="text.secondary"
            >{`${value}/${threshold}`}</Typography>
          </TypographyBoxStyled>
        </BoxWrapperStyled>
      </AccordionSummaryStyled>
      <AccordionDetailsStyled>
        <List dense>
          {possibleSigners.map((signer: string) => {
            return (
              <ListItemToSign
                approvals={approvals}
                signer={signer}
              />
            )
          })}
        </List>
      </AccordionDetailsStyled>
    </AccordionStyled>
  )
}

const BoxWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
`

const LinearProgressBoxStyled = styled(Box)`
  width: 100%;
  margin-right: 0.5rem;
`

const TypographyBoxStyled = styled(Box)`
  min-width: 2rem;
`

const AccordionStyled = styled(Accordion)`
  box-shadow: none;
  padding-right: 8px;

  &:before {
    display: none;
  }

  .Mui-expanded {
    min-height: 24px;
  }
`

const AccordionSummaryStyled = styled(AccordionSummary)`
  border: none;
  box-shadow: none;
  padding: 0;

  .MuiAccordionSummary-content {
    margin: 0;
  }
`

const AccordionDetailsStyled = styled(AccordionDetails)`
  padding: 0;
`

const CheckIconStyled = styled(CheckIcon)(
  ({ theme }) => `
    color: ${theme.custom.identity.green};
  `
)

export default TransactionProgress
