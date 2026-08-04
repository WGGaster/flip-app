import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewUser from '../components/view-user.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewUser />
  </StrictMode>,
)
