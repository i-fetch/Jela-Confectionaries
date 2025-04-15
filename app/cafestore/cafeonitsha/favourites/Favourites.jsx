"use client";

import React from "react";
import { Heart } from "lucide-react";

const Favourites = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Favourite Item 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <img
            src="/classic-croissant.jpg"
            alt="Classic Croissant"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Classic Croissant
                </h3>
                <p className="text-gray-500 dark:text-gray-400">$4.50</p>
              </div>
              <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400">
                <Heart className="w-5 h-5" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>

        {/* Favourite Item 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <img
            src="/berry-tart.jpg"
            alt="Berry Tart"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Berry Tart
                </h3>
                <p className="text-gray-500 dark:text-gray-400">$6.50</p>
              </div>
              <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400">
                <Heart className="w-5 h-5" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Favourites;
