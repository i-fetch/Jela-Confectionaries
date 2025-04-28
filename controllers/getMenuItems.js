import { connectToDB } from "@/lib/ConnectDB";
import CafeMenu from "@/models/CafeMenu";

export async function getMenuItems() {
  const branchId = "6801fcbb174da61c935dc25c"; // The _id of the CafeBranch

  try {
    await connectToDB();

    // Find the CafeMenu for the specific branch
    const cafeMenu = await CafeMenu.findOne({ branch: branchId }).populate("items");

    if (!cafeMenu) {
      throw new Error(`No menu found for branch with _id: ${branchId}`);
    }

    // Return the menu items
    return cafeMenu.items.map((item) => ({
      id: item._id.toString(),
      name: item.name,
      category: item.category,
      description: item.description,
      price: item.price,
      isAvailable: item.isAvailable,
      image: item.image,
    }));
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw new Error("Failed to fetch menu items");
  }
}