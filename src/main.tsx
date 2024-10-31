import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Favicon from './favicon.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Favicon />
    <App />
  </StrictMode>,
)
