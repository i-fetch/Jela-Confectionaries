"use client"
import { Dot } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const MainDish = () => {
  const categories = [
    {
      id: 1,
      title: "Soups",
      image: "/our-dish-image-1.jpg",
      description: "Warm, comforting, and full of flavor, our soups are the perfect start to any meal.",
    },
    {
      id: 2,
      title: "Salads",
      image: "/our-dish-image-2.jpg",
      description: "Refreshing, vibrant, and full of fresh flavors, our salads are crafted to senses.",
    },
    {
      id: 3,
      title: "Main Dishes",
      image: "/our-dish-image-3.jpg",
      description: "Offering bold flavors and expertly crafted recipes that cater to every taste.",
    },
    {
      id: 4,
      title: "Appetizers",
      image: "/our-dish-image-4.jpg",
      description: "Our appetizers are the perfect way to begin your dining experience flavors.",
    },
  ]

  return (
    <section className="bg-[#1a1a1a] text-white py-20 relative overflow-hidden">
      {/* Burger Image with Animation */}
      <div className="absolute top-5 left-1 sm:top-5 sm:left-1 lg:top-40 lg:left-2 w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] md:w-[150px] md:h-[150px]">
        <Image
          src="/daily-offer-image hamburger.png"
          alt="Delicious burger"
          width={150}
          height={150}
          className="object-contain burger-animation"
        />
      </div>{/*Team remeber here is where we will add animation*/}

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="uppercase flex items-center justify-center text-white/60 text-sm font-medium mb-4 animate-fadeInUp">
            <Dot className="relative -translate-x-2" /> <span>Our Main Dishes</span>
          </h3>
          <h2 className="uppercase text-white text-2xl md:text-3xl font-bold mb-6 animate-fadeInUp">
            SATISFY YOUR CRAVINGS WITH
            <br className="" />
            OUR <span className="text-[#a3a378]">SIGNATURE MAINS</span>
          </h2>
        </div>

        {/* Food Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center text-center">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6 border-4 border-[#2a2a2a] hover:border-[#a3a378] transition-colors duration-300">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full hover:scale-110 focus:scale-110 focus:outline-1  transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
              <p className="text-gray-400 max-w-xs">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg mb-2">
            Hungry for Something Delicious?
            <Link href="/OurMenu" className="text-[#a3a378] hover:text-[#c5c5a6] ml-2 transition-colors">
              View All Dishes!
            </Link>
          </p>
          <div className="flex justify-center mt-4">
            {/* <span className="inline-block w-2 h-2 bg-[#a3a378] rounded-full"></span> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainDish;