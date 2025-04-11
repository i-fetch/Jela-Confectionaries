"use client"

import React, { useState } from "react"
import { Dot } from "lucide-react"
import menu1 from "@/public/our-menu-image-1.png"
import menu2 from "@/public/our-menu-image-2.png"
import menu3 from "@/public/our-menu-image-3.png"
import menu4 from "@/public/our-menu-image-4.png"
import menu5 from "@/public/our-menu-image-5.png"
import menu6 from "@/public/our-menu-image-6.png"
import Image from "next/image"

// Sample menu data
const menuData = {
  appetizers: [
    {
      id: 1,
      name: "CHIPS & DIP",
      price: "₦1600",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu1.src,
    },
    {
      id: 2,
      name: "GARLIC FRIES",
      price: "₦2600",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu2.src,
    },
    {
      id: 3,
      name: "KALE SALAD",
      price: "₦1000",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu3.src,
    },
    {
      id: 4,
      name: "CAPRESE SALAD",
      price: "₦1200",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu4.src,
    },
    {
      id: 5,
      name: "TORTILLA SOUP",
      price: "₦2000",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu5.src,
    },
    {
      id: 6,
      name: "THAI CURRY",
      price: "₦2200",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu6.src,
    },
  ],
  mainCourses: [
    {
      id: 1,
      name: "FISH FRY",
      price: "₦2600",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu1.src,

    },
    {
      id: 2,
      name: "PASTA ALFREDO",
      price: "₦3000",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu2.src,

    },
    {
      id: 3,
      name: "VEG BIRYANI",
      price: "₦2900",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu3.src,

    },
    {
      id: 4,
      name: "PRAWN MASALA",
      price: "₦2800",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu4.src,

    },
    {
      id: 5,
      name: "SUSHI PLATTER",
      price: "₦2000",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu5.src,

    },
    {
      id: 6,
      name: "MUTTON CURRY",
      price: "₦2400",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu6.src,

    },
  ],
  sides: [
    {
      id: 1,
      name: "MASHED POTATOES",
      price: "₦800",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu1.src,

    },
    {
      id: 2,
      name: "STEAMED VEGETABLES",
      price: "₦700",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu2.src,

    },
  ],
  desserts: [
    {
      id: 1,
      name: "CHOCOLATE CAKE",
      price: "₦1200",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu3.src,

    },
    {
      id: 2,
      name: "ICE CREAM",
      price: "₦800",
      description:
        "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      image: menu2.src,

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
        <h5 className="uppercase text-center w-4/5 md:1/5 mx-auto text-white text-2xl md:text-3xl font-bold mb-6 animate-fadeInUp">
          All inspired by the love joy of <br className="hidden lg:block" />  <span className="text-[#cd9d22]"> sharing it with others.</span>
        </h5>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-[#222222] border min-w-1/2 md:min-w-2/5 mx-auto rounded-full px-6 py-4 flex items-center justify-center ">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.id}>
                <span
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer text-xs md:text-lg font-semibold text-center  transition-colors ${activeTab === tab.id ? "text-white" : "text-[#aa935b]"
                    }`}
                >
                  {tab.label}
                </span>
                {index < tabs.length - 1 && <span className="text-[#a6a182] mx-2">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="border grid grid-cols-1 md:grid-cols-2 px-1 md:px-4 lg:px-5 gap-x-16 gap-y-12">
          {menuData[activeTab]?.map((item) => (
            <div key={item.id} className="flex gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} width={100} height={100} alt={item.name} className="w-full h-full object-cover" />
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
