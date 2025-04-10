import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBg from '@/public/hero-bg.jpg';
import IllustrativeImg from '@/public/hero-img.jpg';
import HeroCircle1 from '@/public/hero-circle-img-1.jpg';
import HeroCircle2 from '@/public/hero-circle-img-2.jpg';

const Header = () => {
  return (
    <header
      className="relative bg-fixed bg-center bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${HeroBg.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Section Title Start */}
          <div className="section-title text-left">
            <h3 className="uppercase text-lg md:text-xl font-medium mb-4 animate-fadeInUp">
              Art of Fine Dining
            </h3>
            <h1 className="uppercase text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Dining Redefined with Every Bite
            </h1>
            <p className="text-base md:text-lg mb-8 animate-fadeInUp">
              Immerse yourself in a dining experience like no other, where every
              dish is a masterpiece of flavor, crafted with care and precision.
              From the freshest ingredients.
            </p>
            <div className="hero-btn flex gap-4 animate-fadeInUp">
              <Link
                href="#"
                className="px-5 py-3 w-fit bg-primary text-white rounded-md hover:bg-opacity-90 transition"
              >
                Book a Table
              </Link>
              <Link
                href="#"
                className="px-5 py-3 w-fit bg-primary text-white rounded-md hover:bg-opacity-90 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Section Title End */}

          {/* Section Image Start */}
          <div className="section-img relative flex items-center justify-center">
            {/* First Image */}
            <div className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] left-10 bottom-10 md:left-28 md:bottom-14 z-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg animate-fadeInUp">
              <Image
                src={HeroCircle1}
                alt="Sizzling food dish"
                fill
                className="object-cover"
              />
            </div>

            {/* Centered Element with Background */}
            <div className="w-[250px] h-[350px] md:w-[400px] md:h-[600px] mx-auto rounded-full overflow-hidden border-8 border-white/20 shadow-lg animate-fadeInUp relative">
              <Image
                src={IllustrativeImg}
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] right-10 top-10 md:right-28 md:top-14 z-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg animate-fadeInUp">
              <Image
                src={HeroCircle2}
                alt="Burger with fries"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Section Image End */}
        </div>
      </div>
    </header>
  );
};

export default Header;