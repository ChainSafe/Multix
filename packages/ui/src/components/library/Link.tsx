import { styled } from '@mui/material/styles'

const Link = styled('a')`
  color: #3a3b3b;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

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

export default Link
