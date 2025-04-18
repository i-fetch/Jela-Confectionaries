import React from "react";
import PlaceOrder from "./PlaceOrder";
import { getAllProducts } from "@/controllers/getAllProducts";

export default async function page() {
  try {
    // Fetch products server-side
    const products = await getAllProducts();

    return (
      <div className="min-h-screen bg-gray-50">
        <PlaceOrder products={products} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500">Failed to load products. Please try again later.</p>
      </div>
    );
  }
}