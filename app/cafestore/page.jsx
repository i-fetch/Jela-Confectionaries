import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CafeStorePage = () => {
  const cafes = [
    {
      id: 1,
      name: "Jela Cafe Onitsha",
      address: "123 Main Street, City Center",
      image: "/free-photo-of-friends-hugging-in-front-of-the-four-boroughs-coffee-shop.jpg", // Replace with your actual image paths
      slug: "/cafestore/cafeonitsha"
    },
    {
      id: 2,
      name: "Riverside Branch",
      address: "456 River Road, Waterfront District",
      image: "/cafe-rouge.jpg", // Replace with your actual image paths
      slug: "/cafestore/cafeonitsha"
    },
    {
      id: 3,
      name: "Downtown Branch",
      address: "456 River Road, Waterfront District",
      image: "/la-paris-rome.jpg", // Replace with your actual image paths
      slug: "/cafestore/cafeonitsha"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Cafe</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cafes.map((cafe) => (
            <Link 
              key={cafe.id} 
              href={`/cafestore/${cafe.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
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
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                    {cafe.name}
                  </h2>
                  <p className="text-gray-600 mt-2">{cafe.address}</p>
                  <button className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition-colors">
                    Visit Cafe
                  </button>
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