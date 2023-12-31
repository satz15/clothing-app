import { Womenshoe } from "../constants/womenshoe";

const Women = ({addToCart}) => {
    const Items = (props) => {
        return(
            <div className="max-w-sm mx-auto w-96 ml-10 mt-4  flex flex-col items-center gap-4 
            hover:scale-105 bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        <img className=" w-full h-64 object-center" src={props.image} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h2>
        <span className="text-xl font-semibold text-gray-800 mb-2">{props.price}</span>
        <p className="text-xl font-semibold text-gray-800 mb-2">{props.size}</p>
        <button
        className="bg-black text-white px-4 py-2  rounded w-48 mb-[25px]"
        onClick={() => addToCart(props)}
      >
        Add to Cart
      </button>
      </div>
        );
    };
    return ( 
        <div>
        <div className="flex justify-around ">
           <h2 className="black text-xl font-semibold">Women's Casual</h2>
           <h2 className="black text-xl font-semibold">View More</h2> 
           </div>
           
        <div className=" flex flex-wrap mx-14 ">
        {Womenshoe.map((item, id) => {
          return (
            <Items
              key={id}
              id={item.id}
              name={item.name}
              price={item.price}
              size={item.size}
              image={item.imgUrl}
            />
          );
        })}
      </div>
      </div>

     );
};
 
export default Women;