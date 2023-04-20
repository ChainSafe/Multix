import "./App.css"
import {BrowserRouter} from "react-router-dom"
import {AccountContextProvider} from "./contexts/AccountsContext"
import {ApiContextProvider} from "./contexts/ApiContext"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {MultiProxyContextProvider} from "./contexts/MultiProxyContext"
import {ToastContextProvider} from "./contexts/ToastContext"
import {theme} from "./theme"
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles'
import {AccountNamesContextProvider} from "./contexts/AccountNamesContext"
import {NetworkContextProvider} from "./contexts/NetworkContext"
import MainLayout from "./components/layout/Main";


const App = () => {
  const queryClient = new QueryClient()

  return (
    <MuiThemeProvider theme={theme}>
      <ToastContextProvider>
        <BrowserRouter>
          <NetworkContextProvider>
            <QueryClientProvider client={queryClient}>
              <ApiContextProvider>
                <AccountContextProvider>
                  <AccountNamesContextProvider>
                    <MultiProxyContextProvider>
                      <MainLayout />
                    </MultiProxyContextProvider>
                  </AccountNamesContextProvider>
                </AccountContextProvider>
              </ApiContextProvider>
            </QueryClientProvider>
          </NetworkContextProvider>
        </BrowserRouter>
      </ToastContextProvider>
    </MuiThemeProvider>
  )
}

export default App;
