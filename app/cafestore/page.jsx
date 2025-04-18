import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CafeStorePage = () => {
  const cafes = [
    {
      cafeId: 1,
      name: "Jela Cafe Onitsha",
      address: "123 Main Street, City Center",
      image: "/free-photo-of-friends-hugging-in-front-of-the-four-boroughs-coffee-shop.jpg", // Replace with your actual image paths
      slug: "cafeonitsha"
    },
    {
      cafeId: 2,
      name: "Jela Cafe Asaba",
      address: "456 River Road, Waterfront District",
      image: "/cafe-rouge.jpg", // Replace with your actual image paths
      slug: "cafeasaba"
    },
    {
      cafeId: 3,
      name: "Jela Cafe Enugu",
      address: "312 Enugu Road, WaterWorks District",
      image: "/la-paris-rome.jpg", // Replace with your actual image paths
      slug: "cafeenugu"
    }
  ]

  return (
    <div className="min-h-screen bg-[#1f2120] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-3xl font-bold text-gray-200 mb-8 text-center">Choose Your Cafe</h1>
        <h1 className="text-sm font-semibold text-gray-200 mb-8 text-center">Select any of our branch and start placing your orders</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cafes.map((cafe) => (
            <Link
              key={cafe.cafeId}
              href={`/cafestore/${cafe.slug}`}
              className="group cursor-pointer"
            >
              <div className="rounded-lg shadow-lg overflow-hidden ease-in-out transition-transform duration-700 hover:scale-105">
                <div className="relative h-64 w-full">
                  <Image
                    src={cafe.image}
                    alt={cafe.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                    {cafe.name}
                  </h2>
                  <p className="text-gray-600 mt-2">{cafe.address}</p>
                  <Link
                    key={cafe.id}
                    href={`/cafestore/${cafe.slug}`}
                  >
                    <button className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition-colors">
                      Visit Cafe
                    </button></Link>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CafeStorePage