import './styles/App.css'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { AccountContextProvider } from './contexts/AccountsContext'
import { ApiContextProvider } from './contexts/ApiContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MultiProxyContextProvider } from './contexts/MultiProxyContext'
import ToastContextProvider from './contexts/ToastContext'
import { theme } from './styles/theme'
import { css, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AccountNamesContextProvider } from './contexts/AccountNamesContext'
import { NetworkContextProvider } from './contexts/NetworkContext'
import MainLayout from './components/layout/Main'
import { WatchedAddressesContextProvider } from './contexts/WatchedAddressesContext'
import { AutocompleteStyles } from './components/library/Autocomplete'

const appGlobalStyles = css`
  .MuiAutocomplete-popper {
    margin-top: 0.75rem !important;
    ${AutocompleteStyles}
  }
`

const App = () => {
  const queryClient = new QueryClient()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={appGlobalStyles} />
      <ToastContextProvider>
        <NetworkContextProvider>
          <QueryClientProvider client={queryClient}>
            <ApiContextProvider>
              <WatchedAddressesContextProvider>
                <AccountContextProvider>
                  <AccountNamesContextProvider>
                    <MultiProxyContextProvider>
                      <MainLayout />
                    </MultiProxyContextProvider>
                  </AccountNamesContextProvider>
                </AccountContextProvider>
              </WatchedAddressesContextProvider>
            </ApiContextProvider>
          </QueryClientProvider>
        </NetworkContextProvider>
      </ToastContextProvider>
    </MuiThemeProvider>
  )
}

export default App
