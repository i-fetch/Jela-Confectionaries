"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Favorite from "@/models/Favourite";
import Product from "@/models/Product";

export async function getUserFavorites(userId) {
  try {
    await connectToDB(); // Ensure the database connection is established

    // Find all favorite records for the given user
    const favorites = await Favorite.find({ userId }).populate("productId").lean();

    // Map the favorites to include product details
    return favorites.map((favorite) => ({
      id: favorite.productId._id.toString(),
      name: favorite.productId.name,
      price: favorite.productId.price,
      image: favorite.productId.image,
    }));
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    throw new Error("Failed to fetch user favorites");
  }
}