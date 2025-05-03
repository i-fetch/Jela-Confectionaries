import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useFavoriteStore from "@/store/useFavoriteStore"; // Import Zustand store

const FavoritesTab = ({ products }) => {
  const { favorites, toggleFavorite } = useFavoriteStore(); // Access favorites and toggleFavorite from Zustand

  // Filter products to only include favorited items
  const favoritedItems = products.filter((product) =>
    favorites.includes(product.id || product._id)
  );

  if (favoritedItems.length === 0) {
    return (
      <div className="text-gray-400 text-center">
        <p>No favorite items found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favoritedItems.map((item) => (
        <div
          key={item.id || item._id}
          className="bg-[#1a2235] rounded-lg overflow-hidden relative"
        >
          <div className="relative h-48">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{item.name}</h3>
              <Button
                className="text-red-500"
                onClick={() => toggleFavorite(item.id || item._id)}
              >
                <Heart className="h-5 w-5 fill-current" />
              </Button>
            </div>
            <p className="text-gray-400">${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesTab;