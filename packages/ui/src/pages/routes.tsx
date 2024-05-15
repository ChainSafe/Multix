import { createBrowserRouter } from 'react-router-dom'
import { Creation, Home, Overview, Settings } from './index'
import React from 'react'
import App from '../App'
import ErrorFallback from '../components/ErrorFallback/ErrorFallback'
import { Landing } from '../components/LandingComponents/Landing'

interface Route {
  path: string
  element: React.ReactNode
  name: string
  isDisplayWhenNoWallet: boolean
}

export const ROUTES: Route[] = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
    isDisplayWhenNoWallet: true
  },
  {
    path: 'create',
    element: <Creation />,
    name: 'New Multisig',
    isDisplayWhenNoWallet: false
  },
  {
    path: 'settings',
    element: <Settings />,
    name: 'Settings',
    isDisplayWhenNoWallet: true
  },
  {
    path: 'overview',
    element: <Overview />,
    name: 'Overview',
    isDisplayWhenNoWallet: true
  },
  {
    path: 'about',
    element: <Landing />,
    name: 'About',
    isDisplayWhenNoWallet: false
  }
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorFallback />,
    children: ROUTES
  }
])
