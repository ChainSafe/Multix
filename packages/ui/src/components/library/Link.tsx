import { css, styled } from '@mui/material/styles'
import { Link as RouterLinkDom, LinkProps } from 'react-router-dom'

const BaseLinkStyles = css`
  color: #3a3b3b;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:focus,
  &:hover {
    color: #000000;
    background: #e3e9ff;
    border-radius: 20px;
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
