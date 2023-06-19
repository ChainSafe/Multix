import { createTheme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string
        white: string
        black: string
      }
      error: {
        main: string
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
      main: '#4964a8',
      white: 'white',
      black: '#000000de'
    },
    error: {
      main: '#ff8a65'
    }
  },
  typography: {
    fontFamily: ['Jost', 'sans-serif', 'Roboto'].join(',')
  },
  custom: {
    text: {
      addressColorLightGray: '#777575',
      errorColor: '#ff8a65'
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
