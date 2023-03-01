import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { useStore, cartStore } from "./store/stores";

function App() {
  const setProducts = cartStore((state) => state.setProducts);
  const products = cartStore((state) => state.products);
  const addToCart = cartStore((state) => state.addToCart);
  const removeFromCart = cartStore((state) => state.removeFromCart);
  const clearCart = cartStore((state) => state.clearCart);
  const count = useStore((state) => state.count);
  const increment = () => addToCart(1);
  const decrement = () => removeFromCart(1);
  const cart = cartStore((state) => state.cart);

  useEffect(() => {
    console.log(products);
    console.log(cart);
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <nav className="bg-white border-b border-gray-50 shadow-md px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={reactLogo} alt="React Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">React App</h1>
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

      <main className="px-8 py-6">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-500">${product.price}</p>
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <button
                className="bg-red-500 text-white rounded-md px-4 py-2 mt-4"
                onClick={() => removeFromCart(product)}
              >
                Remove from Cart
              </button>

              <button
                className="bg-red-500 text-white rounded-md px-4 py-2 mt-4"
                onClick={() => clearCart(product)}
              >
                Clear Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
