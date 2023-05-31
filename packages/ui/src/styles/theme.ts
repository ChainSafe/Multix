import { createTheme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: '#3F8AE0'
        white: 'white'
        black: '#000000de'
      }
    }
    custom: {
      text: {
        addressColorLightGray: string
        errorColor: string
      }
      background: {
        backgroundColorLightGray: string
      }
      identity: {
        green: string
        grey: string
        red: string
      }
    }
  }
  interface ThemeOptions {
    custom: {
      text?: {
        addressColorLightGray: string
        errorColor: string
      }
      background?: {
        backgroundColorLightGray: string
      }
      identity?: {
        green: string
        grey: string
        red: string
      }
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3F8AE0',
      white: 'white',
      black: '#000000de'
    }
  },
  typography: {
    fontFamily: ['Jost', 'sans-serif', 'Roboto'].join(',')
  },
  custom: {
    text: {
      addressColorLightGray: '#777575',
      errorColor: 'firebrick'
    },
    background: {
      backgroundColorLightGray: '#ebebeb'
    },
    identity: {
      green: 'green',
      grey: 'grey',
      red: 'firebrick'
    }
  }
} as ThemeOptions)
