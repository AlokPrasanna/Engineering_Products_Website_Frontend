// -------------------- Imports --------------------
import React from 'react'
import { 
  About,
  ContactUs,
  ControlAndAutomation,
  Home,
  ProductSimulation,
  ProductView,
  ReacherschAndInstumentation,
  TechnologyForEducation,
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
          <Route path='/about' element={<About />} />
          <Route path='/research-and-is-nstumentation' element={<ReacherschAndInstumentation />} />
          <Route path='/contol-and-automation' element={<ControlAndAutomation />} />
          <Route path='/technology-for-education' element={<TechnologyForEducation />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
