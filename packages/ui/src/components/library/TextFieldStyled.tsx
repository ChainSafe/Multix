import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'
import { InputStyledBaseCss } from './InputField'

const TextFieldStyled = styled(TextField)`
  label {
    display: block;
    transform: none;
    position: static;
    margin-bottom: 4px;
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.custom.text.primary};

    &.Mui-focused {
      color: ${({ theme }) => theme.custom.text.primary};
    }
  }

  fieldset {
    display: none;
  }

  .MuiInputAdornment-root {
    margin-left: 1rem;
  }

  .MuiInputBase-root {
    ${InputStyledBaseCss};
    max-height: 41px;
    padding: 0 1.25rem 0 0;

    .MuiAutocomplete-input {
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.custom.gray[900]};
      border: none;
      margin-top: -3px;
      height: 41px;
      box-sizing: border-box;
      padding: 0.5rem 1.25rem 0.5rem 0 !important;
    }

    .MuiInputBase-inputAdornedStart {
      padding-left: 0.25rem;
    }

    &.Mui-focused {
      outline: 3px solid ${({ theme }) => theme.custom.text.borderColor};
    }

    &.Mui-error {
      outline: 3px solid ${({ theme }) => theme.custom.error};
    }
  }

  .MuiFormHelperText-root {
    &.Mui-error {
      position: absolute;
      bottom: -24px;
    }
  }
`

export default TextFieldStyled
