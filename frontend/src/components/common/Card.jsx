import React from "react";
import Base64 from "./Base64";
import { useEffect } from "react";

export default function Card({ props }) {
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <>
      {props.products.map((product) => (
        <div
          className="bg-white cursor-pointer shadow-md rounded-md hover:border hover:border-gray-300 px-4 py-6 hover:shadow-xl transition duration-200 ease-in-out"
          key={product._id}
        >
          <Base64
            props={{
              base64: product.image,
              class:
                "w-full mx-auto max-w-none hover:scale-90 transition duration-200 ease-in-out",
            }}
          />
          <h2 className="text-2xl font-bold mt-2">{product.name}</h2>
          <p className="text-gray-500 font-semibold">${product.price}</p>
          {/* <div className="inline-block w-auto space-x-1">
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
              onClick={() => props.addToCart(product)}
            >
              Add to Cart
            </button>

            <button
              className="bg-red-500 text-white rounded-md px-4 py-2 mt-4"
              onClick={() => props.removeFromCart(product)}
            >
              Remove from Cart
            </button>

            <button
              className="bg-red-500 text-white rounded-md px-4 py-2 mt-4"
              onClick={() => props.clearCart(product)}
            >
              Clear Cart
            </button>

            <button
              className="bg-red-500 text-white rounded-md px-4 py-2 mt-4"
              onClick={() => props.deleteProduct(product._id)}
            >
              Delete
            </button>
          </div> */}
        </div>
      ))}
    </>
  );
}
