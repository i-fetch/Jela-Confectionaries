import React from "react";
import CafeMenu from "../_components/CafeMenu/CafeMenu";
import { getCategories } from "@/controllers/getCategories";
import { getDietaries } from "@/controllers/getDietaries";
import { getOnitshaCafeMenu } from "@/controllers/getOnitshaCafeMenu";

export default async function page() {
  try {
    const products = await getOnitshaCafeMenu(); // Fetch products for Onitsha Cafe
    const categories = await getCategories();
    const dietaries = await getDietaries();

    return (
      <div className="min-h-screen bg-gray-50">
        <CafeMenu products={products} dietaries={dietaries} categories={categories} />
      </div>
    );
  } catch (error) {
    console.error("Error loading menu items:", error);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500">Failed to load menu items. Please try again later.</p>
      </div>
    );
  }
}