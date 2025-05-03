"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Favorite from "@/models/Favourite";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function toggleFavorite(productId) {
  try {
    // Get the current user's session
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      throw new Error("You must be logged in to toggle favorites.");
    }

    const userId = session.user.userId; // Get userId from session

    await connectToDB(); // Ensure the database connection is established

    // Check if the product is already a favorite
    const existingFavorite = await Favorite.findOne({ userId, productId });

    if (existingFavorite) {
      // If it exists, remove it (unfavorite)
      await Favorite.deleteOne({ _id: existingFavorite._id });
      console.log(`Removed product ${productId} from favorites for user ${userId}`);
    } else {
      // If it doesn't exist, add it (favorite)
      await Favorite.create({ userId, productId });
      console.log(`Added product ${productId} to favorites for user ${userId}`);
    }

    // Revalidate the path to update the UI
    revalidatePath("/cafestore/cafeonitsha");
  } catch (error) {
    console.error("Error toggling favorite:", error);
    throw new Error("Failed to toggle favorite");
  }
}