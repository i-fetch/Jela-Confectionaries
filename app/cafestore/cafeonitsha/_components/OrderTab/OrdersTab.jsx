import React from 'react'
import { Heart, StoreIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

const OrdersTab = () => {
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

export default OrdersTab;
