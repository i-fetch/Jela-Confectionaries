import React from 'react'
import { Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const FavoritesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#1a2235] rounded-lg overflow-hidden relative">
        <div className="relative h-48">
          <Image src="/classic-croissant.jpg" alt="Classic Croissant" fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Classic Croissant</h3>
            <Button className="text-red-500">
              <Heart className="h-5 w-5 fill-current" />
            </Button>
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
            <Button className="text-red-500">
              <Heart className="h-5 w-5 fill-current" />
            </Button>
          </div>
          <p className="text-gray-400">$6.50</p>
        </div>
      </div>
    </div>
  )
}

export default FavoritesTab;
