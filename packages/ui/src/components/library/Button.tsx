import { styled } from '@mui/material/styles'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link'
}

export const Button = styled('button')<ButtonProps>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  font-size: 1.15rem;
  line-height: 1.625rem;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.palette.primary.white};
  color: #334155;
  box-shadow: 0 1.21622px 2.43243px rgba(0, 0, 0, 0.1), 0 1.21622px 3.64865px rgba(0, 0, 0, 0.25);
  transition: background 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    color: #d7d7d7;
    background: #f4f4f4;
    box-shadow: none;
  }

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
    background: ${props.theme.palette.primary.white};
    color: #18191A;
  
    &:focus,
    &:hover {
      background: #E8ECF0;
    }
  
    &:disabled {
      cursor: not-allowed;
      background: #F4F4F4;
      color: #D7D7D7;
      box-shadow: none;
    }
  `}

  ${(props) =>
    props.variant === 'link' &&
    `
    background: none;
    box-shadow: none;
    color: #18191A;
    
    &:focus {
      background: #E6ECF1;
    }
    
    &:disabled {
      cursor: not-allowed;
      color: #A8B3DC
    }
  `}
`

Button.defaultProps = {
  variant: 'secondary'
}

export const ButtonWithIcon = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 4px;
  }
`
