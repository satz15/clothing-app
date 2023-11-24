import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar'
import Slider from './components/slider'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Navbar/>
      <Slider/>
      </div>
  )
}

export default App
