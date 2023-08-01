import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <BrowserRouter>
      <div className='flex bg-primary'
      >
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  )
}

export default App
