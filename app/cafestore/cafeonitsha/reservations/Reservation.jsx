"use client";

import React from "react";

const Reservation = () => {
  return (
    <div className="mt-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Reservation 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 dark:text-white font-bold">Table for 4</p>
              <p className="text-gray-500 dark:text-gray-400">2025-01-20 at 19:00</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">Confirmed</span>
          </div>
        </div>

        {/* Reservation 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 dark:text-white font-bold">Table for 2</p>
              <p className="text-gray-500 dark:text-gray-400">2025-01-25 at 20:00</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">Pending</span>
          </div>
        </div>

        {/* Reservation 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 dark:text-white font-bold">Table for 6</p>
              <p className="text-gray-500 dark:text-gray-400">2025-01-30 at 18:00</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">Cancelled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;