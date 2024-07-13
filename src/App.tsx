// -------------------- Imports --------------------
import React from 'react'
import { 
  Home,
} from './pages'
import { 
  Header, 
} from './components/molecules'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className='ml-5 mr-5' >
      <div className=''>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
