import React from 'react'
import ReactDOM from 'react-dom/client'
import RedPillApp from './RedPillApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RedPillApp />
  </React.StrictMode>,
)
