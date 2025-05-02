"use server";

import { connectToDB } from "@/lib/ConnectDB";
import User from "@/models/User";

export async function getUser(email) {
  try {
    await connectToDB(); // Ensure the database connection is established

    // Find the user by email
    const user = await User.findOne({ email }).select("username email phone").lean();

    if (!user) {
      throw new Error("User not found");
    }

    return {
      name: user.username,
      email: user.email,
      phone: user.phone || "N/A", // Default to "N/A" if phone is not available
    };
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw new Error("Failed to fetch user details");
  }
}