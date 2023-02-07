import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Creation, Home } from "./pages"
import { Header } from "./components/Header"
import Container from "@mui/material/Container"
import { UserSpace } from "./components/UserSpace"
import { AccountContextProvider } from "./contexts/AccountsContext"
import { ApiContextProvider } from "./contexts/ApiContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MultisigContextProvider } from "./contexts/MultisigContext"
import { ToastContextProvider } from "./contexts/ToastContext"
import { theme } from "./theme"
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AccountNamesContextProvider } from "./contexts/AccountNamesContext"
import Success from "./pages/Success"


const App = () => {
  const queryClient = new QueryClient()

  return (
    <MuiThemeProvider theme={theme}>
      <ToastContextProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AccountContextProvider>
              <AccountNamesContextProvider>
                <MultisigContextProvider>
                  <ApiContextProvider>
                    <Header />
                    <Container
                      fixed
                      sx={{ paddingTop: "6rem" }}>
                      <UserSpace>
                        <Routes>
                          <Route
                            path="/"
                            element={<Home />}
                          />
                          <Route
                            path="/create"
                            element={<Creation />}
                          />
                          <Route
                            path="/creation-success"
                            element={<Success />}
                          />
                        </Routes>
                      </UserSpace>
                    </Container>
                  </ApiContextProvider>
                </MultisigContextProvider>
              </AccountNamesContextProvider>
            </AccountContextProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ToastContextProvider>
    </MuiThemeProvider>
  )
}

export default App;
