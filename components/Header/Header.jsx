import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBg from '@/public/hero-bg.jpg';
import IllustrativeImg from '@/public/hero-img.jpg';
import HeroCircle1 from '@/public/hero-circle-img-1.jpg';
import HeroCircle2 from '@/public/hero-circle-img-2.jpg';
import { Dot } from 'lucide-react';

const Header = () => {
  return (
    <header className="pb-20 relative bg-fixed bg-center bg-cover bg-no-repeat h-screen overflow-hidden"
      style={{ backgroundImage: `url(${HeroBg?.src || ''})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 mt-">

        <div className="container mt-36 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:pl-7 gap-8 items-center">

          {/* Section Title */}
          <div className="text-left">
            <h3 className="uppercase flex items-center text-white/60 text-sm font-medium mb-4 animate-fadeInUp">
              <Dot className="relative -translate-x-2" /> <span>Art of Fine Dining</span>
            </h3>
            <h1 className="uppercase text-white text-2xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              Dining Redefined with <span className='text-[#a6a182]'>Every Bite</span>
            </h1>
            <p className="text-base md:text-lg mb-8 animate-fadeInUp max-w-prose">
              Immerse yourself in a dining experience like no other, where every
              dish is a masterpiece of flavor, crafted with care and precision.
              From the freshest ingredients.
            </p>
            <div className="flex gap-4 animate-fadeInUp flex-wrap">
              <Link
                href="#"
                className="px-5 py-3 bg-[#a6a182] font-bold text-white rounded-4xl hover:bg-opacity-90 transition"
              >
                Book a Table
              </Link>
              <Link
                href="#"
                className="px-5 py-3 bg-[#a6a182] font-bold text-white rounded-4xl hover:bg-opacity-90 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Section Image */}
          <div className="relative flex items-center justify-center">
            {/* Main Image */}
            <div className="relative w-[250px] h-[350px] md:w-[400px] md:h-[600px] rounded-full overflow-hidden border-8 border-white/20 shadow-lg animate-fadeInUp z-10">
              <Image
                src={IllustrativeImg}
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Circle 1 */}
            <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] left-2 bottom-2 md:left-6 lg:left-32 md:bottom-6 z-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg animate-fadeInUp">
              <Image
                src={HeroCircle1}
                alt="Sizzling food dish"
                fill
                className="object-cover"
              />
            </div>

            {/* Circle 2 */}
            <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] right-2 top-2 md:right-6 lg:right-32 md:top-6 z-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg animate-fadeInUp">
              <Image
                src={HeroCircle2}
                alt="Burger with fries"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
