"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Leaf, Wine, Wheat, AlertCircle, StoreIcon, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useFavoriteStore from "@/store/useFavoriteStore"; // Import Zustand store
import { toggleFavorite } from "@/controllers/toggleFavorite"; // Import server action

export default function CafeMenu({ products, categories, dietaries }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDietary, setSelectedDietary] = useState([]);

  // Zustand store for managing favorites
  const { favorites, toggleFavorite: toggleLocalFavorite } = useFavoriteStore();

  // Filter menu items based on search, category, and dietary preferences
  const filteredItems = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category.some((cat) => cat.toLowerCase() === selectedCategory.toLowerCase());
    const matchesDietary =
      selectedDietary.length === 0 || selectedDietary.every((diet) => (item.dietary || []).includes(diet));

    return matchesSearch && matchesCategory && matchesDietary;
  });

  // Toggle dietary filter
  const toggleDietaryFilter = (diet) => {
    setSelectedDietary((prev) =>
      prev.includes(diet) ? prev.filter((d) => d !== diet) : [...prev, diet]
    );
  };

  // Handle favorite toggle
  const handleToggleFavorite = async (productId) => {
    try {
      await toggleFavorite(productId); // Call the server action
      toggleLocalFavorite(productId); // Update Zustand store
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/cafestore/cafeonitsha" className="text-xl font-bold text-gray-900">
          <StoreIcon />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/cafestore/cafeonitsha/place-order"
            className="flex items-center space-x-2 text-gray-900 font-medium hover:text-gray-900"
          >
            <span>Place Order</span> <ShoppingBag className="animate-bounce" />
          </Link>
          {/* Logout Button  */}
          {/* <LogOutBtn /> */}
        </nav>
      </header>

      <div className="w-full bg-white text-[#0f1520] py-6 px-4 md:px-6">
        <h1 className="text-center text-2xl font-bold mt-10">Welcome to Cafe Onitsha!</h1>
        <p className="text-center text-lg mt-4">Explore our Confectionary Menu</p>

        {/* Search and Filters */}
        <div className="my-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full p-3 pl-10 bg-[#fff] border border-gray-700 rounded-lg text-[#1a2332] focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Dietary Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {dietaries.map((diet, index) => (
              <Button
                key={`diet-${index}`}
                variant={"outline"}
                onClick={() => toggleDietaryFilter(diet)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${selectedDietary.includes(diet) ? "bg-green-700 text-white" : "bg-[#1a2332] text-gray-300"
                  }`}
              >
                {diet === "Vegetarian" && <Leaf className="w-4 h-4" />}
                {diet === "Vegan" && <Wine className="w-4 h-4" />}
                {diet === "Gluten-Free" && <Wheat className="w-4 h-4" />}
                {diet === "Nut-Free" && <AlertCircle className="w-4 h-4" />}
                <span>{diet}</span>
              </Button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((category, index) => (
              <Button
                key={`category-${index}`}
                variant={"outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-white text-[#0f1520]" : "bg-[#1a2332] text-white"
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id || item._id} className="bg-[#fff] text-[#1a2332] shadow-sm rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <span className="text-lg font-medium">${item.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  {/* Favorite Button */}
                  <Button
                    className="border cursor-pointer"
                    onClick={() => handleToggleFavorite(item.id || item._id)}
                  >
                    <Heart
                      className={`h-5 w-5 ${favorites.includes(item.id || item._id) ? "text-red-600 fill-current" : "text-gray-400"
                        }`}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}