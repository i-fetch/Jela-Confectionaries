"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Dietary from "@/models/Dietary";

export async function getDietaries() {
  try {
    await connectToDB();

    const dietaries = await Dietary.find({})
      .select("name") // Select only the name field
      .lean();

    // Return an array of dietary names
    return dietaries.map((dietary) => dietary.name);
  } catch (error) {
    console.error("Error fetching dietaries:", error);
    throw new Error("Failed to fetch dietaries");
  }
}