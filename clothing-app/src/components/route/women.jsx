import { Tops } from "../../constants/womentops";

const Womentops = () => {
    const Shopping = (props) => {
 return ( 
     <div className="max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
         <img className=" mt-full w-74 h-64 object-center" src={props.image} />
         <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h2>
         <span className="text-xl font-semibold text-gray-800 mb-2">{props.price}</span>
         <p className="text-xl font-semibold text-gray-800 mb-2">{props.size}</p>
     </div>
  );
};
return(    
<div>
<div>
   {/* <h2 className="text-black text-xl font-semibold flex mr-4">Tops</h2> */}
</div>

<div className="flex flex-wrap mx-14 ">
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