"use client"

import { Truck, Store, Clock } from "lucide-react"

const ServiceSection2 = () => {
    return (
        <section className="bg-[#0e1419] text-white py-6 md:py-10">

            <h2 className="text-[#cd9d22] text-2xl lg:text-4xl text-center font-semibold">Our Amazing Service</h2>
            <p className="text-sm lg:text-lg mx-auto w-3/4 text-center font-medium mb-8 lg:mb-12">Bringing sweetness to your special moments</p>

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Main Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-6">
                    {/* Catering Services */}
                    <div className="flex flex-col">
                        <h3 className="text-center mb-1 text-base md:text-lg font-medium">Catering Services</h3>
                        <div className="h-44 sm:h-52 md:h-60 overflow-hidden mb-1 rounded-sm">
                            <img
                                src="/servicesection-img1.jpg"
                                alt="Assortment of pastries and desserts"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs md:text-sm text-gray-300">
                            Our incredible catering for events of all sizes. Our expert team will create a memorable experience with
                            our selection of gourmet desserts and pastries.
                        </p>
                        <p className="text-xs md:text-sm mt-1">Starting at $20 per person</p>
                    </div>

                    {/* Custom Cake Orders */}
                    <div className="flex flex-col">
                        <h3 className="text-center mb-1 text-base md:text-lg font-medium">Custom Cake Orders</h3>
                        <div className="h-44 sm:h-52 md:h-60 overflow-hidden mb-1 rounded-sm">
                            <img
                                src="/servicesection-img2.jpg"
                                alt="Elegant wedding cake"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs md:text-sm text-gray-300">
                            Personalized cakes crafted for your special occasions. From simple designs to elaborate multi-tier
                            creations for weddings, birthdays, and more.
                        </p>
                        <p className="text-xs md:text-sm mt-1">Custom cakes from $75</p>
                    </div>

                    {/* Private Events & Parties */}
                    <div className="flex flex-col">
                        <h3 className="text-center mb-1 text-base md:text-lg font-medium">Private Events & Parties</h3>
                        <div className="h-44 sm:h-52 md:h-60 overflow-hidden mb-1 rounded-sm">
                            <img
                                src="/servicesection-img3.jpg"
                                alt="Elegant dining setup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs md:text-sm text-gray-300">
                            Host your special occasion in our stunning venue. Perfect for birthdays, anniversaries, and intimate
                            gatherings of up to 50 guests.
                        </p>
                        <p className="text-xs md:text-sm mt-1">Venue rental from $350 for 3 hours</p>
                    </div>

                    {/* Corporate Packages */}
                    <div className="flex flex-col">
                        <h3 className="text-center mb-1 text-base md:text-lg font-medium">Corporate Packages</h3>
                        <div className="h-44 sm:h-52 md:h-60 overflow-hidden mb-1 rounded-sm">
                            <img
                                src="/servicesection-img4.jpg"
                                alt="Long table setup for corporate event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs md:text-sm text-gray-300">
                            Regular delivery service for office meetings and corporate events. Custom packages available for recurring
                            events.
                        </p>
                        <p className="text-xs md:text-sm mt-1">Weekly packages from $250</p>
                    </div>
                </div>

                {/* Delivery Options */}
                <div className="mt-8 md:mt-12">
                    <h3 className="text-center mb-3 md:mb-4 text-base md:text-lg font-medium">Delivery Options</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Local Delivery */}
                        <div className="bg-[#131c24] p-4 md:p-5 flex flex-col items-center rounded-sm">
                            <div className="mb-2">
                                <Truck className="h-8 w-8" />
                            </div>
                            <h4 className="font-medium mb-1 text-sm md:text-base">Local Delivery</h4>
                            <p className="text-xs md:text-sm text-center text-gray-300">Same-day delivery within 10 miles</p>
                            <p className="text-xs md:text-sm mt-1">$15 flat rate</p>
                        </div>

                        {/* Store Pickup */}
                        <div className="bg-[#131c24] p-4 md:p-5 flex flex-col items-center rounded-sm">
                            <div className="mb-2">
                                <Store className="h-8 w-8" />
                            </div>
                            <h4 className="font-medium mb-1 text-sm md:text-base">Store Pickup</h4>
                            <p className="text-xs md:text-sm text-center text-gray-300">Pick up at your convenience</p>
                            <p className="text-xs md:text-sm mt-1">Free</p>
                        </div>

                        {/* Express Delivery */}
                        <div className="bg-[#131c24] p-4 md:p-5 flex flex-col items-center rounded-sm">
                            <div className="mb-2">
                                <Clock className="h-8 w-8" />
                            </div>
                            <h4 className="font-medium mb-1 text-sm md:text-base">Express Delivery</h4>
                            <p className="text-xs md:text-sm text-center text-gray-300">2-hour delivery window</p>
                            <p className="text-xs md:text-sm mt-1">$25 flat rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection2