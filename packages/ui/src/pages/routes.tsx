import { createBrowserRouter } from 'react-router-dom'
import { About, Creation, Overview, Home, Settings } from './index'
import React from 'react'
import App from '../App'

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
    path: 'about',
    element: <About />,
    name: 'About',
    isDisplayWhenNoWallet: true
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
  }
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: ROUTES
  }
])
