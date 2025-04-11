import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from "lucide-react"

import icon1 from '@/public/icon-service-1.svg'
import icon2 from '@/public/icon-service-2.svg'
import icon3 from '@/public/icon-service-3.svg'
import icon4 from '@/public/icon-service-4.svg'
import icon5 from '@/public/icon-service-5.svg'
import icon6 from '@/public/icon-service-6.svg'

const services = [
  {
    icon: icon1,
    title: 'Dine-In Experience',
    description: 'Enjoy a cozy and vibrant ambiance with impeccable service and delicious meals crafted to perfection.',
  },
  {
    icon: icon2,
    title: 'Online Table Reservations',
    description: 'Reserve your table effortlessly through our online booking system for a seamless dining experience.',
  },
  {
    icon: icon3,
    title: 'Home Delivery Service',
    description: 'Savor your favorite dishes in the comfort of your home with our reliable and quick delivery service.',
  },
  {
    icon: icon4,
    title: 'Catering for Events',
    description: 'From small gatherings to grand celebrations, let us bring our culinary excellence to your special event.',
  },
  {
    icon: icon5,
    title: 'Takeout Orders',
    description: 'Convenient and fast takeout options for when you\'re on the go but still craving our flavors.',
  },
  {
    icon: icon6,
    title: 'Private Dining',
    description: 'Host intimate gatherings or private events in our dedicated dining space tailored to your needs.',
  },
]

const ServiceSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#0D0D0D] border border-gray-800 p-6 rounded-lg hover:border-yellow-500 transition"
            >
              <Image src={service.icon} alt={service.title} className="mb-4" />
              <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link href="/about" className="inline-flex items-center text-sm font-semibold text-white hover:text-yellow-500">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
