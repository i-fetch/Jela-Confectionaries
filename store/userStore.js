// store/useUserStore.js
import { create } from 'zustand';
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null, // holds the user data object
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // unique name in storage (e.g. localStorage)
      getStorage: () => localStorage, // default is localStorage (if available)
    }
  )
);
