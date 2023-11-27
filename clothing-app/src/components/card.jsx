const Card = () => {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="https://example.com/your-shopping-image.jpg"
          alt="Shopping Card"
        />
        <div className="px-6 py-4">
          <p className="text-xl font-semibold text-gray-800 mb-2">Product Title</p>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Category</span>
        </div>
      </div>
    );
  };
  
  export default Card;