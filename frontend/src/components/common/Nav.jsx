import React from "react";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { useStore, cartStore } from "../../store/stores";

const Nav = () => {
  const cart = cartStore((state) => state.cart);
  return (
    <>
      <nav className="bg-white border-b border-gray-50 shadow-md px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={reactLogo} alt="React Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">React App</h1>

          <ul className="flex ml-8">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <span>Cart</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-2 ml-2">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
