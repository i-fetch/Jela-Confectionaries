"use client"

import React, { useState } from "react"
import { Dot, CheckCircle } from "lucide-react"
import Image from "next/image"
import ourMissionImg from "@/public/our-mission-img.jpg"
import ourVisionImg from "@/public/our-vision-img.jpg"
import ourValueImg from "@/public/our-value-img.jpg"

const tabs = [
  { id: "mission", label: "Our Mission" },
  { id: "vision", label: "Our Vision" },
  { id: "value", label: "Our Value" },
]

const menuData = {
  mission: {
    heading: "BRINGING PEOPLE TOGETHER",
    paragraph: "At Jela's, our mission is to bring people together through the joy of delicious meals and shared moments. We believe food has the power to connect hearts and create lasting memories.",
    points: [
      "Celebrating Authenticity Through Food.",
      "Creating Shared Moments That Matter.",
      "Passionately Serving With Care And Flavor."
    ],
    image: ourMissionImg,
  },
  vision: {
    heading: "REDEFINING CULINARY EXPERIENCES",
    paragraph: "We envision a future where dining isn't just a meal, but an experience that leaves a lasting impression. Every plate tells a story, crafted with innovation, heritage, and bold flavor.",
    points: [
      "Pioneering Culinary Innovation.",
      "Crafting Exceptional Flavors Daily.",
      "Transforming Meals Into Memories."
    ],
    image: ourVisionImg,
  },
  value: {
    heading: "CREATING MOMENTS AROUND FLAVOR",
    paragraph: "At SpicyHunt, our vision is to redefine the dining experience by bringing people together over authentic, flavorful meals crafted with love and passion. We aim to be a beacon of culinary excellence, where every dish tells a story of tradition, innovation, and uncompromising quality.",
    points: [
      "Delivering Unforgettable Flavors With Every Dish We Serve.",
      "Creating A Welcoming Space Where Food Connects Hearts.",
      "Committed To Quality, Innovation, And Exceptional Service."
    ],
    image: ourValueImg,
  },
}

const OurApproach = () => {
  const [activeTab, setActiveTab] = useState("value")

  const content = menuData[activeTab]

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-0">
        <h3 className="uppercase text-center flex items-center justify-center text-[#a6a182] text-sm font-medium mb-4">
          <Dot className="relative -translate-x-2" />
          <span>Our Approach</span>
        </h3>
        <h5 className="uppercase text-center text-white text-2xl md:text-3xl font-bold mb-6">
          Delivering Memorable <br className="hidden md:block"/>
          Dining <span className="text-[#a6a182]">Experiences</span>
        </h5>

        {/* Tabs */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-[#222222] rounded-full px-6 py-4 flex gap-4">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.id}>
                <span
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer text-sm md:text-lg font-semibold transition-colors ${activeTab === tab.id ? "text-white" : "text-[#a6a182]"}`}
                >
                  {tab.label}
                </span>
                {index < tabs.length - 1 && <span className="text-[#a6a182] mx-2">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
          <div>
            <p className="uppercase text-sm text-[#a6a182] font-semibold mb-2">• {tabs.find(t => t.id === activeTab)?.label}</p>
            <h3 className="text-white text-2xl font-bold mb-4">{content.heading}</h3>
            <p className="text-gray-400 mb-4">{content.paragraph}</p>
            <ul className="space-y-3">
              {content.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-[#d9d6c5]">
                  <CheckCircle className="w-8 h-8 text-[#a6a182] mt-1 mr-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={content.image}
              alt={tabs.find(t => t.id === activeTab)?.label || "Tab Image"}
              className="w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApproach
