import { Route, Routes, Link, NavLink } from "react-router-dom";
import Mens from "../assets/images/men.jpg"
import Womens from "../assets/images/women.jpg"

const Apparel = () => {
    return ( 
        <div className="flex">
            <div className="flex flex-col items-center relative menimg">
                <img className="h-[40rem] rounded-lg shadow-md mb-4" src={Mens} alt="" />
                <div className="flex flex-col absolute bottom-1/4 right-1/4 -mb-32 -mr-28 gap-3">
                <span className="text-2xl text-white font-bold  ">Shop Men's Apparel</span>
                <button className="bg-black text-white px-4 py-2  rounded-md ">
                    <NavLink to='/Men-btn'>Shop Now</NavLink>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-[40rem] rounded-lg shadow-md womenimg " src={Womens} alt="" />
            <div className="flex flex-col relative -mt-24 ml-96 gap-3">
            <span className="text-2xl text-white font-bold ">Shop Women's Apparel</span>
            <button className="bg-black text-white px-4 py-2 rounded-md">
            <NavLink to='/Women-btn'>Shop Now</NavLink>
                </button>
            </div>
            </div>
        </div>
     );
}
 
export default Apparel;