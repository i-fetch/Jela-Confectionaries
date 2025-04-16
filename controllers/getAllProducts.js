// controllers/getAllProducts.js
import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export async function getAllProducts() {
  try {
    // Ensure a connection to the database is established.
   await connectToDB();

    // Fetch all products from the database
    const products = await Product.find({});
    console.log("Fetched products:", products);

    return products;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw new Error("Failed to fetch products");
  }
}
