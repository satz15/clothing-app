

const Addcart = () => {
    return ( 
        <div>
        <div className="flex flex-row justify-evenly font-bold text-xl mt-20 ">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </div>
        <br />
        <hr className="border-4 w-[92rem] ml-56 "/>
        <br />
        <div className="flex float-right mr-60">
            <h1 className="font-bold text-2xl ">Total:$0</h1>
        </div>
         
        </div>
     );
}
 
export default Addcart;