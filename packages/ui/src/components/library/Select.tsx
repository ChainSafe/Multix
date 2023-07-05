import {
  MenuItem,
  Select as SelectMui,
  SelectChangeEvent,
  SelectProps as SelectMuiProps,
  Theme
} from '@mui/material'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import React from 'react'

interface SelectProps {
  value: string
  menuItems: { name: string; logo?: string }[]
  onChange: (event: SelectChangeEvent<string>) => void
  minified?: boolean
  inputSize?: 'medium' | 'large'
}

export const Select = ({ value, onChange, menuItems, minified, inputSize }: SelectProps) => {
  const matchesMediumScreen = !useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const minifiedVersion = minified ?? matchesMediumScreen

  return (
    <SelectMuiStyled
      inputSize={inputSize}
      value={value}
      IconComponent={HiOutlineChevronDown}
      MenuProps={{
        sx: {
          marginTop: '0.75rem'
        }
      }}
      onChange={(event) => onChange(event as SelectChangeEvent<string>)}
      minifiedVersion={minifiedVersion}
    >
      {menuItems &&
        menuItems.map(({ name, logo }) => (
          <MenuItemStyled
            key={name}
            value={name}
          >
            {logo && (
              <ImgStyled
                minifiedVersion={minifiedVersion}
                alt={`network-logo-${name}`}
                src={logo}
              />
            )}
            {<NetworkNameStyled>{name}</NetworkNameStyled>}
          </MenuItemStyled>
        ))}
    </SelectMuiStyled>
  )
}

Select.defaultProps = {
  minified: false,
  inputSize: 'medium'
}

const SelectMuiStyled = styled(SelectMui)<
  SelectMuiProps & { minifiedVersion: boolean; inputSize?: string }
>`
  display: inline-flex;
  max-width: 9.875rem;
  width: 100%;
  height: ${({ inputSize }) => (inputSize === 'large' ? '3.5rem' : '2.5rem')};
  padding: ${({ minifiedVersion }) => (minifiedVersion ? '0.75rem' : '1rem')};
  background: ${({ theme }) => theme.palette.primary.white};
  outline: 1.5px solid ${({ theme }) => theme.custom.text.borderColor};
  margin-left: 1rem;
  text-transform: capitalize;

  fieldset {
    min-width: ${({ minifiedVersion }) => (minifiedVersion ? '3.75rem' : '9.875rem')};
    max-width: ${({ minifiedVersion }) => (minifiedVersion ? '3.75rem' : '12rem')};
  }

  .MuiSelect-select {
    display: flex;
    padding: 0;
    padding-right: ${({ minifiedVersion }) => (minifiedVersion ? '0.5rem' : '2rem')} !important;

    div:last-child {
      display: ${({ minifiedVersion }) => (minifiedVersion ? 'none' : 'block')};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiList-root {
    margin-top: 0.5rem;
  }

  svg {
    color: ${({ theme }) => theme.custom.text.black};
    width: 1.25rem;
    height: 1.25rem;
    top: calc(50% - 0.65em);
  }
`

const MenuItemStyled = styled(MenuItem)`
  text-transform: capitalize;
  padding: 0.75rem;
  max-width: 9.1875rem;
  box-sizing: content-box;
`

const ImgStyled = styled('img')<
  React.ImgHTMLAttributes<HTMLImageElement> & { minifiedVersion: boolean }
>`
  width: ${({ minifiedVersion }) => (minifiedVersion ? '1.25rem' : '1.5rem')};
  height: ${({ minifiedVersion }) => (minifiedVersion ? '1.25rem' : '1.5rem')};
  margin-right: 0.5rem;
  border-radius: 50%;
  max-height: 2rem;
`

const NetworkNameStyled = styled('div')`
  display: flex;
  align-items: center;
`
