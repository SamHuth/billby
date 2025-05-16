import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="grid place-items-center h-screen">
      <div className="max-w-sm mx-auto w-full p-4 py-6 border shadow border-gray-200 rounded">
        <App />
      </div>
    </div>
  </StrictMode>,
)
