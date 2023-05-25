import { createBrowserRouter } from 'react-router-dom'
import { About, Creation, Help, Home, Settings } from './index'
import React from 'react'
import App from '../App'

interface Route {
  path: string
  element: React.ReactNode
  name: string
  isDisplayWhenNoMultiProxy: boolean
  isDisplayWhenNoWallet: boolean
}

export const ROUTES: Route[] = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
    isDisplayWhenNoMultiProxy: true,
    isDisplayWhenNoWallet: true
  },
  {
    path: 'create',
    element: <Creation />,
    name: 'New Multisig',
    isDisplayWhenNoMultiProxy: true,
    isDisplayWhenNoWallet: false
  },
  {
    path: 'about',
    element: <About />,
    name: 'About',
    isDisplayWhenNoMultiProxy: true,
    isDisplayWhenNoWallet: true
  },
  {
    path: 'settings',
    element: <Settings />,
    name: 'Settings',
    isDisplayWhenNoMultiProxy: true,
    isDisplayWhenNoWallet: true
  },
  {
    path: 'help',
    element: <Help />,
    name: 'Help',
    isDisplayWhenNoMultiProxy: false,
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
