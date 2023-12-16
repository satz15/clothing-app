import { HiOutlineSearch } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/navbar-logo.jpg";

const Navbar = ({ handlerFilter, allData, cart }) => {
  const navigate = useNavigate();
  // useState
  const [userInput, SetUserInput] = useState("");
  // search function

  // update usestate
  const updateStateVariable = (val) => {
    let input = val;
    input = input.replaceAll(" ", "");
    input = input.replaceAll(`'`, "");
    SetUserInput(input);
  };
  function filteredData() {
    if (userInput) {
      const products = allData.filter((product) => {
        product.name = product.name.replaceAll(/[.,\/\\$|\-']/g, "");
        product.category = product.category.replaceAll(/[.,\/\\$|\-']/g, "");
        let item = product.category
          .toLowerCase()
          .includes(userInput.toLowerCase());
        if (!item) {
          if (product.name.toLowerCase().includes(userInput.toLowerCase())) {
            return product;
          }
        } else {
          return product;
        }
      });
      if (products.length !== 0) {
        handlerFilter(products);
        navigate("/filter");
      } else {
        alert(`Data not found!!!`);
      }
    }
  }

  const searchTerm = (text) => {
    const filter = text.replace(/[.,\/\\$|\-']/g, "");

    return filter;
  };


  return (
    <div className="bg-black text-white w-full h-[3.5rem] flex flex-row justify-between px-20  items-center fixed z-50 ">
      <div className="text-xl font-sans flex items-center gap-3">
        <div className="w-[3rem] h-[3rem]">
          <img src={Logo} alt="" />
        </div>
        Creating Buyers
      </div>
      <div className="flex flex-row gap-5">
        <span className="cursor-pointer text-xl font-sans">
          <NavLink to="/">Home</NavLink>
        </span>
        <span className="cursor-pointer text-xl font-sans">
          <NavLink to="/men">Men</NavLink>
        </span>
        <span className="cursor-pointer text-xl font-sans">
          <NavLink to="/women">Women</NavLink>
        </span>
        <div className="w-[12rem] flex h-[1.5rem] relative items-center justify-between rounded-lg bg-white">
          <div className="w-[80%]">
            <input
              className="rounded-lg outline-none text-black w-full pl-2"
              type="text"
              placeholder="search for you"
              onChange={(event) => updateStateVariable(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  filteredData();
                }
                console.log(event.key === "Enter");
              }}
            />
          </div>
          <div className="w-[20%] text-[1.5rem]">
            <HiOutlineSearch
              className="cursor-pointer text-black pl-2"
              onClick={() => filteredData()}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row items-center cursor-pointer text-xl font-sans">
          <NavLink
            to="Addcart"
            className="flex flex-row justify-between items-center gap-2 relative"
          >
            <BsCart4 />
            <div
              className="text-[0.9rem] absolute left-2 bottom-4 bg-pink-900 w-[1.4rem]
               h-[1.4rem] rounded-[50%] flex items-center justify-center"
            >
              {cart.length}
            </div>
            Cart
          </NavLink>
        </div>
        <div className="flex gap-2 items-center">
          <NavLink className="cursor-pointer text-xl font-sans" to="/login">
            Log In
          </NavLink>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
