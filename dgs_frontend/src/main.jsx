import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/just-another-hand'
import '@fontsource/kurale'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
