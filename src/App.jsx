import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomeScreen from './pages/WelcomeScreen'
import RSVPScreen from './pages/RSVPScreen'
import SuccessScreen from './pages/SuccessScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path='rsvp' element={<RSVPScreen />} />
          <Route path='success' element={<SuccessScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
