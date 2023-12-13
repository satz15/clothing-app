const Filter = ({ filterProducts, data }) => {
  const products = data.filter((products) =>
    products.name.toLowerCase().includes(filterProducts)
  );

  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
            <div className="max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-wrap items-center gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
          <div key={product.id}>
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
