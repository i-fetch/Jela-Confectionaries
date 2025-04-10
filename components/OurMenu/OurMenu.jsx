"use client"

import React, { useState } from "react"
import { Dot } from "lucide-react"

// Sample menu data
const menuData = {
  appetizers: [
    {
      id: 1,
      name: "CHIPS & DIP",
      price: "$16.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "GARLIC FRIES",
      price: "$26.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "KALE SALAD",
      price: "$10.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "CAPRESE SALAD",
      price: "$12.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "TORTILLA SOUP",
      price: "$20.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "THAI CURRY",
      price: "$22.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  mainCourses: [
    {
      id: 1,
      name: "FISH FRY",
      price: "$26.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "PASTA ALFREDO",
      price: "$30.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "VEG BIRYANI",
      price: "$29.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "PRAWN MASALA",
      price: "$28.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "SUSHI PLATTER",
      price: "$20.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "MUTTON CURRY",
      price: "$24.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  sides: [
    {
      id: 1,
      name: "MASHED POTATOES",
      price: "$8.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "STEAMED VEGETABLES",
      price: "$7.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  desserts: [
    {
      id: 1,
      name: "CHOCOLATE CAKE",
      price: "$12.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "ICE CREAM",
      price: "$8.00",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
}

const OurMenu = () => {
  const [activeTab, setActiveTab] = useState("appetizers")

  const tabs = [
    { id: "appetizers", label: "Appetizers" },
    { id: "mainCourses", label: "Main Courses" },
    { id: "sides", label: "Sides" },
    { id: "desserts", label: "Desserts" },
  ]

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-0">
        <h3 className="uppercase text-center flex items-center justify-center text-[#a6a182] text-sm font-medium mb-4 animate-fadeInUp">
          <Dot className="relative -translate-x-2" /> <span>From Our Menu</span>
        </h3>
        <h5 className="uppercase font-semibold text-xl lg:text-5xl w-2/4 mx-auto text-center text-white md:text-lg mb-8 animate-fadeInUp">
          All inspired by the love joy of sharing it with others.
        </h5>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#222222] rounded-full px-6 py-4 inline-flex items-center">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1 rounded-full transition-colors ${
                    activeTab === tab.id ? "text-white" : "text-[#a6a182]"
                  }`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && <span className="text-[#a6a182] mx-2">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {menuData[activeTab]?.map((item) => (
            <div key={item.id} className="flex gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-lg">{item.name}</h4>
                  <div className="h-[1px] bg-[#a6a182] flex-1 mx-4"></div>
                  <span className="bg-[#a6a182] text-black px-4 py-1 rounded-full text-sm font-medium">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurMenu
