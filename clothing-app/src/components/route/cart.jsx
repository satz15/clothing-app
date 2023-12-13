import React from "react";

const Addcart = ({ cart, setCart }) => {

  const onRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    console.log(remaining);
    setCart(remaining);
  };

  const addQuantity = (id) => {
    const cartProducts = cart.map((product) => {
     if(product.id === id) {
      console.log(product.quantity + 1);
      return {...product,quantity : product.quantity+1}
     }else{
      return product;
     }
    }) 
    setCart(cartProducts)
  }

  const minusQuantity = (id) => {
    const cartProducts = cart.map((product) => {
     if(product.id === id && product.quantity !== 1) {
      return {...product,quantity : product.quantity-1}
     }else{
      return product;
     }
    }) 
    setCart(cartProducts)
  }
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-[90rem] flex flex-row justify-evenly font-bold text-xl  mt-20 border-b-4 pb-8">
        <span className="w-[8rem]">Product</span>
        <span className="w-[8rem]">Image</span>
        <span className="w-[8rem]"> Quantity </span>
        <span className="w-[8rem]">Price</span>
        <span className="w-[8rem]">Remove</span>
      </div>
      {/* <br /> */}
      {/* <hr className="border-4 w-[92rem] ml-56 " /> */}
      {/* <br /> */}
      <div className="w-[90rem] flex flex-col justify-evenly font-bold text-xl gap-4">
      {cart.map((item) => {
        return (
            <div
            key={item.id}
            className="w-[90rem] h-[8rem] flex flex-row mt-4 text-xl justify-evenly items-center border-b-4"
          >
            <span className="text-xl font-semibold w-[8rem]">{item.name}</span>
            <span>
              <img src={item.image} alt={item.name} className="w-20 h-20" />
            </span>
            <span className="text-xl font-semibold flex items-center justify-center gap-1 w-[8rem] text-center">
              <button onClick={()=>{addQuantity(item.id)}} className="bg-black w-5 h-8 text-white">+</button>{item.quantity}
            < button onClick={()=> {minusQuantity(item.id)}} className="bg-black w-5 h-8 text-white">-</button></span>
            {/* <span className="text-xl font-semibold w-[8rem] text-center">$ {item.price}</span> */}
            <span className="w-[8rem]">${(Number(item.price) * item.quantity).toFixed(2)}</span>

            <span className="w-[8rem]">
              <button
                className="bg-black text-white px-4 py-2 mb-2 rounded w-24 flex items-center justify-center"
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </button>
            </span>
          </div>
        );
      })}
      </div>
      <div className="w-[90rem] flex flex-row justify-end pr-[8rem]">
        <h1 className="text-2xl font-bold">Total: ${calculateTotal(cart)}</h1>
      </div>
    </div>
  );
};

const calculateTotal = (cart) => {
  return cart
    .reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = item.quantity || 1;
      if (!isNaN(itemPrice) && itemQuantity > 0) {
        return total + itemPrice * itemQuantity;
      }

      return total;
    }, 0)
    .toFixed(2);
};

export default Addcart;
