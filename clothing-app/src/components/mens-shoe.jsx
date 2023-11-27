import { Shoe } from "../constants/shoes";

const Shoes = () => {
  const ItemShop = (props) => {
    return (
        
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden justify-evenly">
        <img className="w-74 h-64 object-center" src={props.image} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h2>
        <span className="text-xl font-semibold text-gray-800 mb-2">{props.price}</span>
        <p className="text-xl font-semibold text-gray-800 mb-2">{props.size}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-around ">
        <h1 className="text-black text-xl font-semibold ">Mens Casuals </h1>
        <h1 className="text-xl font-semibold">View More</h1>
      </div>
      <hr />
      <div className="flex flex-wrap ">
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
