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
    <div className="py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 uppercase">Satisfy Your Cravings With</h2>
        <h3 className="text-xl font-semibold mb-10">Our Signature Mains</h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-xl shadow hover:shadow-lg transition overflow-hidden text-center p-4"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
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
          Hungry for Something Delicious?{" "}
          <a href="#" className="underline font-medium text-blue-400">
            View All Dishes!
          </a>
        </p>
      </div>
    </div>
  );
};

export default MainDish;