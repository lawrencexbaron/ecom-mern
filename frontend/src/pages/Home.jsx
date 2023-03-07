import { React, useEffect } from "react";
import Base64 from "../components/common/Base64";
import { useStore, cartStore } from "../store/stores";
import { useProductsStore } from "../store/useProductStore";

const Home = () => {
  const products = useProductsStore((state) => state.products);
  const addToCart = cartStore((state) => state.addToCart);
  const removeFromCart = cartStore((state) => state.removeFromCart);
  const clearCart = cartStore((state) => state.clearCart);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const deleteProduct = useProductsStore((state) => state.deleteProduct);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <main className="px-8 py-6">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <div className="grid sm:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              className="bg-white shadow-md rounded-md p-4"
              key={product._id}
            >
              <Base64
                props={{ base64: product.image, class: "w-1/2 mx-auto" }}
              />
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-500">${product.price}</p>
              <div className="space-x-2">
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

                <button
                  className="bg-red-500 text-white rounded-md px-4 py-2 mt-4"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
