import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'buffer'
import { Buffer } from 'buffer'

// Make Buffer available globally
window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
