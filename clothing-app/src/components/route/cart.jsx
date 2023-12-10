import React from "react";

const Addcart = ({cart}) => {
    

    return ( 
        <div>
        <div className="flex flex-row justify-evenly font-bold text-xl mt-20 ">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </div>
        <br />
        <hr className="border-4 w-[92rem] ml-56 "/>
        <br />
        {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-row mt-4 text-xl justify-evenly"
        >
          <span>{item.name}</span>
          <span>{item.description}</span>
          <span>{item.quantity}</span>
          {/* <span>$ {item.price}</span> */}
          <span>${item.price * item.quantity.toFixed(2)}</span>

          <span>
            <button >Remove</button>
          </span>
        </div>
      ))}
      <div className="flex float-right mr-60">
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
}
 
export default Addcart;