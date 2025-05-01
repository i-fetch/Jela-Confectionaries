"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export async function getOnitshaCafeMenu() {
  const cafeId = "718f211c-279e-448e-87b1-d6defd761842"; // Onitsha Cafe ID

  try {
    await connectToDB(); // Ensure the database connection is established

    // Fetch all products for the given cafeId
    const products = await Product.find({ cafeId }).lean();

    return products;
  } catch (error) {
    console.error("Error fetching Onitsha Cafe menu:", error);
    throw new Error("Failed to fetch Onitsha Cafe menu");
  }
}