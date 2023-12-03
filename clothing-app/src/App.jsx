import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import HomeShop from './components/route/home'
import MenShop from './components/route/men'
import WomenShop from './components/route/women'
import Login from './components/login-page'
import Signup from './components/route/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeShop />}/>
        <Route path='/men' element={<MenShop />}/>
        <Route path='/women' element={<WomenShop />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Signup/>}/>
      </Routes>
      </div> 
  )
}

export default App
