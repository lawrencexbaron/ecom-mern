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
        <div className="bg-white shadow-md rounded-md p-4" key={product._id}>
          <Base64 props={{ base64: product.image, class: "w-1/2 mx-auto" }} />
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-500">${product.price}</p>
          <div className="space-x-2">
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
          </div>
        </div>
      ))}
    </>
  );
}
