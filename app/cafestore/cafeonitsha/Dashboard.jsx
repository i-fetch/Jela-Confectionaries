"use client"

import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import CafeHeader from "./_components/CafeHeader/CafeHeader"

export default function Dashboard() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  const [activeTab, setActiveTab] = useState("orders")

  return (
    <div className="min-h-screen bg-[#0f1520] text-white">
      {/* Navigation */}
      {/* <CafeHeader totalItems={totalItems} toggleCart={toggleCart} /> */}
      <CafeHeader totalItems={totalItems} toggleCart={toggleCart} />


      {/* Dashboard Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("orders")}
              className={cn(
                "pb-2 font-medium",
                activeTab === "orders" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300",
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
                  : "text-gray-400 hover:text-gray-300",
              )}
            >
              Reservations
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={cn(
                "pb-2 font-medium",
                activeTab === "profile" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300",
              )}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("favorites")}
              className={cn(
                "pb-2 font-medium",
                activeTab === "favorites" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300",
              )}
            >
              Favorites
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "orders" && <OrdersTab />}
          {activeTab === "reservations" && <ReservationsTab />}
          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "favorites" && <FavoritesTab />}
        </div>
      </main>
    </div>
  )
}

function OrdersTab() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a2235] rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-gray-400">Order #1</h3>
            <p className="text-gray-400 text-sm">2025-01-15</p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Delivered</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>2x Classic Croissant</span>
            <span>$9.00</span>
          </div>
          <div className="flex justify-between">
            <span>1x Berry Tart</span>
            <span>$6.50</span>
          </div>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-700">
          <span className="font-medium">Total</span>
          <span className="font-medium">$15.50</span>
        </div>
      </div>

      <div className="bg-[#1a2235] rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-gray-400">Order #2</h3>
            <p className="text-gray-400 text-sm">2025-01-14</p>
          </div>
          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Processing</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>3x Chocolate Éclair</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between">
            <span>2x Vanilla Macaron</span>
            <span>$6.00</span>
          </div>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-700">
          <span className="font-medium">Total</span>
          <span className="font-medium">$21.00</span>
        </div>
      </div>
    </div>
  )
}

function ReservationsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a2235] rounded-lg p-6 flex justify-between items-center">
        <div>
          <h3 className="font-medium">Table for 4</h3>
          <p className="text-gray-400 text-sm">2025-01-20 at 19:00</p>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Confirmed</span>
      </div>

      <div className="bg-[#1a2235] rounded-lg p-6 flex justify-between items-center">
        <div>
          <h3 className="font-medium">Table for 2</h3>
          <p className="text-gray-400 text-sm">2025-01-25 at 20:00</p>
        </div>
        <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Pending</span>
      </div>
    </div>
  )
}

function ProfileTab() {
  return (
    <div className="bg-[#1a2235] rounded-lg p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm">
            Name
          </label>
          <Input id="name" defaultValue="John Doe" className="bg-[#1a2235] border-gray-700 text-white" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <Input
            id="email"
            type="email"
            defaultValue="john@example.com"
            className="bg-[#1a2235] border-gray-700 text-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm">
            Phone
          </label>
          <Input id="phone" defaultValue="+1 234 567 8900" className="bg-[#1a2235] border-gray-700 text-white" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" defaultChecked />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Receive newsletter
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="notifications" defaultChecked />
            <label
              htmlFor="notifications"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Receive notifications
            </label>
          </div>
        </div>

        <Button className="w-full bg-white text-black hover:bg-gray-200">Save Changes</Button>
      </div>
    </div>
  )
}

function FavoritesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#1a2235] rounded-lg overflow-hidden relative">
        <div className="relative h-48">
          <Image src="/classic-croissant.jpg" alt="Classic Croissant" fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Classic Croissant</h3>
            <button className="text-red-500">
              <Heart className="h-5 w-5 fill-current" />
            </button>
          </div>
          <p className="text-gray-400">$4.50</p>
        </div>
      </div>

      <div className="bg-[#1a2235] rounded-lg overflow-hidden relative">
        <div className="relative h-48">
          <Image src="/berry-tart.jpg" alt="Berry Tart" fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Berry Tart</h3>
            <button className="text-red-500">
              <Heart className="h-5 w-5 fill-current" />
            </button>
          </div>
          <p className="text-gray-400">$6.50</p>
        </div>
      </div>
    </div>
  )
}
