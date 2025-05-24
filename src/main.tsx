
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inicio" element={<App />} />
        <Route path="/login" element={<App />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  )
createRoot(document.getElementById("root")!).render(<App />)