const Category = () => {
    return ( 
        <div>
            <div className="flex justify-around">
               <div className=" bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly"> 
               <img className="h-[25rem] w-50" src="src\assets\images\shirt.jpg" alt="" />
               <span className="text-2xl font-bold mb-4 ">Shirts</span>
               </div>
               <div className="bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly"> 
                <img className="h-[25rem] w-50" src="src/assets/images/t-shirt.jpg" alt="" />
               <span className="text-2xl font-bold mb-4">T-Shirts</span>
               </div>
               <div className="bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly">
                <img className="h-[25rem] w-50" src="src\assets\images\shorts.jpg" alt="" />
               <span className="text-2xl font-bold mb-4">Shorts</span>
               </div> 
               <div className="bg-zinc-200 shadow-lg rounded-lg overflow-hidden justify-evenly"> 
                <img className="h-[25rem] w-50" src="src\assets\images\jeans.jpg" alt="" />
               <span className="text-2xl font-bold mb-4">Jeans</span>
               </div>
            </div>
        </div>
     );
}
 
export default Category;