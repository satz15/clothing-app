import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar'
import Slider from './components/slider'
import Shoes from './components/mens-shoe'
import Apparel from './components/apparel'
import Category from './components/categories'
import Login from './components/login-page'
import Card from './components/card'
import Women from './components/womens-shoe'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div >
      <Navbar/>
      <Slider/>
      <Shoes/>
      <Apparel/>
      <Category/>
      <Women/>
      {/* <Login/> */}
      </div> 
  )
}

export default App
