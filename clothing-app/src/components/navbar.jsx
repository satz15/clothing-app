import { HiOutlineSearch } from "react-icons/hi"
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return ( 
        <div className='bg-black text-white w-full h-[3rem] flex flex-row justify-evenly items-center' >
        <div className="text-xl font-serif">Creating Buyers</div>
        <div className="flex flex-row gap-5">
          <span className="cursor-pointer text-xl font-serif">Men</span>
          <span className="cursor-pointer text-xl font-serif">Women</span>
          <span className="cursor-pointer text-xl font-serif">About Us</span>
          <div className='flex h-[1.5rem] relative items-center'>
            <input className="rounded-2xl outline-none" type='text' placeholder='search'/>
          < HiOutlineSearch className="absolute right-5  text-black" />
          </div>
          </div>
          <div className='flex flex-row gap-3 items-center'> 
          <BsCart4 />
          <span className="cursor-pointer text-xl font-serif">Cart</span>
          <span className="cursor-pointer text-xl font-serif">sign In</span>
          <CgProfile />
          </div>
      </div>
     );
}
 
export default Navbar;