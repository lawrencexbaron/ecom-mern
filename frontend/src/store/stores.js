import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const cartStore = create((set) => ({
  setProducts: (products) => {
    set((state) => ({ products }));
  },

  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 10,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      quantity: 10,
    },
  ],
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const cart = [...state.cart];
      // add item to cart depends on quantity
      if (product.quantity > 0) {
        const index = cart.findIndex((item) => item.id === product.id);
        if (index > -1) {
          cart[index].quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
      }
      return { cart };
    });
  },
  removeFromCart: (product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    }));
  },
  clearCart: () => {
    set((state) => ({ cart: [] }));
  },
  setCart: (cart) => {
    set((state) => ({ cart }));
  },
}));
