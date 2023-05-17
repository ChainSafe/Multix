import * as React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

interface TransactionProgressProps {
  value: number
  threshold: number
}

function TransactionProgress({ value, threshold }: LinearProgressProps & TransactionProgressProps) {
  const progressBarFillPercent = (value / threshold) * 100

  return (
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
  )
}

const BoxWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
`

const LinearProgressBoxStyled = styled(Box)`
  width: 100%;
  margin-right: 0.5rem;
`

const TypographyBoxStyled = styled(Box)`
  min-width: 2rem;
`

export default TransactionProgress
