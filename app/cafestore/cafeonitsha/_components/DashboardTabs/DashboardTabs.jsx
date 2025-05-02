"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import OrdersTab from "../OrderTab/OrdersTab";
import ReservationsTab from "../ReservationsTab/ReservationsTab";
import ProfileTab from "../ProfileTab/ProfileTab";
import FavoritesTab from "../FavouritesTab/FavouritesTab";

export default function DashboardTabs({ userDetails, userOrders, userReservations }) {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div>
      {/* Tabs */}
      <div className="border-b border-gray-800 mb-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("orders")}
            className={cn(
              "pb-2 font-medium",
              activeTab === "orders" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
            )}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("reservations")}
            className={cn(
              "pb-2 font-medium",
              activeTab === "reservations"
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-gray-300"
            )}
          >
            Reservations
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={cn(
              "pb-2 font-medium",
              activeTab === "profile" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
            )}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={cn(
              "pb-2 font-medium",
              activeTab === "favorites" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
            )}
          >
            Favorites
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "orders" && <OrdersTab userOrders={userOrders} />}
        {activeTab === "reservations" && <ReservationsTab userReservations={userReservations} />}
        {activeTab === "profile" && <ProfileTab userDetails={userDetails} />}
        {activeTab === "favorites" && <FavoritesTab />}
      </div>
    </div>
  );
}