import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const addCartItem = (cartItems, productToAdd) => {
//    find 
    const existingCartItems = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id,
    );

    // if found 
    if (existingCartItems) {
     return cartItems.map((cartItem) =>
     cartItem.id === productToAdd.id
     ? {...cartItem, quantity: cartItem.quantity + 1}
     :cartItem,
     );
    }

    // return new array with modifies cartItems/ new cart Item
    return [...cartItems, {...productToAdd, quantity: 1}]; 
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id);
};

const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const clearCartItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {
        cartItems,
        addItemToCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        clearCartItemFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartGlobalContext = () => {
    return useContext(CartContext);
};

export {CartProvider, useCartGlobalContext};