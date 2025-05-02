import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteStore = create(
  persist(
    (set) => ({
      favorites: [], // Array to store favorite product IDs
      toggleFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.includes(productId)
            ? state.favorites.filter((id) => id !== productId) // Remove if already favorited
            : [...state.favorites, productId], // Add if not favorited
        })),
    }),
    {
      name: "favorite-products", // Key for local storage
    }
  )
);

export default useFavoriteStore;