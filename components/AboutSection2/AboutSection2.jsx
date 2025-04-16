"use client"

import { Award, Users, Clock, Heart } from "lucide-react"

const AboutSection2 = () => {
  return (
    <section className="bg-[#0e1419] text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">About Our Bakery</h2>
          <div className="w-20 h-1 bg-[#d4af37] mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 text-center max-w-3xl mb-6">
            Founded in 2010, our bakery has been crafting exceptional desserts and pastries for over a decade.
            What started as a small family business has grown into a beloved establishment known for quality,
            creativity, and unforgettable flavors.
          </p>
        </div>

        {/* About Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image */}
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-sm">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Our bakery team at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Story */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-medium mb-4">Our Story</h3>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Our journey began with a passion for creating desserts that bring joy to people's lives.
              Every recipe has been perfected through years of dedication, using only the finest ingredients
              and traditional techniques combined with innovative approaches.
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Today, we're proud to serve our community with a wide range of offerings from custom cakes
              for special occasions to catering services for events of all sizes. Our team of talented
              pastry chefs and bakers work tirelessly to ensure every creation exceeds expectations.
            </p>
            <p className="text-sm md:text-base text-gray-300">
              We believe that great food brings people together, and we're honored to be part of your
              celebrations and everyday moments.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-10">
          <h3 className="text-center text-xl md:text-2xl font-medium mb-8">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Quality */}
            <div className="bg-[#131c24] p-6 flex flex-col items-center rounded-sm">
              <div className="mb-3">
                <Award className="h-10 w-10 text-[#d4af37]" />
              </div>
              <h4 className="font-medium mb-2 text-base md:text-lg">Quality</h4>
              <p className="text-xs md:text-sm text-center text-gray-300">
                We use only premium ingredients and never compromise on the quality of our products.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="bg-[#131c24] p-6 flex flex-col items-center rounded-sm">
              <div className="mb-3">
                <Heart className="h-10 w-10 text-[#d4af37]" />
              </div>
              <h4 className="font-medium mb-2 text-base md:text-lg">Craftsmanship</h4>
              <p className="text-xs md:text-sm text-center text-gray-300">
                Each creation is handcrafted with attention to detail and artistic excellence.
              </p>
            </div>

            {/* Tradition */}
            <div className="bg-[#131c24] p-6 flex flex-col items-center rounded-sm">
              <div className="mb-3">
                <Clock className="h-10 w-10 text-[#d4af37]" />
              </div>
              <h4 className="font-medium mb-2 text-base md:text-lg">Tradition</h4>
              <p className="text-xs md:text-sm text-center text-gray-300">
                We honor traditional baking methods while embracing innovative techniques.
              </p>
            </div>

            {/* Community */}
            <div className="bg-[#131c24] p-6 flex flex-col items-center rounded-sm">
              <div className="mb-3">
                <Users className="h-10 w-10 text-[#d4af37]" />
              </div>
              <h4 className="font-medium mb-2 text-base md:text-lg">Community</h4>
              <p className="text-xs md:text-sm text-center text-gray-300">
                We're committed to our community and source ingredients locally whenever possible.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-center text-xl md:text-2xl font-medium mb-6">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="flex flex-col">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden mb-3 rounded-sm">
                <img
                  src="/team-1.jpg"
                  alt="Head Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-base md:text-lg">Sarah Johnson</h4>
              <p className="text-sm text-[#d4af37]">Head Pastry Chef</p>
              <p className="text-xs md:text-sm text-gray-300 mt-2">
                With over 15 years of experience, Sarah leads our team with creativity and precision.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden mb-3 rounded-sm">
                <img
                  src="/team-2.jpg"
                  alt="Cake Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-base md:text-lg">Michael Chen</h4>
              <p className="text-sm text-[#d4af37]">Cake Designer</p>
              <p className="text-xs md:text-sm text-gray-300 mt-2">
                Michael's artistic background brings unique and stunning designs to our custom cakes.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden mb-3 rounded-sm">
                <img
                  src="/team-4.jpg"
                  alt="Event Coordinator"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-base md:text-lg">Emma Rodriguez</h4>
              <p className="text-sm text-[#d4af37]">Event Coordinator</p>
              <p className="text-xs md:text-sm text-gray-300 mt-2">
                Emma ensures every catered event and private party exceeds client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection2
