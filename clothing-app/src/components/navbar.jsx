import { HiOutlineSearch } from "react-icons/hi"
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return ( 
        <div className='bg-black text-white w-full h-[3rem] flex flex-row justify-evenly' >
        <div className="">Instyle</div>
        <div className="flex flex-row gap-5">
          <span>Men</span>
          <span>Women</span>
          <span>About Us</span>
          <div className='flex h-[1.5rem]' ><input type='text' placeholder='search'></input>
          < HiOutlineSearch/></div>
          </div>
          <div className='flex flex-row gap-3'>
          <BsCart4 />
          <span>Cart</span>
          <span>sign In</span>
          <CgProfile />
          </div>
      </div>
     );
}
 
export default Navbar;