"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Leaf, Wine, Wheat, AlertCircle, ShoppingCart, StoreIcon, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock data for menu items (in a real app, this would come from a database)


export default function CafeMenu({ menuItems }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [dietaryFilters, setDietaryFilters] = useState({
    Vegetarian: false,
    Vegan: false,
    "Gluten-Free": false,
    "Nut-Free": false,
  })
 
  // Filter menu items based on search, category, and dietary preferences
  const filteredItems = menuItems.filter((item) => {
    // Search filter
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = selectedCategory === "All" || item.categories.includes(selectedCategory)

    // Dietary filter
    const activeDietaryFilters = Object.entries(dietaryFilters)
      .filter(([_, isActive]) => isActive)
      .map(([name]) => name)

    const matchesDietary =
      activeDietaryFilters.length === 0 || activeDietaryFilters.every((filter) => item.dietary.includes(filter))

    return matchesSearch && matchesCategory && matchesDietary
  })

  // Toggle dietary filter
  const toggleDietaryFilter = (filter) => {
    setDietaryFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  return (
    <div className="w-full min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/cafestore/cafeonitsha" className="text-xl font-bold text-gray-900">
          <StoreIcon />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/cafestore/cafeonitsha/place-order" className="flex items-center space-x-2 text-gray-900 font-medium hover:text-gray-900">
            <span>Place Order</span> <ShoppingBag className="animate-bounce" />
          </Link>
        </nav>

      </header>


      <div className="w-full bg-white text-[#0f1520] py-6 px-4 md:px-6">


        <h1 className="text-center text-2xl font-bold mt-10">Welcome to Cafe Onitsha!</h1>
        <p className="text-center text-lg mt-4">Explore our Confectionary Menu</p>



        {/* Search and Filters */}
        <div className="my-8">

          {/* <div className="w-full p-2 flex items-center justify-between space-x-2"> */}
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

          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={"outline"}
              onClick={() => toggleDietaryFilter("Vegetarian")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${dietaryFilters.Vegetarian ? "bg-green-700 text-white" : "bg-[#1a2332] text-gray-300"
                }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Vegetarian</span>
            </Button>

            <Button
              variant={"outline"}
              onClick={() => toggleDietaryFilter("Vegan")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${dietaryFilters.Vegan ? "bg-green-700 text-white" : "bg-[#1a2332] text-gray-300"
                }`}
            >
              <Wine className="w-4 h-4" />
              <span>Vegan</span>
            </Button>

            <Button
              variant={"outline"}
              onClick={() => toggleDietaryFilter("Gluten-Free")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${dietaryFilters["Gluten-Free"] ? "bg-green-700 text-white" : "bg-[#1a2332] text-gray-300"
                }`}
            >
              <Wheat className="w-4 h-4" />
              <span>Gluten-Free</span>
            </Button>

            <Button
              variant={"outline"}
              onClick={() => toggleDietaryFilter("Nut-Free")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${dietaryFilters["Nut-Free"] ? "bg-green-700 text-white" : "bg-[#1a2332] text-gray-300"
                }`}
            >
              <AlertCircle className="w-4 h-4" />
              <span>Nut-Free</span>
            </Button>
          </div>
          {/* </div> */}


          <div className="flex flex-wrap gap-2">
            {["All", "Pastries", "Cakes", "Beverages", "Breads"].map((category) => (
              <Button
                variant={"outline"}
                key={category}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-[#fff] text-[#1a2332] shadow-sm rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <span className="text-lg font-medium">${item.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {item.dietary.map((diet) => (
                      <span key={diet} className="inline-flex items-center text-xs text-gray-400">
                        {diet === "Vegetarian" && <Leaf className="w-3 h-3 mr-1" />}
                        {diet === "Vegan" && <Wine className="w-3 h-3 mr-1" />}
                        {diet === "Gluten-Free" && <Wheat className="w-3 h-3 mr-1" />}
                        {diet === "Nut-Free" && <AlertCircle className="w-3 h-3 mr-1" />}
                        {diet}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
