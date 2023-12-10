import { Shoe } from "../constants/shoes";


const Shoes = ({addToCart}) => {
  const ItemShop = (props) => {
    return (
        
      <div className="max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
        <img className="mt-full w-74 h-64 object-center" src={props.image} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h2>
        <span className="text-xl font-semibold text-gray-800 mb-2">{props.price}</span>
        <p className="text-xl font-semibold text-gray-800 mb-2">{props.size}</p>
        <button
        className="bg-black text-white px-4 py-2 mb-2 rounded w-48"
        onClick={() => addToCart(props)}
      >
        Add to Cart
      </button>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-around mt-4">
        <h1 className="text-black text-xl font-semibold ">Mens Casuals </h1>
        <h1 className="text-xl font-semibold">View More</h1>
      </div>
      {/* <hr /> */}
      <div className="flex flex-wrap mx-14  ">
        {Shoe.map((item, id) => {
          return (
            <ItemShop
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

export default Shoes;
