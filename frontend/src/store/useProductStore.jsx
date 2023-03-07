import { create } from "zustand";
import axios from "axios";

export const useProductsStore = create((set) => ({
  products: [],
  setName: (name) => set((state) => ({ name })),
  setPrice: (price) => set((state) => ({ price })),
  setImage: (image) => set((state) => ({ image })),
  setDescription: (description) => set((state) => ({ description })),
  setProducts: (products) => set((state) => ({ products })),
  // now create add product function then use body to send data to backend
  addProduct: async (body) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/products",
        body
      );
      set((state) => ({ products: [...state.products, data] }));
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/products/${id}`
      );
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  fetchProducts: async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/products");
      set((state) => ({ products: data }));
    } catch (error) {
      console.log(error);
    }
  },
}));
