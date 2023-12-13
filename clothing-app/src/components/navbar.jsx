import { HiOutlineSearch } from "react-icons/hi"
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {NavLink, useNavigate}from 'react-router-dom'
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const Navbar = ({handlerFilter, allData}) => {
  const navigate = useNavigate();
  // useState 
  const [userInput, SetUserInput] = useState('');
  // search function
  function filteredData(){
    if(userInput){
      // let data = allData.filter((ele)=> {
      //   console.log(ele.name.toLowerCase().includes(userInput))
      //   if(ele.name.toLowerCase().includes(userInput)){
      //     return ele;
      //   }
      // })
      // console.log(data)
      // if(data.length !== 0){
      // }else{
      //   handlerFilter(()=>{
      //     return data;
      //   })
      // }
      handlerFilter(userInput)
      navigate("/filter");
    }
  }

    return ( 
        <div className='bg-black text-white w-full h-[3.5rem] flex flex-row justify-evenly items-center' >
        <div className="text-xl font-sans">Creating Buyers</div>
        <div className="flex flex-row gap-5">
          <span className="cursor-pointer text-xl font-sans"><NavLink to="/">Home</NavLink></span>
          <span className="cursor-pointer text-xl font-sans"><NavLink to='/men'>Men</NavLink></span>
          <span className="cursor-pointer text-xl font-sans"><NavLink to='/women'>Women</NavLink></span>
          <div className='w-[12rem] flex h-[1.5rem] relative items-center justify-between rounded-lg bg-white'>
            <div className="w-[80%]">
              <input className="rounded-lg outline-none text-black w-full pl-2"   type='text'  
             placeholder='search for you' value={userInput} onChange={(event)=>{
              SetUserInput(event.target.value);
             }} onKeyDown={(event)=>{
              if(event.key === "Enter"){
                filteredData()
              }
              console.log(event.key === "Enter")
             }}/>  
            </div>
            <div className="w-[20%] text-[1.5rem]">
              <HiOutlineSearch className="cursor-pointer text-black pl-2" onClick={()=>(filteredData())} />
            </div>
          </div>
          </div>
          <div className='flex flex-row gap-2 items-center'> 
          <div className="flex items-center">
            <BsCart4 />
            {/* <div className="mb-3"><p>1</p></div> */}
          </div>
          <span className="cursor-pointer text-xl font-sans"><NavLink to='Addcart'>Cart</NavLink></span>
          <NavLink className='cursor-pointer text-xl font-sans' to='/login'>Log In</NavLink>
          {/* <span className="cursor-pointer text-xl font-sans">sign In</span> */}
          <CgProfile />
          </div>
      </div>
     );
}
 
export default Navbar;