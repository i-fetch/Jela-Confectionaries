import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      loading: false,

      // Fetch items from your API and update cartItems.
      fetchCartItems: async () => {
        set({ loading: true });
        try {
          const res = await fetch("/api/cart");
          const data = await res.json();
          if (res.ok) {
            set({ cartItems: data });
          }
        } catch (error) {
          console.error("Error fetching cart items:", error);
        } finally {
          set({ loading: false });
        }
      },

      // Add a product to the cart via your API then refresh items.
      addToCart: async (product) => {
        try {
          const res = await fetch("/api/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId: product._id, quantity: 1 }),
          });
          if (res.ok) {
            get().fetchCartItems();
          }
        } catch (error) {
          console.error("Error adding to cart:", error);
        }
      },

      // Remove an item from the cart and update the state.
      removeFromCart: async (itemId) => {
        try {
          const res = await fetch(`/api/cart/${itemId}`, { method: "DELETE" });
          if (res.ok) {
            set({
              cartItems: get().cartItems.filter((item) => item._id !== itemId),
            });
          }
        } catch (error) {
          console.error("Error removing item:", error);
        }
      }
    }),
    { name: "cart-storage" } // key name for localStorage persistence
  )
);
