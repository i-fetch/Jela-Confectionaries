"use server";
import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export async function getAllProducts() {
  try {
    await connectToDB();

    // Fetch products and return only the specified fields
    const products = await Product.find({}, "name description price category image").lean();

    return products.map((product) => (
      {
      _id: product._id.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
    }));
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw new Error("Failed to fetch products");
  }
}
