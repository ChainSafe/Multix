import { createBrowserRouter } from "react-router-dom";
import { About, Creation, Help, Home } from "./index";
import React from "react";
import App from "../App";

type Route = {
    path: string;
    element: React.ReactNode;
    name: string
    isDisplayWhenNoMultiProxy: boolean
}

export const ROUTES: Route[] = [
  { path: '/', element: <Home />, name: 'Home', isDisplayWhenNoMultiProxy: true },
  { path: 'create', element: <Creation />, name: 'New Multisig', isDisplayWhenNoMultiProxy: true },
  { path: 'about', element: <About />, name: 'About', isDisplayWhenNoMultiProxy: true },
  { path: 'help', element: <Help />, name: 'Help', isDisplayWhenNoMultiProxy: false },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: ROUTES
  },
]);