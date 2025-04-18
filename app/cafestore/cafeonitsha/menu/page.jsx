import React from "react";
import CafeMenu from "@/components/CafeMenu/CafeMenu";

export default async function page() {

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-bold mt-10">Cafe Onitsha</h1>
      <p className="text-center text-lg mt-4">Welcome to Cafe Onitsha!</p>
      <p className="text-center text-lg mt-4">Explore our menu and place your order.</p>

      <CafeMenu />
    </div>
  );
}