import { React, useEffect } from "react";
import { useStore, cartStore } from "../store/stores";
import { useProductsStore } from "../store/useProductStore";
import Card from "../components/common/Card";

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
      <main className="px-8 py-6 h-full">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <div className="grid sm:grid-cols-4 gap-2">
          <Card
            props={{
              products,
              addToCart,
              removeFromCart,
              clearCart,
              deleteProduct,
              fetchProducts,
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
