const Filter = ({ filterProducts, data , addToCart}) => {

  return (
    <div className=" flex flex-wrap ">
      {filterProducts.length !== 0 ? (filterProducts.map((product,ind) => {
        return (
            <div className="max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-wrap pt-[6rem]
             items-center gap-4  shadow-lg rounded-lg hover:scale-105 overflow-hidden justify-center" key={ind}>
          <div className="flex flex-col items-center w-[20rem] mx-14" key={product.id}>
          <img className="mt-full w-74 h-64 object-center" src={product.image}></img>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <span className="text-xl font-semibold text-gray-800 mb-2">{product.price}</span>
            <p className="text-xl font-semibold text-gray-800 mb-2">{product.size}</p>
            <button
        className="bg-black text-white px-4 py-2 mb-2 rounded w-48"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
          </div>
          </div>
        );
      })) : 
      <div className="w-full min-h-[100vh] flex justify-center items-center">
        No data found!
        </div>}
    </div>
  );
};

export default Filter;
