"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export async function getDietaries() {
  try {
    await connectToDB();

    // Fetch unique dietary options from the Product model
    const dietaries = await Product.distinct("dietary");
    return dietaries;
  } catch (error) {
    console.error("Error fetching dietaries:", error);
    throw new Error("Failed to fetch dietaries");
  }
}