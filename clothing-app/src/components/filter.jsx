const Filter = ({ filterProducts, data }) => {
  const products = data.filter((products) =>
    products.name.toLowerCase().includes(filterProducts)
  );

  console.log(products);
  return (
    <div className=" flex flex-wrap ">
      {products.map((product) => {
        return (
            <div className="max-w-sm mx-auto bg-white  flex flex-wrap pt-[6rem]
             items-center gap-8  shadow-lg rounded-lg overflow-hidden justify-center">
          <div className="flex flex-col items-center w-[20rem] mx-14" key={product.id}>
          <img className="mt-full w-74 h-64 object-center" src={product.imgUrl}></img>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <span className="text-xl font-semibold text-gray-800 mb-2">{product.price}</span>
            <p className="text-xl font-semibold text-gray-800 mb-2">{product.size}</p>
            <button
        className="bg-black text-white px-4 py-2 mb-2 rounded w-48"
      >
        Add to Cart
      </button>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
