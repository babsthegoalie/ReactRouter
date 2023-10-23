import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Red from './Components/Red.jsx'
import Blue from './Components/Blue.jsx'
import Home from './Components/Home.jsx'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="container">
      <div id="navbar">      
      <Link to="/">Go Home</Link>
      <Link to="/blue">Go Blue</Link>
      <Link to="/red">Go Red</Link></div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div id="footer">      
      <Link to="/">Go Home</Link>
      <Link to="/blue">Go Blue</Link>
      <Link to="/red">Go Red</Link></div>
    </div>
    </>
  )
}

export default App
