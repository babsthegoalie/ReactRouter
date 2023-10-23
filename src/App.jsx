import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="container">
      <div id="navbar">      
      <Link to="/blue">Go Blue</Link>
      <Link to="/red">Go Red</Link></div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<h1>BLUE</h1>} />
          <Route path="/red" element={<h1>RED</h1>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
