import React from "react"
import "./index.css"
import App from "./App"
import { CssBaseline } from "@mui/material"
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
)
