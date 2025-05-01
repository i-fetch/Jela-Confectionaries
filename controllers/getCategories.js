"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export async function getCategories() {
  try {
    await connectToDB();

    // Fetch unique categories from the Product model
    const categories = await Product.distinct("category");
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
}