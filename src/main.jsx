import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FlipCard from '../components/view-user.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlipCard />
  </StrictMode>,
)
