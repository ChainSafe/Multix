import { styled } from '@mui/material/styles'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button = styled('button')<ButtonProps>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  font-size: 1.15rem;
  max-height: 43px;
  line-height: 1.625rem;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.palette.primary.white};
  color: #334155;
  box-shadow: 0 1.21622px 2.43243px rgba(0, 0, 0, 0.1), 0 1.21622px 3.64865px rgba(0, 0, 0, 0.25);
  transition: background 0.2s ease-in-out;

  ${(props) =>
    props.variant === 'primary' &&
    `
    background: #3e67f8;
    color: ${props.theme.palette.primary.white};
    
    &:focus {
      background: #1244f5;
    }
  
    &:disabled {
      cursor: not-allowed;
      background: #e3e9ff;
      color: #a8b3dc;
      box-shadow: none;
    }
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background: #F1F5F9;
    color: #3A3B3B;
  
    &:focus,
    &:hover {
      background: #E8ECF0;
    }
  
    &:disabled {
      cursor: not-allowed;
      background: #F4F4F4;
      color: #D2D2D2;
      box-shadow: none;
    }
  `}
`

export const ButtonWithIcon = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 4px;
  }
`
