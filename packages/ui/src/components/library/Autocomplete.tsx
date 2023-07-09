import { Autocomplete as AutocompleteMui } from '@mui/material'
import React, { SyntheticEvent } from 'react'
import { styled } from '@mui/material/styles'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'

interface AutocompleteProps {
  InputProps?: Partial<AutocompleteRenderInputParams['InputProps']>
  className?: string
  isOptionEqualToValue?: (option: any, value: any) => boolean
  filterOptions?: (options: any[], state: any) => any[]
  options: any[]
  getOptionLabel: (option: any) => string
  onChange?: (event: any, value: any) => void
  value?: any
  renderOption: (props: any, option: any, state: any) => React.ReactNode
  disableClearable?: boolean
  onKeyDown?: (e: any) => void
  onInputChange?: (
    _: SyntheticEvent<Element, Event>,
    val: string | InjectedAccountWithMeta | null
  ) => void
  disabled?: boolean
  freeSolo?: boolean
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode
  iconSize?: string
  selectOnFocus?: boolean
  clearOnBlur?: boolean
  handleHomeEndKeys?: boolean
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
  disabled,
  freeSolo,
  onInputChange,
  renderInput,
  selectOnFocus,
  clearOnBlur,
  handleHomeEndKeys,
  iconSize
}: AutocompleteProps) => {
  return (
    <AutocompleteWrapper
      iconSize={iconSize}
      className={className}
    >
      <AutocompleteMui
        handleHomeEndKeys={handleHomeEndKeys}
        selectOnFocus={selectOnFocus}
        clearOnBlur={clearOnBlur}
        disablePortal
        isOptionEqualToValue={isOptionEqualToValue}
        disableClearable={disableClearable}
        filterOptions={filterOptions}
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={onChange}
        value={value}
        disabled={disabled}
        freeSolo={freeSolo}
        onInputChange={onInputChange}
        renderOption={renderOption}
        popupIcon={<HiOutlineChevronDown />}
        renderInput={renderInput}
      />
    </AutocompleteWrapper>
  )
}

Autocomplete.defaultProps = {
  iconSize: '1.25rem'
}

const AutocompleteWrapper = styled('div')<{ iconSize?: string }>`
  svg {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
  }

  .MuiIconButton-root {
    svg {
      color: ${({ theme }) => theme.custom.text.black};
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      background: none;
    }
  }

  .MuiAutocomplete-popper {
    margin-top: 0.75rem !important;
  }

  .MuiAutocomplete-listbox {
    border: none;
    padding: 0;
    outline: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  }

  .MuiAutocomplete-option {
    &:hover {
      background: none;
    }

    &[aria-selected='true'].Mui-focused {
      background: none;
    }

    padding-left: 0.5rem;
  }
`

export default Autocomplete
