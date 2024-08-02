// -------------------- Imports --------------------
import React from 'react'
import { 
  ContactUs,
  Home,
  ProductSimulation,
  ProductView,
} from './pages'
import { 
  Header, 
} from './components/molecules'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className='flex-col w-full h-full' >
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-view' element={<ProductView />} />
          <Route path='/product-simulation' element={<ProductSimulation />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
