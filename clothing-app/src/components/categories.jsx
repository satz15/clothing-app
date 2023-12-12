import Shirt from "../assets/images/shirt.jpg"
import Tshirt from "../assets/images/t-shirt.jpg"
import Shorts from "../assets/images/shorts.jpg"
import Jeans from "../assets/images/jeans.jpg"

const Category = () => {
    return ( 
        <div>
            <div className="flex justify-around">
               <div className=" bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly"> 
               <img className="h-[25rem] w-50" src={Shirt} alt="" />
               <span className="text-2xl font-bold mb-4 ">Shirts</span>
               </div>
               <div className="bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly"> 
                <img className="h-[25rem] w-50" src={Tshirt} alt="" />
               <span className="text-2xl font-bold mb-4">T-Shirts</span>
               </div>
               <div className="bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly">
                <img className="h-[25rem] w-50" src={Shorts} alt="" />
               <span className="text-2xl font-bold mb-4">Shorts</span>
               </div> 
               <div className="bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly"> 
                <img className="h-[25rem] w-50" src={Jeans} alt="" />
               <span className="text-2xl font-bold mb-4">Jeans</span>
               </div>
            </div>
        </div>
     );
}
 
export default Category;