"use client"

import { useState, useEffect } from "react"
import { Search, Leaf, Wheat, Ban } from "lucide-react"
import Image from "next/image"

// Define the food item type
const foodItems = [
  {
    id: "1",
    name: "Classic Croissant",
    price: 4.5,
    description: "Buttery, flaky layers of hand-rolled pastry",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["Pastries"],
    dietary: ["Nut-Free"],
  },
  {
    id: "2",
    name: "Chocolate Éclair",
    price: 5.0,
    description: "Choux pastry filled with vanilla cream and topped with chocolate",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["Pastries", "Cakes"],
    dietary: ["Vegetarian"],
  },
  {
    id: "3",
    name: "Berry Tart",
    price: 6.5,
    description: "Fresh seasonal berries atop vanilla custard in a sweet pastry shell",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["Pastries", "Cakes"],
    dietary: ["Vegetarian"],
  },
  {
    id: "4",
    name: "Cappuccino",
    price: 3.75,
    description: "Espresso with steamed milk and a light layer of foam",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["Beverages"],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
  },
  {
    id: "5",
    name: "Sourdough Bread",
    price: 5.25,
    description: "Artisanal sourdough with a crispy crust and chewy interior",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["Breads"],
    dietary: ["Vegetarian", "Vegan"],
  },
  {
    id: "6",
    name: "Carrot Cake",
    price: 5.75,
    description: "Moist cake with carrots, walnuts, and cream cheese frosting",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["Cakes"],
    dietary: ["Vegetarian"],
  },
]

// Available categories and dietary options
const categories = ["All", "Pastries", "Cakes", "Beverages", "Breads"]
const dietaryOptions = [
  { id: "vegetarian", label: "Vegetarian", icon: Leaf },
  { id: "vegan", label: "Vegan", icon: Leaf },
  { id: "gluten-free", label: "Gluten-Free", icon: Wheat },
  { id: "nut-free", label: "Nut-Free", icon: Ban },
]

const Menu2 = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDietary, setSelectedDietary] = useState([])
  const [filteredItems, setFilteredItems] = useState(foodItems)

  // Apply filters whenever search, category, or dietary selections change
  useEffect(() => {
    let results = [...foodItems]

    // Filter by search query - more precise filtering
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      results = results.filter(
        (item) => item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter((item) => item.categories.includes(selectedCategory))
    }

    // Filter by dietary preferences - improved logic
    if (selectedDietary.length > 0) {
      results = results.filter((item) =>
        // Check if the item has ALL the selected dietary preferences
        selectedDietary.every((diet) => item.dietary.includes(diet)),
      )
    }

    setFilteredItems(results)
  }, [searchQuery, selectedCategory, selectedDietary])

  // Toggle dietary filter
  const toggleDietary = (diet) => {
    setSelectedDietary((prev) => (prev.includes(diet) ? prev.filter((d) => d !== diet) : [...prev, diet]))
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu..."
              className="w-full bg-gray-900 border border-gray-800 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Dietary Filters */}
          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map((option) => {
              const isSelected = selectedDietary.includes(option.label)
              const Icon = option.icon
              return (
                <button
                  key={option.id}
                  onClick={() => toggleDietary(option.label)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium ${
                    isSelected
                      ? "bg-white text-gray-900" // Match the selected category style
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Icon size={16} className="mr-1" />
                  {option.label}
                </button>
              )
            })}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.dietary.map((diet) => {
                      const dietOption = dietaryOptions.find((d) => d.label === diet)
                      if (!dietOption) return null
                      const Icon = dietOption.icon
                      return (
                        <span key={diet} className="inline-flex items-center text-xs text-gray-400">
                          <Icon size={14} className="mr-1" />
                          {diet}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-400 text-lg">No items match your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu2
