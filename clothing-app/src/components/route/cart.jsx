

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
        <div className="flex text-right">
            <h1 className="font-bold text-2xl ">Total:$0</h1>
        </div>
        </div>
     );
}
 
export default Addcart;