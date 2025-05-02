"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export async function getOnitshaCafeMenu() {
  const cafeId = "718f211c-279e-448e-87b1-d6defd761842"; // Onitsha Cafe ID

  try {
    await connectToDB(); // Ensure the database connection is established

    // Fetch all products for the given cafeId and select specific fields
    const simplifiedProducts = await Product.find({ cafeId }, "cafeId name description price category dietary image available").lean();

    // Convert _id to string and simplify the product objects
    const products = simplifiedProducts.map((product) => ({
      id: product._id.toString(), // Convert _id to string
      cafeId: product.cafeId,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      dietary: product.dietary,
      image: product.image,
      available: product.available,
    }));

    return products;
  } catch (error) {
    console.error("Error fetching Onitsha Cafe menu:", error);
    throw new Error("Failed to fetch Onitsha Cafe menu");
  }
}