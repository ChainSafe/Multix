import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Creation from "./pages/Creation"
import { Header } from "./components/Header"
import Container from "@mui/material/Container"
import { UserSpace } from "./components/UserSpace"
import { AccountContextProvider } from "./contexts/AccountsContext"
import { ApiContextProvider } from "./contexts/ApiContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AccountContextProvider>
          <ApiContextProvider>
            <Header />
            <Container
              fixed
              sx={{ paddingTop: "6rem" }}>
              <UserSpace>
                <Routes>
                  {/* <Route
                  path="/"
                  element={<Swap />}
                /> */}
                  <Route
                    path="/"
                    element={<Landing />}
                  />
                  <Route
                    path="/create"
                    element={<Creation />}
                  />
                </Routes>
              </UserSpace>
            </Container>
          </ApiContextProvider>
        </AccountContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App;
