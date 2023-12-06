import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import HomeShop from './components/route/home'
import MenShop from './components/route/men'
import WomenShop from './components/route/women'
import Login from './components/login-page'
import Signup from './components/route/signup'
import Cart from './components/route/cart'

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
        <Route path='/Login-btn' element={<HomeShop/>}/>
        <Route path='/Men-btn' element={<MenShop />}/>
        <Route path='/Women-btn' element={<WomenShop />}/>
        <Route path='/Addcart' element={<Cart/>}/>
      </Routes>
      </div> 
  )
}

export default App;
