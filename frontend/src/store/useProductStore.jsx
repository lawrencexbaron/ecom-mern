import { create } from "zustand";
import axios from "axios";
import Swal from "sweetalert2";

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

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Successfully deleted product",
      });
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
