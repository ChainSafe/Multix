import { styled } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Hero = ({ children }: Props) => {
  return <StyledHero>{children}</StyledHero>
}

const StyledHero = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  justify-items: center;
  padding: 2rem;
`
