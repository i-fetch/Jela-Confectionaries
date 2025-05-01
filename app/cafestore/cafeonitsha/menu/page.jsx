import React from "react";
import CafeMenu from "../_components/CafeMenu/CafeMenu";

export default async function page() {
  try {
    // const menuItems = await getMenuItems();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* <CafeMenu menuItems={menuItems} /> */}
      </div>
    );
  } catch (error) {
    console.error("Error loading menu items:", error);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500">Failed to load menu items. Please try again later.</p>
      </div>
    );
  }
}