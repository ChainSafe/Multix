import { css, styled } from '@mui/material/styles'
import { Link as RouterLinkDom, LinkProps } from 'react-router-dom'

const BaseLinkStyles = css`
  color: #3a3b3b;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.2s linear;

  &:focus,
  &:hover {
    color: #1244f5;
  }

  &:disabled {
    background: #d2d2d2;
    box-shadow: none;
  }
`

export const Link = styled('a')`
  ${BaseLinkStyles};
`

export const RouterLink = styled(RouterLinkDom)<LinkProps>`
  ${BaseLinkStyles};
`
