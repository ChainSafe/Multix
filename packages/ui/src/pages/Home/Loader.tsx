import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { PropsWithChildren } from 'react'

const Loader = (props: PropsWithChildren) => {
  return (
    <Grid
      container
      spacing={2}
    >
      <LoaderBoxStyled>{props.children}</LoaderBoxStyled>
    </Grid>
  )
}

const LoaderBoxStyled = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`

export default Loader
