import { create } from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const cartStore = create((set) => ({
  setProducts: (products) => {
    set((state) => ({ products }));
  },

  products: [],
  cart: [],
  addToCart: (product) => {
    set((state) => ({ cart: [...state.cart, product] }));
  },

  removeFromCart: (product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== product._id),
    }));
  },
  clearCart: () => {
    set((state) => ({ cart: [] }));
  },
  setCart: (cart) => {
    set((state) => ({ cart }));
  },
}));
