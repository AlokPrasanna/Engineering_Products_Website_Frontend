// -------------------- Imports --------------------
import React from 'react'
import { Home } from './pages'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div>
      <div>
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
