import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      totalItems: 0,

      // Add item to cart
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item._id === product._id);

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
              ),
              totalItems: state.totalItems + 1,
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
              totalItems: state.totalItems + 1,
            };
          }
        }),

      // Remove item from cart
      removeFromCart: (productId) =>
        set((state) => {
          const itemToRemove = state.cartItems.find((item) => item._id === productId);

          if (itemToRemove) {
            return {
              cartItems: state.cartItems.filter((item) => item._id !== productId),
              totalItems: state.totalItems - itemToRemove.quantity,
            };
          }
          return state;
        }),

      // Increment item quantity
      incrementItem: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalItems: state.totalItems + 1,
        })),

      // Decrement item quantity
      decrementItem: (productId) =>
        set((state) => {
          const itemToDecrement = state.cartItems.find((item) => item._id === productId);

          if (itemToDecrement && itemToDecrement.quantity > 1) {
            return {
              cartItems: state.cartItems.map((item) =>
                item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
              ),
              totalItems: state.totalItems - 1,
            };
          } else if (itemToDecrement && itemToDecrement.quantity === 1) {
            return {
              cartItems: state.cartItems.filter((item) => item._id !== productId),
              totalItems: state.totalItems - 1,
            };
          }
          return state;
        }),
    }),
    {
      name: "cart-storage", // Key for localStorage
    }
  )
);