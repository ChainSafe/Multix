import React from 'react'
import { Grid } from '@mui/material'

interface Props {
  className?: string
  children: React.ReactNode
}
export const Center = ({ children, className }: Props) => (
  <Grid
    className={className}
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ height: '100%' }}
  >
    <Grid
      item
      xs={3}
    >
      {children}
    </Grid>
  </Grid>
)
