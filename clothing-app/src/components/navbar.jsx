import { HiOutlineSearch } from "react-icons/hi"
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {NavLink}from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='bg-black text-white w-full h-[3rem] flex flex-row justify-evenly items-center' >
        <div className="text-xl font-sans">Creating Buyers</div>
        <div className="flex flex-row gap-5">
          <span className="cursor-pointer text-xl font-sans"><NavLink to="/">Home</NavLink></span>
          <span className="cursor-pointer text-xl font-sans"><NavLink to='/men'>Men</NavLink></span>
          <span className="cursor-pointer text-xl font-sans"><NavLink to='/women'>Women</NavLink></span>
          <div className='flex h-[1.5rem] relative items-center'>
            <input className="rounded-lg outline-none text-black"  type='text'  
             placeholder='search for you'/>
          < HiOutlineSearch className="absolute ml-40 cursor-pointer  text-black" />
          </div>
          </div>
          <div className='flex flex-row gap-3 items-center'> 
          <BsCart4 />
          <span className="cursor-pointer text-xl font-sans">Cart</span>
          <NavLink className='cursor-pointer text-xl font-sans' to='/login'>Log In</NavLink>
          {/* <span className="cursor-pointer text-xl font-sans">sign In</span> */}
          <CgProfile />
          </div>
      </div>
     );
}
 
export default Navbar;