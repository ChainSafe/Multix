import { Autocomplete as AutocompleteMui, TextField } from '@mui/material'
import React, { useCallback, useRef } from 'react'
import { styled } from '@mui/material/styles'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete'
import { HiOutlineChevronDown } from 'react-icons/hi2'

interface AutocompleteProps {
  InputProps?: Partial<AutocompleteRenderInputParams['InputProps']>
  className?: string
  isOptionEqualToValue: (option: any, value: any) => boolean
  filterOptions?: (options: any[], state: any) => any[]
  options: any[]
  getOptionLabel: (option: any) => string
  onChange: (event: any, value: any) => void
  value?: any
  renderOption: (props: any, option: any, state: any) => React.ReactNode
  disableClearable?: boolean
}

const Autocomplete = ({
  className,
  isOptionEqualToValue,
  filterOptions,
  options,
  getOptionLabel,
  onChange,
  value,
  renderOption,
  disableClearable,
  InputProps
}: AutocompleteProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const handleSpecialKeys = useCallback((e: any) => {
    if (['Enter', 'Escape'].includes(e.key)) {
      ref?.current?.blur()
    }
  }, [])

  return (
    <AutocompleteWrapper className={className}>
      <AutocompleteMui
        disablePortal
        isOptionEqualToValue={isOptionEqualToValue}
        disableClearable={disableClearable}
        filterOptions={filterOptions}
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={onChange}
        value={value}
        renderOption={renderOption}
        popupIcon={<HiOutlineChevronDown />}
        renderInput={(params) => {
          return (
            <TextFieldStyled
              {...params}
              inputRef={ref}
              label=""
              InputProps={{
                ...params.InputProps,
                ...InputProps
              }}
              onKeyDown={handleSpecialKeys}
            />
          )
        }}
      />
    </AutocompleteWrapper>
  )
}

const AutocompleteWrapper = styled('div')`
  .MuiInputBase-root {
    padding: 0.5rem 1.25rem;
  }

  .MuiIconButton-root {
    &:hover {
      background: none;
    }

    svg {
      color: ${({ theme }) => theme.custom.text.black};
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`

const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    padding: 0.5rem 0.75rem 0.5rem 1.25rem;
  }

  input {
    max-width: 8.625rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.custom.text.primary};
  }
`

export default Autocomplete
