import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { useStore, cartStore } from "../../store/stores";

const Nav = () => {
  const cart = cartStore((state) => state.cart);
  // handle cart toggle
  const [cartOpen, setCartOpen] = useState(false);

  // active menu
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenu = (menu) => {
    setActiveMenu(menu);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <>
      <nav className="bg-white border-b border-gray-50 shadow-md px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={reactLogo} alt="React Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">React App</h1>

          <ul className="flex ml-8">
            <li
              onClick={() => handleMenu("home")}
              className={
                activeMenu === "home"
                  ? "border-b-2 border-b-red-500 mr-4 transition ease-in duration-100 border-2 border-transparent py-6 hover:border-b-2 hover:border-b-red-500"
                  : "mr-4 transition ease-in duration-100 border-2 border-transparent py-6 hover:border-b-2 hover:border-b-red-500"
              }
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => handleMenu("create")}
              className={
                activeMenu === "create"
                  ? "border-b-2 border-b-red-500 mr-4 transition ease-in duration-100 border-2 border-transparent py-6 hover:border-b-2 hover:border-b-red-500"
                  : "mr-4 transition ease-in duration-100 border-2 border-transparent py-6 hover:border-b-2 hover:border-b-red-500"
              }
            >
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={handleCartToggle}
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-xl">
                <ul className="py-1">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center px-4 py-3 hover:bg-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="ml-4 font-medium">{item.name}</span>
                      <span className="ml-auto font-medium">{item.length}</span>
                      <span className="ml-auto font-medium">${item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100"></div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">
                    $
                    {cart.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)}
                  </span>

                  <Link to="/cart">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
