"use client";

import React from "react";

const Orders = () => {
  return (
    <div className="mt-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Order #1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Order #1</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2025-01-15</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">Delivered</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">2x Classic Croissant</span>
              <span className="text-gray-900 dark:text-white">$9.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">1x Berry Tart</span>
              <span className="text-gray-900 dark:text-white">$6.50</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <span className="font-bold text-gray-900 dark:text-white">Total</span>
              <span className="font-bold text-gray-900 dark:text-white">$15.50</span>
            </div>
          </div>
        </div>

        {/* Order #2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Order #2</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2025-01-14</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">Processing</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">3x Chocolate Éclair</span>
              <span className="text-gray-900 dark:text-white">$15.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">2x Vanilla Macaron</span>
              <span className="text-gray-900 dark:text-white">$6.00</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <span className="font-bold text-gray-900 dark:text-white">Total</span>
              <span className="font-bold text-gray-900 dark:text-white">$21.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;