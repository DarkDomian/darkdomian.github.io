import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

import Favicon from './components/Favicon.tsx'
import App from './App.tsx'
import NotFound from './NotFound.tsx'
import './components/i18n.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Favicon />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  </StrictMode>,
)
