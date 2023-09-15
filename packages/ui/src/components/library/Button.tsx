import { styled } from '@mui/material/styles'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link'
  border?: CSSStyleDeclaration['border']
}

export const Button = styled('button')<ButtonProps>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  height: 100%;
  max-height: 2.25rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary.white};
  color: ${({ theme }) => theme.custom.text.primary};
  box-shadow: ${({ theme }) => theme.custom.boxShadow};
  transition: background 0.2s ease-in-out;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.custom.button.secondaryDisabledColor};
    background: #f4f4f4;
    box-shadow: none;
  }

  ${({ variant, theme }) =>
    variant === 'primary' &&
    `
    background: ${theme.palette.primary.main};
    color: ${theme.palette.primary.white};
    
    &:hover, &:focus {
      filter: brightness(1.1);
    }
  
    &:disabled {
      cursor: not-allowed;
      background: ${theme.custom.button.primaryDisabledBackground};
      color: ${theme.custom.button.primaryDisabledColor};
      box-shadow: none;
    }
  `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    `
    background: ${theme.custom.gray[100]};
    color: ${theme.custom.text.black};
  
    &:focus,
    &:hover {
      background: #FAFCFD;
    }
  
    &:disabled {
      cursor: not-allowed;
      background: #F4F4F4;
      color: ${theme.custom.button.secondaryDisabledColor};
      box-shadow: none;
    }
  `}

  ${({ variant, theme }) =>
    variant === 'link' &&
    `
    background: none;
    box-shadow: none;
    color: ${theme.custom.text.black};
    
    &:focus {
      background: ${theme.custom.gray[400]};
    }
    
    &:disabled {
      cursor: not-allowed;
      color: ${theme.custom.button.primaryDisabledColor};
    }
  `}
`

Button.defaultProps = {
  variant: 'secondary'
}

export const ButtonWithIcon = styled(Button)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  border: ${({ border, theme }) => border || `1px solid ${theme.custom.gray[400]}`};

  svg {
    margin: 0 4px;
  }
`
