const Apparel = () => {
    return ( 
        <div className="flex">
            <div className="flex flex-col items-center relative">
                <img className="h-[40rem] rounded-lg shadow-md mb-4" src="src\assets\images\men.jpg" alt="" />
                <div className="flex flex-col absolute bottom-1/4 right-1/4 -mb-32 -mr-48 gap-3">
                <span className="text-2xl text-white font-bold  ">Shop Men's Apparel</span>
                <button className="bg-black text-white px-4 py-2  rounded-md ">Shop Now</button>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-[40rem] rounded-lg shadow-md " src="src\assets\images\women.jpg" alt="" />
            <div className="flex flex-col relative -mt-24 ml-96 gap-3">
            <span className="text-2xl text-white font-bold ">Shop Women's Apparel</span>
            <button className="bg-black text-white px-4 py-2 rounded-md">Shop Now</button>
            </div>
            </div>
        </div>
     );
}
 
export default Apparel;