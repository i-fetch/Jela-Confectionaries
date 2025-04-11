import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutUsImg from '@/public/about-us-img-2.jpg';
import ExperienceBadge from '@/public/icon-company-experience.svg';
import IllustrativeImg from '@/public/hero-img.jpg';
import AboutDetail1 from '@/public/icon-about-detail-1.svg';
import AboutDetail2 from '@/public/icon-about-detail-2.svg';
import AboutDetail3 from '@/public/icon-about-detail-3.svg';
import { CircleCheck, Dot, MoveRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-black py-20 lg:py-32">
      {/* Content Container */}
      <div className="container border-b mx-auto z-10 flex flex-col items-center justify-center h-full px-4 pb-12">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 lg:pl-7 gap-8 items-center">
          {/* Section Title Start */}
          <div className="section-title text-left">
            <h3 className="uppercase flex items-center text-white/60 text-sm font-medium mb-4 animate-fadeInUp">
              <Dot className="relative -translate-x-2" /> <span>About Us</span>
            </h3>
            <h2 className="uppercase text-white text-2xl md:text-3xl font-bold mb-6 animate-fadeInUp">
              Our Commitment to Authenticity & <span className="text-[#cd9d22]">Excellence</span>
            </h2>
            <p className="text-base text-white md:text-lg mb-8 animate-fadeInUp">
              Every dish we create is a celebration of connection, crafted with passion and inspired by diverse flavors. Join us in an inviting space where every bite sparks joy and every moment becomes a cherished memory.
            </p>
            <ul className="mb-8">
              <li className="flex items-center space-x-2 mb-2 animate-fadeInUp">
                <CircleCheck color="#a6a182" /> <span className="text-white">Seasonal & locally sourced ingredients</span>
              </li>
              <li className="flex items-center space-x-2 mb-2 animate-fadeInUp">
                <CircleCheck color="#a6a182" /> <span className="text-white">Vegetarian & dietary-friendly options</span>
              </li>
              <li className="flex items-center space-x-2 mb-2 animate-fadeInUp">
                <CircleCheck color="#a6a182" /> <span className="text-white">Exquisite pairings & unique flavors</span>
              </li>
            </ul>

            <div className="hero-btn flex flex-col lg:flex-row gap-4 animate-fadeInUp">
              <Link
                href="#"
                className="font-semibold px-6 py-3 w-fit flex space-x-2 items-center justify-center slide-in-from-bottom ease-in-out duration-300 text-white rounded-3xl bg-[#A6A182] hover:bg-white hover:text-black transition"
              >
                <span>Order Now</span> <MoveRight />
              </Link>
              <Link
                href="#"
                className="font-semibold px-6 py-3 w-fit flex space-x-2 items-center justify-center ease-in-out duration-300 bg-white text-black rounded-3xl hover:bg-[#A6A182] hover:text-white transition"
              >
                <span>Read More</span> <MoveRight />
              </Link>
            </div>
          </div>
          {/* Section Title End */}

          {/* Section Image Start */}
          <div className="section-img  relative flex items-center justify-center">
            {/* First Image */}
            <div className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] left-2 bottom-10 md:left-28 md:bottom-14 z-20 border-5 rounded-full overflow-hidden shadow-lg animate-fadeInUp">
              <Image
                src={AboutUsImg}
                alt="Sizzling food dish"
                fill
                className="object-cover"
              />
            </div>

            {/* Centered Element with Background */}
            <div className="w-[250px] h-[350px] md:w-[400px] md:h-[600px] mx-auto rounded-full overflow-hidden shadow-lg animate-fadeInUp relative">
              <Image
                src={IllustrativeImg}
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="absolute p-2 w-[100px] h-[100px] md:w-[120px] md:h-[120px] right-2 top-10 md:right-28 md:top-14 z-20 rounded-lg overflow-hidden bg-[#A6A182] shadow-lg animate-fadeInUp">
              <Image
                src={ExperienceBadge}
                alt="Experience Badge"
                width={35}
                height={35}
                className=''
              />
              <span className="leading-0  text-white text-sm text-center">
                30+ years of experience
              </span>
            </div>
          </div>
          {/* Section Image End */}
        </div>
      </div>

      {/* Grid Container */}
      <div className="mt-5 container max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
        <div className="flex space-x-4">
          <Image src={AboutDetail1} alt="Premium Dining Icon" className="w-15 h-15 lg:w-16 lg:h-16" />
          <div>
            <h4 className="font-bold text-lg text-white">Premium Dining</h4>
            <p className="text-white/60">It's very personal, and can only be a positive experience.</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Image src={AboutDetail2} alt="Abundant Flavors Icon" className="w-15 h-15 lg:w-16 lg:h-16" />
          <div>
            <h4 className="font-bold text-lg text-white">Abundant Flavors</h4>
            <p className="text-white/60">At Secret Recipe, we take immense pride in crafting.</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Image src={AboutDetail3} alt="Indigenous Meal Icon" className="w-15 h-15 lg:w-16 lg:h-16" />
          <div>
            <h4 className="font-bold text-lg text-white">Indigenous Meal</h4>
            <p className="text-white/60">With local ingredients, unique spins on traditional flavors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;