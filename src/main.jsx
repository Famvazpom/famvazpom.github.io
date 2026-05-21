import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarContextProvider } from './context/SidebarContext'
import { LanguageContextProvider } from './context/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
)
