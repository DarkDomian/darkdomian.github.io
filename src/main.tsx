import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'

import Favicon from './components/Favicon.tsx'
import App from './App.tsx'
// import NotFound from './NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Favicon />
    <App />
  </StrictMode>,
)
