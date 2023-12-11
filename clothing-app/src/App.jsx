import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeShop from "./components/route/home";
import MenShop from "./components/route/men";
import WomenShop from "./components/route/women";
import Login from "./components/login-page";
import Signup from "./components/route/signup";
import Cart from "./components/route/cart";
import Menshirt from "./components/route/men";
import Shoes from "./components/mens-shoe";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeShop />} />
        {/* <Route path='/men' element={<MenShop />}/> */}
        <Route path="/men" element={<Menshirt addToCart={addToCart} />} />
        <Route path="/women" element={<WomenShop addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/Login-btn" element={<HomeShop />} />
        <Route path="/Men-btn" element={<MenShop />} />
        <Route
          path="/Women-btn"
          element={<WomenShop addToCart={addToCart} />}
        />

        {/* <Route path="/Addcart" element={<Cart />} /> */}
        <Route
          path="/Addcart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
