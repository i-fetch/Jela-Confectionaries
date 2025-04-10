import { ArrowRight, ChefHat, Coffee, Crown, Users } from "lucide-react"
import Image from "next/image"
import ChefImg from "@/public/our-ingredients-image.png"

const OurIngredient = () => {
  return (
    <section className="bg-black py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative chili pepper */}
      {/* <div className="absolute top-0 left-0 w-32 h-32 opacity-80">
        <img src="/placeholder.svg?height=128&width=128" alt="Decorative chili" className="object-contain" />
      </div> */}

      {/* Decorative burger */}
      {/* <div className="absolute bottom-0 right-0 w-40 h-40">
        <img src="/placeholder.svg?height=160&width=160" alt="Decorative burger" className="object-contain" />
      </div> */}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Chef image and customer count */}
          <div className="text-white">
            {/* Section title */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-1 rounded-full bg-[#a6a182]"></span>
              <span className="text-[#a6a182] uppercase text-sm tracking-wider">OUR INGREDIENTS</span>
            </div>

            {/* Main heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              CRAFTING DISHES WITH <br className="block lg:hidden" />
              <span className="text-[#a6a182]">FRESHEST FLAVORS</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 mb-10 max-w-lg lg:w-full">
              We take pride in using only the freshest, hand-picked ingredients that are free from preservatives and
              artificial additives.
            </p>
            <p className="text-gray-400 mb-10 max-w-lg lg:w-full">
              Taste the difference with every bite as we serve dishes made from nature's finest.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Crown className="w-8 h-8 text-[#a6a182]" />
                </div>
                <div className="font-medium text-base/5 lg:text-sm">Best Qualities</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Coffee className="w-8 h-8 text-[#a6a182]" />
                </div>
                <div className="font-medium text-base/5 lg:text-sm">Discount System</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-[#a6a182]" />
                </div>
                <div className="font-medium text-base/5 lg:text-sm">First Delivery</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#a6a182] w-fit mx-0 xl
            :mx-auto text-black px-6 py-3 rounded-3xl font-medium flex items-center gap-2 hover:bg-[#8a866c] transition-colors">
              Book Table <ArrowRight className="w-4 h-4" />
            </button>
          </div>


          {/* Right column - Content */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={ChefImg.src}
                alt="Chef with food plate"
                width={500}
                height={600}
                className="mx-auto lg:mx-0 object-cover"
              />
              {/* <div className="absolute bottom-0 left-0 bg-black bg-opacity-80 w-full h-1/4"></div> */}
            </div>

            {/* Customer count card */}
            <div className="bg-[#a6a182] p-2 rounded-lg absolute bottom-4 left-4 lg:bottom-8 lg:left-8 lg:translate-x-32 z-20 max-w-[240px]">
              <div className="text-white">
                <div className="text-lg font-bold">620+ Exclusive</div>
                <div className="mb-3 text-xs font-bold">Happy Customer</div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#a6a182] overflow-hidden">
                    <img
                      src={ChefImg.src}
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#a6a182] overflow-hidden">
                    <img
                      src={ChefImg.src}
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#a6a182] overflow-hidden">
                    <img
                      src={ChefImg.src}
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#a6a182] bg-black flex items-center justify-center text-white text-xs">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 pt-10 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="p-3 rounded-full bg-black border border-gray-800">
                <ChefHat className="w-6 h-6 text-[#a6a182]" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white text-3xl font-bold">309</p>
                <div className="text-gray-400 text-sm">Professional Chefs</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="p-3 rounded-full bg-black border border-gray-800">
                <Coffee className="w-6 h-6 text-[#a6a182]" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white text-3xl font-bold">453</p>
                <div className="text-gray-400 text-sm">Items Of Food</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="p-3 rounded-full bg-black border border-gray-800">
                <Crown className="w-6 h-6 text-[#a6a182]" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white text-3xl font-bold">25+</p>
                <div className="text-gray-400 text-sm">Years Of Experience</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="p-3 rounded-full bg-black border border-gray-800">
                <Users className="w-6 h-6 text-[#a6a182]" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white text-3xl font-bold">300+</p>
                <div className="text-gray-400 text-sm">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default OurIngredient
