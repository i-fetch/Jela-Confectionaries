"use client"

import { useState, useEffect } from "react"
import { Search, Leaf, Wheat, Ban, Heart } from "lucide-react"
import Image from "next/image"
import AddCartButton from "../Cart/AddCartButton"
// import FavoriteButton from "../Favorites/FavoriteButton"

const categories = ["All", "Pastries", "Cakes", "Beverages", "Breads"]
const dietaryOptions = [
  { id: "vegetarian", label: "Vegetarian", icon: Leaf },
  { id: "vegan", label: "Vegan", icon: Leaf },
  { id: "gluten-free", label: "Gluten-Free", icon: Wheat },
  { id: "nut-free", label: "Nut-Free", icon: Ban },
]

const Menu2 = ({ foodItems }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDietary, setSelectedDietary] = useState([])
  const [filteredItems, setFilteredItems] = useState(foodItems)

  // Update filtered items when props or filters change
  useEffect(() => {
    let results = [...foodItems]

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      results = results.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description?.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (selectedCategory !== "All") {
      results = results.filter(item => 
        item.category === selectedCategory
      )
    }

    // Dietary filter
    if (selectedDietary.length > 0) {
      results = results.filter(item =>
        selectedDietary.every(diet => 
          item.dietary?.includes(diet)
        )
      )
    }

    setFilteredItems(results)
  }, [searchQuery, selectedCategory, selectedDietary, foodItems])

  const toggleDietary = (diet) => {
    setSelectedDietary(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    )
  }

  return (
    <div className="min-h-screen bg-[#060400] text-white p-4 md:p-2 lg:p-8 w-full">
      <div className="max-w-7xl mx-auto bg-black">
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-bg-[#060400] border border-gray-800 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleDietary(option.label)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium ${
                  selectedDietary.includes(option.label)
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <option.icon size={16} className="mr-1" />
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${selectedCategory === category
                  ? "bg-white text-gray-900"
                  : "bg-[#392903] text-gray-300 hover:bg-[#000]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <h2 className="text-2xl font-semibold text-center text-white my-5">Our Confectionaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="bg-black rounded-lg overflow-hidden shadow-lg shadow-white transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative h-48">
                  <Image 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-xl font-bold">
                      ₦{item.price?.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                  <div className="my-3 flex items-center justify-between gap-2">
                    <AddCartButton product={item} />
                    {/* <FavoriteButton product={item} /> */}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.dietary?.map(diet => {
                      const dietOption = dietaryOptions.find(d => d.label === diet)
                      return dietOption ? (
                        <span key={diet} className="inline-flex items-center text-xs text-gray-400">
                          <dietOption.icon size={14} className="mr-1" />
                          {diet}
                        </span>
                      ) : null
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