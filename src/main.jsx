import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Toaster } from "@/components/ui/sonner"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
