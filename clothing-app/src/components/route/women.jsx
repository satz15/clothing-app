import { Tops } from "../../constants/womentops";

const Womentops = ({ addToCart }) => {
    const Shopping = (props) => {
 return ( 
     <div className="max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col
     hover:scale-105 items-center gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
         <img className=" mt-full w-74 h-64 object-center" src={props.image} />
         <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h2>
         <span className="text-xl font-semibold text-gray-800 mb-2">{props.price}</span>
         <p className="text-xl font-semibold text-gray-800 mb-2">{props.size}</p>
         <button
        className="bg-black text-white px-4 py-2 mb-[25px] rounded w-48"
        onClick={() => addToCart(props)}
      >
        Add to Cart
      </button>
     </div>
  );
};
return(    
<div>

<div className="flex flex-wrap mx-14 pt-[5rem]">
{Tops.map((item, id) => {
return (
 <Shopping
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

}

export default Womentops;