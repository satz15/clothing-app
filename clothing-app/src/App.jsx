import { useState, createContext, useContext } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeShop from "./components/route/home";
import MenShop from "./components/route/men";
import WomenShop from "./components/route/women";
import Login from "./components/login-page";
import Signup from "./components/route/signup";
import AddCart from "./components/route/cart";
import Menshirt from "./components/route/men";
import Filter from "./components/filter";
import { data } from "./constants/allData";
import { updateCurrentUser } from "firebase/auth";
import {useUser} from "./components/context"

function App() {
  const [cart, setCart] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const userDetails = useUser();
  console.log(userDetails)
  const ProtectedRoute = ({children}) => {
    return <Navigate to="/Login"/>
    // if (!formFields){
    //   return <Navigate to="/Login"/>
    // }return children;
  }
  console.log(updateCurrentUser);

  const UserContext = createContext();
  // console.log(filterProducts)

  const [allData, setAllData] = useState([...data]);

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
      <Navbar handlerFilter={setFilterProducts} allData={allData} cart={cart}/>
      <Routes>
        <Route path="/" element={<HomeShop addToCart={addToCart} />} />
        {/* <Route path='/men' element={<MenShop />}/> */}
        <Route path="/men" element={<Menshirt addToCart={addToCart} />} />
        <Route path="/women" element={<WomenShop addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/SignUp" element={<HomeShop />} />
        <Route path="/HomeShop" element={<HomeShop/>}/>
        <Route path="/Login-btn" element={<HomeShop addToCart={addToCart} />} />
        <Route path="/Men-btn" element={<MenShop addToCart={addToCart} />} />
        <Route
          path="/filter"
          element={<Filter filterProducts={filterProducts} data={data} addToCart={addToCart} />}
        />

        <Route
          path="/Women-btn"
          element={<WomenShop addToCart={addToCart} />}
        />

        {/* <Route path="/Addcart" element={<Cart />} /> */}
        <Route
          path="/Addcart"
          element={<AddCart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
