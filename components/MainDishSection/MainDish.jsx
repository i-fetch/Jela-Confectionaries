import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

const MainDish = () => {
  const items = [
    {
      title: "Soups",
      desc: "Warm, comforting, and full of flavor, our soups are the perfect start to any meal.",
      image: "/our-dish-image-1.jpg",
    },
    {
      title: "Salads",
      desc: "Refreshing, vibrant, and full of fresh flavors, our salads are crafted to awaken your senses.",
      image: "/our-dish-image-2.jpg",
    },
    {
      title: "Main Dishes",
      desc: "Offering bold flavors and expertly crafted recipes that cater to every taste.",
      image: "/our-dish-image-3.jpg",
    },
    {
      title: "Appetizers",
      desc: "Our appetizers are the perfect way to begin your dining experience flavors.",
      image: "/our-dish-image-4.jpg",
    },
  ];

  return (
    <div className="py-12 px-4 bg-[#1f2120] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="uppercase text-center flex items-center justify-center text-[#a6a182] text-sm font-medium mb-4 animate-fadeInUp">
          <Dot className="relative -translate-x-2" /> <span>Our Main Dishes</span>
        </h3>
        <h5 className="uppercase text-2xl font-semibold lg:text-5xl lg:w-2/4 mx-auto text-center text-white md:text-lg mb-8 animate-fadeInUp">
         Satisfy your caraving with our <span className="text-[#a6a182]"> signature main.</span>
        </h5>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-transparent rounded-xl shadow hover:shadow-lg transition overflow-hidden text-center p-4"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full border-2 h-full object-cover rounded-full"
                />
              </div>
              {/* Title */}
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              {/* Description */}
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-sm mt-10">
          Hungry for Something Delicious?
          <Link href="#" className="underline font-medium text-blue-400">
            View All Dishes!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainDish;