import { BrowserRouter } from 'react-router-dom'
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
